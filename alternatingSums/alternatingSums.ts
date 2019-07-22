function alternatingSums(a: number[]): number[] {
    return a.reduce((res, curr, indx) => indx % 2 ? res[1] += curr : res[0] += curr, [0, 0]);
}

console.log(alternatingSums([50, 60, 60, 45, 70]))