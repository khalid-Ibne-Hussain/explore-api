function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data));
}

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser2(data));
}

function displayUser2(data) {
    for (const user of data) {
        console.log(user.name);
    }
}
// ------------

function loadUsers3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser3(data));
}

function displayUser3(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
// -------------------------------------

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}
/* 
1. get the container element where u want to add the new HTML
2. create child element
3. set innerText or innerHTML
4. appendChild
*/
function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        // console.log(post);
        postDiv.innerHTML = `
        <h4>UserID: ${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post: ${post.body}</p>

        `;
        postContainer.appendChild(postDiv);
    }
}