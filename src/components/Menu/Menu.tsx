import React from 'react';
import './Menu.scss'


// Typescript property
interface MenuProps {
  items: { title: string, link: string }[];
}


// Menu
const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        {items.map((item, index) => (
          <li key={index} className={`menu-item menu-item-${index +1}`}>
            <a href={item.link} className="menu-link"> 
              {item.title} 
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
