function arrayChange(inputArray: number[]): number {
    return inputArray.reduce((cnt, curr, indx, arr) => {
        if(curr <= arr[indx - 1]){
            cnt += arr[indx - 1] - curr + 1;
            arr[indx] = arr[indx - 1] + 1;
        }
        return cnt;
    }, 0);
}

console.log(arrayChange([1, 1, 1]));