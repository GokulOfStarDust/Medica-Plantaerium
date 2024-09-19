import React from "react";
import './plant.css'
import plantPageBG from './images/plantPageBG.png'


const data = [
    { name: 'Tulsi', latin_name: 'Ocimum sanctum', image: '/plantimages/Tulsi.jpg' },
    { name: 'Mint', latin_name: 'Mentha', image: '/plantimages/Mint.jpg' },
    { name: 'Ginger', latin_name: 'Zingiber officinale', image: '/plantimages/Ginger.jpg' },
    { name: 'Pepper', latin_name: 'Piper nigrum', image: '/plantimages/Pepper.jpg' },
    { name: 'Turmeric', latin_name: 'Curcuma longa', image: '/plantimages/Turmeric.jpg' },
    { name: 'Neem', latin_name: 'Azadirachta indica', image: '/plantimages/Neem.jpg' },
    { name: 'Aloe Vera', latin_name: 'Aloe vera', image: '/plantimages/Aloe Vera.jpg' }
  ];
  
const Page2 = () => {
    return(
        <div style={{position: "relative"}}>
        <img className="plantsBackgroundImage" src={plantPageBG} alt="Background"/>
        <nav className="categoryNav">
        <label htmlFor="categoryDropdown">Select a Category:</label>
        <select id="categoryDropdown">
            <option value="" disabled>Select a category</option>
            <option value="family">Family</option>
            <option value="medicinal">Medicinal</option>
            <option value="region">Region</option>
            <option value="uses">Edible</option>
            
        </select>
        </nav>
        
        <div className="imageTilesDiv">
        {data.map((plant, index) => (
                <div key={index} className="imageTiles">
                    <img src={plant.image} alt={plant.name} />
                    <p>{plant.name}</p>
                    <p>{plant.latin_name}</p>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Page2;