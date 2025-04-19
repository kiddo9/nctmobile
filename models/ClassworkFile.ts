import mongoose from "mongoose";

// (){} : ! # _ => ""
const ClassworkFileSchema = new mongoose.Schema({
  order: { type: Number, required: true},
  link: { type: String, required: true, maxLength: 200 },
  classworkId: { type: mongoose.Types.ObjectId, ref: 'Classwork', required: true, maxLength: 50 },
});

const ClassworkFileModel = mongoose.model('ClassworkFile', ClassworkFileSchema);

export default ClassworkFileModel;