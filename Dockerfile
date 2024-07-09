FROM node:20-slim AS build
WORKDIR /frontend
COPY . ./
RUN yarn install
RUN yarn build
