//import or reequire model
const cohortModel = require("../../models/cohort");

// ID encryption generator
function encryption(length: number) {
  let result = "";
  const characters =
    process.env.ENCRYPTION_KEY ||
    "QWERTYUIOPASDFGHJKLZXCVBNM1234567890qwertyuiopasdfghjklzxcvbnm.";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

//create cohort controller
export const createCohort = async (
  course_id: string,
  instructor_id: string,
  cohort: string[],
  start_date: string,
  end_date: string,
  class_time: string,
  training_days: string[],
  cohort_capacity: number,
  venue: string,
  location: string,
  customLink: string
) => {
  //create an array to return missing fields to users
  let missingFields: string[] = [];
  if (!course_id) missingFields.push("course_id");
  if (!instructor_id) missingFields.push("instructor_id");
  if (!start_date) missingFields.push("start_date");
  if (!end_date) missingFields.push("end_date");
  if (!class_time) missingFields.push("class_time");
  if (training_days.length == 0) missingFields.push("training_days");
  if (!cohort_capacity) missingFields.push("cohort_capacity");
  if (!venue) missingFields.push("venue");
  if (!location) missingFields.push("location");

  //return error if true
  if (missingFields.length > 0) {
    throw new Error(`This fields are missing ${missingFields.join(", ")}`);
  }

  //create the cohort
  const createCohort = await cohortModel.create({
    course_id,
    instructor_id,
    cohort,
    start_date,
    end_date,
    class_time,
    training_days,
    cohort_capacity,
    venue,
    location,
    customLink,
    classId: encryption(30), //encrypt id
  });

  //check if it was created and stored in the database and return error if not
  if (!createCohort) {
    throw new Error("unable to create cohort");
  }

  //return cohort if true
  return createCohort;
};

//controller to get all cohorts from the db
export const allCohorts = async () => {
  //get all the data from the DB
  const cohorts = await cohortModel.findAll();

  //return error if database is empty
  if (cohorts.length == 0) {
    throw new Error("cohort table is empty");
  }

  //return cohort
  return cohorts;
};

export const getCohortById = async (classId: string) => {
  if (classId == "") {
    throw new Error("can't query with an empty field. please provide a field");
  }
  const isCohortExist = await cohortModel.findOne({
    where: { classId: classId },
  });

  if (!isCohortExist) {
    throw new Error("Cohort not found or does not exist");
  }

  return isCohortExist;
};

export const updateCohort = async (
  course_id: string,
  instructor_id: string,
  cohort: string[],
  start_date: string,
  end_date: string,
  class_time: string,
  training_days: string[],
  cohort_capacity: number,
  venue: string,
  location: string,
  customLink: string,
  classId: string
) => {
  //create an array to return missing fields to users
  let missingFields: string[] = [];
  if (!course_id) missingFields.push("course_id");
  if (!instructor_id) missingFields.push("instructor_id");
  if (!start_date) missingFields.push("start_date");
  if (!end_date) missingFields.push("end_date");
  if (!class_time) missingFields.push("class_time");
  if (training_days.length == 0) missingFields.push("training_days");
  if (!cohort_capacity) missingFields.push("cohort_capacity");
  if (!venue) missingFields.push("venue");
  if (!location) missingFields.push("location");
  if (!classId) missingFields.push("no id");

  //return error if true
  if (missingFields.length > 0) {
    throw new Error(`This fields are missing ${missingFields.join(", ")}`);
  }
  const isCohortExist = await cohortModel.findOne({
    where: { classId: classId },
  });

  if (!isCohortExist) {
    throw new Error("can't find cohort");
  }

  //update cohort
  const updateCohort = await cohortModel.update(
    {
      course_id,
      instructor_id,
      cohort,
      start_date,
      end_date,
      class_time,
      training_days,
      cohort_capacity,
      venue,
      location,
      customLink,
    },
    {
      where: { classId: classId },
    }
  );

  //return error if not updated
  if (!updateCohort) {
    throw new Error("unable to update cohort");
  }

  //return updated cohort
  return isCohortExist;
};

export const deleteCohort = async (classId: string) => {
  const isCohortExist = await cohortModel.findOne({
    where: { classId: classId },
  });

  if (!isCohortExist) {
    throw new Error("cohort does not exist");
  }

  await cohortModel.destroy({ where: { classId: classId } });

  return isCohortExist;
};
