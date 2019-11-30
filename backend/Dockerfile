FROM ubuntu:18.04
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y nginx
COPY /nginx_config /etc/nginx/sites-available/
RUN apt-get install php7.2 php7.2-fpm php7.2-cli php7.2-curl php7.2-mysql php7.2-curl php7.2-gd php7.2-mbstring php-pear php7.2-zip -y
EXPOSE 80
CMD service php7.2-fpm start && nginx -g 'daemon off;'