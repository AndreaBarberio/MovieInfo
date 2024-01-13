import { Inter } from 'next/font/google';
import { FaFilm } from 'react-icons/fa';
import { INavProps } from './Navbar/navTypes';

const Navbar = ({ title }: INavProps) => {
	return (
		<nav className="w-full h-12 bg-gray-800 flex items-center justify-between">
			{title && (
				<h1 className={`text-white text-lg pl-2 hidden sm:block`}>{title}</h1>
			)}

			<FaFilm
				className={`text-white text-lg p-2 h-12 w-12 block sm:hidden`}
				title="Film Icon"
			/>
		</nav>
	);
};

export default Navbar;
