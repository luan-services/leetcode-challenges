function countAndSay(n: number): string {
    let current = "1";

    if (n === 1) {
        return "1";
    }

    for (let i = 1; i < n; i++) {
        let chars = "";
        let count = 1;
        for (let j = 0; j < current.length; j++) {
            while(current[j+1] === current[j]) {
                count += 1
                j++;
            }
            chars += count.toString();
            chars += current[j];
            count = 1;
        }
        current = chars;
    }

    return current;
};