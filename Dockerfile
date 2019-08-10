FROM node:12

WORKDIR /app

# RUN npm install -g gulp
# RUN npm global add sass

COPY package*.json ./
COPY . .

RUN npm install
# RUN sass public/stylesheets/style.scss public/stylesheets/style.css
# RUN gulp start

EXPOSE 8080

CMD ["npm", "start"]
