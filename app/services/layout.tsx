export default function ExperienceLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-black">
			{children}
		</div>
	);
} 