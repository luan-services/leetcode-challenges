function maxArea(height: number[]): number {

    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        if (height[left] > height[right]) {
            let water = (right - left) * height[right];
            if (maxWater < water) {
                maxWater = water;
            }
            right --;
        } else {
            let water = (right - left) * height[left];
            if (maxWater < water) {
                maxWater = water;
            }
            left ++;
        }
    }

    return maxWater;
    
};