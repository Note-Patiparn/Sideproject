fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

/////////////////////////////////////////////////////////////////
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))
    
fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    body: JSON.stringify({
        postId: 135,
        name: 'patiparn',
        email: 'notexpen@gmail.com',
        body: 'lorem'
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    // TODO:
    // FIXME: 