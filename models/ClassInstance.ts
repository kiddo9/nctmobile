import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassInstanceSchema = new mongoose.Schema({
  isCompleted: { type: Boolean, required: true, unique: true, default: false},
  educatorId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, maxLength: 50 },
  classId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, maxLength: 50 },
}, { timestamps: true });

const ClassInstanceModel = mongoose.model('ClassInstance', ClassInstanceSchema);

export default ClassInstanceModel;