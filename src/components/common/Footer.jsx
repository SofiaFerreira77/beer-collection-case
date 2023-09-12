import Link from "next/link";
import { IconCode } from "../ui/Icons";

export default function Footer(props) {
    return (
        <footer className="fixed bottom-0 z-0 w-full h-60 
                            flex flex-col items-center justify-center
                            bg-gray py-6">
            <a href="https://github.com/SofiaFerreira77/beer-collection-case" target="_blank" rel="no-follow"
                className="flex justify-center items-center gap-2 
                        text-white_2 text-center text-xs 
                        transition-colors hover:text-white">
                {IconCode}
                Soberly Crafted by: <span className="font-semibold">Sofia Ferreira</span>
            </a>
        </footer>
    )
}