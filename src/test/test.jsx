import Hero from "./components/hero";
import Nav from "./components/nav";
import SideBar from "./components/sidebar";
import './style/style.css';

const Edustipend = () => {
  return(
    <div>
      <Nav/>
      <section className="main">
        <Hero/>
        <SideBar/>
      </section>
    </div>
  )
}

export default Edustipend;