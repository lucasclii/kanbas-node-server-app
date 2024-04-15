import * as dao from './dao.js';

export default function ModuleRoutes(app) {
  // Create a new module for a course
  const createModule = async (req, res) => {
    const { courseId } = req.params;
    const module = await dao.createModule(courseId, req.body);
    res.json(module);
  };
  app.post("/api/courses/:courseId/modules", createModule);

  // Retrieve all modules for a course
  const findModulesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const modules = await dao.findModulesForCourse(courseId);
    res.json(modules);
  };
  app.get("/api/courses/:courseId/modules", findModulesForCourse);

  // Update a module
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  app.put("/api/modules/:moduleId", updateModule);

  // Delete a module
  const deleteModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.deleteModule(moduleId);
    res.json(status);
  };
  app.delete("/api/modules/:moduleId", deleteModule);
}

/*import db from "../Database/index.js";
function ModuleRoutes(app) {
    //update module for course
    app.put("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        const moduleIndex = db.modules.findIndex(
            (m) => m._id === mid);
        db.modules[moduleIndex] = {
            ...db.modules[moduleIndex],
            ...req.body
        };
        res.sendStatus(204);
    });

    //delete module for course
    app.delete("/api/modules/:mid", (req, res) => {
        const { mid } = req.params;
        db.modules = db.modules.filter((m) => m._id !== mid);
        res.sendStatus(200);
    });

    //create module for a course
    app.post("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const newModule = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.modules.push(newModule);
        res.send(newModule);
    });


    //get modules for a course
    app.get("/api/courses/:cid/modules", (req, res) => {
        const { cid } = req.params;
        const modules = db.modules
            .filter((m) => m.course === cid);
        res.send(modules);
    });

}
export default ModuleRoutes;*/