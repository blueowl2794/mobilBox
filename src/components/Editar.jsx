import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import  { helpEdite } from '../helps/index'
import img from '../img/X.svg'
import style from './editar.module.css'

const Editar = ({editar, setEditar}) => {
    const { profile } = useSelector(state => state.info);
    const { datos } = useSelector(state => state.info);
    
    const [data,setData] = useState({
    name:'',
    email:'',
    profile:'',
    state:'',
    
    })

    const cerrar = ()=>{
        if (editar) {
            setEditar(false)
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
            helpEdite(datos.id,data); 
        }
      } 

  return (
    <div className={editar? style.editar:style.noEditar}>
      <div className={style.top}><h3>Editar Usuario</h3> <img onClick={()=>cerrar()} src={img} alt="" /></div>
      <form  className={style.form} onSubmit={onSubmit}>
        <label >
            <p>Nombre <b>*</b></p> 
            <input type="text" name="name" placeholder={datos.name} onChange={onChange} />
        </label>
        <label >
        <p>Correo Electronico <b>*</b></p> 
            <input type="text" name="email" placeholder={datos.email}  onChange={onChange}/>
        </label>
        <div>
            <p>Perfil <b>*</b></p>
            <select className={style.select} name="profile" onChange={onChange}  placeholder="Perfil">
                <option>Perfil</option>
                {
                profile?.map(i=><option key={i.id} value={i.id}>{i.name}</option>)
                }
            </select>
        </div>
        <div>
            <p>Estado <b>*</b></p>
            <select className={style.select} onChange={onChange} name="state" >
                <option key={1} value={1}>Activo</option>
                <option key={0} value={0}>Inactivo</option>
            </select>

            </div>
        <div className={style.botones}> 
            <input className={style.Bagregar} type="submit" value="Guardar Cambios" />
            <input className={style.Bcancelar} type="button" value="Cancelar"  onClick={()=>cerrar()}/>
        </div>
      </form>
    </div>
  )
}

export default Editar
