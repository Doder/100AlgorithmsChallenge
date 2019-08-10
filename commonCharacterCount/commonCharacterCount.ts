function commonCharacterCount(s1: string, s2: string): number {
   const ss1 = s1.split('');
   const ss2 = s2.split('');
   const visited = [];
   let result = 0;
   ss1.forEach(el => {
       if(visited.indexOf(el) === -1){
            const occurencies1 = ss1.reduce((prev, curr) => curr === el ? prev + 1 : prev, 0);
            const occurencies2 = ss2.reduce((prev, curr) => curr === el ? prev + 1 : prev, 0);
            result += occurencies1 < occurencies2 ? occurencies1 : occurencies2;
       }
       visited.push(el);
   });
   return result;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));