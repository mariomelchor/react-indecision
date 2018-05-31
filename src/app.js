class IndecisionApp extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      options: props.options,
    }

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => optionToRemove !== option ) 
    }));
  }

  handlePick() {
    const randomNumber = Math.floor(Math.random( ) * this.state.options.length);
    const option = this.state.options[randomNumber];
    alert(option);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter Valid Value to add item';
    } else if ( this.state.options.indexOf(option) > -1 ) {
      return 'This option already exist';
    } 

    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  render() {

    const title = 'Indecision';
    const subtitle = 'Put your life in the hads of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) =>{
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        What should I do?</button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
      { props.options.length }

      { props.options.map( option => (
        <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
      ))
      }
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}>Remove</button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
   
    const value = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(value);

    this.setState(() => ({ error })); 
  }

  render() {
    return (
      <div>
        { this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" /><button type="Submit">Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render( <IndecisionApp />, document.getElementById('app') )