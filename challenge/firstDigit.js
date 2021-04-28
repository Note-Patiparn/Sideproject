function firstDigit(str) {
    const num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let splitedStr = str.split('')
    for (splitedStr of splitedStr) {
        if(num.includes(splitedStr)){
            return splitedStr
        }
    }
}

// let say question is to get first digit of "var_1__Int2"