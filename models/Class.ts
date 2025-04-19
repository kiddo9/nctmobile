import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true, maxLength: 100 },
  avatar: { type: String, trim: true, maxLength: 200 },
  about: { type: String, required: true, trim: true, maxLength: 500, default: 'This is the description', },
  facultyId: { type: mongoose.Types.ObjectId, ref: 'Faculty', required: true, trim: true, maxLength: 50 },
}, { timestamps: true });

const ClassModel = mongoose.model('Class', ClassSchema);

export default ClassModel;