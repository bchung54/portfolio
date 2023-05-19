import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './styles.css';

function Menu() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <menu className={`${active ? 'active' : 'hidden'}`}>
      <button className="menu" type="button" onClick={handleClick}>
        <AiOutlineMenu className="icon" />
      </button>
      <div className={`nav links ${active ? 'active' : 'hidden'}`}>
        <ul>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="media links">
        <BsLinkedin className="icon" />
        <BsTwitter className="icon" />
        <BsInstagram className="icon" />
      </div>
    </menu>
  );
}

export default Menu;
