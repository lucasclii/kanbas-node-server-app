import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  title: String,
  points: Number,
  questionType: {
    type: String,
    enum: ['Multiple Choice', 'True/False', 'Fill in the Blank'],
    default: 'Multiple Choice'
  },
  question: String,
  choices: [String],
  correctAnswer: [String],
  blanks: [{
    answer: String
  }],
  course: String,
  quiz: String
}, { collection: 'questions' });

export default questionSchema;