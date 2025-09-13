# Dockerfile.dev
FROM node:20
WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY prisma ./prisma/

RUN npm ci
RUN npx prisma generate --schema=./prisma/schema.prisma

COPY src ./src

EXPOSE 3000
CMD ["npm","run","dev"]