const test = document.getElementById('test')
const form = document.getElementById('form')


// GET
// works immediately outside of a function and without callback
// works on page load
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => {
    const result = json.slice(0, 9)
    console.log(result)
    result.map(item => {
      const user = document.createElement('h2')
      user.innerText = item.userId
      const title = document.createElement('h1')
      title.innerText = item.title
      const body = document.createElement('h2')
      body.innerText = item.body
      test.appendChild(user)
      test.appendChild(title)
      test.appendChild(body)
    })
  }) 
  .catch(error => console.log(error))



// <<---- making a post request ----->> //

const submitForm = (e) => {
  //prevents automatic page reload
  e.preventDefault()
  
  const data = {
    title: e.target.title.value,
    body: e.target.body.value
  }

  // POST
  // CALLBACK VERSION
  // callBack(data)

  //ASYNC VERSION
  asyncfunc(data)
  
}

//both versions are promises

// CALLBACK VERSION
const callBack = (data) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data), 
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(response => response.json())
    .then(data => console.log(data))
    //to print on page
    //.then(data => { test.innerHTML = data.id })
}

// ASYNC VERSION
const asyncfunc = async (data) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(data)
  })

  const result = await res.json()
  console.log(result)

}

form.addEventListener('submit', submitForm)



