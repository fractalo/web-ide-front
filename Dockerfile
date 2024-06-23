FROM krmp-d2hub-idock.9rum.cc/goorm/node:16
WORKDIR /usr/src/app
COPY goorm_cookie/ ./
RUN npm ci

# skip tsc checking
RUN npx vite build

RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "dist"]
