import Weather from "./Weather.js"
import "./App.css"
function App() {
  return (
    <div className="App">
      <div className='contanier'>
        <Weather defaultCity="New york"/>
      <p> This project is coded by <a href="https://jolly-froyo-f31260.netlify.app/" target="_blank" rel="noreferrer" title="link to profile">Gugulethu Mdlui</a>and is  <a href='https://github.com/GMDLULI/react-weather-app' rel="noreferrer" target="_blank" title="link to github" >Open sourced on Github</a></p>
      </div>
     
    </div>
  );
}

export default App;
