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

var counter = 0;

function addOne() {
    counter++;
    renderCounterApp();
}
function minusOne() {
    counter--;
    renderCounterApp();
}
function reset() {
    counter = 0;
    renderCounterApp();
}

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {

    var templatetwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            counter
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templatetwo, appRoot);
};

renderCounterApp();
