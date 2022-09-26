import React from 'react'
import styles from './header.module.css'
import {  IoCheckboxOutline, IoCalendarOutline, IoChatboxOutline, IoMailOutline, IoStarOutline, IoSearchOutline } from "react-icons/io5";



const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.left}>
            <IoCheckboxOutline className={styles.icon}/>
            <IoChatboxOutline className={styles.icon}/>
            <IoMailOutline  className={styles.icon}/>
            <IoCalendarOutline className={styles.icon}/>
            <IoStarOutline className={styles.icon}/>
        </div>
        <div className={styles.right}>
            <IoSearchOutline/>
            <div className={styles.nombre}>
                <p><b>Erik Santiago</b></p>
                <p>Admin</p>
            </div>
            <div className={styles.iconUser}>
                <p>ES</p>
                <div></div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
