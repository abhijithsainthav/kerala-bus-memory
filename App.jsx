import { useState } from "react";

const sounds = [
  { id: "bus", label: "Bus", icon: "🚍", src: "/media/bus.mp3" },
  { id: "crowd", label: "Crowd", icon: "👥", src: "/media/crowd.mp3" },
  { id: "rain", label: "Rain", icon: "🌧️", src: "/media/rain.mp3" },
  { id: "song", label: "Song", icon: "🎵", src: "/media/song.mp3" },
];

function App() {
  const [playing, setPlaying] = useState({});
  const refs = sounds.reduce((o, s) => ({ ...o, [s.id]: new Audio(s.src) }), {});

  const toggle = (id) => {
    const audio = refs[id];
    if (playing[id]) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.loop = true;
      audio.play();
    }
    setPlaying({ ...playing, [id]: !playing[id] });
  };

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
              <span>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
