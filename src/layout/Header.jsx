import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Header = () => {

  const [ navList, setNavList ] = useState([
    {
      id: 1,
      name: 'Characters',
      link: '/',
      title: 'Character of all series',
      isActive: false
    },
    {
      id: 2,
      name: 'Locations',
      link: '/locations',
      title: 'Locations that show it in the serie',
      isActive: false
    },
    {
      id: 3,
      name: 'Episodies',
      link: '/episodies',
      title: 'All episodies about serie',
      isActive: false
    }
  ]);

  const handleLinkActive = (navItemId) => {
    setNavList([
      ...navList.map(item => {
        if (item.id === navItemId) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      })
    ]);
  }

  useEffect(() => {
    setNavList([
      ...navList.map(item => {
        if (item.link === window.location.pathname) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
        return item;
      })
    ]);
  }, []);


  return (
    <header className='header'>
      <nav>
        <Link href={'/'}>
          <Image
            src='/logo.png'
            alt='logo'
            width={300}
            height={150}
          />
        </Link>
        <ul className='nav'>
          {
            navList.map(navItem => (
              <Link
                key={ navItem.id }
                href={ navItem.link }
                className={`nav-item ${ navItem.isActive ? 'active' : '' }`}
                onClick={ () => handleLinkActive(navItem.id) }
              >
                { navItem.name }
              </Link>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header;