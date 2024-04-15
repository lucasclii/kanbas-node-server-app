import AssignmentModel from './model.js';

export const createAssignment = (courseId, assignment) => {
  assignment.course = courseId;
  return AssignmentModel.create(assignment);
};

export const findAssignmentsForCourse = (courseId) => {
  return AssignmentModel.find({ course: courseId });
};

export const findAssignmentById = (assignmentId) => {
  return AssignmentModel.findById(assignmentId);
};

export const updateAssignment = (assignmentId, assignment) => {
  return AssignmentModel.updateOne({ _id: assignmentId }, { $set: assignment });
};

export const deleteAssignment = (assignmentId) => AssignmentModel.deleteOne({ _id: assignmentId });