FROM node:20-slim AS build
WORKDIR /frontend
COPY . ./
RUN yarn install \
&& yarn cache clean \
&& yarn build
