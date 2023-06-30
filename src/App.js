import logo from './logo.svg';
import './App.css';
import pp from './behlul.jpeg'
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
<p className='Aciklama'>Behlulcan is a passionate and skilled developer with 1 years of experience, specializing in .Net Core, ASP.NET, Blazor, React, React-Native and Python. He excels in crafting innovative and user-friendly solutions, delivering high-quality code for diverse projects. With a creative mindset and an eye for detail, he combines technical expertise with design principles to create seamless user experiences.</p>
</article>
<p style={{fontSize:10}}>See social media accounts for more</p>
</div>

<SocialMedia/>

      </div>
      
    </div>
  );
}


export default App;
