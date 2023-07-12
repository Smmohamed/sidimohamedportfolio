// Projet1.js
import React from 'react';
import './Projets.css';
import pg1 from '../../assets/application-gestion.png'
import pg2 from '../../assets/images.png'
import v1 from '../../assets/Techprofree.png'
import vv1 from '../../assets/747f899e-c86e-4b11-be08-148f9f4d3b2d.jpg'
import vv2 from '../../assets/33c3d5a5-c15e-44df-ab16-1ed21f71256a.jpg'
import vv3 from '../../assets/543fecc5-131f-4c63-84b9-1e69990f8a39.jpg'
const Projets = () => {
  return (
<div className='rows'>

    <div className="projet1">
      <img  src={pg1} />
      <h2>Application-management</h2>
      <p>The personnel management application that we are going to develop in C# is designed to facilitate the management of information relating to an organization's employees. It will store and manage employee details such as contact information,
         credentials, work information, and time off.</p>
      <h2>Technologies utilisées :</h2>
      <ul>
        <li>C#</li>
        <li>SQl Server</li>   
      </ul>
      <h4>View :</h4>
<div className='views'>

  <img src={v1} style={{width:450}}/>
 

</div>
    </div>



    <div className="projet1">
      <img  src={pg2} />
      <h2> calculator</h2>
      <p>To create a desktop calculator using C#, you can follow these steps:

Set up the User Interface (UI): Create a Windows Forms Application project in Visual Studio or any other C# development environment. Design the UI by adding buttons for numbers (0-9), operators (+, -, *, /), and other functionalities such as decimal point, clear, and equals.

Handle Button Click Events: Write event handlers for button click events. For example, when a number button is clicked, the corresponding number should be displayed in the calculator's display area. Similarly, when an operator button is clicked, appropriate calculations should be performed.
 performing various arithmetic operations. Debug and refine your code as needed.</p>
      <h2>Technologies utilisées :</h2>
      <ul>
        <li>C#</li>
        <li>WPF</li>
        <li>xamel</li>
 
      </ul>
      <h4>View :</h4>
<div className='views'>

  <img src={vv1}/>
  <img src={vv2}/>
  <img src={vv3}/>


</div>

    </div>





    
    
    </div>
  );
}

export default Projets;
