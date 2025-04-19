import mongoose from "mongoose";

// (){} : ! # _ => ""
const RoleSchema = new mongoose.Schema({
  name: { type: String, enum: ['Superadmin', 'Admin', 'Educator', 'Student'], required: true, maxLength: 15},
});

const RoleModel = mongoose.model('Role', RoleSchema);

export default RoleModel;