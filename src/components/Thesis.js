import React from 'react';
import { Department } from './Department';
import { SubDepartment } from './SubDepartment';
import styled from 'styled-components';

const ThesisTitlePage = styled("div")`
  text-align: center;
  margin-top: 40mm;
`;

const ThesisTitle = styled("div")`
padding-top: 60mm;
& h2 {
  text-transform: uppercase;
}
`;

const ThesisInstructor = styled("div")`
  text-align: right;
`;

const ThesisFooter = styled("div")`
  padding-top: 100mm;
`;

const Thesis = () => {
  
    return (
      <ThesisTitlePage>
        <h1>TALLINNA ÜLIKOOL</h1>

      <Department />
      <SubDepartment />

      <ThesisTitle>
        <p>Riina Muld</p>
        <h2>my thesis title</h2>
        <p>Diplomitöö</p>
      </ThesisTitle>

      <ThesisInstructor>
          <p>Juhendaja: Jaagup Kippar</p> 
      </ThesisInstructor>
      
      <ThesisFooter>
            <p>Haapsalu 2022</p>
      </ThesisFooter>

    </ThesisTitlePage>

  );
}

export default Thesis;
