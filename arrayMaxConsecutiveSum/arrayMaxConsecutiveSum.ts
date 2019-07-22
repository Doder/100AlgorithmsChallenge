function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
    const sumArray: number[] = [];
    for(let i = 0; i < inputArray.length - (k-1); i++){
        let sum = 0;
        for(let j = 0; j < k; j++){
            sum += inputArray[i + j];
        }
        sumArray.push(sum);
    }
    return sumArray.reduce((max, cur) => max < cur ? cur : max);
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 4));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 5));