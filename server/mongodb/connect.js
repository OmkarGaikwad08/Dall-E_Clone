import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err);
        console.error('Failed to connect to MongoDB');
    }
};

export default connectDB;
