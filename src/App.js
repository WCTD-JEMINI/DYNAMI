import React, { Component } from 'react';
import logo from './Assets/logo.png';
import './App.css';
import NavBar from './Components/NavBar';
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Resources from "./Pages/Resources";

const pages = [
  {name: 'About Us', component: AboutUs },
  {name: 'Resources', component: Resources },
  {name: 'Contact Us', component: ContactUs },
];


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      page: AboutUs
    };

    this.navigate = this.navigate.bind(this);
  }
  navigate(page) {
    this.setState({page});
  }
  render() {
    const Page = this.state.page;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dynami</h1>
        </header>
        <NavBar pages={pages} onChange={this.navigate}/>
        <Page />
        <footer>
          <div>
            <a href = "https://twitter.com/ProjectDynami?lang=en"> 
            <p> @ProjectDynami on Twitter</p>
            </a>
            <a href = "https://www.facebook.com/Dynami-Project-1002872376531590/">
            <p> "Project Dynami" on Facebook</p>
            </a>
           </div>
            <div>
              <p>&copy; 2018 </p>
            </div>
              <div>
            <img src={logo} className="footer-logo" alt="logo" />
             </div>
        </footer>
      </div> 
    );
  }
}

export default App;
