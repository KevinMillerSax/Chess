

class WhitePawn{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-pawn.png')";
        this.alive = true;
        this.color = 'w'; 
    }
    //methods display posible moves, make move, special moves 
    move(number) {
        this.position = parseInt(number);
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
    move(number) {
        this.position = parseInt(number);
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
}

class BlackBishop{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-bishop.png')";
        this.alive = true; 
        this.color = 'b';
    }
}

class WhiteBishop{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-bishop.png')";
        this.alive = true; 
        this.color = 'w';
    }
}

class BlackRook{
    constructor (position){
        this.position = position;
        this.image = "url('images/Black-rook.png')";
        this.alive = true; 
        this.color = 'b';
    }
}

class WhiteRook{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-rook.png')";
        this.alive = true; 
        this.color = 'w';
    }
}

class WhiteKing{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-king.png')";
        this.alive = true; 
        this.color = 'w';
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
    }
}

class WhiteQueen{
    constructor (position){
        this.position = position;
        this.image = "url('images/White-queen.png')";
        this.alive = true; 
        this.color = 'w';
    }
}





