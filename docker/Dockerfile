FROM php:8.2.8-apache as stage

WORKDIR /var/www/html

# Add code to image
COPY ./public /var/www/html/public
COPY ./src /var/www/html/src
COPY .env.database /var/www/html
COPY ./.htaccess .
COPY ./bootstrap.php /var/www/html/bootstrap.php
COPY ./composer.json /var/www/html/composer.json
COPY ./dbinit.php /var/www/html/dbinit.php
RUN ls -aR

RUN docker-php-ext-install pdo pdo_mysql

# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer
RUN chmod +x /usr/local/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER 1

RUN composer install
RUN composer dump-autoload -o

EXPOSE 80

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
