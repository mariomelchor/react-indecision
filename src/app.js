console.log('Running')

const app = {
  title: 'Indecision APP',
  subtitle: 'Put your life in the hands of the computer',
  options: []
}

function options(arr) {
  if( arr.length > 0 ) {
    return <p>Here are your Options: {arr.join(', ')}</p>
  } else {
    return <p>No Options</p>
  }
}

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if( option ) {
    app.options.push(option);

    e.target.elements.option.value = '';
    renderTemplate();
  }
}

const removeAll = () => {
  app.options = [];
  renderTemplate();
}

const appRoot = document.getElementById('app');

const renderTemplate = () => {

  // JSX
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle ? <p>{ app.subtitle}</p> : ''}
      { options(app.options)  }
      <p>{ app.options.length }</p>

      <button onClick={removeAll}>Remove all</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render( template, appRoot);

}

renderTemplate();