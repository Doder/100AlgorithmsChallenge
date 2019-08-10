function companyBotStrategy(trainingData: number[][]): number {
    let sum = 0;
    let count = 0;
    trainingData.forEach(el => {
        if(el[1] === 1){
            sum += el[0];
            count++;
        }
    });
    if(count === 0){
        return 0;
    }
    return sum / count;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));
