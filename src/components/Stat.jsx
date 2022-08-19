import { stats } from "../constants";

const Stat = () => (
  <section className="bg-gray-50 dark:bg-gray-800">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 lg:text-center dark:text-white md:text-4xl">
        Des statistiques importantes
      </h2>
      <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl lg:px-64 lg:mb-16">
        Nos normes rigoureuses de sécurité et de conformité sont au cœur de tout
        ce que nous faisons. Nous travaillons sans relâche pour vous servir,
        vous nôtre fierté.
      </p>
      <div className="space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4 xl:gap-8 sm:space-y-0 md:mt-12">
        {stats.map((stat, index) => (
          <span key={index}
          className="block py-12 px-8 text-center bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-lg-light">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold dark:text-white">{stat.value}</dt>
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mt-3.5">
              {stat.title}
          </h3>
            <dd className="font-light text-gray-500 dark:text-gray-400">{stat.subTitle}</dd>
          </div>

         
        </span>
        
        ))}
       
      </div>
      <dd className="font-light mb-10 text-lg text-gray-500 dark:text-gray-400 lg:text-center text-center">Résultats basés sur une l'analyse des données recolter par nôtre systemes sur trois ans.</dd>
        
    </div>
  </section>
);

export default Stat;
