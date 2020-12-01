import "./App.css";
// import cloneDeep from "lodash.clonedeep";

function App() {
  // const example = cloneDeep({ ex: "ex" });
  // console.log(example);
  return (
    <div className="app">
      <div className="nav">
        <div className="user">
          <img
            src="https://placekitten.com/64/64"
            alt="pla pla"
            className="user-img"
          />
          <div className="user-info">
            <div className="user-name">Rayan Florance</div>
            <div>
              <a href="#" className="text-button">
                log out
              </a>
            </div>
          </div>
        </div>
        <nav className="channel-nav">
          <a href="/channel/awesome"># awesome</a>
          <a className="active" href="/channel/general">
            # general
          </a>
        </nav>
      </div>
      <div className="channel">
        <div className="channel-main">
          <div className="channel-info">
            <div className="topic">
              Topic:
              <input
                type="text"
                className="topic-input"
                value="Awesome Stuff"
              />
            </div>
            <div className="channel-name">#general</div>
          </div>
          <div className="channel-data">
            <div className="channel-placeholder">
              That&apos;s every message!
            </div>
            <div className="date">
              <div className="before-date" />
              <div className="channel-starting-date">12/6/2020</div>
              <div className="after-date" />
            </div>
          </div>
        </div>
        <input
          type="text"
          className="chat-message"
          placeholder="Message general"
        />
      </div>
      <div className="right-nav">
        <ul className="users">
          <li>
            <div className="status" />
            <div className="user-included">Rayane Florance</div>
          </li>
          <li>
            <div className="status online" />
            <div className="user-included">Abdallah Qaradeh</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
