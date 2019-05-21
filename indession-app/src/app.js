
class IndesionApp extends React.Component{
    render(){
        return (
            <div>
                <Header />
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
                <h1>Indecision</h1>
                <h2>Put your life in the hands of computer</h2>
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