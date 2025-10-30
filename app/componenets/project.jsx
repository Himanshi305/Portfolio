"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Project() {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.6,
				staggerChildren: 0.1,
			},
		},
	};

	const projectCardVariants = {
		hidden: { opacity: 0, scale: 0.7 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
		hover: {
			scale: 0.98,
			y: -6,
			transition: {
				duration: 0.25,
				ease: "easeOut",
			},
		},
	};

	const projects = [
		{
			title: "REVEL",
			description: "A project based on Marvel Characters and its timeline with comic API",
			image: "/preview-img/revel-pre.png",
			number: 1,
			url: `https://revel-teal.vercel.app/`,
		},
		{
			title: "REVEL: DOOMSDAY",
			description: "A frontend project with 3D model and animation",
			image: "/preview-img/doom-pre.png",
			number: 2,
			url: `https://revel-doom.vercel.app/`,
		},
		{
			title: "REVEL: YOGA",
			description: "A frontend project with 3D model and illusion animation with some help of Figma",
			image: "/preview-img/yoga-pre.png",
			number: 3,
			url: `https://revel-yoga.vercel.app/`,
		},
		{
			title: "REVEL: MOVE",
			description: "A demo project",
			image: "/preview-img/revel-move.png",
			number: 4,
			url: `https://revel-move.vercel.app/`,
		},
	];

	// Generate accurate screenshot URL (optional helper)
	const getScreenshotUrl = (url) => {
		return `https://image.thum.io/get/width/400/crop/600/${encodeURIComponent(url)}`;
	};

	return (
		<>
        <h1 className="text-5xl font-bold mb-6 justify-center items-center text-white flex font-sora">My Projects</h1>
			<motion.div
				id="projects"
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						className="shadow-lg bg-black p-6 rounded-2xl text-white relative min-h-[300px] overflow-hidden"
						variants={projectCardVariants}
						whileHover="hover"
					>
						<a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
							<div className="space-y-4">
								<div className="relative w-full h-32 rounded-lg overflow-hidden bg-gray-800">
									<Image src={project.image} alt={project.title} fill style={{ objectFit: "cover" }} unoptimized />
								</div>
								<h3 className="text-xl font-bold">{project.title}</h3>
								<p className="text-sm font-siri">{project.description}</p>
							</div>
							<div className="absolute bottom-4 right-4 text-4xl font-bold">{index + 1}</div>
						</a>
					</motion.div>
				))}
			</motion.div>
		</>
	);
}
