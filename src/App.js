import React, { Component } from 'react'
import Form from './components/Form';
import CardList from './components/CardList';
//import Button from './components/Button';
// import React, { useState } from 'react';

// const testData = [
//   {
//     name: 'Dan Abramov',
//     avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
//     company: '@facebook ',
//   },
//   {
//     name: 'Sophie ',
//     avatar_url: 'https://avatars.githubusercontent.com/u/6820?v=4',
//     company: '@facebook ',
//   },
//   {
//     name: 'Dan asa',
//     avatar_url: 'https://avatars.githubusercontent.com/u/63648?v=4',
//     company: '@facebook ',
//   },
// 	 {
//     name: 'alice',
//     avatar_url: 'https://avatars.githubusercontent.com/u/6364?v=4',
//     company: '@facebook ',
//   },
// ];
export default class App extends Component {
  state={
    profiles:[ ],
  };

  addNewProfile=(profileData)=>{
    this.setState(prevState=>({
      profiles:[...prevState.profiles,profileData]
    }))
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}


{/*function App() {
  // const [counter, setCounter] = useState(0);

  // const handleCouter = () => setCounter(counter + 1);

  // const handleCount = () => setCounter(counter - 1);

  // counter < 0 ? setCounter(0) : setCounter(counter - 1);
  // setCounter(counter < 0 ? 0 : counter - 1);
  // if (counter < 0) {
  //   //return;
  //   setCounter(0);
  // } else {
  //   setCounter(counter - 1);
  // }

  return (
    <div className='App'>
   <Form />
    
      {/*<span>Counter: {counter}</span>
      <Button title='+' handleClick={() => handleCouter()} />
      <Button title='-' handleClick={() => counter > 0 && handleCount()} /> 
    </div>
  );
}
*/}


