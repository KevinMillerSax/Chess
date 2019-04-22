/*---- constants -----*/

/*------ app's state (variables) ------ */
let turn, selectedPiece, currentSpot; 



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
    
    if (selectedPiece){
        movePiece(evt);
    } else selectPiece(evt);
}


function selectPiece(evt){
    
    let num = evt.target.id.slice(3);
    let piece = BOARD_OBJ.pieces.find(function(piece){
        return piece.position === parseInt(num);    
    });
    
    //if it's white's turn, he can select his piece to move
    if (turn === true && piece.color === 'w'){
       selectedPiece = piece; 
        
    } 
    //if it's black's turn, he can select his piece to move
    if (turn === false && piece.color === 'b'){
        selectedPiece = piece;   
    } 
    // .position is returning a number at this time.     
}
 

function movePiece(evt){
    let targetRow = evt.path[1].id;
    let num = evt.target.id.slice(3);
    let targetSquareColor = evt.path[0].className;
    if (parseInt(selectedPiece.position) === parseInt(num)) {
        selectedPiece = null;
    }
    else {
        let success = selectedPiece.move(num, targetRow, targetSquareColor);
    if (success) {
        turn = !turn;
        selectedPiece = null;
        placePieces();
    }
    }

    
    
    //clear selectedPiece


    //toggle turn at end of this function, 

    
    
    
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