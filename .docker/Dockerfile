FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

FROM builder as dev
ENV NODE_ENV=developer
CMD ["npm", "run", "dev"]

FROM builder as prod
ENV NODE_ENV=production
RUN npm install --production
RUN npm run build
CMD ["npm", "start"]
