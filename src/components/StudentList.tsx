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
    <>
      {students.length === 0 && (
        <p className="mt-6 text-gray-500 text-center">No members yet.</p>
      )}
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
    </>
  );
}
