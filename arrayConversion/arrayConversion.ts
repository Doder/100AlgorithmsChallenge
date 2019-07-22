function arrayConversion(inputArray: number[]): number {
    let isEven = false;
    do {
        let nextArray = [];
        for(let i = 0; i < inputArray.length - 1; i += 2){
            if(isEven){
                nextArray.push(inputArray[i] * inputArray[i + 1]);
            }else{
                nextArray.push(inputArray[i] + inputArray[i + 1]);
            }
        }
        isEven = !isEven;
        inputArray = [...nextArray];    
    } while (inputArray.length !== 1);
    
    return inputArray[0];
    
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
