import mongoose from "mongoose";

// (){} : ! # _ => ""
const UsersRolesSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true, trim: true, maxLength: 50 },
  roleId: { type: mongoose.Types.ObjectId, ref: 'Role', required: true, trim: true, maxLength: 50 },
});

const UsersRolesModel = mongoose.model('UsersRoles', UsersRolesSchema);

export default UsersRolesModel;