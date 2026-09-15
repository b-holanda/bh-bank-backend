FROM node:24-bullseye as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install --save-dev @rspack/core webpack-node-externals tsconfig-paths-webpack-plugin

COPY . .

RUN npm run build-all

FROM node:24-bullseye-slim

WORKDIR /app

COPY --from=builder /app/package*.json ./

COPY --from=builder /app/dist ./dist

RUN npm ci --only=production

EXPOSE 3000

CMD ["node", "dist/apps/ms-auth/main.js"]
