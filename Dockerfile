FROM public.ecr.aws/docker/library/node:hydrogen-alpine3.20

ENV WORKING_DIR=/dist
WORKDIR $WORKING_DIR

COPY ./build $WORKING_DIR
COPY index.ts $WORKING_DIR
COPY package.json $WORKING_DIR
COPY tsconfig.json $WORKING_DIR

## install and build
RUN npm i ts-node typescript
RUN npm run install-core

## Expose port 8080 from container
EXPOSE 8080

CMD ["npx", "ts-node", "index.ts"]