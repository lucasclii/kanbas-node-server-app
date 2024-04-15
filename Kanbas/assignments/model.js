import mongoose from 'mongoose';
import schema from './schema.js';

const AssignmentModel = mongoose.model('Assignment', schema);
export default AssignmentModel;