import mongoose from "mongoose";

// (){} : ! # _ => ""
const FacultySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true, maxLength: 50 },
  about: { type: String, required: true, trim: true, maxLength: 500, default: '' },
  hodId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, maxLength: 50 },
}, { timestamps: true });

const FacultyModel = mongoose.model('Faculty', FacultySchema);

export default FacultyModel;