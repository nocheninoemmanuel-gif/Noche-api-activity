const mongoose = require('mongoose');

const connectDB = async () => {
    // 1. Check if the URI actually exists
    const dbURI = process.env.MONGO_URI;

    if (!dbURI) {
        console.error('Error: MONGO_URI is not defined in your .env file.');
        process.exit(1);
    }

    try {
        // 2. Attempt the connection
        const conn = await mongoose.connect(dbURI);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Database Connection Error: ${error.message}`);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;