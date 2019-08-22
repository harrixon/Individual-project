FROM node:12

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

# RUN sass public/stylesheets/style.scss public/stylesheets/style.css

EXPOSE 8080

CMD ["npm", "start"]
