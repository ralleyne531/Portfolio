FROM node:lts-alpine

LABEL authors="ralleyne"

WORKDIR /ui

# Copy package.json and package-lock.json to install dependencies
COPY UI/package.json UI/package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY UI /ui

# Build the app within the Docker container
RUN npm run build

# Command to start the app when the container is running
CMD ["npm", "start"]
