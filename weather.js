const weather = document.getElementById("weather");

function ListItem({ taskName }) {
  return <p>{taskName}</p>;
}

function ToggleSection({actualTemps, feelTemps}) {
    const { Switch, FormControlLabel } = MaterialUI;
    const [isToggled, setIsToggled] = React.useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled); 
    };
    let temps;
    if (!isToggled) {
        temps = actualTemps;
    } else {
        temps = feelTemps;
    }
    return (
        <>
            <div id="main-weather-card">
                <p>NOW</p>
                <img className="icon-L" src="/assets/cloudy.png" />
                <h3>{temps[0]}˚</h3>
            </div>
            <div id="side-section">
                <div id="scroll-bar">
                    <div className="next-weather-card">
                        <p>1PM</p>
                        <img className="icon-M" src="/assets/partlycloudy.png" />
                        <h4>{temps[1]}˚</h4>
                    </div>
                    <div className="next-weather-card">
                        <p>2PM</p>
                        <img className="icon-M" src="/assets/sunny.png" />
                        <h4>{temps[2]}˚</h4>
                    </div>
                    <div className="next-weather-card">
                        <p>3PM</p>
                        <img className="icon-M" src="/assets/sunny.png" />
                        <h4>{temps[3]}˚</h4>
                    </div>
                    <div className="next-weather-card">
                        <p>4PM</p>
                        <img className="icon-M" src="/assets/cloudy.png" />
                        <h4>{temps[4]}˚</h4>
                    </div>
                    <div className="next-weather-card">
                        <p>5PM</p>
                        <img className="icon-M" src="/assets/cloudy.png" />
                        <h4>{temps[5]}˚</h4>
                    </div>
                    <div className="next-weather-card">
                        <p>6PM</p>
                        <img className="icon-M" src="/assets/cloudy.png" />
                        <h4>{temps[6]}˚</h4>
                    </div>
                </div>
                <div id="toggle">
                    <p>Actual Temperatures</p>
                    <Switch checked={isToggled} onChange={handleToggle} name="hi" />
                    <p>"Feels Like" Temperatures</p>
                </div>
            </div>
        </>
    );
}
          
function App() {
    const actualTemps = [41, 43, 45, 44, 42, 38, 34];
    const feelTemps = [52, 54, 50, 46, 43, 36, 32];

    return (
        <ToggleSection actualTemps = {actualTemps} feelTemps={feelTemps}/>
    );
}
 
const root = ReactDOM.createRoot(weather);
root.render(<App />); 


