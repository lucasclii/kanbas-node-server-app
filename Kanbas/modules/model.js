import mongoose from 'mongoose';
import schema from './schema.js';

const ModuleModel = mongoose.model('Module', schema);
export default ModuleModel;