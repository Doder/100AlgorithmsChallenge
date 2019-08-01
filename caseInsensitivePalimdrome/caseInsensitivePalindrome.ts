function isCaseInsensitivePalindrome(inputString: string): boolean {
    inputString = inputString.toLowerCase();
    for(let i = 0; i < inputString.length - 1; i++){
        if(inputString[i] !== inputString[inputString.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('bbCbb'));
console.log(isCaseInsensitivePalindrome('abac'));