function longestConsecutiveSequence(nums) {
    const numSet = new Set(nums); 
    //before nums = [10, 2, 7, 9, 3, 8, 7];
    //after numSet = {10, 2, 7, 9, 3, 8};
    let longestSequence = [];

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentSequence = [];

            while (numSet.has(currentNum)) {
                currentSequence.push(currentNum);
                currentNum++;
            }

            if (currentSequence.length > longestSequence.length) {
                longestSequence = currentSequence;
            }
        }
    }

    return longestSequence;
}

console.log(longestConsecutiveSequence([10, 2, 7, 9, 3, 8])); 
console.log(longestConsecutiveSequence([3, 2, 6, 9, 10, 4]));
console.log(longestConsecutiveSequence([1,5,3,4,10,29])); 

