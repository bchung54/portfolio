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
import './styles.css';

function TechStack() {
  return (
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
  );
}

export default TechStack;
