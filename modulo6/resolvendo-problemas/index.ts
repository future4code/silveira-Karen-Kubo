function isOneEdit(strA: string, strB: string): boolean {
if (Math.abs(strB.length - strA.length) > 1) return false

if (strA.length > strB.length) return strA.includes(strB)
if (strB.length > strA.length) return strB.includes(strA)

let charsDiffCount = 0
for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) charsDiffCount++
}

return charsDiffCount === 1
};

function stringCompression (input:string) {
    const substrings:Array<any> = [];
    let lastChar = input[0];
    let charCount:number = 0;
  
    for (const char of input) {
      if (char !== lastChar) {
        substrings.push(lastChar + charCount);
        lastChar = char;
        charCount = 0;
      }
      charCount++;
    }
  
    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
      result += key;
    }
  
    return result.length > input.length ? input : result;
  };