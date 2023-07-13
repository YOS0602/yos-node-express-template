FROM node:18

# make application directory
WORKDIR /usr/app

# install dependencies
COPY package*.json ./
RUN npm install

# bundles application sources
COPY . .

# Transpile typescript into javascript
RUN npm run build
# omit dev, optional, peer dependencies in node_modules
RUN npm install --omit dev --omit optional --omit peer

EXPOSE 3000

CMD [ "npm", "start" ]
