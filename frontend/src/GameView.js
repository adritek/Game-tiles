const GameView = ({ name, short, url, tags, hasBoosters, addFav }) => {
  return (
    <div className="gameview-container" id={short}>
      <div className="gameview-header"></div>
      <div className="gameview-body">
        <h3 className="gameview-title">Game Name: {name}</h3>
        <p className="gameview-text">
          <b>Play:</b> {short}
          <br />
          <b>Tags:</b> {tags}
        </p>
        <p>Start playing for free!</p>
      </div>
    </div>
  );
};
export default GameView;
