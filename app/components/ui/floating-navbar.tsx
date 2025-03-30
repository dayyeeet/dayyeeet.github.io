"use client";
import React, {useState} from "react";
import {AnimatePresence, motion, useMotionValueEvent, useScroll,} from "framer-motion";
import {cn} from "~/lib/utils";
import {Link} from "react-scroll";
import {useNavigate} from "react-router";

export const FloatingNav = ({
                                navItems,
                                className,
                            }: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const {scrollYProgress} = useScroll();
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    y: -15,
                }}
                animate={{
                    y: visible ? 0 : -15,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit fixed bottom-10 sm:bottom-auto sm:top-10 inset-x-0 mx-auto border-2 border-solid border-foreground/[0.2] rounded-full bg-background shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-2 sm:px-5 items-center justify-center space-x-4",
                    className
                )}
            >
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        key={`link=${idx}`}
                        to={navItem.link}
                        smooth={true}
                        duration={500}
                        onClick={() => navigate(`#${navItem.link}`, {
                            replace: true
                        })}
                        className={cn(
                            "p-2 text-md text-foreground items-center justify-center flex space-x-1 hover:text-secondary-foreground cursor-pointer"
                        )}
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden sm:block text-md">{navItem.name}</span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
