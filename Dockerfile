
# Use a lightweight Node.js base image
FROM node:20.11.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the app source code
COPY . .

# Expose the port where the React app runs (usually 3000)
EXPOSE 3000

# Start the development server (adjust command based on your setup)
CMD [ "npm", "start" ]