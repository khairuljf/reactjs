
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
    WhatFunc(){
        alert('What shoud I do?')
    };
    render(){
        return <button  onClick={this.WhatFunc}>What Shoud I do?</button>
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
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
    render(){
        return (
            <div>
                AddOption component here
            </div>
        )
    }
}



ReactDOM.render(<IndesionApp />, document.getElementById('app'))