function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    return inputArray.reduce((maxDiff, curr, i, arr) => {
        if(i === arr.length){
            return maxDiff;
        }
        const currDiff = Math.abs(curr - arr[i + 1]);
        return currDiff > maxDiff ? currDiff : maxDiff;
    }, 0);
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));