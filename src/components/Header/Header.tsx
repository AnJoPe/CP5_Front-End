import { Link } from "react-router-dom";

export default function Header({ titulo }: { titulo?: string }) {
  return (
    <header className='w-full px-32 py-6 flex justify-between bg-[#F59E0B] text-[#F3F4F6]'>
      <h1 className='font-bold text-4xl'>{titulo}</h1>
      <ul className='flex gap-12 font-medium underline text-2xl'>
        <li>
          <Link to='/'>Início</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </header>
  );
}
