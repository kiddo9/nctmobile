# NEO CLOUD SCHOOL PORTAL BACKEND SERVER

## DESCRIPTION

This is a module or part of neo clouds backend service for the nctmobile. This module is incharge of sending emails to instructors for permission granting, creation of Cohorts for students and showing there training days and real time in app notification.
Here are the Stacks used:

1. Node.js
2. Express.js
3. Apollo Server
4. Graphql
5. Docker
6. CI/CD pipeline with Github actions
7. Git & Github
8. Sequelize(ORM)
9. Postgres Database
10. Typescript

### Other packages

- Nodemailer
- Pusher(websocket for real time notification)

## SETUP INSTRUCTION

### Prerequisites

Ensure you have the following installed

- **Node** (22.2 or later) → [Download Node](https://nodejs.org/en/download)
- **NPM** package
- **Git** → [Download Git](https://git-scm.com/downloads)
- **VS Code** (Recommended) → [Download VS Code](https://code.visualstudio.com/)

### INSTALLING AND RUNNING OF PROJECT

- **clone repo**

```sh
 git clone https://github.com/kiddo9/nctmobile.git
```

- **Navigate to the project directory**

```sh
  cd nctmobile
```

- **Install Dependecies**

```sh
 npm install
```

- **configure Database**
  navigate to the config folder and click on DB_connection. Use the enviroment variables in the connecttion to create your DB creds in the .env file

```sh
 cd config
```

```sh
 touch .env
```

- **DOCKER(optional):**
  if you have docker installed in your system and you want to use it to run your database, navigated to the docker-compose.yaml file. where there is enviroments input your creds. After that run:

```sh
 docker compose -f docker-compose.yaml up
```

this will start up a container for your database. To stop contanier run

```sh
 docker compose -f docker-compose.yaml down
```

- **Run migrations**
  once that database is running successfully, run migrations to create the tables in the database

```sh
 npx sequelize-cli db:migrate
```

- **configure nodemailer and pusher(for notifications)**
  navigate to the email folder and click on the emailConfig.ts file. using the environment variable in the file set up your email server creds in the .env file. Same with notification, navigate to the notification folder and click on the notificationConfig.ts file. using the environment variable in the file set up your pusher creds in the .env file.

- **start server**
  To start server run:

```sh
npm start
```

don't forget to setup your PORT in the .env file

### GRAPHQL QUERY & MUTATIONS

- **Query to retrive all data from the database**

```sh
query cohortQuery{
  cohort{
    training_days
  }
}
```

- **Query to retrive a particular data from the database**

```sh
query cohortQuery($classId: String!){
  CohortById(classId: $classId){
    training_days
  }
}
```

variables

```sh
{
  "classId": ""
}
```

- **Mutation to create cohort**

```sh
mutation createCohort(
  $courseId: String!,
  $instructorId: String!,
  $startDate: String!,
  $endDate: String!,
  $classTime: String!,
  $training_days: [String!]!,
  $cohortCapacity: Int!,
  $createCohortVenue2: String!,
  $createCohortLocation2: String!){
  createCohort(course_id: $courseId, instructor_id: $instructorId, start_date: $startDate, end_date: $endDate,training_days: $training_days, class_time: $classTime, cohort_capacity: $cohortCapacity, venue: $createCohortVenue2, location: $createCohortLocation2) {
    id
  }
}
```

variables:

```sh
{
  "courseId": "",
  "instructorId": "",
  "startDate": "",
  "endDate": "",
  "classTime": "",
  "cohortCapacity": 0,
  "createCohortVenue2": "",
  "createCohortLocation2": "",
  "training_days":["monday"]
}
```

- **Mutation to update cohort**

```sh
mutation updateCohort($classId: String!, $courseId: String!, $instructorId: String!, $startDate: String!, $endDate: String!, $classTime: String!, $trainingDays: [String!]!, $cohortCapacity: Int!, $venue: String!, $location: String!){
  updateCohort(classId: $classId, course_id: $courseId, instructor_id: $instructorId, start_date: $startDate, end_date: $endDate, class_time: $classTime, training_days: $trainingDays, cohort_capacity: $cohortCapacity, venue: $venue, location: $location) {
    course_id
    instructor_id
  }
}
```

variables:

```sh
{
  "classId": "",
  "courseId": "",
  "instructorId": "",
  "startDate": "",
  "endDate": "",
  "classTime": "",
  "cohortCapacity": 0,
  "venue": "",
  "location": "",
  "trainingDays": ["wednesday"]
}
```

- **Mutation to delete cohort**

```sh
mutation deleteCohort($classId: String!){
  deleteCohort(classId: $classId){
    message
  }
}
```

variable

```sh
{
  clasId: ""
}
```

#### Note:

when using postman all good response has a status of 200 or 201. when making any request don't forget to attach the token to the request.

## DEPLOYMENT

**Step 1: Compile TS to JS**
Open the terminal and run

```sh
 tsc
```

or

```sh
npm run build
```

this compiles our TS source code into JS and stores it in the 📁 dist folder

**Step 2: Push To Github**
Push latest source code to Github where we can then connect to the repository from any server of our choice

**Step 3: Execute 📁 dist folder on any Server**
Execute the Dockerfile on any server that supports docker containers and the Dockerfile should spin up a container moving all our JS code in 📁 dist folder into that container and then executing the JS code to spin up our graphql on that server.

### Folder structure

```sh
NEO CLOUD SCHOOL PORTAL BACKEND SERVER/
|-- .github/
|     |-- workflows/
|          |-- CD.yml
|          |-- CI.yml
|-- config/
|    |-- config.json
|    |-- DB_connection.ts
|-- emails/
|    |-- emailConfig.ts
|-- graphql/
|     |-- controllers /
|     |      |-- cohortController.ts
|     |-- resolvers/
|     |      |-- cohortResolver.ts
|     |      |-- index.ts
|     |      |-- Users.ts
|     |-- schemas/
|           |-- cohortSchema.ts
|           |-- index.ts
|           |-- UserSchema.ts
|-- migrations/
|     |-- cohot_table.js
|-- models /
|     |-- cohort.ts
|     |-- index.js
|-- notification/
|     |-- notificationConfig.ts
|-- seeders/
|-- .dockerignore
|-- .env
|-- .gitignore
|-- docker-composer.yaml
|-- Dockerfile
|-- index.ts
|-- nodemon.json
|-- package-lock.json
|-- package.json
│── README.md
│── Tasks.txt
│── tsconfig.json
```

```sh
https://techneo.ng
```
