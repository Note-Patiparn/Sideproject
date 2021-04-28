// upload situation 

const photos = [];

async function photoUpload() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push('profilePic')
            resolve('photo uploaded')
        }, 3000) // 3sec
    })
        let result = await uploadStatus;

        console.log(`${result}`) // to see the upload status that does it finish uploading ? 
        console.log(photos.length) // to show how many photos in array 
}
photoUpload()

// We use setTimeout to make this problem to appear 
// what happen is if the promise didn't finish run the code yet because it have set time to wait for 3 sec and run
// js just read the code through it and didn't wait to get the resolve from the promise 
// then to make JS wait until we Promise got ' resolve' 
// this is when async and await come along 
// put async in front of function keyword
// then put await befroe the promise / or something you want it to run first 


const apiUrl = "https://api.chucknorris.io/jokes/random"; 
async function randomJoke(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => console.log(data.value))       
}

randomJoke() 