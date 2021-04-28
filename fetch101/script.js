// fetch('./text.txt')
//     .then( response => response.text())
//     .then( text => { console.log(text)

    // })

    // one thing per element
// fetch('people.json')
//     .then (response => response.json())
//     .then (json => {
//         json.foreach(person => {
//             const div = document.createElement('p')
//             div.innerHTML = 'person.name'
//             document.body.appendChild(div)
//         })
//     })
    
    // more than 1 per elements
// fetch('people.json')
//     .then(pull => pull.json())
//     .then(json =>{
//         json.forEach(person => {
//             const div = document.createElement('p')
//             div.innerHTML = `${person.name} is ${person.age}`
//             document.body.appendChild(div) 
//         })
//     })


// https://jsonplaceholder.typicode.com/photos/1.
// use console.log to see json file in there to target url < accually it is to see what it is contained 

fetch('https://jsonplaceholder.typicode.com/photos/5000') 
    .then(response => response.json())
    .then(json => {
        const img = document.createElement('img')
        img.src = json.url;
        document.body.appendChild(img)
        console.log(json)
    })
    .catch(err => {
        console.error(err) // to catch error 
    })

