import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo, getProfile } from '../../store/reducer'
import Tabla from './Tabla'
import Top from './Top'

const Contenido = ({ editar, setEditar, ver, setVer, current, setCurrent, agregar, setAgregar }) => {

  const { profile } = useSelector(state => state.info);
  console.log(profile)
  const { infos } = useSelector(state => state.info);
  const { infosFilter } = useSelector(state => state.info);
  const dispatch = useDispatch();
  const [items, setItems] = useState(10);
  useEffect(() =>{
    dispatch(getInfo());
    dispatch(getProfile());
  },[]) 
  console.log('soy infos', infos)

  return (
    <div Style={'width:95%; display:flex;flex-direction:column;'}>

      <Top infos={infos} profile={profile} infosFilter={infosFilter} items={items} setItems={setItems} agregar={agregar} setAgregar={setAgregar}/>
      <Tabla editar={editar} setEditar={setEditar} ver={ver} setVer={setVer} infos={infos} profile={profile} infosFilter={infosFilter} items={items} setItems={setItems} current={current} setCurrent={setCurrent}/>
    </div>
  )
}

export default Contenido
