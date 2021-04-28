function largestNumber (num)  {
    let sum = '';
    for (let i = 0; i < num; i++) {
        sum = sum.concat('9')
    }
    return parseInt(sum)
}

largestNumber(2)