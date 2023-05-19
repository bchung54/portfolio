import { Menu } from 'components/Menu';
import { ProjectCard } from 'components/ProjectCard';
import Image from 'assets/img/pexels-tim-gouw-donut.jpg';
import { AiOutlineCaretUp } from 'react-icons/ai';
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiLinux,
  DiNodejs,
  DiNpm,
  DiPython,
  DiReact,
} from 'react-icons/di';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiJest, SiReactrouter, SiWebpack } from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import './App.css';

function App() {
  return (
    <>
      <Menu />
      <div id="top" className="page">
        <header>
          <div className="logo">Brian Chung</div>
          <div className="contact">
            <a href="#contact">Contact</a>
          </div>
        </header>
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
            <div className="tech-stack">
              <div className="icon">
                <DiHtml5 />
              </div>
              <div className="icon">
                <DiCss3 />
              </div>
              <div className="icon">
                <DiGit />
              </div>
              <div className="icon">
                <DiJavascript1 />
              </div>
              <div className="icon">
                <DiLinux />
              </div>
              <div className="icon">
                <DiNodejs />
              </div>
              <div className="icon">
                <DiNpm />
              </div>
              <div className="icon">
                <DiPython />
              </div>
              <div className="icon">
                <DiReact />
              </div>
              <div className="icon">
                <IoLogoFirebase />
              </div>
              <div className="icon">
                <SiJest />
              </div>
              <div className="icon">
                <SiReactrouter />
              </div>
              <div className="icon">
                <SiWebpack />
              </div>
              <div className="icon">
                <TbBrandVscode />
              </div>
            </div>
          </section>
          <hr />
          <section id="portfolio">
            <h1>Portfolio</h1>
            <p className="copy">
              Here are some projects along with the design process.
            </p>
            <div className="project-list">
              <ProjectCard
                title="Reddit-ish"
                desc="Social media site"
                imgNode={<img src={Image} alt="donut" />}
                tags={['web', 'design', 'tag']}
              />
              <ProjectCard
                title="Reddit-ish"
                desc="Social media site"
                imgNode={<img src={Image} alt="donut" />}
              />
              <ProjectCard
                title="Reddit-ish"
                desc="Social media site"
                imgNode={<img src={Image} alt="donut" />}
              />
              <ProjectCard
                title="Reddit-ish"
                desc="Social media site"
                imgNode={<img src={Image} alt="donut" />}
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
            <form>
              <div className="col-1">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="col-2">
                <textarea placeholder="Message" />
                <input type="submit" value="Send Email" />
              </div>
            </form>
          </section>
        </main>
        <footer>
          <a className="top" href="#top">
            <AiOutlineCaretUp className="icon" />
          </a>
          &copy; 2023 Brian Chung
        </footer>
      </div>
    </>
  );
}

export default App;
