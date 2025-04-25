"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const ClassInstanceSchema = new mongoose_1.default.Schema({
    isCompleted: { type: Boolean, required: true, unique: true, default: false },
    educatorId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, maxLength: 50 },
    classId: { type: mongoose_1.default.Types.ObjectId, ref: 'Class', required: true, maxLength: 50 },
}, { timestamps: true });
const ClassInstanceModel = mongoose_1.default.model('ClassInstance', ClassInstanceSchema);
exports.default = ClassInstanceModel;
