async function getData() {
    const response = await fetch('./person.json')
    const data = await response.json()
    // .then(pull => pull.json())
    // .then(json =>{
        
    // this section of code below here have to wait until promise got response then this code below will run 
        data.forEach(person => {
            const div = document.createElement('p')
            div.innerHTML = `${person.name} is ${person.age}`
            document.body.appendChild(div) 
        })
}
getData()
// if we have to deal with many promise in one page it hard to know when each .then will run the code

// that's why async come along

// to do a async we have to wrap a fetch / promise in to a function and declare it a async function 

// async function example() {
// }

// > with arrow function 

// const note = async () => {
// }