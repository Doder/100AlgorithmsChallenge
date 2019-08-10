function composeRanges(nums: number[]): string[] {
    const results = [];
    let item = nums[0] + '->';
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] + 1 !== nums[i + 1]){
            item += nums[i];
            results.push(item);
            item = nums[i + 1] + '->';
        }
    }
    return results;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));