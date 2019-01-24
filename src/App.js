import React, { Component } from 'react';
import {Button} from 'antd';
import AppCss from './App.scss';
class App extends Component {


  componentDidMount(){
    console.log('scss:',AppCss);
  }

  render() {
    return (
      <div>
        <h3 className={AppCss.title}>ant design</h3>
        <Button type="primary">ant design</Button>
      </div>
    );
  }
}

export default App;
