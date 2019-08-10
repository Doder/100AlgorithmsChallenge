function convertString(s: string, t: string): boolean {
    let k = 0;
    let j = 0;
    for(let i = 0; i < t.length; i++){
        for(j = k; j < s.length; j++){
            if(s[j] === t[i]){
                k = j + 1;
                break;
            }
        }
        if(s[j] !== t[i]){
            return false;
        }
    }
    return true;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));
