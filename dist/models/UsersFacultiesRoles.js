"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// (){} : ! # _ => ""
const UsersFacultiesRolesSchema = new mongoose_1.default.Schema({
    userId: { type: mongoose_1.default.Types.ObjectId, ref: 'User', required: true, trim: true, maxLength: 50 },
    facultyId: { type: mongoose_1.default.Types.ObjectId, ref: 'Faculty', required: true, trim: true, maxLength: 50 },
    roleId: { type: mongoose_1.default.Types.ObjectId, ref: 'Role', required: true, trim: true, maxLength: 50 }, // Users roleId
});
const UsersFacultiesRolesModel = mongoose_1.default.model('UsersFacultiesRoles', UsersFacultiesRolesSchema);
exports.default = UsersFacultiesRolesModel;
