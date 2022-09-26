import React from 'react'
import { useSelector } from 'react-redux'
import img from '../img/X.svg'
import style from './ver.module.css'

const Ver = ({ver, setVer}) => {
    const { profile } = useSelector(state => state.info);
    const { datos } = useSelector(state => state.info);
    const perfil = profile?.filter(i=> i.id === datos.profile)
    console.log("datos en ver",perfil)

    const cerrar = ()=>{
        if (ver) {
            setVer(false)
        }else {
            setVer(true)
        }
    }
  return (
    <div className={ver?style.ver:style.noVer}>
      <div className={style.top}><h3>Ver Usuario</h3> <img onClick={()=>cerrar()} src={img} alt="" /></div>
      <form action="" className={style.form}>
        <label >
            <p>Nombre </p> 
            <input type="text" value={datos.name} disabled/>
        </label>
        <label >
        <p>Correo Electronico </p> 
            <input type="text" value={datos.email} disabled/>
        </label>
        <label >
            <p>Perfil </p>    
                <input type="text" value={perfil[0]?.name} disabled/> 
        </label>
        <label >
            <p>Estado </p>    
                <input type="text" value={datos.state===0?"Inactivo":"Activo"} disabled/> 
        </label>
        
        <label >
            <p>Fecha de Modificacion </p> 
            <input type="text" disabled/>
        </label>
        <div className={style.botones}> 
            {/* <input className={style.Bagregar} type="button" value="Guardar Cambios" /> */}
            <input className={style.Bcancelar} type="button" value="Cancelar" onClick={()=>cerrar()} />
        </div>
      </form>
    </div>
  )
}

export default Ver
