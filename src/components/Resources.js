import React, { useState } from "react";

const initialStudentList = [
    { studentName: "Kati Karu", studentPersonalCode: "37722110011" },
    { studentName: "Mati Taru", studentPersonalCode: "37722112200"}
];

const initialInstructorList = [
    { instructorName: "Jaagup Kippar", instructorPersonalCode: "37722110011" },
    { instructorName: "Martti Raavel", instructorPersonalCode: "37722112200" }
];

const Resources = () => {
    const [studentsList, setStudentsList] = useState(initialStudentList);
    const [studentName, setStudentName] = useState("nimetu");
    const [studentPersonalCode, setStudentPersonalCode] = useState();
    // const [instructorsList, setInstructorsList] = useState(initialInstructorList);
    // const [instructorName, setInstructorName] = useState("nimetu");
    // const [instructorPersonalCode, setInstructorPersonalCode] = useState();

    function addStudent() {
        let vaba = true;
        for (let i=0; i < studentsList.length; i++){
            if (studentsList[i].studentName === studentName) { vaba = false;  alert("Nimi juba olemas")}
        }
        if(vaba){setStudentsList(studentsList.concat({studentName:studentName,  studentPersonalCode: studentPersonalCode}))}
         
    }

    function deleteStudent(studentToDelete) {
        if (window.confirm(`Kas soovid kustutada kasutaja ${studentToDelete}?`)) {
            setStudentsList(studentsList.filter((k1) => studentToDelete!==k1.studentName))
        }
    }

return (
    <div>
        <h3>Lisa õpilasi</h3>
        <div>
            <p>Lisa õpilane</p>
            <label htmlFor='studentName'>Õppuri täisnimi: </label>
            <input type="text" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
            <label htmlFor='studentPersonalCode'>Õppuri isikukood: </label>
            <input type="text" id="studentPersonalCode" value={studentPersonalCode} onChange={(e) => setStudentPersonalCode(e.target.value)} />
            <input type="button" value="Lisa" onClick={() => addStudent()}/>
        </div>
        <div>
            <p>Kustuta õpilane</p>
            <ul>
                {
                    studentsList.map((item) =>
                        <li key={item.studentName}>{item.studentName}
                            <button onClick={() => deleteStudent(item.studentName)}>Kustuta</button>
                        </li>
                    )
                }
            </ul>
        </div>
        </div>
    )
}

export default Resources;