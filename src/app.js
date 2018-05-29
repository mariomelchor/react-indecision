class IndecisionApp extends React.Component {

  render() {
    return (
      <div>
        <h1>Title</h1>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  
  render() {
    return <p>This is from Header</p>;
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
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  
  render() {
    return (
      <div>
        This is a single Option
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