import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { HiArrowLeft } from 'react-icons/hi';
import './styles.css';

function Menu() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <menu className={`${active ? 'active' : 'hidden'}`}>
      <button
        className={`menu-btn ${active ? 'active' : 'hidden'}`}
        type="button"
        onClick={handleClick}
      >
        {active && <HiArrowLeft className="icon" />}
        {!active && <AiOutlineMenu className="icon" />}
      </button>
      <nav className={`nav links ${active ? 'active' : 'hidden'}`}>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="media links">
        <BsLinkedin className="icon" />
        <BsTwitter className="icon" />
        <BsInstagram className="icon" />
      </div>
    </menu>
  );
}

export default Menu;
