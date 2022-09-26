import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, setFilter, setFilterState, setFilterName, setFilterEmail, clearFilter } from '../store/reducer'
import styles from './filtros.module.css'
import icono from '../img/Clean.svg'

const Filtros = ({current, setCurrent, agregar, setAgregar}) => {
  const { profile } = useSelector(state => state.info);
  const { infosFilter } = useSelector(state => state.info);
  console.log('infosFilter',infosFilter)
  console.log("prof en filtros",profile)
  const dispatch = useDispatch();


  function handleFilter(e) {
		e.preventDefault();
    setCurrent(0)
		dispatch(setFilter(e.target.value));
    
	}

  function handleFilterState(e) {
		e.preventDefault();
    setCurrent(0)
		dispatch(setFilterState(e.target.value));
    
	}
  function handleFilterName(e) {
		setCurrent(0)
		dispatch(setFilterName(e.target.value));
    
	}
  function handleFilterEmail(e) {
		setCurrent(0)
		dispatch(setFilterEmail(e.target.value));
    
	}
  function handleClearFilter(e) {
		e.preventDefault();
    setCurrent(0)
		dispatch(clearFilter());
	}

  useEffect(() =>{
    profile.length===0 &&dispatch(getProfile());

  },[]) 


  return (
    <div className={styles.filtros}>
      <div className={styles.top}>
        
        <h3>Filtros de Búsqueda</h3>
        <div className={styles.boton} onClick={(e)=>{handleClearFilter(e)}}> <img src={icono} alt="icon" /> Limpiar Filtros</div>
        
      </div>
      <div className={styles.campos}>
        <div className={styles.subCampos}>
            <label>
                Nombre
                <input type="text" name="name" onChange={(e)=>{handleFilterName(e)}} />
            </label>
            <label>
                Correo Electrónico
                <input type="text" name="email"  onChange={(e)=>{handleFilterEmail(e)}}/>
            </label>

        </div>
        <div className={styles.subCampos}>
            <div>
                <p>Perfil</p>
                <select onChange={(e) => handleFilter(e)} placeholder="Perfil">
                  {/* <option>Perfil</option> */}
                  {
                    profile?.map(i=><option key={i.id} value={i.id}>{i.name}</option>)
                  }
                    
                </select>

            </div>
            <div>
                <p>Estado</p>
                <select onChange={(e) => handleFilterState(e)}>
                    <option key={1} value={1}>Activo</option>
                    <option key={0} value={0}>Inactivo</option>
                </select>

            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Filtros
