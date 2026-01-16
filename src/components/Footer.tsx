import { personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
			<div className="container max-w-4xl mx-auto px-6 md:px-4">
				<motion.div
					className="flex flex-col md:flex-row justify-between items-center gap-4"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}>
					<motion.p
						className="text-sm text-muted-foreground text-center md:text-left"
						whileHover={{ scale: 1.01 }}>
						&copy; {new Date().getFullYear()} {personalInfo.name}
					</motion.p>

					<motion.a
						href={personalInfo.cv}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}>
						<FileText className="h-4 w-4" />
						Voir mon CV
					</motion.a>
				</motion.div>
			</div>
		</footer>
	);
}
