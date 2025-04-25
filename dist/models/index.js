"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attendance_1 = __importDefault(require("../models/Attendance"));
const Class_1 = __importDefault(require("../models/Class"));
const ClassInstance_1 = __importDefault(require("../models/ClassInstance"));
const ClassModule_1 = __importDefault(require("../models/ClassModule"));
const ClassSchedule_1 = __importDefault(require("../models/ClassSchedule"));
const Classwork_1 = __importDefault(require("../models/Classwork"));
const Faculty_1 = __importDefault(require("../models/Faculty"));
const Notification_1 = __importDefault(require("../models/Notification"));
const NotificationType_1 = __importDefault(require("../models/NotificationType"));
const Role_1 = __importDefault(require("../models/Role"));
const User_1 = __importDefault(require("../models/User"));
const UsersClassesRoles_1 = __importDefault(require("../models/UsersClassesRoles"));
const UsersFacultiesRoles_1 = __importDefault(require("../models/UsersFacultiesRoles"));
const UsersRoles_1 = __importDefault(require("../models/UsersRoles"));
const ClassInstancesModulesSchedules_1 = __importDefault(require("./ClassInstancesModulesSchedules"));
exports.default = {
    Attendance: Attendance_1.default,
    Class: Class_1.default,
    ClassInstance: ClassInstance_1.default,
    ClassInstancesModulesSchedules: ClassInstancesModulesSchedules_1.default,
    ClassModule: ClassModule_1.default,
    ClassSchedule: ClassSchedule_1.default,
    Classwork: Classwork_1.default,
    Faculty: Faculty_1.default,
    Notification: Notification_1.default,
    NotificationType: NotificationType_1.default,
    Role: Role_1.default,
    User: User_1.default,
    UsersClassesRoles: UsersClassesRoles_1.default,
    UsersFacultiesRoles: UsersFacultiesRoles_1.default,
    UsersRoles: UsersRoles_1.default,
};
