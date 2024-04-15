import * as dao from './dao.js';

export default function QuizRoutes(app) {
  // Create a new quiz for a course
  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const quiz = await dao.createQuiz(courseId, req.body);
    res.json(quiz);
  };
  app.post("/api/courses/:courseId/quizzes", createQuiz);

  // Retrieve all quizzes for a course
  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  };
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);

  // Retrieve a quiz by ID
  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.json(quiz);
  };
  app.get("/api/quizzes/:quizId", findQuizById);

  // Update a quiz
  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status);
  };
  app.put("/api/quizzes/:quizId", updateQuiz);

  // Delete a quiz
  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.deleteQuiz(quizId);
    res.json(status);
  };
  app.delete("/api/quizzes/:quizId", deleteQuiz);
}
