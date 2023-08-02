import { Menu } from 'components/Menu';
import { Header } from 'components/Header';
import { TechStack } from 'components/TechStack';
import { ProjectCard } from 'components/ProjectCard';
import donutImg from 'assets/img/pexels-tim-gouw-donut.jpg';
import gameImg from 'assets/img/tic-tac-toe.png';
import todoImg from 'assets/img/todo.png';
import weatherImg from 'assets/img/weather.png';
import { AiOutlineCaretUp } from 'react-icons/ai';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Menu />
      <div id="top" className="page">
        <Header />
        <main>
          <section id="about">
            <div className="copy">
              <h1>
                Full Stack
                <br />
                Problem Solver
              </h1>
              <p>
                I make cool stuff and solve problems through the lens of my
                Physics and Economics background. Cool can be subjective, so
                take a look at my portfolio down below and decide for yourself.
              </p>
              <a href="#portfolio">Take me to portfolio</a>
              <p>
                My favorite tools for development are Javascript, Python, and
                React.
              </p>
            </div>
            <TechStack />
          </section>
          <hr />
          <section id="portfolio">
            <h1>Portfolio</h1>
            <p className="copy">
              Here are some projects along with the design process.
            </p>
            <div className="project-list">
              <ProjectCard
                title="Tic-Tac-Toe"
                desc="Simple game of tic tac toe. Play against a bot or a friend with this nostalgic title."
                imgNode={<img src={gameImg} alt="game screenshot" />}
                repoURL="https://github.com/bchung54/tic-tac-toe"
                demoURL="https://bchung54.github.io/tic-tac-toe/"
                tags={[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'Algorithms',
                  'Module Pattern',
                ]}
              />
              <ProjectCard
                title="Reddit-ish"
                desc="Social media site"
                imgNode={<img src={donutImg} alt="donut" />}
                tags={['web', 'design', 'tag']}
              />
              <ProjectCard
                title="Tododile"
                desc="A themed to-do to keep track of tasks and filter them by due date"
                imgNode={<img src={todoImg} alt="todo screenshot" />}
                repoURL="https://github.com/bchung54/todo-list"
                demoURL="https://bchung54.github.io/todo-list/"
                tags={['HTML', 'CSS', 'JavaScript', 'ES6', 'Webpack']}
              />
              <ProjectCard
                title="Weather App"
                desc="Simple weather app that displays current weather info for a given city"
                imgNode={<img src={weatherImg} alt="weather screenshot" />}
                repoURL="https://github.com/bchung54/weather-app"
                demoURL="https://bchung54.github.io/weather-app/"
                tags={['HTML', 'CSS', 'JavaScript', 'Webpack', 'API', 'Async']}
              />
            </div>
          </section>
          <hr className="contact-rule" />
          <section id="contact">
            <h1>Let&apos;s chat!</h1>
            <p>
              Get in touch via email. Feel free to ask any questions or just
              drop a message to say hello. :)
            </p>
            <form onSubmit={handleSubmit}>
              <div className="col-1">
                <label htmlFor="guest-name">
                  Name*
                  <input id="guest-name" type="text" required />
                </label>
                <label htmlFor="guest-email">
                  Email*
                  <input id="guest-email" type="email" required />
                </label>
              </div>
              <div className="col-2">
                <label htmlFor="guest-msg">
                  Message*
                  <textarea id="guest-msg" required />
                </label>
                <input type="submit" value="Send Email" />
              </div>
            </form>
          </section>
        </main>
        <footer>
          <a className="top" aria-label="top" href="#top">
            <AiOutlineCaretUp className="icon" />
          </a>
          &copy; 2023 Brian Chung
        </footer>
      </div>
    </>
  );
}

export default App;
