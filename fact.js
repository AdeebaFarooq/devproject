const express = require('express');
const app = express();
const PORT = 3111;

// Middleware to parse JSON data
app.use(express.json());

// Function to calculate factorial
const factorial = (num) => {
    if (num < 0) return "Factorial for negative numbers is not defined.";
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
};

// Endpoint to calculate factorial
app.post('/factorial', (req, res) => {
    const { number } = req.body;

    if (typeof number !== 'number' || isNaN(number)) {
        return res.status(400).json({ error: "Invalid input. Please provide a valid number." });
    }

    const result = factorial(number);
    res.json({ number, factorial: result });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

