FROM node:16
WORKDIR /usr/src/ortieez_portfolio
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]

