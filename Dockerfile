FROM node:18.4.0-alpine
WORKDIR /REACT_ALURA
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]