### /etc/hosts

`sudo nano /etc/hosts`

Add row and save
`127.0.0.1 vue.vm`

### Virtualhost (Apache and Ubuntu)

`sudo nano /etc/apache2/sites-available/vue.vm.conf`

```
<VirtualHost *:80>
    ServerName vue.vm
    ServerAlias www.vue.vm
    DocumentRoot /var/www/html/vuejs
    

    <Directory /var/www/html/vuejs>
        Options Indexes FollowSymLinks MultiViews
        AllowOverride All
        Order allow,deny
        allow from all
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/vuejs.vm-error.log
    CustomLog ${APACHE_LOG_DIR}/vuejs.vm-access.log combined

</VirtualHost>

```

Enable site: 

`sudo a2ensite vue.vm`

`sudo service apache2 restart`
