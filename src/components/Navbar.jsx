import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gray-950 py-5 mb-2">
      <div className="container px-10 md:px-0 mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">CRUD-REGISTRO DE TAREAS - VERONICA MEDINA</h1>
        </Link>
        <ul className="flex gap-x-4">
          <li>
            <button className="inline-block px-4 py-2 bg-purple-700 hover:bg-red-700 rounded-lg transition-colors duration-300">
              <Link href="/tasks/new">NUEVA TAREA</Link>
              </button>
            
          </li>
        </ul>
      </div>
    </nav>
  );
};
