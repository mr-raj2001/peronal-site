import React from 'react'
import LinkedInIcon from 'materials-ui/icons/Linkedin';
import EmailIcon from 'materials-ui/icons/Email';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
        <div className='about
        '>
            <h2>Hi, My name is Rishav Raj</h2>

        </div>
        <div className='prompt'>
            <p> A Btech Cse student currently studying in Lpu</p>
            <EmailIcon />
            <LinkedInIcon />
        </div>
        <div className='Skills'>
            <h1> Skills </h1>
            <ol  className='list'>
                <li className='item'>
                    <h2> Front-End</h2>
                    <span>Html,Css,Javascript,Reactjs ,Node,Angular</span>
                </li>
                <li className='item'>
                    <h2> Back-End</h2>
                    <span>Firebase,Mysql</span>
                </li>
                <li className='item'>
                    <h2> Game-Devlopment</h2>
                    <span>Blender,Unity2d,Unity3d</span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>C,C++,C#,Python,Java</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home