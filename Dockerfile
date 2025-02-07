FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app/
RUN npm run build
RUN cp -r .next/static .next/standalone/.next/

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./

EXPOSE 3000

ENTRYPOINT [ "node","./server.js" ]