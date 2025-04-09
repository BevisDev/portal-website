FROM node:18-alpine AS builder

WORKDIR /builder
COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV NODE_ENV=production

RUN npm install --only=production

CMD ["npm", "start"]