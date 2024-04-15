import ModuleModel from './model.js';


export const createModule = (courseId, module) => {
  module.course = courseId;
  return ModuleModel.create(module);
};

export const findModulesForCourse = (courseId) => {
  return ModuleModel.find({ course: courseId });
};

export const findModuleById = (moduleId) => {
  return ModuleModel.findById(moduleId);
};

export const updateModule = (moduleId, module) => {
  return ModuleModel.updateOne({ _id: moduleId }, { $set: module });
};

export const deleteModule = (moduleId) => ModuleModel.deleteOne({ _id: moduleId });