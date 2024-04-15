import QuizModel from './model.js';

export const createQuiz = (courseId, quiz) => {
  quiz.course = courseId;
  return QuizModel.create(quiz);
};

export const findQuizzesForCourse = (courseId) => {
  return QuizModel.find({ course: courseId });
};

export const findQuizById = (quizId) => {
  return QuizModel.findById(quizId);
};

export const updateQuiz = (quizId, quiz) => {
  return QuizModel.updateOne({ _id: quizId }, { $set: quiz });
};

export const deleteQuiz = (quizId) => QuizModel.deleteOne({ _id: quizId});