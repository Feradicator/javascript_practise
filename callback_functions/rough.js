async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json(); // Call the .json() method to parse the JSON
}

getData().then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error:', error);
});
