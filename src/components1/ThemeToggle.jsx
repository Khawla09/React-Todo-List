import React, { useReducer, useEffect } from 'react';

<script src="https://kit.fontawesome.com/3597c47b51.js" crossorigin="anonymous"></script>
const ThemeToggle = ({initState,themeReducer}) => {
  const [state, dispatch] = useReducer(themeReducer, initState);

  const toggleIcon={
    // padding: '25px',
    borderRadius: '20px',
    border:'none'
   
  }
  useEffect(() => {
    document.body.className = state.theme;
    localStorage.setItem('theme', state.theme);
  }, [state.theme]);

  return (
    <div >
      <button className='toggle-theme-btn' onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
        {/* Toggle Theme */}
       { state.theme === 'light' ? <i className="fa-solid fa-toggle-off fa-2xl" style={toggleIcon}></i> : 
       <i className="fa-solid fa-toggle-on fa-2xl" style={toggleIcon}></i>
       }
        
      </button>
      <p style={{fontSize: '20px'}}> {state.theme.toUpperCase()}</p>
    </div>
  );
};

export default ThemeToggle