type StudentFormProps = {
  input: string;
  setInput: (value: string) => void;
  editingId: null | number;
  onSubmit: () => void;
};

export default function StudentForm({
  input,
  setInput,
  editingId,
  onSubmit,
}: StudentFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
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
        onClick={onSubmit}
        className={`px-5 py-2 rounded-lg text-white font-medium transition-colors ${
          editingId === null
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-amber-500 hover:bg-amber-600"
        }`}
      >
        {editingId === null ? "Add" : "Save"}
      </button>
    </form>
  );
}
