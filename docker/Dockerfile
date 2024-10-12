FROM node:20-slim
WORKDIR /frontend
COPY ./package.json ./yarn.lock ./.yarnrc.yml ./
COPY ./.yarn/releases/yarn-*.cjs  ./.yarn/releases/
RUN yarn install && yarn cache clean
COPY ./. ./
COPY ./docker/entrypoint.sh ./
RUN yarn build
ENTRYPOINT [ "./entrypoint.sh" ]