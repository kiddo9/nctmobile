# from node offical image build application
FROM node:18

#set up work directory
WORKDIR /app

#copy the package json
COPY package*.json ./

#install its dependencies
RUN npm install

# copy app from the dist foldr to the dist folder
COPY dist ./dist

# expose the port
EXPOSE 4000

CMD ["node", "dist/index.js"]