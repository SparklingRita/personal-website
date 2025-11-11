
import './Navbar.css'
import { HuePicker, SketchPicker } from 'react-color';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRainbow } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Navbar( {setMainColor, defaultColor} ) { 
    const [colorPicker, setColorPicker] = useState(false);
    const pickerRef = useRef(null);
    const buttonRef = useRef(null);

    const handleChange = (color) => {
        setMainColor(color.hex);   // update App background
    };

    // Close the picker when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                pickerRef.current &&
                !pickerRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setColorPicker(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


  return (
    <>
    <nav className="nav-container">
        <ul>
            <div className='nav-entry'>
                <FontAwesomeIcon icon={faRainbow} ref={buttonRef} onClick={() => {
                    if (colorPicker) {
                        setMainColor(defaultColor);
                    }
                    setColorPicker(prev => !prev)}}
                />       
            </div>
        </ul>
        {colorPicker && (
            <div ref={pickerRef}>
                <HuePicker color={setMainColor} onChange={handleChange} />
            </div>
            )
        }
        <Link to="/" className="nav-entry">Home</Link>
        <Link to="/cv" className="nav-entry">CV</Link>
        
    </nav>
    
    </>
  );
}
