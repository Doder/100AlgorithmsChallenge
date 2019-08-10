function containsDuplicates(a: number[]): boolean {
    const sorted = a.sort((a, b) => a - b);
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i + 1]){
            return true;
        }   
    }
    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));