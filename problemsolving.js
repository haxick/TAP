function twoSum(nums, target) {
  res = [0, 0];
  if (nums.length <= 1) {
    return res;
  }
  const map = new Map();
  for( i = 0; i < nums.length; i++){
    if(!map.has(target-nums[i])){
        map.set(nums[i],i);

    }else{
        res[0]=map.get(target-nums[i]);
        res[1]=i;
    }
  }
  return res;
  
}
console.log(twoSum(nums,target));
