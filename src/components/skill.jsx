const Skill = () => {
    const imgClass = "h-12 w-12";
    const divClass = "flex flex-col bg-fond3/50 rounded-lg max-w-xs break-words p-4";
    const ulClass = "flex flex-wrap justify-center gap-2";
    const h3Class = "text-txt-colorP mb-2";
    return (
        <div className="my-5" id="Skill">
            <h2 className="inline-block shadow-lg bg-fond2/50 rounded-lg text-txt-colorP px-20 py-1">Skills</h2>
            <div className="flex justify-center gap-4 mt-4">
                <div className={divClass}>
                    <h3 className={h3Class}>Back-End</h3>
                    <ul className={ulClass}>
                        <li><img src="./src/assets/ico/icons8-logotipo-de-java-coffee-cup-50.png" alt="Java" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-logotipo-de-primavera-48.png" alt="Spring" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-jwt-48.png" alt="JWT" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-python-48.png" alt="Python" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-django-48.png" alt="Django"/></li>
                    </ul>
                </div>
                <div className={divClass}>
                    <h3 className={h3Class}>Front-End</h3>
                    <ul className={ulClass}>
                        <li><img src="./src/assets/ico/icons8-html-48.png"alt="HTML5"className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-tailwindcss-48.png" alt="CSS3" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-javascript-48.png" alt="JavaScript" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-react-40.png" alt="React" className={imgClass}/></li>
                    </ul>
                </div>
                <div className={divClass}>
                    <h3 className={h3Class}>Other Skills</h3>
                    <ul className={ulClass}>
                        <li><img src="./src/assets/ico/icons8-docker-48.png" alt="Docker" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-github-64.png" alt="GitHub" className={imgClass}/></li>
                        <li><img src="./src/assets/ico/icons8-postgresql-48.png" alt="GitHub" className={imgClass}/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skill;