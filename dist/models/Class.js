"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const ClassSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true, trim: true, maxLength: 100 },
    avatar: { type: String, trim: true, maxLength: 200 },
    about: { type: String, required: true, trim: true, maxLength: 500, default: 'This is the description', },
    facultyId: { type: mongoose_1.default.Types.ObjectId, ref: 'Faculty', required: true, trim: true, maxLength: 50 },
}, { timestamps: true });
const ClassModel = mongoose_1.default.model('Class', ClassSchema);
exports.default = ClassModel;
