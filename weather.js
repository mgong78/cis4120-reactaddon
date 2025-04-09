const weather = document.getElementById("weather");

function ListItem({ taskName }) {
  return <p>{taskName}</p>;
}

function ToggleSection() {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled); 
    };
    return (
        <Switch checked={isToggled} onChange={handleToggle} name="hi" />
    );
}
          
function App() {

    return (
        <>
            <div id="main-weather-card">
                <p>NOW</p>
                <img className="icon-L" src="/assets/cloudy.png" />
                <h3>41˚</h3>
            </div>
            <div id="side-section">
                <div id="scroll-bar">
                <div className="next-weather-card">
                    <p>1PM</p>
                    <img className="icon-M" src="/assets/partlycloudy.png" />
                    <h4>43˚</h4>
                </div>
                <div className="next-weather-card">
                    <p>2PM</p>
                    <img className="icon-M" src="/assets/sunny.png" />
                    <h4>45˚</h4>
                </div>
                <div className="next-weather-card">
                    <p>3PM</p>
                    <img className="icon-M" src="/assets/sunny.png" />
                    <h4>44˚</h4>
                </div>
                <div className="next-weather-card">
                    <p>4PM</p>
                    <img className="icon-M" src="/assets/cloudy.png" />
                    <h4>42˚</h4>
                </div>
                <div className="next-weather-card">
                    <p>5PM</p>
                    <img className="icon-M" src="/assets/cloudy.png" />
                    <h4>38˚</h4>
                </div>
                <div className="next-weather-card">
                    <p>6PM</p>
                    <img className="icon-M" src="/assets/cloudy.png" />
                    <h4>34˚</h4>
                </div>
                </div>
                <div id="toggle">
                <p>Actual Temperatures</p>
                <label className="toggle">
                    <input type="checkbox" id="btnToggle" name="btnToggle" />
                    <span className="slider" />
                </label>
                <p>"Feels Like" Temperatures</p>
                </div>
            </div>
        </>

    );
}
 
const root = ReactDOM.createRoot(weather);
root.render(<App />); 


