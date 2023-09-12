import React from "react";
import Header from "./components/Header";
import Subscription from "./components/Subscription";
import About from "./components/About";
import aboutimage from "./images/about.png"
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
import aboutimage1 from "./images/download.png"
import RemedyForm from "./components/RemedyForm";
function App() {
  return (
    <div className="App">
      <Header/>
      <Subscription/>
      <RemedyForm/>
      <About image={aboutimage} title='Comes with all you need for daily life' button ='Get the medicine'/>
      <Presentation/>
      <About image={aboutimage1} title='Subscribe for more benefits' button ='check medicines'/>
     <Contact/>
     
    </div>
  );
}

export default App;