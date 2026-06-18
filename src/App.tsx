import { useState } from "react";
import type { Student } from "./types";

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
          <h1 className="text-xl font-bold mb-4 text-gray-800">Members</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmitStudent();
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-300 rounded-lg flex-1 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Sponge Bob"
            />
            <button
              type="submit"
              onClick={handleSubmitStudent}
              className={`px-5 py-2 rounded-lg text-white font-medium transition-colors ${
                editingId === null
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-amber-500 hover:bg-amber-600"
              }`}
            >
              {editingId === null ? "Add" : "Save"}
            </button>
          </form>
          <div className="mt-6">
            <ul className="space-y-3">
              {students.map((student) => (
                <li
                  key={student.id}
                  className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-700 font-medium">
                    {student.name}
                  </span>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => editStudent(student)}
                      className="text-sm px-3 py-1.5 rounded bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteStudent(student.id)}
                      className="text-sm px-3 py-1.5 rounded bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
