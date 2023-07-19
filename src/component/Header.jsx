let Header = () => {
  return (
    <>
      <div id="parent-of-header">
        <div id="parents-child">
          <div id="list-item">
            <div>
              <img id="logo" src="src/images/download.jpg" alt="logo" />
            </div>

            <div id="li-item">
              <li>Browse Fundraisers</li>
              <li>fundrisers for</li>
              <li>How It works</li>
              <li>Search</li>
            </div>
          </div>
          <div id="button-div">
            <button id="btn-start">Start a Fundraiser</button>
            <button id="sign-in">Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
