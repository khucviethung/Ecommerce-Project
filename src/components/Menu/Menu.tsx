import React from 'react';
import './Menu.scss'


// Typescript property
interface MenuProps {
  items: { title: string, link: string }[];  
}


// Menu
const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}> {item.title} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
