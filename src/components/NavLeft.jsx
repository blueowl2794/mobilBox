import React from 'react'
import styles from './navLeft.module.css'
import { IoCartOutline, IoDocumentTextOutline, IoLockOpenOutline, IoPersonOutline, IoPeopleOutline, IoLogOutOutline, IoHomeOutline,IoGitBranchSharp,    } from "react-icons/io5";

const NavLeft = () => {
  return (
    <div className={styles.navLeft}>
        <div >
            <img src={require('../img/M.png')} alt="icono" />
            <div className={styles.iconAlone}>
                <IoGitBranchSharp />

            </div>

        </div>
      <IoHomeOutline className={styles.icon}/>
      <IoCartOutline className={styles.icon}/>
      <IoDocumentTextOutline className={styles.icon}/>
      <IoPersonOutline className={styles.icon}/>
      <IoLockOpenOutline className={styles.icon}/>
      <IoPeopleOutline className={styles.icon}/>
      <IoLogOutOutline className={styles.icon}/>
    </div>
  )
}

export default NavLeft
