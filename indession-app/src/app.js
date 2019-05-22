
class IndesionApp extends React.Component{
    render(){
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of computer'

        return (
            <div>
                <Header title ={title} subtitle = {subtitle} />
                <Action />
                <Options />
                <AddOption />
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
        return <button>What Shoud I do?</button>
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
                Options component here
                <Option />
            </div>

        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                Options component Here
            </div>

        )
    }
}

class AddOption extends React.Component{
    render(){
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}



ReactDOM.render(<IndesionApp />, document.getElementById('app'))