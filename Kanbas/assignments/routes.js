import * as dao from './dao.js';

export default function AssignmentRoutes(app) {
  // Create a new assignment for a course
  const createAssignment = async (req, res) => {
    const { courseId } = req.params;
    const assignment = await dao.createAssignment(courseId, req.body);
    res.json(assignment);
  };
  app.post("/api/courses/:courseId/assignments", createAssignment);

  // Retrieve all assignments for a course
  const findAssignmentsForCourse = async (req, res) => {
    const { courseId } = req.params;
    const assignments = await dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  };
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);

  // Update an assignment
  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.updateAssignment(assignmentId, req.body);
    res.json(status);
  };
  app.put("/api/assignments/:assignmentId", updateAssignment);

  // Delete an assignment
  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.json(status);
  };
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
}





/*import db from "../Database/index.js";
function AssignmentRoutes(app) {
    // retrieving assignment for the course
    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((a) => a.course === cid);
        res.send(assignments);
    });

    // create assignment for the course
    app.post("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    // delete assignment
    app.delete("/api/assignments/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });

    // update assignment
    app.put("/api/assignments/:aid", (req, res) => {
        const {aid} = req.params;
        const assignmentIndex = db.assignments.findIndex(
            (a) => a._id === aid);
        db.assignments[assignmentIndex] = {
            ...db.assignments[assignmentIndex],
            ...req.body
        };
        res.sendStatus(204);
    });


}
export default AssignmentRoutes;*/