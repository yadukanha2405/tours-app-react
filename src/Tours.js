export default function Tours({ tours }) {
  return (
    <div>
      {tours.map((tour) => {
        const { name, image, info } = tour;
        return (
          <>
            <img src={image} alt={name} />
            <h1> {name} </h1>
            <p> {info} </p>
          </>
        );
      })}
    </div>
  );
}
