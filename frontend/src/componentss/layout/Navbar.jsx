import { useDarkMode } from '@contexts/DarkModeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="px-6 py-4 flex justify-between items-center border-b dark:border-gray-800">
      <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Intrivia AI</h1>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {darkMode ? <SunIcon className="w-5" /> : <MoonIcon className="w-5" />}
      </button>
    </nav>
  );
};