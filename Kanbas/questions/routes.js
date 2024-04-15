import * as dao from './dao.js';

export default function QuestionRoutes(app) {
  // Create a new question for a quiz
  const createQuestion = async (req, res) => {
    const { courseId, quizId } = req.params;
    const question = await dao.createQuestion(courseId, quizId, req.body);
    res.json(question);
  };
  app.post("/api/courses/:courseId/quizzes/:quizId/questions", createQuestion);

  // Retrieve all questions for a quiz
  const findQuestionsForQuiz = async (req, res) => {
    const { quizId } = req.params;
    const questions = await dao.findQuestionsForQuiz(quizId);
    res.json(questions);
  };
  app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz);

  // Retrieve a question by ID
  const findQuestionById = async (req, res) => {
    const { questionId } = req.params;
    const question = await dao.findQuestionById(questionId);
    res.json(question);
  };
  app.get("/api/questions/:questionId", findQuestionById);

  // Update a question
  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    res.json(status);
  };
  app.put("/api/questions/:questionId", updateQuestion);

  // Delete a question
  const deleteQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.deleteQuestion(questionId);
    res.json(status);
  };
  app.delete("/api/questions/:questionId", deleteQuestion);
}