import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/reducer'
import  { helpDelete } from '../../helps/index'
import { IoChevronBackSharp, IoChevronForwardSharp, IoEyeOutline, IoTrashOutline, IoReceiptOutline } from "react-icons/io5";
import img from '../../img/Dots.svg';
import styles from './tabla.module.css'

const Tabla = ({editar, setEditar, ver, setVer, infos, profile, infosFilter,items, setItems, current, setCurrent}) => {
  const { datos } = useSelector(state => state.info);
  const [bandera, setBandera] = useState(false);
  const [dato, setDato] = useState({});
  const dispatch = useDispatch();
  console.log("ver", ver)

  let contador = +items+current*items

  const seteaBandera = (a) =>{
    if(!bandera){
      setBandera(true);
      dispatch(getData(a));
      setDato(a);
      
    }else{
      setBandera(false)

    }
  }

  const eliminar = () =>{
    helpDelete(datos.id)
  }
  console.log("dato",dato)
  const nextHandler = () =>{
    const next = current + 1;               // 1*10:10,2*10:20,3*10:30,4*10:40,5*10:50,... , 25*10:250
    const firstIndex = next * items; //1 * 9: 9, 2 * 9:18, 3 * 9: 27, 4 * 9: 36,... 11*9:99, 12 * 9:108
    if(firstIndex >= infosFilter.length )return;
    setCurrent(next);
  }

  const nextBox = (c) =>{
      const next = c;
      const firstIndex = next * items;
      if(infosFilter.length < 10)return
      if(firstIndex >= infosFilter.length )return; 
      setCurrent(next);
  }

  const prevHandler = () =>{
      const prev = current - 1;
      if(prev < 0)return;
      setCurrent(prev);
  }

  return (
    <div className={styles.tabla}>
      <table className={styles.onTable}>
        <tr className={styles.onTableTop}>
          <th>#</th>
          <th>NOMBRE</th>
          <th>CORREO ELECTRONICO</th>
          <th>PERFIL</th>
          <th>ESTADO</th>
          <th>FECHA MODIFICACIÓN</th>
          <th>ACCIONES</th>
        </tr>

        {current === 0 ?
                [...infosFilter].splice(current*items, items).map((a) => {  
                  return( 
                    <tr className={styles.tr}>
                      <td>{a.id}</td>
                      <td className={styles.td}><div>{a.name.split(" ").map(i=>i.slice(0,1))}</div>{a.name}</td>
                      {/* <td>{(a.status==="Alive")? <img src={require('../img/Icono de vivo.png')} alt="Vivo" />  : (a.status==="Dead")?<img src={require('../img/Icono de muerto.png')} alt="Vivo" />: "--"}</td> */}
                      <td>{a.email}</td>
                      <td>{profile.filter(i =>i.id === a.profile)[0].name}</td>
                      <td>{a.state === 1? <div className={styles.act}>Activo </div> : <div className={styles.inact}>Inactivo</div> }</td>
                      <td>{a.updated_at.slice(0,10)}</td>
                      <td onClick={()=>seteaBandera(a.id)}><img src={img} alt="img" /></td>
                      
                    </tr >
                  // <CountryCard  id={c.id} name ={c.name} image={c.image} continent={c.continent} /> 
                  )
              }): [...infosFilter].splice(current*items, items).map((a) => {  
                        return( 
                          <tr className={styles.tr}>
                            <td>{a.id}</td>
                            <td className={styles.td}><div>{a.name.split(" ").map(i=>i.slice(0,1))}</div>{a.name}</td>
                            {/* <td>{(a.status==="Alive")? <img src={require('../img/Icono de vivo.png')} alt="Vivo" />  : (a.status==="Dead")?<img src={require('../img/Icono de muerto.png')} alt="Vivo" />: "--"}</td> */}
                            <td>{a.email}</td>
                            <td>{profile.filter(i =>i.id === a.profile)[0].name}</td>
                            <td>{a.state === 1? <div className={styles.act}>Activo </div> : <div className={styles.inact}>Inactivo</div> }</td>
                            <td>{a.updated_at.slice(0,10)}</td>
                            <td onClick={()=>seteaBandera()}><img src={img} alt="img" /></td>
                            
                          </tr >
                        // <CountryCard  id={c.id} name ={c.name} image={c.image} continent={c.continent} /> 
                        )
                    })
            }
        
        {/* {
          infosFilter.length > 0? infosFilter.map((a) => (
            <tr>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.profile}</td>
              <td>{a.state}</td>
              <td>{a.updated_at.slice(0,10)}</td>
            </tr>
          )):null
        } */}
       
        
      </table>
      <div className={bandera?styles.acciones:styles.off}  >
                              
        <div onClick={()=>setVer(true)}><IoEyeOutline/> Ver</div>
        <div onClick={()=>setEditar(true)}><IoTrashOutline/> Editar</div>
        <div onClick={()=>eliminar(datos.id)}><IoReceiptOutline/> Eliminar</div>
      
    </div>

      {
      !infos.status || infosFilter.length===0?
        <div className={styles.sinDatos}>
          <img src={require('../../img/oops.png')} alt="" />
        </div>:null
      }
      <div className={styles.bottom}>
        <div className={styles.bottomLeft}>
            Viendo de {current*items+1} a {contador} de {infosFilter.length} entradas
        </div>
        <div className={styles.pagination}>
          <button className={styles.order} onClick={prevHandler}><IoChevronBackSharp/></button>
            <div className={styles.order}>
              <input className={styles.subOrderA}  type="button" value={current +1} onClick={() =>nextBox(current) } />
              <input className={styles.subOrder} type="button" value={current +2} onClick={() =>nextBox(current +1)} />
              <input className={styles.subOrder} type="button" value={current +3} onClick={() =>nextBox(current +2)} />
            </div>
          <button className={styles.order} onClick={nextHandler}><IoChevronForwardSharp/></button>
        </div>
      </div>

    </div>
  )
}

export default Tabla
