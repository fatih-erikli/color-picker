import { useState, version } from "react";
import "./App.css";

import {
  ColorPicker,
  ColorPickerHueSaturation,
  ColorPickerRGB,
  Blue,
} from "color-picker";

function App() {
  const [color, setColor] = useState(Blue);
  return (
    <div className="Container">
      React {version}
      <h1>Color Picker</h1>
      <p>Color picker with default options</p>
      <ColorPicker color={color} onChange={setColor} />
      <h1 style={{ marginTop: 60 }}>Hue and saturation</h1>
      <p>Color picker with hue and saturation options</p>
      <ColorPickerHueSaturation defaultPresetIndex={2} color={color} onChange={setColor} />
      <footer style={{ marginTop: 50 }}>
      MIT Licensed <br />
      <a href="https://github.com/fatih-erikli/color-picker">https://github.com/fatih-erikli/color-picker</a>
      </footer>
    </div>
  );
}

export default App;
