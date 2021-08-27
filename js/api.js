function loadData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(data => console.log(data))


}


function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
}


function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
}

function displayUsers(data) {
  for (const user of data) {
    console.log(user.name)
  }

}