
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CV from './pages/CV';
import { useState } from 'react';
import { Buffer } from 'buffer';

window.Buffer = Buffer; 

function shiftHue(hex, degree = 40) {
  // Remove "#" if present
  hex = hex.replace('#', '');
  const num = parseInt(hex, 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  // Convert RGB to HSL
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // gray
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  // 🌈 Shift hue
  h = (h * 360 + degree) % 360;
  if (h < 0) h += 360;
  h /= 360;

  // Convert HSL back to RGB
  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  let r2, g2, b2;
  if (s === 0) {
    r2 = g2 = b2 = l; // gray
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r2 = hue2rgb(p, q, h + 1/3);
    g2 = hue2rgb(p, q, h);
    b2 = hue2rgb(p, q, h - 1/3);
  }

  const newHex = "#" + ((1 << 24) +
    (Math.round(r2 * 255) << 16) +
    (Math.round(g2 * 255) << 8) +
    Math.round(b2 * 255))
    .toString(16)
    .slice(1);

  return newHex;
}


function App() {
  const defaultColor = '#0d0419ff';
  const [mainColor, setMainColor] = useState(defaultColor); // default color
  let lighter = shiftHue(mainColor, 70);

  if (mainColor === defaultColor) {
    lighter = '#292a3cff';
  }

  const gradientStyle = {
    background: `radial-gradient(circle, ${mainColor} 0%, ${lighter} 100%)`,
    minHeight: '100vh'
  }

  return (
      <Router>
      <div style={gradientStyle} className='app'>
        <Navbar setMainColor={setMainColor} defaultColor={defaultColor}/>
        <Routes>
          <Route path="/" element={<Hero mainColor={mainColor} />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
