# Stage 1 - Builder

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

# Stage 2 - Runtime

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app /app

RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

USER appuser

EXPOSE 3000

CMD ["npm", "start"]
