"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const FacultySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true, trim: true, maxLength: 50 },
    about: { type: String, required: true, trim: true, maxLength: 500, default: '' },
    hodId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, trim: true, maxLength: 50 },
}, { timestamps: true });
const FacultyModel = mongoose_1.default.model('Faculty', FacultySchema);
exports.default = FacultyModel;
