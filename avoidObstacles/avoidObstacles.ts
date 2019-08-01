function avoidObstacles(inputArray: number[]): number {
    const sorted = inputArray.sort((a, b) => {
        return a <= b ? -1 : 1;
    });
    const jumpLenghts = [];
    for(let i = 1; i <= sorted[sorted.length - 1] + 1; i++){
        if(sorted.every(el => el % i !== 0)){
            return i;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
console.log(avoidObstacles([1, 3, 7, 9]));
console.log(avoidObstacles([1, 2, 3, 4, 5]));