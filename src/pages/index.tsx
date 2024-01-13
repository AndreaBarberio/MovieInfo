import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
	return (
		<div>
			<Navbar title="Movie info"></Navbar>
			<main className={`flex`}></main>
			<Footer></Footer>
		</div>
	);
}
