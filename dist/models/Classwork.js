"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const ClassworkSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true, trim: true, maxLength: 100 },
    body: { type: String, required: true, trim: true, maxLength: 1000, },
    deadline: { type: Date, required: true },
    classScheduleId: { type: mongoose_1.default.Types.ObjectId, ref: 'ClassSchedule', required: true, maxLength: 50 },
    facultyId: { type: mongoose_1.default.Types.ObjectId, ref: 'Faculty', required: true, maxLength: 50 },
    classId: { type: mongoose_1.default.Types.ObjectId, ref: 'Class', required: true, maxLength: 50 },
}, { timestamps: true });
const ClassworkModel = mongoose_1.default.model('Classwork', ClassworkSchema);
exports.default = ClassworkModel;
