sudo apt-get install php7.2 php7.2-cli php7.2-common php7.2-zip
# php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
mkdir -p bin
php composer-setup.php --install-dir=bin --filename=composer
php bin/composer require "laravel/lumen-installer"
