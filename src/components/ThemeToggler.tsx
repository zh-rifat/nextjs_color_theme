'use client'
import React, { useEffect, useState } from 'react'

type Props = {}

const ThemeToggler = (props: Props) => {
  const [theme, setTheme] = useState<string>(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
  )
  const changeTheme = () => {
    const html = document.querySelector('html')
    if (html?.classList.contains('neon')) {
      setTheme('light');
    }else if(html?.classList.contains('dark')){
      setTheme('neon');
    }else{
      setTheme('dark');
    }
  }

  useEffect(() => {
    console.log(theme)
    const html=document.querySelector('html')
    if (theme === 'dark') {
      html?.classList.add('dark');
      document.body.classList.remove('neon');
    } else if (theme === 'neon') {
      html?.classList.add('neon');
      html?.classList.remove('dark');
    } else {
      html?.classList.remove('dark');
      html?.classList.remove('neon');
    }

    // Store the theme in localStorage whenever it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme])

  return (
    <button className='btn-primary absolute top-8 right-8' onClick={changeTheme}>{theme[0].toUpperCase()}</button>
  )
}

export default ThemeToggler
