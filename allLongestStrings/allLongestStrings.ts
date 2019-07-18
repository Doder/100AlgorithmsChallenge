function allLongestStrings(inputArray: string[]): string[] {
    const longestStringLength = inputArray.reduce((len, str) => str.length > len ? str.length : len, 0);
    return inputArray.filter(el => el.length === longestStringLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));