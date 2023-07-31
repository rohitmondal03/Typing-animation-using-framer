import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }: { text: string }) => {
    const letters = Array.from(text);

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            // y: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 600,
            },
        },
        hidden: {
            opacity: 0,
            x: -200,
            // y: 1000,
            scale: 0,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 600,
            },
        },
    };

    return (
        <motion.div
            className="animated-text-chars"
            style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {letters.map((letter, index) => (
                <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default AnimatedTextCharacter;