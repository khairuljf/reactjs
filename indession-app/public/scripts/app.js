'use strict';

console.log('App.js is runing');

var app = {
    title: 'Indessin App',
    subtitle: 'App Module list',
    options: []
};

var onSubmitForm = function onSubmitForm(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var resetList = function resetList() {
    console.log('Reseted');
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');

var render = function render() {

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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: resetList },
            'Reset List'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (list) {
                return React.createElement(
                    'li',
                    { key: list },
                    list.toUpperCase()
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitForm },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
