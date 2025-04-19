import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassworkSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 100 },
  body: { type: String, required: true, trim: true, maxLength: 1000,},
  deadline: { type: Date, required: true },
  classScheduleId: { type: mongoose.Types.ObjectId, ref: 'ClassSchedule', required: true, maxLength: 50 },
  facultyId: { type: mongoose.Types.ObjectId, ref: 'Faculty', required: true, maxLength: 50 },
  classId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, maxLength: 50 },

}, { timestamps: true });

const ClassworkModel = mongoose.model('Classwork', ClassworkSchema);

export default ClassworkModel;