import mongoose from 'mongoose';
import schema from './schema.js';

const QuizModel = mongoose.model('Quiz', schema);
export default QuizModel;