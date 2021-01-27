const test = document.getElementById('test')
const form = document.getElementById('form')


// GET
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => {
//     const result = json.slice(0, 9)
//     console.log(result)
//     result.map(item => {
//       const user = document.createElement('h2')
//       user.innerText = item.userId
//       const title = document.createElement('h1')
//       title.innerText = item.title
//       const body = document.createElement('h2')
//       body.innerText = item.body
//       test.appendChild(user)
//       test.appendChild(title)
//       test.appendChild(body)
//     })
//   }) 
//   .catch(error => console.log(error))

const data = {
  title: '',
  body: ''
}
// POST
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(response => response.json())
  .then(async (json) => {
    form.elements[1].addEventListener('change', (e) => {
      const formInput = form.elements[1].innerText = e.target.value
      data.title = formInput
    })
    
    form.elements[0].addEventListener('change', (e) => {
      const formInput = form.elements[0].innerText = e.target.value
      data.body = formInput
    })
    if (data.title && data.body) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        console.log(json)
      })
    } else {
      console.log('empty')
    }
  })



// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log(new FormData(form))
// })


// console.log(data)