import { useEffect } from "react";
import StudentList from "../components/StudentList.jsx";


function Students() {

  const studentData = [
    { id: 1, name: "Hans Paloga", course: "BSCS" },
    { id: 2, name: "Arron Laroya", course: "BSIT" },
    { id: 3, name: "Jeffrey Fernandez", course: "BSIT" },
    { id: 4, name: "Pablo Nase", course: "BSCS" },
    { id: 5, name: "Josh Cullen", course: "ACT" },
    { id: 6, name: "Ken Suson", course: "BSIT" },
    { id: 7, name: "Stell Ajero", course: "BSCS" },
    { id: 8, name: "Justin De Dios", course: "ACT" },
    { id: 9, name: "Sophia Burgos", course: "BSIT" },
    { id: 10, name: "Benedict Fontanos", course: "BSCS" }
  ];

  useEffect(() => {
    setStudents(studentData);
  }, []);

  return (
    <div className="page">
      <h2>Student Lists</h2>

      {students.map((student) => (
        <StudentList key={student.id} student={student} />
      ))}

    </div>
  );
}

export default Students;
