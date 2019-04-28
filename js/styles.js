/*------ cached element references ------ */
const modelView = document.getElementById('pawn-promote-mod');
const bModelView = document.getElementById('b-pawn-promote-mod');
const selectQueen = document.getElementById('white-queen-btn');
const selectRook = document.getElementById('white-rook-btn');
const selectBishop = document.getElementById('white-bishop-btn');
const selectKnight = document.getElementById('white-knight-btn');
const selectBlackQueen = document.getElementById('black-queen-btn');
const selectBlackRook = document.getElementById('black-rook-btn');
const selectBlackBishop = document.getElementById('black-bishop-btn');
const selectBlackKnight = document.getElementById('black-knight-btn');

//-------event-listeners

selectQueen.onclick = function(){
    BOARD_OBJ.pieces.push(new WhiteQueen(parseInt(promoteNum)));
    modelView.style.display = "none";
    placePieces();
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
selectBlackQueen.onclick = function(){
    BOARD_OBJ.pieces.push(new BlackQueen(parseInt(promoteNum)));
    bModelView.style.display = "none";
    placePieces();
}

selectBlackRook.onclick = function(){
    BOARD_OBJ.pieces.push(new BlackRook(parseInt(promoteNum)));
    bModelView.style.display = "none";
    placePieces();
}

selectBlackBishop.onclick = function (){
    BOARD_OBJ.pieces.push(new BlackBishop(parseInt(promoteNum)));
    bModelView.style.display = "none";
    placePieces();
}

selectBlackKnight.onclick = function(){
    BOARD_OBJ.pieces.push(new BlackKnight(parseInt(promoteNum)));
    bModelView.style.display = "none";
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
     if (selectedPiece.row === 'r1' && selectedPiece.constructor.name === 'BlackPawn'){
         let  index = BOARD_OBJ.pieces.indexOf(selectedPiece);
         BOARD_OBJ.pieces.splice(index, 1);
         promoteNum = num;
         bModelView.style.display = "block";
     }
     
    
 }


