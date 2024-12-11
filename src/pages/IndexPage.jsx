import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PhotosUploader from "../components/PhotosUploader";
import Navbar from "../components/navbar";

export default function IndexPage() {
  const [photos, setPhotos] = useState([]);
  const [teamOption, setTeamOption] = useState("3");
  const [isGenerated, setIsGenerated] = useState(false);
  const [randomTeam, setRandomTeam] = useState([]);
  const [animationClass, setAnimationClass] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const characterPhotos = [
          'alter.png', 'ash.png', 'ballistic.png', 'bangalore.png', 'bloodhound.png', 'catalyst.png', 'caustic.png', 'conduit.png',
          'crypto.png', 'fuse.png', 'gibraltar.png', 'horizon.png', 'lifeline.png', 'loba.png', 'mad-maggie.png', 'mirage.png',
          'newcastle.png', 'octane.png', 'pathfinder.png', 'rampart.png', 'revenant.png', 'seer.png', 'valkyrie.png', 'vantage.png',
          'wattson.png', 'wraith.png'
        ];
        setPhotos(characterPhotos);
    }, []); 

  function generateTeam() {
    setIsGenerated(false);
    setRandomTeam([]);
    const teamSize = parseInt(teamOption);
    const randomTeam = [];

    while (randomTeam.length < teamSize) {
      const randomIndex = Math.floor(Math.random() * photos.length);
      const selectedPhoto = photos[randomIndex];

      if (!randomTeam.includes(selectedPhoto)) {
        randomTeam.push(selectedPhoto);
      }
    }
    setRandomTeam(randomTeam);
    console.log("Generated Team:", randomTeam);
    setIsGenerated(true);
    
    // Reset animation class to trigger re-render
    setAnimationClass('animate-slide-in');
    
    // Remove animation class after animation duration (0.5s)
    setTimeout(() => {
      setAnimationClass('');
    }, 500); // Match this duration with your animation duration
  }

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  }

  return (
    <div className={`page-container grid grid-cols-[2fr_2fr] relative`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <div className="overflow-y-auto h-[90vh]">
        <PhotosUploader photos={photos} onChange={setPhotos} />
      </div>
      <div className="flex flex-col mt-12 items-center">
        <h1 className="text-accent2 dark:text-secondary1Dark text-4xl font-bold mb-2 text-center mt-8">Generate Random Team</h1>
        <div className="text-accent2 dark:text-secondary1Dark text-2xl flex justify-around w-full my-8">
            <label className="flex justify-center items-center gap-4">
            <input className="custom-radio"
              type="radio"
              name="teamOption"
              value="1"
              onChange={() => setTeamOption("1")}/>
                <span className="dark:text-secondary1Dark"><i className="fi fi-rr-user px-2"></i>Solo</span>
            </label>
            <label className="flex justify-center items-center gap-4">
            <input className="custom-radio"
              type="radio"
              name="teamOption"
              value="2"
              onChange={() => setTeamOption("2")}/>
                <span className="dark:text-secondary1Dark"><i className="fi fi-rr-users px-2"></i> Duo</span>
            </label>
            <label className="flex justify-center items-center gap-4">
            <input className="custom-radio"
              type="radio"
              name="teamOption"
              value="3"
              onChange={() => setTeamOption("3")}/>
                <span className="dark:text-secondary1Dark"><i className="fi fi-tr-users-alt px-2"></i>Squad</span>
            </label>
        </div>
        <button onClick={generateTeam} className="bg-primary1 text-accent3 py-3 w-[80%] rounded-2xl shadow-lg dark:bg-primary2Dark dark:text-secondary1Dark">
            Generate Legends
        </button>

        {isGenerated && (
          <div className="flex mt-8">
            {randomTeam.length > 0 && (
              randomTeam.map((link, index) => (
                <div key={index} className="relative aspect-square bg-default dark:bg-dark">
                  <img 
                    src={'characters/' + link} 
                    alt="" 
                    className={`object-cover h-full w-full ${animationClass}`} 
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
