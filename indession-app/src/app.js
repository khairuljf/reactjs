console.log('App.js is runing');

var app= {
    title : 'Indessin App',
    subtitle :'App Module list',
    options:[]
}

const onSubmitForm  = (e) =>{
    e.preventDefault()
    const option = e.target.elements.option.value


    if(option){
        app.options.push(option)
         e.target.elements.option.value = ''
         render()
    }

}

const resetList = () =>{
    console.log('Reseted')
    app.options = []
    render()
}


var appRoot = document.getElementById('app');


const render = () =>{

    const template = (
        <div>
            <h1>{app.title} </h1> 
            <h3>{app.subtitle}</h3>
            <p>{app.options.length}</p>

            <button onClick={resetList}>Reset List</button>
        
            <ol>
               {
                app.options.map((list)=> <li key={list}>{list.toUpperCase()}</li>)
               }
            </ol>

            <form onSubmit={onSubmitForm}> 
            <input type="text" name="option"  />
            <button>Add Option</button>
            </form>
        </div>);

        ReactDOM.render(template, appRoot);
}

render()








