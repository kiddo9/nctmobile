//import or require model
const cohortModel = require("../../models/cohort");
const axios = require("axios"); //import axios
const pusher = require("../../notification/notificationConfig"); //import pusher
const transporter = require("../../emails/emailConfig");

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

//controller to get a particular cohort by id
export const getCohortById = async (classId: string) => {
  //check if the id is empty
  if (classId == "" || classId == null) {
    throw new Error("can't query with an empty field. please provide a field");
  }

  //get cohort from the database
  const isCohortExist = await cohortModel.findOne({
    where: { classId: classId },
  });

  // if it does not exist throw error
  if (!isCohortExist) {
    throw new Error("Cohort not found or does not exist");
  }

  //return data
  return isCohortExist;
};

//controller to update cohort by database
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

  //query the database and check if cohot still exists
  const isCohortExist = await cohortModel.findOne({
    where: { classId: classId },
  });

  //throw an error if it does not exist
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

//delete a cohort by Id
export const deleteCohort = async (classId: string) => {
  //check if the cohort waiting to be deleted exists
  const isCohortExist = await cohortModel.findOne({
    where: { classId: classId },
  });

  //throw an error if it does not exist
  if (!isCohortExist) {
    throw new Error("cohort does not exist");
  }

  //delete or destroy cohort from the database
  const deleteCohort = await cohortModel.destroy({
    where: { classId: classId },
  });

  //if its not deleted return this response
  if (!deleteCohort) {
    return {
      status: "false",
      message: `Cohort was not able to be deleted`,
    };
  }

  //return response
  return {
    status: "true",
    message: `Cohort with classId ${classId} was deleted.`,
  };
};

//controller add student to cohort
export const addStudentToCohort = async (
  student_id: any,
  classId: any,
  jwtId: any
) => {
  //check if student id is empty
  if (student_id == "") {
    throw new Error("can't query with an empty field. please provide a field");
  }

  if (student_id !== jwtId.access_id) {
    throw new Error("request denied. attempting illegal behaviour");
  }

  //check if student exists in the database
  // const isStudentExist = await axios.get(
  //   `${process.env.STUDENT_URL}/${student_id}`
  // );

  // //
  // if (isStudentExist.status != "success") {
  //   throw new Error("student not found or does not exist");
  // }

  //get all cohorts
  const cohorts = await cohortModel.findAll();
  //check if student is already in the cohort
  for (const cohort of cohorts) {
    const setToArray = Array.isArray(cohort.cohort)
      ? cohort.cohort
      : JSON.parse(cohort.cohort);

    if (setToArray !== null && setToArray.includes(student_id)) {
      throw new Error("you are already in the cohort");
    }
  }

  //get instructor id from the cohort
  const selectedCohort = await cohortModel.findOne({
    where: { classId: classId },
  });

  if (!selectedCohort) {
    throw new Error("Cohort not found");
  }

  const cohort = JSON.parse(selectedCohort.cohort);
  const instructorId = selectedCohort.instructor_id;

  //check if instructor exist or is avaliable
  const confirmInstructor = await axios.post(
    `${process.env.INSTRUCTORS_API_URL}`,
    {
      id: instructorId,
    }
  );
  if (confirmInstructor.data.status != "success") {
    throw new Error(
      "instructor was not found or is not avaliable at the moment. Please join another Cohort"
    );
  }

  async function sendEmail(details: any) {
    await transporter.sendMail({
      from: `"'From NCTMOBILE system' <${process.env.EMAIL_USER}>"`,
      to: `"paschalelechi0@gmail.com"`,
      subject: "permission to join cohort",
      text: `Dear ${confirmInstructor.lastname} ${confirmInstructor.firstname}`,
      html: `<div>
            <p>${jwtId.name} ${details} </p>

            <div>
            <a href="${process.env.BASEURL}?student_id=${student_id}&classId=${classId}&response=true">YES</a>
            <a href="${process.env.BASEURL}?student_id=${student_id}&classId=${classId}&response=false">NO</a>
            <div>
          </div>`,
    });
  }

  if (cohort != null && cohort.length == selectedCohort.cohort_capacity) {
    let message =
      "a student of neo cloudes technologies wants to join your class but your class or cohort has reached its max. do you want to allow him or her in and bypass the max capacity instruction?";
    sendEmail(message).catch(console.error);

    pusher.trigger(`nctmobile.${jwtId.student_id}`, "cohort.notification", {
      message: `cohort is filled but a notification has been sent to the insturctor requesting to just cohort. you will be notified when he or she responses`,
    });
  } else {
    let message =
      "a student of neo cloudes technologies wants to join your class. do i have permission to add him or her to the cohort";

    sendEmail(message).catch(console.error);

    pusher.trigger(`nctmobile.${jwtId.student_id}`, "cohort.notification", {
      message: `request to join class is under process`,
    });
  }

  return null;
};

// add student confirmation
export const addStudentToCohortConfirm = async (req: any, res: any) => {
  const { student_id, classId, response } = req.query;
  //check instructor responses
  if (response != true || response != "true") {
    pusher.trigger(`nctmobile.${"ok"}`, "cohort.notification", {
      message: `sorry but the cohort is not taking any other student`,
    });

    //get all cohorts
    const cohorts = await cohortModel.findAll();

    //check if student is already in the cohort
    for (const cohort of cohorts) {
      const array = JSON.parse(cohort.cohort);
      if (
        array !== null &&
        !array.includes(student_id) &&
        array.length != cohort.cohort_capacity
      ) {
        const updatedCohort = [...array, student_id];

        const update = await cohortModel.update(
          { cohort: updatedCohort },
          { where: { classId: cohort.classId } }
        );

        if (!update) {
          throw new Error(
            "unable to add you to any other cohort please try again later "
          );
        }

        return await cohortModel.findOne({
          where: { classId: cohort.classId },
        });
      }
    }
  }

  const findCohort = await cohortModel.findOne({ where: { classId: classId } });

  let Cohort = [];

  try {
    Cohort = Array.isArray(findCohort.cohort)
      ? JSON.parse(findCohort.cohort)
      : [];
  } catch (err) {
    console.error("Invalid cohort format");
    Cohort = [];
  }

  const updatedCohort = [...Cohort, student_id];

  const update = await cohortModel.update(
    { cohort: updatedCohort },
    { where: { classId: classId } }
  );

  if (!update) {
    throw new Error("something went wrong");
  }

  pusher.trigger(`nctmobile.${"ok"}`, "cohort.notification", {
    message: `you have been added to your desired cohort`,
  });

  return findCohort;
};
