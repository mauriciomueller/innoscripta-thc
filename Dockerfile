FROM node:22.3.0-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "pnpm run dev"]