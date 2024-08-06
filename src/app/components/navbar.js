import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-black rounded-t-xl p-4 flex justify-around items-center">
      <Link href="/" className="text-white">
        <span className="material-icons-outlined">home</span>
      </Link>
      <Link href="/search" className="text-white">
        <span className="material-icons-outlined">search</span>
      </Link>
      <Link href="/favorites" className="text-white">
        <span className="material-icons-outlined">favorite</span>
      </Link>
      <Link href="/pantry" className="text-white">
        <span className="material-icons-outlined">kitchen</span>
      </Link>
    </nav>
  );
};

export default Navbar;
