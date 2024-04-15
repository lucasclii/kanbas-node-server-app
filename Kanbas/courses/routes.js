import * as dao from './dao.js';

export default function CourseRoutes(app) {
    // create course
    const createCourse = async (req, res) => {
        const course = await dao.createCourse(req.body);
        res.json(course);
    };

    app.post("/api/courses", createCourse);

    // find all courses in database
    const findAllCourses = async (req, res) => {
        const courses = await dao.findAllCourses();
        res.json(courses);
    };
    app.get("/api/courses", findAllCourses);

    // find course by id
    const findCourseById = async (req, res) => {
        const course = await dao.findCourseById(req.params.courseId);
        res.json(course);
    };
    app.get("/api/courses/:courseId", findCourseById);

    // update course
    const updateCourse = async (req, res) => {
        const { courseId } = req.params;
        const status = await dao.updateCourse(courseId, req.body);
        res.json(status);
    };
    app.put("/api/courses/:courseId", updateCourse);

    // delete course
    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.courseId);
        res.json(status)
    };
    app.delete("/api/courses/:courseId", deleteCourse);


};





/** 
import Database from "../Database/index.js";
export default function CourseRoutes(app) {
    //find the course by id so it can open revelant course
    app.get("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = Database.courses
            .find((c) => c._id === id);
        if (!course) {
            res.status(404).send("Course not found");
            return;
        }
        res.send(course);
    });
    // update course
    app.put("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        const course = req.body;
        Database.courses = Database.courses.map((c) =>
            c._id === id ? { ...c, ...course } : c
        );
        res.sendStatus(204);
    });
    // delete course
    app.delete("/api/courses/:id", (req, res) => {
        const { id } = req.params;
        Database.courses = Database.courses
            .filter((c) => c._id !== id);
        res.sendStatus(204);
    });
    // create new course
    app.post("/api/courses", (req, res) => {
        const course = {
            ...req.body,
            _id: new Date().getTime().toString()
        };
        Database.courses.push(course);
        res.send(course);
    });
    // get all courses
    app.get("/api/courses", (req, res) => {
        const courses = Database.courses;
        res.send(courses);
    });
    
}
*/