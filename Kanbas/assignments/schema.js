import mongoose from 'mongoose';

const assignmentSchema = new mongoose.Schema({
  title: String,
  due: String,
  points: String,
  course: String,
  from: String,
  until: String,
  description: String
}, { collection: 'assignments' });

export default assignmentSchema;