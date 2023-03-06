import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container allborder">
        <section className="main1">
          <div className="row">
            <div className="col-3 undercity">
              <h1 className="cityfont" id="cityname">
                Aalst
              </h1>
              <div>
                <span id="date"> 28 feb 2023</span> <br />
                <span id="dayAndtime"> Tuesday 11:45</span> <br />
                <span id="weather">Sunny</span>
              </div>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col">
                  <div className="currentTemp">
                    <span id="numbertemp">2°</span>
                    <span id="celsius">C</span>
                    <span id="between"></span>
                    <span id="farenheit"></span>
                  </div>
                  <div className="currentHandL" id="currentHL">
                    H:6° L:-3°
                  </div>
                </div>
                <div className="col emojiMainTemp">👩🏻‍💻</div>
              </div>
            </div>
            <div className="col-2 extra">
              <ul className="topextra">
                <li className="extra" id="feelslike">
                  Feels Like: -1°
                </li>
                <li className="extra" id="wind">
                  Wind: 14km/s
                </li>

                <li className="extra" id="humid">
                  Humidity: 60%
                </li>
              </ul>
            </div>
          </div>
        </section>

        <form className="row g-3" id="enterCity">
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="input-city"
              placeholder="Enter City"
              autocomplete="off"
              autofocus="on"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Search
            </button>
            <button
              type="button"
              className="btn btn-success mb-3"
              id="currentcitybutton"
            >
              Current City
            </button>
          </div>
        </form>
        <small>
          <a
            href="https://github.com/MarydeR/weatherappv2"
            target="_blank"
            rel="noreferrer noopener"
          >
            OpenSourceCode
          </a>
          by MDR
        </small>
      </div>
    </div>
  );
}
