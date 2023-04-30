import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {motion} from "framer-motion";
import {TwitterIcon,LinkedInIcon, GithubIcon, PinterestIcon, DribbbleIcon, MoonIcon, SunIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher"

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}> {/*group is a classname created for span*/}
            {title}
            <span className={`h-[2px] inlile-block bg-black absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-3000 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
                &nbsp;</span>
        </Link>
    )
};

const NavBar = () => {
    const [mode,setMode] = useThemeSwitcher();
    return (
        <>
            <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
                <nav>
                    <CustomLink href="/" title="Home" className="mr-4" />
                    <CustomLink href="/about" title="About" className="mx-4" />
                    <CustomLink href="/projects" title="Project" className="mx-4" />
                    <CustomLink href="/articles" title="Articles" className="ml-4" />
                </nav>
                <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                    <Logo />
                </div>
                <nav className="flex justify-center flex-wrap">
                    <motion.a href="https://www.linkedin.com/in/aryan0777/" target={"_blank"}
                    className="w-6 mr-3"
                    whileHover={{y:-2}}
                    whileTap={{scale:0.5}}
                    >
                        <TwitterIcon /> 
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/aryan0777/" target={"_blank"}
                    className="w-6 mx-3"
                    whileHover={{y:-2}}
                    whileTap={{scale:0.5}}
                    >
                        <LinkedInIcon /> 
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/aryan0777/" target={"_blank"}
                    className="w-6 mx-3"
                    whileHover={{y:-2}}
                    whileTap={{scale:0.5}}
                    >
                        <PinterestIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/aryan0777/" target={"_blank"}
                    className="w-6 mx-3"
                    whileHover={{y:-2}}
                    whileTap={{scale:0.5}}
                    >
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/aryan0777/" target={"_blank"}
                    className="w-6 ml-3"
                    whileHover={{y:-2}}
                    whileTap={{scale:0.5}}
                    >
                        <DribbbleIcon />
                    </motion.a>
                    <button
                    onClick={()=>setMode(mode==="light"? "dark":"light")}
                    className="ml-3 flex items-center justify-center rounded-r-full p-1"
                    >
                        {
                            mode==="dark"?
                            <SunIcon className={"fill-dark"}/>:
                            <MoonIcon className={"fill-dark"}/>    
                        }
                    </button>
                </nav>

            </header>

        </>
    );
};

export default NavBar;