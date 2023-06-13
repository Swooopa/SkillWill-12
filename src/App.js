import React from 'react';

const BookComponent = ({ title, description, authors, image, link }) => {
  const handleClick = () => {
    console.log('სათაური:', title);
    console.log('პერსონაჟები:', authors);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
      {image && <img src={image} alt={title} />}
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          წიგნის ლინკი
        </a>
      )}
      <button onClick={handleClick}>ღილაკი</button>
    </div>
  );
};

export default BookComponent;
