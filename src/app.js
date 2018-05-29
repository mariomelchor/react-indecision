class IndecisionApp extends React.Component {

  render() {

    const title = 'Indecision';
    const subtitle = 'Put your life in the hads of a computer';
    const options = ['Thing One', 'Thing Two', 'Thing Three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  
  render() {

    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  render() {
    
    return (
      <div>
        { this.props.options.length }

        { this.props.options.map( option => <Option key={option} optionText={option} />)
        }
        
      </div>
    )
  }
}

class Option extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {

  render() {
    return (
      <div>
        <form>
          <input type="text" name="add_option" /><button type="Submit">Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') )