function maxArea(height: number[]): number {
    let arrLen = height.length;
    let left = 0;
    let right = arrLen - 1; 
    let max = -1;

    while (left != right) {
        let leftLine = height[left]
        let rightLine = height[right]
        
        if (rightLine >= leftLine) {
            let sum = (right - left) * leftLine;
            if (sum > max) {
                max = sum;
            }
            left += 1;
        }
        else if (leftLine > rightLine) {
            let sum = (right - left) * rightLine;
            if (sum > max) {
                max = sum;
            }
            right -= 1;
        }
    }
    
    return max;
};