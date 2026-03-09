import { Link } from "react-router-dom";

function StudentList({ student }) {
  return (
    <div className="student-card">

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Course:</strong> {student.course}</p>

      <Link to={`/students/${student.id}`}>
        View Details
      </Link>

    </div>
  );
}

export default StudentList;
