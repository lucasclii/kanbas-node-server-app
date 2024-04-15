import QuestionModel from './model.js';

export const createQuestion = (courseId, quizId, question) => {
  question.course = courseId;
  question.quiz = quizId;
  return QuestionModel.create(question);
};

export const findQuestionsForQuiz = (quizId) => {
  return QuestionModel.find({ quiz: quizId });
};

export const findQuestionById = (questionId) => {
  return QuestionModel.findById(questionId);
};

export const updateQuestion = (questionId, question) => {
  return QuestionModel.updateOne({ _id: questionId }, { $set: question });
};

export const deleteQuestion = (questionId) => {
  return QuestionModel.deleteOne({ _id: questionId });
};