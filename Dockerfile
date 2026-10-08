FROM node:22-alpine

WORKDIR /app

RUN npm install -g bun

COPY package.json bun.lock ./

RUN bun install

COPY . .

RUN bun run db:generate

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]