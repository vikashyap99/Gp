import React,{Component} from 'react';
import './assets/css/style.css'

import Aos from 'aos'

import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

class App extends Component {


  render(){
    Aos.init()
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  
}
 
export default App;
