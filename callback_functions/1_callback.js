// Simulate an asynchronous operation, like fetching data from a server
function fetchData(callback) {
    console.log("Fetching data...");

    // Simulate a delay
    setTimeout(() => {
        const data = {
            name: "John Doe",
            age: 30,
            job: "Software Developer"
        };

        console.log("Data fetched");
        
        // Execute the callback function and pass the data to it
        callback(data);
    }, 2000);
    console.log("Fetching data1 . ..");
}

// Define a callback function to process the fetched data
function processData(data) {
    console.log("Processing data...");
    console.log(`Name: ${data.name}`);
    console.log(`Age: ${data.age}`);
    console.log(`Job: ${data.job}`);
}

// Call fetchData and pass processData as the callback function
fetchData(processData);
