import '../App.css'
import React, { useState } from 'react';

export default function Projeler(){
    const handleClick =()=>{
        window.open("https://behlulcv1-001-site1.ftempurl.com",'_blank')
      }
const ikonSize=40
    return(
        <section onClick={handleClick} className='Projeler'>
       
        <text className='Text'>Öğrenci Yönetim Bilgi Sistemi Projesi</text>
        </section>

        

    )
}