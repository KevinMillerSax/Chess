/*---- constants -----*/

/*------ app's state (variables) ------ */
let turn, selectedPiece; 



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
    let num = evt.target.id.slice(3);
   //movePiece needs to identify the selected piece and access it's move methods from classes
    selectedPiece.move(num);
    //this function should only be allowed to run if selectPiece returns a piece

    //clear selectedPiece
    selectedPiece = null;
    placePieces();
    //toggle turn at end of this function, 
    turn = !turn;
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