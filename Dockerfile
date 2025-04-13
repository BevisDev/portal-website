FROM node:20-alpine AS base

FROM base AS builder
WORKDIR /builder

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /builder/public ./public
COPY --from=builder /builder/package.json ./
COPY --from=builder /builder/package-lock.json ./
COPY --from=builder /builder/.next ./.next

RUN npm ci --omit=dev && \
    npm cache clean --force && \
    rm -rf .next/cache node_modules/.cache

EXPOSE 3000


CMD ["npm", "start"]