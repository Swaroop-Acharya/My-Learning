// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Bag from './components/Bag';
//Fuctional component
function Title(){
  let title="This is our main title";
  return (<h1>{title}</h1>)
}


function Example(props){
  return (
  <div>
    {props.children}
  </div>
  );

}

//Root component
function App() {
  return (
  
  <>
    <Title/>
    <Header/>
    <Display name="Swaroop"/>

    {/*props.children basic example */}

    <Example children={<h1>This is italian </h1>}/> 

    <Example>
        <i>Hello there this children prop speaking</i>
    </Example>

    {/* Example 2 */}


    <Bag>
      <Apple>
          quantity="50",country="India"
      </Apple>
      <Orange>
          quantity="4",country="UK"
      </Orange>
    </Bag>
  
    


  
  </>

  
  );
  
};

export default App;
