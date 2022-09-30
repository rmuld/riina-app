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
font-weight: 400;
font-size: 1rem;
color: black;
`;

const DropDownList = styled("ul")`
padding: 0;
margin: 0;
padding-left: 1em;
background: #ffffff;
color: black;
font-size: 1rem;
font-weight: 400;
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

export function SubDepartment() {
    const [isSubDepartmentOpen, setIsSubDepartmentOpen] = useState(false);
    const [selectedSubDepartment, setSelectedSubDepartment] = useState(null);
    const subDepartmentList = ["Rakendusinformaatika", "Audiovisuaalne meedia"];

    const toggling = () => setIsSubDepartmentOpen(!isSubDepartmentOpen);
    const onDepartmentClicked = value => () => {
        setSelectedSubDepartment(value);
        setIsSubDepartmentOpen(false);
    };

  return (
    <DropDownContainer>
        <DropDownHeader onClick={toggling}>{selectedSubDepartment || "Vali osakond"}</DropDownHeader>
        {isSubDepartmentOpen && ( 
        <DropDownListContainer>
            <DropDownList>
            {subDepartmentList.map(department => (
            <ListItem onClick={onDepartmentClicked(department)} key={Math.random()}>{ department}</ListItem>
            ))}          
            </DropDownList>
        </DropDownListContainer>
        )}
    </DropDownContainer>
    )
};