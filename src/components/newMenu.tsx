import React, { Component } from 'react'
import { primaryColor, normalTextColor } from '../style/global'

export default class Menu extends Component {
   state = {
      links: [
         { name: 'Sobre', link: '#about' },
         { name: 'Experiência', link: '#experience' },
         { name: 'Habilidades', link: '#skills' },
         { name: 'Portfólio', link: '#portfolio' },
         { name: 'Contato', link: '#contact' },
      ],
   }

   generateMenuNumber(number: number) {
      if (number < 10) return 0 + String(number)
      else return number
   }

   render() {
      return (
         <div style={style.main}>
            <ul style={style.linkList}>
               {this.state.links.map((item, index) => {
                  return (
                     <li key={index} style={style.linkItem}>
                        <a style={style.linkA} href={item.link}>
                           {this.generateMenuNumber(index + 1)} {item.name}
                        </a>
                     </li>
                  )
               })}
            </ul>
            <div style={style.language}>
               <div>PT</div> | <div style={style.languageDisabled}>EN</div>
            </div>
         </div>
      )
   }
}

const style: { [key: string]: React.CSSProperties } = {
   main: {
      width: '100%',
      boxSizing: 'border-box',
      padding: '0 50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontFamily: 'Roboto',
      fontSize: 15,
      color: normalTextColor,
   },
   linkList: {
      display: 'flex',
      gap: 15,
   },
   linkItem: {
      listStyle: 'none',
   },
   linkA: {
      textTransform: 'uppercase',
      textDecoration: 'none',
      fontWeight: 600,
      color: normalTextColor,
   },
   language: {
      fontWeight: 600,
      display: 'inline-flex',
      gap: 5,
   },
   languageDisabled: {
      opacity: 0.7,
   },
}
