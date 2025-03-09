function Navbar({ setPage }) {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Frontend Project</h1>
      <div>
        <button onClick={() => setPage("home")} className="mx-2">Home</button>
        <button onClick={() => setPage("translator")} className="mx-2">Translator</button>
        <button onClick={() => setPage("random-string")} className="mx-2">Random String</button>
      </div>
    </nav>
  );
}

export default Navbar;
