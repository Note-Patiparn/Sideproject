function caseInsensitivePalindrome(str) {
        let lowerStr = str.toLowerCase()
        // console.log(lowerStr)
        let palinResult = lowerStr.split('').reverse().join('').toLowerCase()
        return lowerStr === palinResult
    }
    
    caseInsensitivePalindrome('AaBaa')
    caseInsensitivePalindrome('abac') 

// 
