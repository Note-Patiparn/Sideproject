async function getData () {
    const datapromise = await fetch('https://jsonplaceholder.typicode.com/posts')
    // .ok to check that did our promise cameback okay 
    // > it will return boolean > true / false
    if(datapromise.ok){

        const datas = await datapromise.json();
        let html = '' // to write on it after make it empty string 
        
        datas.forEach(data => {
            const title = data.title;
            const body = data.body;
            html += `
                <div class="example">
                    <h3>${title}</h3>
                    <p>${body}</p>
                </div>
            `
        })
        document.body.innerHTML = html;
    } else { 
        console.error(`Error: ${datapromise.status}`)
    }
}

getData()
// from every post let say 100 if I want to get 5 easiest way is to use slice to slice it off

//  datas.slice(0, 5)forEach(data => { 
    // for first 5th data

// adding error catch in async await 