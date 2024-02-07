function palindrome(st) {
    if (st.length <= 1) {
        return true
    }
    if (st[0] !== st[st.length - 1]) {
        return false
    }
    return palindrome(st.slice(1, st.length-1))
}

console.log(palindrome('шала'));