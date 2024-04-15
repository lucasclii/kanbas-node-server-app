import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
    {
        id: String,
        name: String,
        number: String,
        startDate: String,
        endDate: String,
        image: String,
    },
    { collection: 'courses' }
);

export default courseSchema;