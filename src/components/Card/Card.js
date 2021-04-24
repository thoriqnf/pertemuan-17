function Card({ judul, description }) {
  // judul dan description adalah sebuah property karena menerima dari parent component
  return (
    <div>
      <h1>{judul}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;
