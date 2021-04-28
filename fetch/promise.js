
const userData = () => {
    return new Promise((resolve, reject) => {
        const error = false;
        if (error) { // which mean error is true 
            reject('error')
        }else {
            resolve({
                firstName: 'Patiparn',
                age: 24,
                email: 'notexpen@gmail.com'
            })
        }
        
    })
}
userData().then((success) => {
    console.log(success)
}).catch((err) => {
    console.log(err)
})


