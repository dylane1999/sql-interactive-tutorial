FROM node:12.18.3
#specify version of node that was used in the projects development
LABEL version="1.0"
LABEL description="This is the base docker image for the SQL Tutorial backend API."
LABEL maintainer = ["dylanedwards290@gmail.com"]
WORKDIR /app
# create a directory for the image filesystem
COPY ["package.json", "package-lock.json", "./"]
#copy into image file system
RUN npm install --production
# Run the command inside your image filesystem.
COPY . .
# Copy the rest of your app's source code from your host to your image filesystem.
EXPOSE 5000
#Expose port 
CMD ["npm", "run", "server"]
# Run the specified command within the container.