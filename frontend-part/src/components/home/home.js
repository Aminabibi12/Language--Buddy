import "./home.css";
import welcome from "../../images/welcome_page.png";
import Footer from "../footer/footer";
import Header from "../header/header";

function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <div className="wrapper">
          <div className="welcome_slider">
            <h2>Welcome to Language Buddy</h2>
          </div>
          <div className="welcome_block">
            <p>
              A plataform to exchange and learn new languages and about new
              cultures
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Home;
