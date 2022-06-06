FROM node:16-alpine
WORKDIR /test-genius
ENV PATH /test-genius/node_modules/.bin:$PATH
COPY . .
CMD ["npm", "start"]