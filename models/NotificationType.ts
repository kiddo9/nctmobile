import mongoose from "mongoose";

// (){} : ! # _ => ""
const NotificationTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 100 },
});

const NotificationTypeModel = mongoose.model("NotificationType", NotificationTypeSchema);

export default NotificationTypeModel;
