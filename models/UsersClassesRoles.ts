import mongoose from "mongoose";

// (){} : ! # _ => ""
const UsersClassesRolesSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, maxLength: 50 },
  classId: { type: mongoose.Types.ObjectId, ref: 'Class', required: true, trim: true, maxLength: 50 },
  roleId: { type: mongoose.Types.ObjectId, ref: 'Role', required: true, trim: true, maxLength: 50 },  // users roleId
});

const UsersClassesRolesModel = mongoose.model('UsersClassesRoles', UsersClassesRolesSchema);

export default UsersClassesRolesModel;