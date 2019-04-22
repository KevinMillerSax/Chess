

class WhitePawn{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-pawn.png')";
        this.alive = true;
        this.color = 'w'; 
        this.moved = false
    }
    //methods display posible moves, make move, special moves 
    move(num) {
        currentSpot = this.position; 
        
        if (this.moved === false && parseInt(num) === parseInt(currentSpot - 8)){
            this.position = parseInt(num);
            this.moved = true; 
            return true; 
        } 
        if (this.moved === false && parseInt(num)=== parseInt(currentSpot - 16)){
            this.position = parseInt(num);
            this.moved = true;
            return true; 
        }
        if(this.moved === true && parseInt(num)=== parseInt(currentSpot - 8)){
            this.position = parseInt(num);
            return true; 
        }
        return false; 
    }
}

class BlackPawn{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-pawn.png')";
        this.alive = true;
        this.color = 'b'; 
    }
    //methods display posible moves, make move, special moves 
    move(num) {
        this.position = parseInt(num);
        return true;
    }
}

class BlackKnight{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-knight.png')";
        this.alive = true; 
        this.color = 'b';
    }
}

class WhiteKnight{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-knight.png')";
        this.alive = true; 
        this.color = 'w';
    }
    move(num){
        currentSpot = this.position; 
        if (parseInt(num)===parseInt(currentSpot -17) || parseInt(num)===parseInt(currentSpot -15) || parseInt(num)===parseInt(currentSpot -10) || parseInt(num)===parseInt(currentSpot -6) || parseInt(num)===parseInt(currentSpot +6) || parseInt(num)===parseInt(currentSpot +10)|| parseInt(num)===parseInt(currentSpot +15) || parseInt(num)===parseInt(currentSpot +17)){
            this.position = parseInt(num);
            return true;
        }
        return false; 
    }
}

class BlackBishop{
    constructor (position, squareColor){
        this.position = position;
        this.image = "url('images/Black-bishop.png')";
        this.alive = true; 
        this.color = 'b';
        this.sqColor = squareColor;
    }
}

class WhiteBishop{
    constructor (position, squareColor){
        this.position = position;
        this.image = "url('images/White-bishop.png')";
        this.alive = true; 
        this.color = 'w';
        this.sqColor = squareColor; 
    }
    move(num, targetRow, targetSquareColor){
        
        currentSpot = this.position;
        if (targetSquareColor === this.sqColor){
            if (parseInt(num) > parseInt(currentSpot)){
                if ((parseInt(num) - parseInt(currentSpot)) % 7 === 0 || (parseInt(num) - parseInt(currentSpot)) % 9 === 0){
                    this.position = parseInt(num);
                    return true;
                }
            }
            if (parseInt(num) < parseInt(currentSpot)){
                if ((parseInt(currentSpot) - parseInt(num)) % 7 === 0 || (parseInt(currentSpot) - parseInt(num)) %9 === 0){
                    this.position = parseInt(num);
                    return true;
                }
            }
        }
        return false; 
    }
}

class BlackRook{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-rook.png')";
        this.alive = true; 
        this.color = 'b';
        this.row = 'r8';
    }
}

class WhiteRook{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-rook.png')";
        this.alive = true; 
        this.color = 'w';
        this.row = 'r1';
    }
    move(num, targetRow){
        currentSpot = this.position;
        if (parseInt(num) > parseInt(currentSpot)){
            if ((parseInt(num) - parseInt(currentSpot)) % 8 === 0){
                this.position = parseInt(num);
                this.row = targetRow; 
                return true;
            }
        }
        if (parseInt(num) < parseInt(currentSpot)){
            if((parseInt(currentSpot) - parseInt(num)) % 8 === 0){
                this.position = parseInt(num);
                this.row = targetRow;
                return true;
            }
        }
        if (this.row === targetRow){
            this.position = parseInt(num);
            return true;
        }
        return false; 
        
    }
}

class WhiteKing{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-king.png')";
        this.alive = true; 
        this.color = 'w';
    }
    move(num){
        currentSpot = this.position; 
        let kingMoves = [-8, 8, -1, 1, -9, 9, -7, 7];
        for(let i = 0; i < 8; i++){
            if (parseInt(currentSpot) + kingMoves[i] === parseInt(num)){
                this.position = parseInt(num);
                return true;
            }
        }  
        return false; 
    }
}

class BlackKing{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-king.png')";
        this.alive = true; 
        this.color = 'b';
    }
}

class BlackQueen{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-queen.png')";
        this.alive = true; 
        this.color = 'b';
        this.row = 'r8';
        this.sqColor = 'black-square';
    }
}

class WhiteQueen{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-queen.png')";
        this.alive = true; 
        this.color = 'w';
        this.row = 'r1';
        this.sqColor = 'white-square'; 
    }

    move(num, targetRow, targetSquareColor){
        currentSpot = this.position;

        if (parseInt(num) > parseInt(currentSpot)){
            if ((parseInt(num) - parseInt(currentSpot)) % 7 === 0 || (parseInt(num) - parseInt(currentSpot)) % 9 === 0){
                if (targetSquareColor === this.sqColor){
                    this.position = parseInt(num);
                    this.row = targetRow;
                    return true;
                }
            }
        }
        if (parseInt(num) < parseInt(currentSpot)){
            if ((parseInt(currentSpot) - parseInt(num)) % 7 === 0 || (parseInt(currentSpot) - parseInt(num)) %9 === 0){
                if (targetSquareColor === this.sqColor){
                    this.position = parseInt(num);
                    this.row = targetRow;
                    return true;
                }
            }
        }
        if (parseInt(num) > parseInt(currentSpot)){
            if ((parseInt(num) - parseInt(currentSpot)) % 8 === 0){
                this.position = parseInt(num);
                this.row = targetRow; 
                this.sqColor = targetSquareColor;
                return true;
            }
        }
        if (parseInt(num) < parseInt(currentSpot)){
            if((parseInt(currentSpot) - parseInt(num)) % 8 === 0){
                this.position = parseInt(num);
                this.row = targetRow;
                this.sqColor = targetSquareColor;
                return true;
            }
        }
        if (this.row === targetRow){
            this.position = parseInt(num);
            this.sqColor = targetSquareColor;
            return true;
        }
        return false;   
    }
}





