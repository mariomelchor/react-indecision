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

var onMakeDecision = function onMakeDecision() {
  var randomNumber = Math.floor(Math.random() * app.options.length);

  var option = app.options[randomNumber];

  alert(option);
};

var appRoot = document.getElementById('app');
var numbers = [55, 101, 10001];

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
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What Should I Do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option,
          ' '
        );
      })
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
