// 12. Поиск чисел в массиве с определённой суммой полным перебором (brute force)
function isSumExist(nums: number[], k: number): boolean {
    const numsLength = nums.length
    for (let i = 0; i < numsLength; i++) {
        let j = i + 1
        for(j; j < numsLength; j++) {
            if (nums[i] + nums[j] === k) {
                return true
            }
        }
    }
    return false
};

// Пример:
const nums = [10, 15, 3, 7]
const k = 17
console.log(isSumExist(nums, k))