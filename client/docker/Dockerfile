FROM eshop_client_base_img as base

WORKDIR /client

COPY ./client .

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]