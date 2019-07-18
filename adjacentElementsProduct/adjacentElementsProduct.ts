function adjacentElementsProduct(inputArray: number[]): number {
    const products = inputArray.map((num, index, arr) => {
        if(index === arr.length) return 0;
        return num * arr[index + 1];
    });
    return products.reduce((result, curr) => curr > result ? curr : result, 0);
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));