"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const EducatorClassInstanceSchema = new mongoose_1.default.Schema({
    educatorId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, trim: true, maxLength: 50 },
    classInstanceId: { type: mongoose_1.default.Types.ObjectId, ref: 'ClassInstance', required: true, trim: true, maxLength: 50 },
});
const EducatorsClassInstancesModel = mongoose_1.default.model('EducatorsClassInstances', EducatorClassInstanceSchema);
exports.default = EducatorsClassInstancesModel;
