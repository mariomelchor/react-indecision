let visibility = false

const toggleDiv = () => { 
  visibility = !visibility;
  RenderToggle();
}

const RenderToggle = () => {

  const renderTemplate = (
    <div>
      <h1>Visibility Toggle</h1>

      <button onClick={toggleDiv}>{ visibility ? 'Hide' : 'Show' }</button>

      {
        visibility && (
        
        <div><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placeratilisis luctus, metus</p></div>
        
        )

      }

    </div>
  )

  const appRoot = document.getElementById('app')
  ReactDOM.render( renderTemplate, appRoot )
  
}

RenderToggle();