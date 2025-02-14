import React from 'react';

const Section = ({ id, title, bg }) => {
  return (
    <section id={id} style={{ background: bg }} className="section">
      <h1>{title}</h1>
    </section>
  );
};

export default Section;
