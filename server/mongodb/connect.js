import mongoose from 'mongoose';

const connectDB = (urL) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(urL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

export default connectDB;