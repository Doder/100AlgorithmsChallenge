function arrayPreviousLess(items: number[]): number[] {
    return items.map((el, index, arr) => {
        console.log(arr, 'arr');
        const leftPart = arr.slice(0, index);
        console.log(leftPart, 'leftPart');
        let rightmostSmallerValue = -1;
        leftPart.forEach(curr => {
            if(curr < el){
                rightmostSmallerValue = curr;
            }
        });
        return rightmostSmallerValue;
    });
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));