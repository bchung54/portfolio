import { useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './styles.css';

function Header() {
  const [active, setActive] = useState(false);
  const linkRef = useRef(null);
  const menuBtnRef = useRef(null);
  const navRef = useRef(null);
  const handleClick = () => {
    setActive(!active);
  };
  const closeMenu = (e) => {
    if (
      navRef.current &&
      active &&
      !navRef.current.contains(e.target) &&
      !menuBtnRef.current.contains(e.target)
    ) {
      setActive(false);
    }
  };
  document.addEventListener('mousedown', closeMenu);
  const a = document.querySelectorAll('.nav-dropdown a');
  a.forEach((element) => {
    element.addEventListener('click', () => {
      setActive(false);
    });
  });
  return (
    <header className={`${active ? 'active' : 'hidden'}`}>
      <div className="logo">Brian Chung</div>
      <div className="contact">
        <a href="#contact">Contact</a>
      </div>
      <button
        id="menu-btn-top"
        aria-label="Menu"
        onClick={handleClick}
        ref={menuBtnRef}
        type="button"
      >
        <AiOutlineMenu className="icon" />
      </button>
      <nav className="nav-dropdown links" ref={navRef}>
        <a href="#about" ref={linkRef}>
          <span>About</span>
        </a>
        <a href="#portfolio" ref={linkRef}>
          <span>Portfolio</span>
        </a>
        <a href="#contact" ref={linkRef}>
          <span>Contact</span>
        </a>
        <div className="media links">
          <BsLinkedin className="icon" />
          <BsTwitter className="icon" />
          <BsInstagram className="icon" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
