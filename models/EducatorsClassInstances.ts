import mongoose from "mongoose";

// (){} : ! # _ => ""
const EducatorClassInstanceSchema = new mongoose.Schema({
  educatorId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, maxLength: 50 },
  classInstanceId: { type: mongoose.Types.ObjectId, ref: 'ClassInstance', required: true, trim: true, maxLength: 50 },
});

const EducatorsClassInstancesModel = mongoose.model('EducatorsClassInstances', EducatorClassInstanceSchema);

export default EducatorsClassInstancesModel;