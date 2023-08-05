FROM node:20.5-alpine3.18 as base

ENV NODE_ENV development

WORKDIR /client

# Add configs to base
COPY ./client/package.json /client
COPY ./client/tsconfig.json /client
COPY ./client/tsconfig.node.json /client
COPY ./client/vite.config.ts /client

RUN npm install