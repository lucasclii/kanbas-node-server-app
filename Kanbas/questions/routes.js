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

  // Submit quiz answers
  const submitQuizAnswers = async (req, res) => {
    const { quizId } = req.params;
    const answers = req.body;
  
    try {
      // Update each question document with the user's answer
      for (const questionId in answers) {
        const answer = answers[questionId];
        await dao.updateQuestion(questionId, { userAnswer: answer });
      }
  
      res.status(200).json({ message: 'Quiz answers submitted successfully' });
    } catch (error) {
      console.error('Error submitting quiz answers:', error);
      res.status(500).json({ error: 'An error occurred while submitting the quiz answers' });
    }
  };

  app.post("/api/quizzes/:quizId/submit", submitQuizAnswers);

  const getUserAnswersForQuiz = async (req, res) => {
    const { quizId } = req.params;
  
    try {
      const questions = await dao.findQuestionsForQuiz(quizId);
      const userAnswers = {};
  
      for (const question of questions) {
        if (question.userAnswer) {
          userAnswers[question._id] = question.userAnswer;
        }
      }
  
      res.status(200).json(userAnswers);
    } catch (error) {
      console.error('Error retrieving user answers for quiz:', error);
      res.status(500).json({ error: 'An error occurred while retrieving user answers for quiz' });
    }
  };

  app.get("/api/quizzes/:quizId/userAnswers", getUserAnswersForQuiz);
}