import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <>
            <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/project">Project</Link>
                    <Link href="/articles">Articles</Link>
                </nav>
                <Logo />
                <nav>
                    <Link href="#" target={"_blank"}>Twitter</Link>
                    <Link href="#" target={"_blank"}>Linkedin</Link>
                    <Link href="#" target={"_blank"}>Discord</Link>
                    <Link href="#" target={"_blank"}>Github</Link>
                    <Link href="#" target={"_blank"}>Reddit</Link>
                    <Link href="#" target={"_blank"}>DarkWeb</Link>
                </nav>
            </header>

        </>
    );
};

export default NavBar;