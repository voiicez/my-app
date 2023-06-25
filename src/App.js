import logo from './logo.svg';
import './App.css';
import pp from './spiderman.png'
import Facebook from './Components/SocialMedia';

import React from 'react';
import SocialMedia from './Components/SocialMedia';

function App() {
const date=new Date();
let year = date.getFullYear();


let currentDate = `${year-1998} Years Old`;

  return (
    <div className="App">
      <div className='App-header'>
<div className='Card'>
  <div className='YearsDiv'>
  <p className='Years'>{currentDate}</p></div>
  <img style={{marginTop:42}} width={100} height={100} src={pp}></img>
<p>Who is Behlulcan?</p>
<article>
<p className='Aciklama'>Behlulcan is a very passionate alligator expert. 
Born in 1992 and never felt that way again. 
His hobbies are useless. 
His plans are not so useless. 
Also flew with Turkish Airlines almost 4 times.
Favourite Super Hero : Batman.</p>
</article>
<p style={{fontSize:10}}>See social media accounts for more</p>
</div>

<SocialMedia/>

      </div>
      
    </div>
  );
}


export default App;
