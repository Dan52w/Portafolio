import Projects from "./Projects"

const Project = () => {
    return (
        <div className="my-8 bg-fond shadow-lg shadow-fond/50 rounded-lg px-2 py-3">
            <div className="inline-block shadow-lg bg-fond2/50 rounded-lg text-txt-colorP px-20 py-1">Projectos</div>
            <Projects/>
        </div>
    )
}

export default Project