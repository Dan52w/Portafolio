const AboutMe = () => {
    return (
        <div class="body-font" id="AboutMe">
            <div class="container px-2 py-10 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                    <div class="flex flex-col sm:flex-row mt-10">
                        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                <img src="Profile.jpg" alt="Profile" className="rounded-full"/>
                            </div>
                            <div class="flex flex-col items-center text-center justify-center">
                            <h2 class="font-medium title-font mt-4 text-gray-900 text-txt-colorP">Daniel Florez</h2>
                            <div class="w-12 h-1 bg-fond rounded mt-2 mb-4"></div>
                            <p class="text-base text-txt-colorS">Mi nombre es Daniel Florez, Actualmente soy estudiante de Ingeniería de Sistemas.</p>
                            </div>
                        </div>
                        <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                            <p class="leading-relaxed text-lg mb-4 text-txt-colorS">Actualmente, mi enfoque principal está en el desarrollo web, con una especialización en el desarrollo Backend, donde destaco en la creación de APIs REST utilizando Java y Spring Boot. Sin embargo, también tengo sólidas habilidades como desarrollador Frontend, lo que me permite ofrecer soluciones Full Stack de manera eficiente. En cuanto a tecnologías, en el Frontend manejo HTML, CSS, JavaScript y React, mientras que en el Backend tengo experiencia con JWT, Java y Spring Boot, así como con Python y Django.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe