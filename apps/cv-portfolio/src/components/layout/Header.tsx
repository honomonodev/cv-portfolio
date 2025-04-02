export default function Header() {
    return (
      <header role="banner" className="bg-white shadow-md">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-semibold text-gray-900">
            Honomono
          </a>
          <ul className="flex space-x-4">
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  