

export default function Header(props) {
    return (
        <header className="flex justify-around bg-gray py-6">
            <nav className="w-100 flex" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <h1 className="text-white">{props.title}</h1>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
                        <span className="sr-only">Open main menu</span>
                        {/* <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> */}
                    </button>
                </div>
            </nav>
        </header>
    )
}