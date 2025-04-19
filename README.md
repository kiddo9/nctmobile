# NEO CLOUD SCHOOL PORTAL BACKEND SERVER

## DEPLOYMENT

**Step 1: Compile TS to JS**
Open the terminal and run

> tsc

this compiles our TS source code into JS and stores it in the 📁 dist folder

**Step 2: Push To Github**
Push latest source code to Github where we can then connect to the repository from any server of our choice

**Step 3: Execute 📁 dist folder on any Server**
Execute the Dockerfile on any server that supports docker containers and the Dockerfile should spin up a container moving all our JS code in 📁 dist folder into that container and then executing the JS code to spin up our graphql on that server.

## DESCRIPTION
