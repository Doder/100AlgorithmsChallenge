function areSimilar(a: number[], b: number[]): boolean {
    let counter = 0;
    let c = [];
    let d = [];
    for(let index in a){
        if(a[index] !== b[index]){
            counter++;
            c.push(a[index]);
            d.push(b[index]);
        }
    }
    return counter === 0 || (counter === 2 && c[0] === d[1] && c[1] === d[0]);
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 10], [1, 2, 1]));
