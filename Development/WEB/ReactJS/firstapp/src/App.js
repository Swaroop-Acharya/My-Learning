// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import Apple from './components/Apple';
import Orange from './components/Orange';
import Bag from './components/Bag';

import { Es5f } from './components/EventHandling';
import { Es6f } from './components/EventHandling';
import { Fn1 } from './components/EventHandling';
import { Fn2 } from './components/EventHandling';
import ModeToggler from './components/ModeToggler';


import Promo from './components/Parent_child_dataflow/Promo';

//Hooks
//useState
import UseState from './components/Hooks/UseState';
import { Counter } from './components/Hooks/UseState';
import { ObjectData } from './components/Hooks/UseState';
import { PassFunction } from './components/Hooks/UseState';
import { PassFunctionEx } from './components/Hooks/UseState';
//useRef
import { UseRef } from './components/Hooks/UseRef';

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
  
  <><div>
      <Title />
      <Header />
      <Display name="Swaroop" />

      {/*props.children basic example */}

      <Example children={<h1>This is italian </h1>} />

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

    </div>
    <div>
      <Es5f/>
      <Es6f/>
      <Fn1/>
      <Fn2/>
    </div>

    <div>
      <ModeToggler/>
    </div>

    <div>
      <Promo/>
    </div>
      <div>
        <h1>Hooks in React</h1>
        <div>
          <h5>Use state examples</h5>
            <UseState/>
            <Counter/>
            <ObjectData/>
            <PassFunction/>
            {/* <PassFunctionEx/> */}
        </div>
        <div>
          <h5>Use Ref hook example</h5>
          <UseRef/>
        </div>
        
      </div>
      </>


  
  );
  
};

export default App;
