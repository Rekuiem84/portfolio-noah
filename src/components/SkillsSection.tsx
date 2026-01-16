import React from "react";
import { skills } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({ skill, index }: { skill: string; index: number }) {
	return (
		<motion.div
			whileHover={{ scale: 1.05, y: -2 }}
			className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm">
			{skill}
		</motion.div>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const skillCategoryVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

function SkillCategorySkeleton() {
	return (
		<GlassCard className="p-4 animate-pulse">
			<div className="h-7 bg-muted/50 rounded w-48 mb-3" />
			<div className="flex flex-wrap gap-2 justify-center md:justify-start">
				{[...Array(6)].map((_, i) => (
					<div key={i} className="h-8 bg-muted/50 rounded-md w-20" />
				))}
			</div>
		</GlassCard>
	);
}

function SkillCategory({
	title,
	icon,
	skills: categorySkills,
}: {
	title: string;
	icon: string;
	skills: string[];
}) {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<motion.div ref={ref} variants={skillCategoryVariants}>
			{!isInView ? (
				<SkillCategorySkeleton />
			) : (
				<GlassCard className="p-4">
					<h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
						<span className="mr-2 text-xl">{icon}</span> {title}
					</h3>
					<div className="flex flex-wrap gap-2 justify-center md:justify-start">
						{categorySkills.map((skill, index) => (
							<SkillTag key={skill} skill={skill} index={index} />
						))}
					</div>
				</GlassCard>
			)}
		</motion.div>
	);
}

export default function SkillsSection() {
	return (
		<section
			id="skills"
			className="py-12 bg-gradient-to-b from-background to-muted/20">
			<div className="container max-w-4xl mx-auto px-6 md:px-4">
				<MotionWrapper>
					<h2 className="text-2xl font-bold mb-8 text-center md:text-left">
						Compétences
					</h2>
				</MotionWrapper>

				<motion.div
					className="space-y-6"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}>
					<SkillCategory
						title="Chimie Organique de Synthèse"
						icon="🧪"
						skills={skills.chimieOrga}
					/>
					<SkillCategory
						title="Chimie Physique"
						icon="⚛️"
						skills={skills.chimiePhy}
					/>
					<SkillCategory
						title="Chimie Analytique"
						icon="👨‍🔬"
						skills={skills.chimieAna}
					/>
					<SkillCategory
						title="Chimie Inorganique"
						icon="💎"
						skills={skills.chimieInorga}
					/>
					<SkillCategory title="Langues" icon="🌍" skills={skills.languages} />
				</motion.div>
			</div>
		</section>
	);
}
