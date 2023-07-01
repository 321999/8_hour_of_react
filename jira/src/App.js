import logo from './logo.svg';
import './App.css';
import Boards from './components/slides/board';
function App() {
  return (
<div>
  <div className="application">
    {/* appicaication ka navigation bar later this will be done using bootstrap */}
    <div className="application_Navbar">
       <h1>JIRA</h1>
    </div>

{/* boa */}
<div className="application_router" >
  {/* style={{border:"1px solid red"}} */}
{/* defining the boards,there can be many boards and this is depends on the user  */}
  <div className="application_boards">

<Boards/>
<Boards/>

<Boards/>

<Boards/>
<Boards/>
<Boards/>
<Boards/>
<Boards/>

  </div>

</div>

  </div>

  hello everyooe
</div>




    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    //   hello everyon  
    // </div>
  );
}

export default App;
