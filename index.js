const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
    res.json('Hello World');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




