let mix = require('laravel-mix');

mix.js('resources/app.js', 'static/app.js')
    .sass('resources/app.scss', 'static/app.css');
