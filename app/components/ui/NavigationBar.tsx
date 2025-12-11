import { useState } from 'react';

export default function NavigationBar() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className=" h-40  flex items-center justify-center">
      <div 
        className="flex items-center justify-around w-[250px] h-[40px] rounded-[10px]"
        style={{
backgroundColor: '#202121',
boxShadow: 'rgba(0, 0, 0, 0.4) 0px 5px 15px, rgba(200, 205, 210, 0.2) 5px 10px 15px'
        }}
      >
        {/* Home Button */}
        <button 
          className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-white cursor-pointer outline-none border-none"
          onMouseEnter={() => setHoveredButton('home')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            transform: hoveredButton === 'home' ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 1024 1024" 
            strokeWidth="0" 
            fill="currentColor" 
            stroke="currentColor"
          >
            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
          </svg>
        </button>

        {/* Search Button */}
        <button 
          className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-white cursor-pointer outline-none border-none"
          onMouseEnter={() => setHoveredButton('search')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            transform: hoveredButton === 'search' ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            strokeWidth="2" 
            fill="none" 
            stroke="currentColor"
          >
            <path 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              strokeLinejoin="round" 
              strokeLinecap="round"
            ></path>
          </svg>
        </button>

        {/* User Button */}
        <button 
          className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center text-white cursor-pointer outline-none border-none"
          onMouseEnter={() => setHoveredButton('user')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            transform: hoveredButton === 'user' ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'all 0.3s ease-in-out'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            strokeWidth="0" 
            fill="currentColor" 
            stroke="currentColor"
          >
            <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
          </svg>
        </button>

      </div>
    </div>
  );
}