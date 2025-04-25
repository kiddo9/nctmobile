"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const NotificationSchema = new mongoose_1.default.Schema({
    body: { type: String, required: true, trim: true, maxLength: 200 },
    notificationTypeId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, maxLength: 50 },
    seen: { type: Boolean, default: false, required: true },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', maxLength: 50 }, // can be null
    ownerId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', maxLength: 50 },
    classworkId: { type: mongoose_1.default.Types.ObjectId, ref: 'Classwork', maxLength: 50 }, // can be null
    classInstanceId: { type: mongoose_1.default.Types.ObjectId, ref: 'ClassInstance', maxLength: 50 }, // can be null
    facultyId: { type: mongoose_1.default.Types.ObjectId, ref: 'Faculty', maxLength: 50 }, // can be null
}, { timestamps: true });
const NotificationModel = mongoose_1.default.model('Notification', NotificationSchema);
exports.default = NotificationModel;
