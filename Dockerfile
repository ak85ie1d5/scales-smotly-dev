FROM node:14.20.0
WORKDIR /theme
RUN npm -g config set user root
RUN npm install -g @bigcommerce/stencil-cli
EXPOSE 3000
