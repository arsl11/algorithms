function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
}

// Пример:
const nums = [1, 1, 2, 2, 3];
const newLength = removeDuplicates(nums);
console.log(nums.slice(0, newLength));