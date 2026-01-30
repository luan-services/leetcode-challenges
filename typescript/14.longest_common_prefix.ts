function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) {
        return strs[0];
    }
    let prefix = "";
    let arrSort = strs.sort();
    let last = arrSort.length - 1;
    
    for (let i = 0; i < arrSort[0].length ; i++) {
        if (arrSort[0][i] !== arrSort[last][i]) {
            return prefix;
        }

        prefix += arrSort[0][i];
    }

    return prefix;
};