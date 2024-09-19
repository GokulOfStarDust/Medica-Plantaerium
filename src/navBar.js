import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Fuse from 'fuse.js';
import menuIcon from './images/HamburgerMenuIcon.png';
import navbarLogo from './images/navbarLogo.png';
import searchIcon from './images/searchIcon.png';
import smallNavbarLogo from './images/smallNavbarLogo.png';
import "./App.css";


const data = [
  { name: 'Tulsi', latin_name: 'Ocimum sanctum' },
  { name: 'Mint', latin_name: 'Mentha' },
  { name: 'Ginger', latin_name: 'Zingiber officinale' },
  { name: 'Pepper', latin_name: 'Piper nigrum' },
  { name: 'Turmeric', latin_name: 'Curcuma longa' },
  { name: 'Neem', latin_name: 'Azadirachta indica' },
  { name: 'Aloe Vera', latin_name: 'Aloe vera' },
  { name: 'Tamarind', latin_name: 'Tamarindus indica' }
];



// Side Menu Button Component
  function SideMenuButton({isMenuopen, setMenuOpenStatus}) {

    // Toggles between open and closed state for the side menu
    function toggleMenu(){
      setMenuOpenStatus(!isMenuopen);
    }

    function toggleMenuWhenBlur(){
      setTimeout(()=>{
        setMenuOpenStatus(!isMenuopen);
      },300)
    }

    return(
      <>
      <button className='sideMenuButton' onFocus={toggleMenu} onBlur={toggleMenuWhenBlur} > 
        <img className='sideMenuIcon' src={menuIcon} alt='Sidemenu Icon'/> 
      </button>
      <div className={isMenuopen?'sideMenu':'NotSideMenu'}>
        <div className='sideMenuDivX'>
          <button className='sideMenuButtonX'>
            X
          </button>
        </div>
        <ul className='sideMenuList'>
          <li className='sideMenuItems'><Link className='SideMenuLink' to="/">Home</Link></li>
          <li className='sideMenuItems'>About Us</li>
          <li className='sideMenuItems'><Link className='SideMenuLink' to="/plants">Plants</Link></li>
          <li className='sideMenuItems'>Bookmark</li>
        </ul>
      </div>
      </>
    )
  }

function SearchBar({searchQuery, setSearchQuery, searchSuggestbox, setSearchSuggestBox}) {

  const [suggestiveName, setSuggestiveNames] = useState([]);

  // Updates search query state based on user input
  function getSearchQuery(event){
    setSearchQuery(event.target.value);
  }

  // Runs Fuse.js search whenever searchQuery changes
  useEffect(() => {
    const fuse = new Fuse(data, {
      keys: ['name'], 
      threshold: 0.3, // Adjusts search accuracy
    });
    const result = fuse.search(searchQuery);
    setSuggestiveNames(result.length > 0 ? result.map((result) => result.item.name) : ['Not Found']);
  }, [searchQuery]);

  // Logs suggestive names to console whenever they change
  useEffect(() => {
    console.log(suggestiveName);
  }, [suggestiveName]);

  function onFocusSearchBox(){
    setSearchSuggestBox(true)
  }

  function onBlurSearchBox(){
    setTimeout(()=>{setSearchSuggestBox(false)},300)
  
  }

  function printValue(event){
    console.log(event.target.innerText)
  }

  return(
    <>
      <input 
        className='searchBarArea'   
        type='text' 
        value={searchQuery} 
        onChange={getSearchQuery}
        onFocus={onFocusSearchBox} onBlur={onBlurSearchBox }
      />
      <img className='searchIcon' src={searchIcon} alt='search icon'/>

      {searchQuery && <div className={searchSuggestbox? 'ActiveSuggestBox' : 'UnActiveSuggestBox'}>
        <ul className='suggestBoxList'>
        {
          suggestiveName.map((name,index)=>{
            return(
              <li className='suggestBoxitems'  key={index} onClick={printValue}>
                {name}
              </li>
            )
          })
        }
        </ul>
      </div>
      }
    </>
  )
}


function Navbar() {
  const [isMenuopen, setMenuOpenStatus] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestbox, setSearchSuggestBox] = useState(false);
  const navigate = useNavigate();

  return(
    <>
    <nav className='navMain'>
      <div className='sideMenuAndLogoDiv'>
        <SideMenuButton 
          isMenuopen={isMenuopen} 
          setMenuOpenStatus={setMenuOpenStatus} 
        />

        <picture>
          <source media="(max-width: 480px)" srcSet={smallNavbarLogo}/>
          <img className='logoImage' src={navbarLogo} alt='logo of the website'/>
        </picture>
      </div>
      <div className='searchBarDiv'>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          searchSuggestbox={searchSuggestbox}
          setSearchSuggestBox={setSearchSuggestBox}
        />
      </div>
      <ul className='navigatePages'>
        <li><Link to="/" >Home</Link></li>
        <li>About</li>
        <li onClick={()=>navigate('/login')}>Login</li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar;
