function compareIntegers(a: string, b: string): string {
    const intA = parseInt(a, 10);
    const intB = parseInt(b, 10);
    if(intA < intB){
        return 'less';
    }
    else if(intA > intB){
        return 'greater';
    }
    else{
        return 'equal';
    }
}

console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));