function lenOfLongestSubstring(s: string): number {

    let charMap = new Map<string, number>();
    let maxSize = 0;
    let left = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!charMap.has(char)) {
            charMap.set(char, i);
        } else {
            if (charMap.get(char)! >= left) {
                left = charMap.get(char)! + 1;
            }
            charMap.set(char, i);
        }
        
        let currSize = i - left + 1;
        if (maxSize < currSize) {
            maxSize = currSize;
        }
    }
    return maxSize;
};