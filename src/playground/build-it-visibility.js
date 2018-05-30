class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visibility: false
    }

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() { 
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })

  }

  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>

        <button onClick={this.handleToggleVisibility}>{ this.state.visibility ? 'Hide' : 'Show'}</button>
        {
          this.state.visibility && (
          <div><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placeratilisis luctus, metus</p></div>
          )
        }
      </div>
    )
  }

}

ReactDOM.render( <VisibilityToggle />, document.getElementById('app') );