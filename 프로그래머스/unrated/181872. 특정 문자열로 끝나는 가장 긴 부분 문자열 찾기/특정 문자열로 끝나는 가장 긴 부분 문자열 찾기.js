function solution(myString, pat) {
    let end = myString.lastIndexOf(pat[pat.length -1]);
    return myString.slice(0 , end + 1);
}