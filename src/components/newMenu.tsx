import React, { Component } from 'react'

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
         </div>
      )
   }
}

const style: { [key: string]: React.CSSProperties } = {
   main: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
   },
   linkList: {
      display: 'flex',
      gap: 10,
   },
   linkItem: {
      listStyle: 'none',
   },
   linkA: {
      textTransform: 'uppercase',
      textDecoration: 'none',
   },
}
