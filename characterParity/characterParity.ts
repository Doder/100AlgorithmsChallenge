function characterParity(symbol: string): string {
    const num = parseInt(symbol, 10);
    if(isNaN(num)){
        return 'not a digig';
    }
    return num % 2 === 0 ? 'even' : 'odd';
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))
