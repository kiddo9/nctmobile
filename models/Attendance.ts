import mongoose from "mongoose";

// (){} : ! # _ => ""
const AttendanceSchema = new mongoose.Schema({
  classId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, maxLength: 50 },
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, maxLength: 50 },
  classScheduleId: { type: mongoose.Types.ObjectId, ref: 'ClassSchedule', required: true, maxLength: 50 },
}, { timestamps: true });

const AttendanceModel = mongoose.model('Attendance', AttendanceSchema);

export default AttendanceModel;