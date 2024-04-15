import mongoose from 'mongoose';
import schema from './schema.js';

const CourseModel = mongoose.model('Course', schema);
export default CourseModel;
