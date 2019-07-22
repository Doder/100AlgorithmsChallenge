function alphabetSubsequence(s: string): boolean {
    return !!s.split('').reduce((prev, curr) => prev && (prev.charCodeAt(0) < curr.charCodeAt(0)) ? curr : '');
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
