import React, { useState } from 'react';

function StudentList() {
    const [students, setStudents] = useState([]);
    const [student, setStudent] = useState({
        name: '',
        rollNo: '',
        fatherName: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    };

    const addStudent = () => {
        if (student.name && student.rollNo && student.fatherName) {
            setStudents([...students, student]);
            setStudent({ name: '', rollNo: '', fatherName: '' });
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
      <center>
        <div>
            <h1>Student List</h1>
            <div>
                <input
                    style={{margin:"10px"}}
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={student.name}
                    onChange={handleInputChange}
                />
                <input style={{margin:"10px"}}
                    type="text"
                    name="rollNo"
                    placeholder="Roll No"
                    value={student.rollNo}
                    onChange={handleInputChange}
                />
                <input style={{margin:"10px"}}
                    type="text"
                    name="fatherName"
                    placeholder="Father's Name"
                    value={student.fatherName}
                    onChange={handleInputChange}
                />
                <button onClick={addStudent}>Add Student</button>
            </div>
            <div>
                <h1>Students:</h1>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            <h3>{student.name} - Roll No: {student.rollNo}, Father's Name:  {student.fatherName}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </center>
    );
}

export default StudentList;
