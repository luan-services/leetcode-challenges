function reverseWords(s: string): string {

    let mainString = "";
    let currentString = "";
    const strLen = s.length;

    for (let i = 0; i < strLen ; i++) {
        while (s[i] === " " && i < strLen) {
            i++;
        }
        currentString = "";
        while (s[i] !== " " && i < strLen) {
            currentString += s[i];
            i++;
        }

        if (currentString !== "") {
            if (mainString === "") {
                mainString = currentString;
            } else {
                mainString = `${currentString} ${mainString}`;
            }
        }
    }

    return mainString;
    
};