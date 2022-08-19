import styles from "./style";
import {
  NavBar,
  Hero,
  Partener,
  Stat,
  Business,
  Billing,
  Temoignages,
  CardDeal,
  Clients,
  CTA,
  Footer,
} from "./components";


const App = () => (
  <div>
    <header className="flex sticky top-0 z-40 flex-none py-3 mx-auto w-full bg-white border-b border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      <NavBar />
    </header>
        <Hero />
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Partener/>
        {/* <Stat />
        <Business />
        <Billing />
        <Temoignages />
        <CardDeal />
        <Clients />
        <CTA />
        <Footer /> */}
      </div>
    </div>
    <Stat />
    <Business />
    <Footer />
  </div>
);

export default App