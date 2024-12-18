const Header = () => {
    return (
        <header className="text-txt-colorP body-font">
            <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-txt-colorP text-xl">Daniel Florez</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a href="#AboutMe" className="mr-5 hover:text-txtHoverC">Sobre mi</a>
                    <a href="#Skill" className="mr-5 hover:text-txtHoverC">Skills</a>
                    <a href="#Project" className="mr-5 hover:text-txtHoverC">Proyectos</a>
                    <p className="mr-5 hover:text-txtHoverC">danflorezmartinez@gmail.com</p>
                </nav>
            </div>
        </header>
    )
}

export default Header