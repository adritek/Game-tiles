const Search = ({ setQuery }) => {
  return (
    <div id="searchbox">
      <label htmlFor="search">Find a game:</label>
      <input type="text" id="search" name="search" placeholder="🔍" size="10" onChange={(e) => setQuery(e.currentTarget.value.toLowerCase())} />
    </div>
  );
};

export default Search;
