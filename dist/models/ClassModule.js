"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const ClassModuleSchema = new mongoose_1.default.Schema({
    order: { type: Number, required: true },
    title: { type: String, required: true, trim: true, maxLength: 100 },
    classId: { type: mongoose_1.default.Types.ObjectId, ref: 'Class', required: true, trim: true, maxLength: 50 },
});
const ClassModuleModel = mongoose_1.default.model('ClassModule', ClassModuleSchema);
exports.default = ClassModuleModel;
