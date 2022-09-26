import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import  { helpCreate } from '../helps/index'
import img from '../img/X.svg'
import style from './agregar.module.css'

const Agregar = ({agregar, setAgregar}) => {
  const { profile } = useSelector(state => state.info);
  const [data,setData] = useState({
    name:'',
    email:'',
    profile:'',
    
  })

  const cerrar = ()=>{
    if (agregar) {
      setAgregar(false)
    }else {
      setAgregar(true)
    }
  }

  const onChange = (e)=>{
    e.preventDefault()
    setData( {
      ...data,
      [e.target.name]: e.target.value
    }) 
  }

  const onSubmit = async(e)=>{
    e.preventDefault()

    if(!data.name || !data.email || !data.profile ) {
      alert("Missing fields in the form")
    } 
    else{
      helpCreate(data); 
    }
  } 

  return (
    <div className={agregar?style.agregar:style.noAgregar}>
      <div className={style.top}><h3>Agregar Nuevo Usuario</h3> <img onClick={()=>cerrar()} src={img} alt="" /></div>
      <form onSubmit={onSubmit} className={style.form}>
        <label >
            <p>Nombre <b>*</b></p> 
            <input onChange={onChange} type="text" name="name" />
        </label>
        <label >
        <p>Correo Electronico <b>*</b></p> 
            <input onChange={onChange} type="text" name="email" />
        </label>
        <div>
            <p>Perfil <b>*</b></p>
            <select onChange={onChange} className={style.select} name="profile"  placeholder="Perfil">
                <option>Perfil</option>
                {
                profile?.map(i=><option key={i.id} value={i.id}>{i.name}</option>)
                }
            </select>
        </div>
        <div className={style.botones}> 
            <input className={style.Bagregar} type="submit" value="Agregar" />
            <input className={style.Bcancelar} type="button" value="Cancelar"  onClick={()=>cerrar()} />
        </div>
      </form>
    </div>
  )
}

export default Agregar
