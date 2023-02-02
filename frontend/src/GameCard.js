const GameCard = ({ name, short, url, tags, hasBoosters, addFav }) => {
  return (
    <div className="card-container" id={short} onClick={addFav}>
      <div className="card-body">
        <h3 className="card-title">Game Name: {name}</h3>
        <p className="card-text">
          <b>Play:</b> {short}
          <br />
          <b>Tags:</b> {tags}
        </p>
      </div>
    </div>
  );
};
export default GameCard;
