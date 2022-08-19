import styles from "../style";
import { phoneMockup01 } from "../assets";

const Hero = () => (
    <section className="bg-white dark:bg-gray-900" id="home">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    Déplacer vous avec <span className="text-cflex-100">Flex</span>ibilité
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                    Points d'arrêt plus près de vous, itinéraires calculés, Choix de
                    moyens de transport le plus optimal pour vous. Tout est pensés pour
                    vos déplacements.
                </p>
                <div className="flex flex-col mb-8 md:flex-row lg:justify-start">
                    <a
                        href="/"
                        className="text-white bg-cflex-100 hover:bg-primary-700 focus:ring-4 focus:ring-cflex-300 dark:focus:ring-cflex-100 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center">
                        J'ai un véhicule
                    </a>
                    <a
                        href="#components"
                        className="text-gray-600 bg-white-100 hover:bg-gray-100 hover:text-cflex-100 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-600 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="w-5 h-5">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span className="ml-2">Télécharger l'application</span>
                    </a>
                </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                    alt="mockup"
                />
            </div>
        </div>
    </section>
);

export default Hero;
