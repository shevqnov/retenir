FROM node:18-alpine
WORKDIR /app
COPY api .
RUN npm install --omit=dev
CMD ["node", "main.js"]
EXPOSE ${NODE_PORT}