FROM node:24-bullseye as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build-all

FROM node:24-bullseye-slim

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package*.json ./

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/apps/ms-auth/main.js"]
