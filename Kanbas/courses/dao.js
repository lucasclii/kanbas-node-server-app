import CourseModel from './model.js';

export const createCourse = (course) => {
    delete course._id
    return CourseModel.create(course);
};

export const findAllCourses = () => {
    return CourseModel.find();
};

export const findCourseById = (courseId) => {
    return CourseModel.findById(courseId);
};

export const updateCourse = (courseId, course) => {
    return CourseModel.updateOne({ _id: courseId }, { $set: course });
};

export const deleteCourse = (courseId) => CourseModel.deleteOne({ _id: courseId });