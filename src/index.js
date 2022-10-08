import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi() {
  return (
    <div className='main'>
      <div className='header'>
        <h2>Uzair Malik</h2>
        <h3>Developer</h3>
      </div>
      <div className='content'>
        <h3 className='summary'>Summary</h3>
        <p>
          A Passionate Web Developer in frontend web development. Experienced
          with all stages of development cycle for dynamic web projects.
          Well-versed in numerous programming languages including Html5, Css
          JavaScript.
        </p>
        <h3 className='education'>Education</h3>
        <ul>
          <li>Bachelors in Software Engineering</li>
          <li>Intermediate in Pre Engineering</li>
          <li>Matric in Computer Science </li>
        </ul>
        <h3 className='lang'>Languages</h3>
        <ul>
          <li>Html 5</li>
          <li>Css</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <h3 className='social'>Social</h3>
        <span className='soc'>Email : uzairmalik2329@gmail.com</span>
        <span className='soc'>Phone No : 03092841742</span>
        <span className='soc'>Linkedin : Muhammad Fahad</span>
        <span className='soc'>GitHub : UzairHumble.git</span>
        <h3 className='experience'>Experience</h3>
        <h4>Fresh No Such Experience</h4>
      </div>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector('#root'));
