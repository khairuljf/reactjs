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

let counter = 0

function addOne(){
    counter++;
    renderCounterApp()
}
function minusOne(){
    counter--;
    renderCounterApp()
}
function reset(){
    counter=0;
    renderCounterApp()
}

var appRoot = document.getElementById('app');

const renderCounterApp = ()=>{

    var templatetwo = (
        <div>
            <h1>Count: {counter}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    
    );

    ReactDOM.render(templatetwo, appRoot);

}

renderCounterApp()






