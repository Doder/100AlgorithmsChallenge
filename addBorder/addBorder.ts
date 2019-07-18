function addBorder(picture: string[]): string[] {
    const result = [];
    let border = '**';
    for(let i = 0; i < picture[0].length; i++){
        border += '*';
    }
    result.push(border);
    for(let j of picture){
        const line: string = `*${j}*`;
        result.push(line);
    }
    result.push(border);
    return result;
}

console.log(addBorder(["abc", "ded"]));