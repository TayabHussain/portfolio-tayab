"use client";
import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					{/* Desktop Navigation */}
					<div className="hidden md:flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Projects
						</Link>
						<Link
							href="/experience"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Experience
						</Link>
						<Link
							href="/services"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Services
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</Link>
					</div>

					{/* Mobile Hamburger Menu Button */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>

			{/* Mobile Menu Overlay - Separate from header */}
			{isMenuOpen && (
				<div className="md:hidden fixed inset-0 z-[9999]">
					{/* Full screen backdrop */}
					<div 
						className="absolute inset-0 bg-black/80 backdrop-blur-sm"
						onClick={closeMenu}
					/>
					
					{/* Menu panel */}
					<div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-xl">
						<div className="flex flex-col h-full">
							{/* Header */}
							<div className="flex justify-between items-center p-6 border-b border-zinc-800/50">
								<div className="text-zinc-100 font-semibold text-xl">Menu</div>
								<button
									onClick={closeMenu}
									className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors"
									aria-label="Close menu"
								>
									<X className="w-6 h-6" />
								</button>
							</div>
							
							{/* Navigation Links */}
							<nav className="flex flex-col flex-1 p-6">
								<div className="space-y-6">
									<Link
										href="/projects"
										onClick={closeMenu}
										className="block text-xl font-medium duration-200 text-zinc-400 hover:text-zinc-100 py-4 px-6 rounded-xl hover:bg-zinc-800/50 transition-all"
									>
										Projects
									</Link>
									<Link
										href="/experience"
										onClick={closeMenu}
										className="block text-xl font-medium duration-200 text-zinc-400 hover:text-zinc-100 py-4 px-6 rounded-xl hover:bg-zinc-800/50 transition-all"
									>
										Experience
									</Link>
									<Link
										href="/services"
										onClick={closeMenu}
										className="block text-xl font-medium duration-200 text-zinc-400 hover:text-zinc-100 py-4 px-6 rounded-xl hover:bg-zinc-800/50 transition-all"
									>
										Services
									</Link>
									<Link
										href="/contact"
										onClick={closeMenu}
										className="block text-xl font-medium duration-200 text-zinc-400 hover:text-zinc-100 py-4 px-6 rounded-xl hover:bg-zinc-800/50 transition-all"
									>
										Contact
									</Link>
								</div>
							</nav>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};
