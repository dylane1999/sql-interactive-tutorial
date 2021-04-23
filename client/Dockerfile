
FROM node:14
#specify version of node that was used in the projects development
LABEL version="1.0"
LABEL description="This is the base docker image for the SQL Interactive Tutorial."
LABEL maintainer = ["dylanedwards290@gmail.com"]
WORKDIR /clientApp
# create a directory for the image filesystem
COPY ["package.json", "package-lock.json", "./"]
#copy into image file system
RUN npm install --production
# Run the command inside your image filesystem.
COPY . .
# Copy the rest of your app's source code from your host to your image filesystem.
EXPOSE 3000
#Expose port 
CMD ["npm", "start"]
# Run the specified command within the container.