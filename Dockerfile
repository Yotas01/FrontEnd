FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/FrontEnd /usr/share/nginx/html
EXPOSE 8080