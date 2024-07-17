// Using Promises to Chain Asynchronous Operations
// Let's say you want to fetch user data first and then fetch the posts of the first user:
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(users => {
        console.log('Users:', users);
        const userId = users[0].id;
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(posts => {
        console.log('Posts of the first user:', posts);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
