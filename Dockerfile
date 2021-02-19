# base image
FROM node:12

# set working directory
WORKDIR /app/

COPY ./ /app/
RUN npm install

EXPOSE 3333
# start app
CMD ["npm" , "run" , "start"]
