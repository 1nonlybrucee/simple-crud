import type { Student } from "../types";
import StudentItem from "./StudentItem";

type StudentListProps = {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
};

export default function StudentList({
  students,
  onEdit,
  onDelete,
}: StudentListProps) {
  return (
    <ul className="space-y-3">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        ></StudentItem>
      ))}
    </ul>
  );
}
