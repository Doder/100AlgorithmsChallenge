function depositProfit(deposit: number, rate: number, threshold: number): number {
    let counter = 0;
    while(deposit < threshold){
        deposit += deposit * rate / 100;
        counter++;
    }
    return counter;
}

console.log(depositProfit(100, 20, 170))