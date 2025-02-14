import React from 'react';

const Header = ({ sections }) => {
  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav>
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className="nav-link"
          >
            {section.title.split(' ')[0]}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
