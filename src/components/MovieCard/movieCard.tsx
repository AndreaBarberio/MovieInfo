import Image from 'next/image';
import React from 'react';

interface MovieCardProps {
	title: string;
	image: string;
	// Altri props necessari
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image }) => {
	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg">
			<Image className="w-full" src={image} alt={title} />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
			</div>
		</div>
	);
};

export default MovieCard;
