'use strict';

console.log('App.js is runing');

var app = {
    title: 'Indessin App',
    subtitle: 'App Module list'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title,
        ' '
    ),
    React.createElement(
        'h3',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Add note'
        ),
        React.createElement(
            'li',
            null,
            'Remove note'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
