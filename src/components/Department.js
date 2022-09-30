import React, {useState} from 'react';
import styled from 'styled-components';

const DropDownContainer = styled("div")`
width: 10.5em;
margin: 0 auto;
`;

const DropDownListContainer = styled("div")`
margin-bottom: 0.8em;
padding: 0.4em 2em 0.4em 1em;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);  
background: #ffffff;
`;

const DropDownHeader = styled("div")`
font-weight: 500;
font-size: 1.3rem;
color: black;
`;

const DropDownList = styled("ul")`
padding: 0;
margin: 0;
padding-left: 1em;
background: #ffffff;
color: black;
font-size: 1.3rem;
font-weight: 500;
&:first-child {
  padding-top: 0.8em;
}
`;

const ListItem = styled("li")`
list-style: none;
margin-bottom: 0.8em;
&: hover {
  background: #f1f1f1;
}
`;

export function Department() {
    const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const departmentList = ["Haapsalu Kolledž", "Balti Filmi ja Meedia Kool"];

    const toggling = () => setIsDepartmentOpen(!isDepartmentOpen);
    const onDepartmentClicked = value => () => {
        setSelectedDepartment(value);
        setIsDepartmentOpen(false);
    };

  return (
    <DropDownContainer>
        <DropDownHeader onClick={toggling}>{selectedDepartment || "Vali osakond"}</DropDownHeader>
        {isDepartmentOpen && ( 
        <DropDownListContainer>
            <DropDownList>
            {departmentList.map(department => (
            <ListItem onClick={onDepartmentClicked(department)} key={Math.random()}>{ department}</ListItem>
            ))}          
            </DropDownList>
        </DropDownListContainer>
        )}
    </DropDownContainer>
    )
};