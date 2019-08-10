function crossingSum(matrix: number[][], a: number, b: number): number {
    let sum = 0;
    for(let i = 0; i < matrix[0].length; i++){
        sum += matrix[a][i];
    }
    for(let j = 0; j < matrix.length; j++){
        if(j !== a){
            sum += matrix[j][b];
        }
    }
    return sum;
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));