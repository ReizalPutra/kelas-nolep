function angkaPalindrome(num) {
    do {
        num++;
        let str = num.toString();
        let temp = "";
        for (let i = str.length - 1; i >= 0; i--) {
            temp += str[i];
        }
        if (str === temp) {
            return num;
        }
    } while (true);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(2163781120)); // 1001
