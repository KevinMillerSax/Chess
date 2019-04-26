/*------ cached element references ------ */
const modelView = document.getElementById('pawn-promote-mod');
const selectQueen = document.getElementById('white-queen-btn');
const selectRook = document.getElementById('white-rook-btn');
const selectBishop = document.getElementById('white-bishop-btn');
const selectKnight = document.getElementById('white-knight-btn');
//finish for black pieces!


//-------event-listeners 

// selectQueen.addEventListener('click', pickQueen)
// selectRook.addEventListener('click', pickRook)
// selectBishop.addEventListener('click', pickBishop)
// selectKnight.addEventListener('click', pickKnight)
selectQueen.onclick = function(){
    BOARD_OBJ.pieces.push(new WhiteQueen(parseInt(promoteNum)));
    modelView.style.display = "none";
    placePieces();
    console.log(BOARD_OBJ.pieces);
}

selectRook.onclick = function(){
    BOARD_OBJ.pieces.push(new WhiteRook(parseInt(promoteNum)));
    modelView.style.display = "none";
    placePieces();
}

selectBishop.onclick = function (){
    BOARD_OBJ.pieces.push(new WhiteBishop(parseInt(promoteNum)));
    modelView.style.display = "none";
    placePieces();
}

selectKnight.onclick = function(){
    BOARD_OBJ.pieces.push(new WhiteKnight(parseInt(promoteNum)));
    modelView.style.display = "none";
    placePieces();
}



 //---------functionality     
 
 function checkPromotion(num){
    if (selectedPiece.row === 'r8' && selectedPiece.constructor.name === 'WhitePawn'){
        let  index = BOARD_OBJ.pieces.indexOf(selectedPiece);
        BOARD_OBJ.pieces.splice(index, 1);
        promoteNum = num;
        modelView.style.display = "block";
    }
    
 }


// function pickQueen(promoteNum){
//     BOARD_OBJ.pieces.push(new WhiteQueen(promoteNum));
//     modelView.style.display = "none";

// }
// function pickRook(promoteNum){
//     BOARD_OBJ.pieces.push(new WhiteRook(promoteNum));
//     modelView.style.display = "none";
// }
// function pickBishop(promoteNum){
//     BOARD_OBJ.pieces.push(new WhiteBishop(promoteNum));
//     modelView.style.display = "none";
// }
// function pickKnight(promoteNum){
//     BOARD_OBJ.pieces.push(new WhiteKnight(promoteNum));
//     modelView.style.display = "none";
// }
