console.log('App.js is runing');


var app= {
    title : 'Indessin App',
    subtitle :'App Module list'
}

var template = (
<div>
    <h1>{app.title} </h1> 
    <h3>{app.subtitle}</h3>
    <ol>
        <li>Add note</li>
        <li>Remove note</li>
    </ol>
</div>);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);