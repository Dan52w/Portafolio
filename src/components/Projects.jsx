const Projects = () => {
    const divProject = "mx-2 px-2 flex items-center rounded-lg shadow-2xl bg-fond2/50 hover:scale-105 transform transition-transform duration-300 cursor-pointer";
    return (
        <div className="flex my-2 justify-center" id="Project">
            <div className={divProject} style={{ width: "500px", height: "200px" }}>
                <div>
                    <img src="Aerolinia.png" alt="" className="h-40 rounded w-30 object-cover object-center mx-2 my-3"/>
                </div>
                <div className="flex flex-col items-center max-w-xs break-words">
                    <h2 className="text-lg text-txt-colorP font-medium title-font">Ventas de Vuelos</h2>
                    <h4 className="leading-relaxed text-txt-colorS">Projecto Backend</h4>
                    <div className="flex justify-center">
                        <ul className="flex">
                            <li className="mx-1 h-12 w-12"><img src="icons8-jwt-48.png" alt="JWT" /></li>
                            <li className="mx-1 h-12 w-12"><img src="icons8-logotipo-de-java-coffee-cup-50.png" alt="Java" /></li>
                            <li className="mx-1 h-12 w-12"><img src="icons8-logotipo-de-primavera-48.png" alt="Spring" /></li>
                            <li className="mx-1 h-12 w-12"><img src="icons8-postgresql-48.png" alt="Postgres" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={divProject} style={{ width: "500px", height: "200px" }}>
                <div>
                    <img src="Ajedrez.png" alt="" className="h-20 rounded w-25 object-cover object-center mx-2 my-3"/>
                </div>
                <div className="flex flex-col items-center max-w-xs break-words pl-8">
                    <h2 className="text-lg text-txt-colorP font-medium title-font">Ajedrez</h2>
                    <h4 className="leading-relaxed text-txt-colorS">Projecto de Logica</h4>
                    <div className="flex justify-center">
                        <ul className="flex">
                            <li className="mx-1 h-12 w-12"><img src="icons8-logotipo-de-java-coffee-cup-50.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Projects