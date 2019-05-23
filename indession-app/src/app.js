
class IndesionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handleWhatShould=this.handleWhatShould.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        
        this.state = {
            options:['one', 'two', 'three']
        };
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            }
        })
        console.log('Deleted')
    }

    handleWhatShould(){
       const randomNumber =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber]
       alert(option)
    }

    handleAddOption(option){
        this.setState((prevState)=>{
            return {
                options:prevState.options.concat([option])
            }
        })
    }


    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer';

        return (
            <div>
                <Header title ={title} subtitle = {subtitle} />
                <Action 
                hasOptions= {this.state.options.length>0}
                whatShoud={this.handleWhatShould}
                />
                <Options   options={this.state.options}  deleteOptions={this.handleDeleteOptions} />
                <AddOption addOption ={this.handleAddOption} />
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

   
    render(){
        return (
            <div>
            <button 
             onClick={this.props.whatShoud}
             disabled={!this.props.hasOptions}
             >
            What Shoud I do?</button>
            </div>
        ) 
    }
}

class Options extends React.Component{


    render(){
        return(
            <div>
            <button onClick={this.props.deleteOptions}>Remove All</button>
            {
                this.props.options.map((option)=><Option key={option} optionText={option} />)
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
   
    constructor(props){
            super(props)
            this.addFormSubmit = this.addFormSubmit.bind(this)
    }
    addFormSubmit(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        if(option){
            this.props.addOption(option)
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