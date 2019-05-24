
class IndesionApp extends React.Component{

    constructor(props){
        super(props)
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handleWhatShould=this.handleWhatShould.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        
        this.state = {
            options:[]
        };
    }


    handleDeleteOptions(){
        this.setState(()=>({options:[]}))
        console.log('Deleted')
    }

    handleDeleteOption(optionToRemove){
       this.setState((prevState)=>({
        options:prevState.options.filter((single_option)=> optionToRemove !== single_option)
    }))
    }

    handleWhatShould(){
       const randomNumber =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber]
       alert(option)
    }

    handleAddOption(option){

        if(!option){
            return 'Enter a valid value for add'
        }else if(this.state.options.indexOf(option)>-1){
            return 'The option already exists'
        }

        this.setState((prevState)=>({ 
            options:prevState.options.concat([option])
        }));
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
                <Options  
                 options={this.state.options} 
                 deleteOptions={this.handleDeleteOptions}
                 handleDeleteOption = {this.handleDeleteOption}
                  />
                <AddOption addOption ={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) =>(
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
)

const Action = (props) =>{
    return (
        <div>
        <button 
         onClick={props.whatShoud}
         disabled={!props.hasOptions}
         >
        What Shoud I do?</button>
        </div>
    ) 
}

const Options =(props)=>{

    return(
        <div>
        <button onClick={props.deleteOptions}>Remove All</button>
        {
            props.options.map((option)=>(
                <Option 
                key={option} 
                optionText={option} 
                handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        </div>
    )
} 

const Option = (props) =>{
    return(
        <div>
          Option : {props.optionText}
          <button 
          onClick={
              (e)=>{ props.handleDeleteOption(props.optionText) }
            } >Remove</button>
        </div>
    )
}

class AddOption extends React.Component{
   
    constructor(props){
            super(props)
            this.addFormSubmit = this.addFormSubmit.bind(this)
            this.state={
                error: undefined
            }
    }
    addFormSubmit(e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        e.target.elements.option.value=''
        const error  = this.props.addOption(option)
    
        this.setState(()=>({error}))

    }

    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit={this.addFormSubmit}>
                <input type="text" name="option" />
                <button type="submit"> Add</button>
              </form>
            </div>
        )
    }
}



ReactDOM.render(<IndesionApp />, document.getElementById('app'))