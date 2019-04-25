/*---- constants -----*/

/*------ app's state (variables) ------ */
let turn, selectedPiece, currentSpot, borderEl, blockPiece, positions = [], whitePositions=[], blackPositions =[], blocked, passantArr=[]; 



/*------ cached element references ------ */
const tile = document.querySelectorAll('td');
const gameBoardEl = document.getElementById('board');


/*------ event listeners------- */
gameBoardEl.addEventListener('click', clickAction);

/*-------functions -------- */
init();

function init(){
    turn = true; 
    BOARD_OBJ.initPieces();
    placePieces();
    
    //  render();
}

// render(){
    
// }

function clickAction(evt){
    positionTracker();
    // console.log(positions);
    // console.log(whitePositions);
    // console.log(blackPositions);

    if (selectedPiece){
        movePiece(evt);
    } else selectPiece(evt);
}


function selectPiece(evt){
   

    let num = evt.target.id.slice(3);
    borderEl = evt.target.style;
    let piece = BOARD_OBJ.pieces.find(function(piece){
        return piece.position === parseInt(num);    
    });
    
    //if it's white's turn, he can select his piece to move
    if (turn === true && piece.color === 'w'){
       selectedPiece = piece; 
       borderEl.border = '4px solid green';
        
    } 
    //if it's black's turn, he can select his piece to move
    if (turn === false && piece.color === 'b'){
        selectedPiece = piece; 
        borderEl.border = '4px solid green';  
    } 
        
}
 

function movePiece(evt){
    blocked = false;   //we'll set this at false to start, in the move()s , turn to true to stop the move
    
    
    let targetRow = evt.path[1].id;
    let num = evt.target.id.slice(3);
    let targetSquareColor = evt.path[0].className;


    


     //---------------------------------------------
     //kill logic

     if (turn){
        if (blackPositions.includes(parseInt(num))){
            BOARD_OBJ.pieces.forEach(function(piece){
                if (piece.color === 'b' && piece.position === parseInt(num)){
                    piece.alive = 'false';
                   let  index = BOARD_OBJ.pieces.indexOf(piece);
                   BOARD_OBJ.pieces.splice(index, 1);
                }
            });    
        }
    }
     if (!turn){
        if (whitePositions.includes(parseInt(num))){
            BOARD_OBJ.pieces.forEach(function(piece){
                if (piece.color === 'w' && piece.position === parseInt(num)){
                    piece.alive = 'false';
                   let  index = BOARD_OBJ.pieces.indexOf(piece);
                   BOARD_OBJ.pieces.splice(index, 1);
                }
            });    
        }
    }
     //---------------------------------------------    



    if (parseInt(selectedPiece.position) === parseInt(num)) {
        selectedPiece = null;
        borderEl.border = null;

    
        
       
    }
    else {
        let success = selectedPiece.move(num, targetRow, targetSquareColor);
        if (success) {
            turn = !turn;
            //----passant check
            passantArr.push(selectedPiece); //every move goes into this array, we'll pop it to find the last move to check for passant
            //-------

            selectedPiece = null;
            placePieces();
            positions = []; //clears old positions, positionTracker() will update
            whitePositions = [];
            blackPositions = [];
            borderEl.border = null;
            
            
        }
    }  
}

function clearBoard(){ //clear board between moves.
    for (let i = 0; i <= 63; i++){
        let element = document.getElementById(`sq-${i}`) 
        element.style.backgroundImage = null;
    }
}


function placePieces(){ //sets the board to default set up
    clearBoard();
    BOARD_OBJ.pieces.forEach(function(piece){
        let element = document.getElementById(`sq-${piece.position}`) 
        element.style.backgroundImage = piece.image;
    });

}

function positionTracker(){ //make it track white and black positions so we can know what to capture and what not
    BOARD_OBJ.pieces.forEach(function(piece){
        positions.push(piece.position);
    });

    BOARD_OBJ.pieces.forEach(function(piece){
        if (piece.color === 'b'){
          blackPositions.push(piece.position);
        }
    });

    BOARD_OBJ.pieces.forEach(function(piece){
        if (piece.color === 'w'){
          whitePositions.push(piece.position);
    }
    });
}



