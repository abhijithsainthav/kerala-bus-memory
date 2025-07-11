import "./style.css";

function App() {
  return (
    <div className="container">
      <img src="/media/bus.jpg" alt="Bus interior" className="bg" />
      <div className="overlay">
        <h1>Kerala Private Bus</h1>
        <p>ഒരു ഓർമ്മയാത്ര...</p>
        <div className="buttons">
          <button><span>🚍</span> Bus</button>
          <button><span>👥</span> Crowd</button>
          <button><span>🌧️</span> Rain</button>
          <button><span>🎵</span> Song</button>
        </div>
      </div>
    </div>
  );
}

export default App;
