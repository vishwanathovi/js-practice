import React, {
  Component
} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {  
    return ( <div className = "App">
                <h4>Hello, This is a React starter pack with below setup. [Change it as per requirement]</h4>
                <li>Project name: my-app </li>
                <li>CSS: Skeliton & UIkit already included</li>
                <li>CSS Other: Montserrat font & meyer CSS reset</li>
              </div>
    );
  }
}

export default App;