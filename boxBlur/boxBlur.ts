function boxBlur(image: number[][]): number[][] {
    const resArr = [];
    for(let i = 1; i < image.length - 1; i++){
        const row = [];
        for(let j = 1; j < image[0].length - 1; j++){
            const sum = image[i-1][j-1] + image[i-1][j] + image[i-1][j+1] +
            image[i][j-1] + image[i][j] + image[i][j+1] +
            image[i+1][j-1] + image[i+1][j] + image[i+1][j+1];
            const avg = Math.floor(sum / 9);
            row.push(avg);
        }
        resArr.push(row);
    }
    return resArr;
}

console.log(boxBlur([[1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));

console.log(boxBlur([[1, 1, 1, 1], 
    [1, 7, 55, 1], 
    [1, 1, 1, 1]]));