FROM node:22-alpine
WORKDIR /app
RUN npm install -g bun
COPY package.json bun.lock ./
RUN bun install
COPY . .
ENV DATABASE_URL="postgresql://postgres:postgres@localhost:5432/database"
RUN bun run db:generate
RUN bun run lancer
EXPOSE 3000
CMD ["bun", "run" ,"start"]