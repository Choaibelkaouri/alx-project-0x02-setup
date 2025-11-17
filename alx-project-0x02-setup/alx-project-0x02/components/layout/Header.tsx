import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow mb-6">
      <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-blue-600">ALX Project 0x02</h1>
        <ul className="flex gap-4 text-sm font-medium">
          <li>
            <Link href="/">
              <span className="hover:text-blue-600 cursor-pointer">الرئيسية</span>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <span className="hover:text-blue-600 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-blue-600 cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <span className="hover:text-blue-600 cursor-pointer">Posts</span>
            </Link>
          </li>
          <li>
            <Link href="/users">
              <span className="hover:text-blue-600 cursor-pointer">Users</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
