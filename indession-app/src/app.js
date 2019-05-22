
class IndesionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';
        const options = ['one', 'two', 'three'];

        return (
            <div>
                <Header title ={title} subtitle = {subtitle} />
                <Action />
                <Options   option={options} />
                <AddOption option={options}/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    WhatFunc(){
        alert('What shoud I do?')
    };
   
    render(){
        return (
            <div>
            <button  onClick={this.WhatFunc}>What Shoud I do?</button>
            
            </div>
        ) 
    }
}

class Options extends React.Component{

    constructor(props){
        super(props)
        this.removeOptions = this.removeOptions.bind(this)
    }


    removeOptions(){
        console.log(this.props.option)
    }
  
    render(){
        return(
            <div>
            <button onClick={this.removeOptions}>Remove All</button>
           
            {
                this.props.option.map((option)=><Option key={option} optionText={option} />)
            }
          
            </div>

        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
              Option : {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component{
   

    addFormSubmit(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()

        if(option){
            alert(option);
            e.target.elements.option.value = ''
        }

    }

    render(){
        return (
            <div>
              <form onSubmit={this.addFormSubmit}>
                <input type="text" name="option" />
                <button type="submit"> Add</button>
              </form>
            </div>
        )
    }
}



ReactDOM.render(<IndesionApp />, document.getElementById('app'))