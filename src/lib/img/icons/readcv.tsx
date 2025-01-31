import React from 'react';

interface ReadcvProps extends React.SVGProps<SVGSVGElement> {}

export const Readcv: React.FC<ReadcvProps> = (props) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 256 256" {...props}>
		<path fill="currentColor" d="m211.48 35.32l-130.25-23a20 20 0 0 0-23.18 16.22l-29.75 169a20 20 0 0 0 16.22 23.16l130.25 23a20.1 20.1 0 0 0 3.52.31A20 20 0 0 0 198 227.46l29.75-169a20 20 0 0 0-16.27-23.14ZM175 219.36L52.63 197.75L81 36.64l122.37 21.61ZM91.9 67a12 12 0 0 1 13.9-9.73L173 69.14A12 12 0 0 1 171 93a12.59 12.59 0 0 1-2.1-.18L101.63 80.9A12 12 0 0 1 91.9 67ZM85 106.39a12 12 0 0 1 13.91-9.73l67.22 11.88a12 12 0 0 1-2.13 23.81a12.5 12.5 0 0 1-2.1-.18l-67.21-11.88a12 12 0 0 1-9.69-13.9Zm-7 39.39a12 12 0 0 1 13.9-9.73l33.64 5.95a12 12 0 0 1-2.07 23.82a11.63 11.63 0 0 1-2.1-.19l-33.61-5.93A12 12 0 0 1 78 145.78Z"></path>
	</svg>
);