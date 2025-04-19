import mongoose, { mongo } from "mongoose";

// This model ensures that ClassInstances whose parent is Class that has Modules 
// (inside modules are several class schedule), it ensures that ClassInstances can 
// inherit the Modules and Schedules of it's parent class the only thing different 
// would be that it would add a start time for each class schedule (ClassSchedule is a child of ClassModules)

const ClassInstancesModulesSchedulesSchema = new mongoose.Schema({
  classInstanceId: { type: mongoose.Types.ObjectId, ref: 'ClassInstance', required: true, trim: true, maxLength: 50 },
  classModuleId: { type: mongoose.Types.ObjectId, ref: 'ClassModule', required: true, trim: true, maxLength: 50 },
  classScheduleId: { type: mongoose.Types.ObjectId, ref: 'ClassSchedule', required: true, trim: true, maxLength: 50 },
  startTime: { type: Date, required: true},
  endTime: { type: Date, required: true},
}, { timestamps: true });

const ClassInstancesModulesSchedules = mongoose.model('ClassInstancesModulesSchedules', ClassInstancesModulesSchedulesSchema);

export default ClassInstancesModulesSchedules;