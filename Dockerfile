From node:6-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
ENV PORT 3700
EXPOSE ${PORT}
