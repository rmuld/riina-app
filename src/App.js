import React, {useState} from 'react';
import './App.css';

function App() {
  const studentList = ["Kati Karu", "Mati Taru"];
  const instructorList = ["Jaagup Kippar", "Martti Raavel"]
  const departmentList = ["Haapsalu Kolledž", "Balti Filmi ja Meedia Kool"];
  const subDepartmentList = ["rakendusinformaatika", "audiovisuaalne meedia"];

  function addStudent() {
    
  }

  function removeStudent() {
      
  }


  return (
    // <div className="App-header">
      <div className='title-header'>
        <h1>TALLINNA ÜLIKOOL</h1>

      <div className="dropdown">
      <button className="dropbtn">Vali allüksus</button>
        {departmentList.length
        ? 
          <div className="dropdown-content">
            {departmentList.map((item) => {
              <h2 key={item.department}>{ item.department}</h2>
            })}
            </div>
          : <h2>ALLÜKSUS PUUDUB</h2>}
      </div>
      <div className='sub-department'>
        <p>Rakendusinformaatika</p>
      </div>

      <div className='thesis-title'>
            <p>Riina Muld</p>
        <h2>my thesis title</h2>
        <p>Diplomitöö</p>
      </div>

      <div className='thesis-instructor'>
          <p>Juhendaja: Jaagup Kippar</p> 
      </div>
      
      <div className='thesis-footer'>
            <p>Haapsalu 2022</p>
      </div>

    </div>
    // </div>

  );
}

export default App;
