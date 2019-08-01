function bishopAndPawn(bishop: string, pawn: string): boolean {
    if(bishop[0] === pawn[0] || bishop[1] === pawn[1]){
        return false;
    }
    const pawnPos = parseInt((pawn.charCodeAt(0) - 96) + pawn[1]);
    const bishopPos = parseInt((bishop.charCodeAt(0) - 96) + bishop[1]);
    const abs = Math.abs(pawnPos - bishopPos);
    if(abs % 11 === 0 || abs % 9 === 0){
        return true;
    }
    return false;
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('a1', 'h8'));
console.log(bishopAndPawn('a1', 'b3'));
console.log(bishopAndPawn('c5', 'b4'));