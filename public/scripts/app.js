'use strict';

console.log('Running');

var app = {
  title: 'Indecision APP',
  subtitle: 'Put your life in the hands of the computer',
  options: []
};

function options(arr) {
  if (arr.length > 0) {
    return React.createElement(
      'p',
      null,
      'Here are your Options: ',
      arr.join(', ')
    );
  } else {
    return React.createElement(
      'p',
      null,
      'No Options'
    );
  }
}

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);

    e.target.elements.option.value = '';
    renderTemplate();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderTemplate();
};

var appRoot = document.getElementById('app');

var renderTemplate = function renderTemplate() {

  // JSX
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle ? React.createElement(
      'p',
      null,
      app.subtitle
    ) : '',
    options(app.options),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove all'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
