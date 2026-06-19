import { useState } from "react";
import type { Student } from "./types";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

export default function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  function handleSubmitStudent() {
    if (!input.trim()) return;
    if (editingId !== null) {
      setStudents(
        students.map((student) =>
          student.id === editingId
            ? { ...student, name: input.trim() }
            : student,
        ),
      );
      setEditingId(null);
      setInput("");
    } else {
      const newStudent = {
        id: Date.now(),
        name: input.trim(),
      };
      setStudents([...students, newStudent]);
      setInput("");
    }
  }

  function deleteStudent(id: number) {
    setStudents(students.filter((student) => student.id !== id));
    setInput("");
    setEditingId(null);
  }

  function editStudent(student: Student) {
    setEditingId(student.id);
    setInput(student.name);
  }

  return (
    <>
      <div className="flex items-center justify-center p-6 bg-gray-100 min-h-screen">
        <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-sm">
          <h1 className="text-xl font-bold mb-4 text-gray-800">Students</h1>
          <StudentForm
            input={input}
            setInput={setInput}
            editingId={editingId}
            onSubmit={handleSubmitStudent}
          ></StudentForm>
          <div className="mt-6">
            <StudentList
              students={students}
              onEdit={editStudent}
              onDelete={deleteStudent}
            ></StudentList>
          </div>
        </div>
      </div>
    </>
  );
}
