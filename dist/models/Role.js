"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const RoleSchema = new mongoose_1.default.Schema({
    name: { type: String, enum: ['Superadmin', 'Admin', 'Educator', 'Student'], required: true, maxLength: 15 },
});
const RoleModel = mongoose_1.default.model('Role', RoleSchema);
exports.default = RoleModel;
