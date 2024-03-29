// Importa i componenti necessari
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Navbar title="Movie info"></Navbar>
			<div
				className={`flex flex-col items-center justify-center px-4 max-h-fit md:px-8 lg:px-16 relative`}
				style={{
					backgroundImage: "url('/assets/bg/bg.jpg')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					height: 'calc(100vh - 80px)',
				}}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

				<h1 className="text-4xl font-bold mb-6 text-white relative hidden sm:block z-10 transform hover:scale-110 transition-transform duration-300">
					Benvenuto a MovieInfo!
				</h1>
				<p className="text-lg hidden sm:block mb-8 text-white relative z-10 transform hover:scale-110 transition-transform duration-300">
					Esplora il magico mondo del cinema con la nostra vasta collezione di
					film e serie TV.
				</p>
				<Link
					className="bg-blue-500 text-white p-1 sm:p-2 mb-24 sm:mb-0 rounded transition duration-300 hover:bg-blue-600 relative z-10"
					href="/movies"
				>
					<span className="sm:inline hidden">Vai alla lista dei film</span>
					<span className="sm:hidden">Lista film</span>
				</Link>
			</div>

			<Footer></Footer>
		</div>
	);
}
