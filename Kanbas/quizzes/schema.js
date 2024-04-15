import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: String,
  instructions: String,
  quizType: {
    type: String,
    enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'],
    default: 'Graded Quiz'
  },
  points: Number,
  assignmentGroup: {
    type: String,
    enum: ['Quizzes', 'Exams', 'Assignments', 'Project'],
    default: 'Quizzes'
  },
  status: {
    type: Boolean,
    default: false
  },
  shuffleAnswers: {
    type: Boolean,
    default: true
  },
  timeLimit: {
    type: String,
    default: '20 Minutes'
  },
  multipleAttempts: {
    type: Boolean,
    default: false
  },
  showCorrectAnswers: String,
  accessCode: String,
  oneQuestionAtATime: {
    type: Boolean,
    default: true
  },
  webcamRequired: {
    type: Boolean,
    default: false
  },
  lockQuestionsAfterAnswering: {
    type: Boolean,
    default: false
  },
  due: String,
  availableDate: String,
  untilDate: String,
  course: String
}, { collection: 'quizzes' });

export default quizSchema;