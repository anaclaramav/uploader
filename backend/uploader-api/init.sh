#!/bin/bash
service php7.2-fpm start
service mysql start
mysql -u root < /var/www/html/uploader-api/db.txt
cd /var/www/html/uploader-api/
php artisan migrate
nginx -g 'daemon off;'