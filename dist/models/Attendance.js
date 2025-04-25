"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const AttendanceSchema = new mongoose_1.default.Schema({
    classId: { type: mongoose_1.default.Types.ObjectId, ref: 'Class', required: true, maxLength: 50 },
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, maxLength: 50 },
    classScheduleId: { type: mongoose_1.default.Types.ObjectId, ref: 'ClassSchedule', required: true, maxLength: 50 },
}, { timestamps: true });
const AttendanceModel = mongoose_1.default.model('Attendance', AttendanceSchema);
exports.default = AttendanceModel;
