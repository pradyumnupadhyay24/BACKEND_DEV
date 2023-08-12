/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    const map = new Map();
    
    for(let [i, num] of nums.entries()){
        if(map.has(target - num)){
            return [map.get(target - num), i];
        } else{
            map.set(num,i);
        }
    }
};