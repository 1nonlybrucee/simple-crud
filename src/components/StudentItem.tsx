import type { Student } from "../types";

type StudentItemProps = {
  student: Student;
  onEdit: (student: Student) => void;
  onDelete: (id: number) => void;
};

export default function StudentList({
  student,
  onEdit,
  onDelete,
}: StudentItemProps) {
  return (
    <li
      key={student.id}
      className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
    >
      <span className="text-gray-700 font-medium">{student.name}</span>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onEdit(student)}
          className="text-sm px-3 py-1.5 rounded bg-amber-500 text-white hover:bg-amber-600 transition-colors"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(student.id)}
          className="text-sm px-3 py-1.5 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
