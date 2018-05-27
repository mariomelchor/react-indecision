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

const onMakeDecision = () => {
  const randomNumber = Math.floor(Math.random( ) * app.options.length);

  const option = app.options[randomNumber];

  alert(option);
}

const appRoot = document.getElementById('app');
const numbers = [ 55, 101, 10001 ];

const renderTemplate = () => {

  // JSX
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle ? <p>{ app.subtitle}</p> : ''}
      { options(app.options)  }
      <button disabled={ app.options.length === 0 } onClick={onMakeDecision}>What Should I Do?</button>
      <button onClick={removeAll}>Remove all</button>

      <ol>
        { 
          app.options.map( option => 
          <li key={option}>{ option } </li>
          )
        }
      </ol>

      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );
  
  ReactDOM.render( template, appRoot);

}

renderTemplate();