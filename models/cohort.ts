const { DataTypes } = require("sequelize");
const dbconnection = require("../config/DB_connection");

const cohortModels = dbconnection.define(
  "cohort",
  {
    classId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructor_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    class_time: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    training_days: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    cohort: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    cohort_capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "cohort",
  }
);

module.exports = cohortModels;
