/** @format */

import { useState } from 'react';
export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  // const handleClick = (status) => {
  //   setDarkMode(status)
  // }
  return (
    <div className={`page ${darkMode && 'dark-mode'}`}>
      {/* //! Too many re-renders. React limits the number of renders to prevent an infinite loop.
<button className='dark-mode-button' onClick={handleClick(true)}>Dark Mode</button> */}
      <button className="dark-mode-button" onClick={() => setDarkMode(true)}>
        Dark Mode
      </button>
      <button className="light-mode-button" onClick={() => setDarkMode(false)}>
        Light Mode
      </button>
    </div>
  );
}
