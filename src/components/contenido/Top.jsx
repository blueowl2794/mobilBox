import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterName } from '../../store/reducer'
import style from './top.module.css'

const Top = ({infos, profile, items, setItems, agregar, setAgregar}) => {
  console.log('items',items)
  const dispatch = useDispatch();
  function handleFilterName(e) {
		
		dispatch(setFilterName(e.target.value));
    
	}
  function handleSetItems(e){
    setItems(e.target.value);
  }

  function handleSetAgregar(){
    if (!agregar) {
      setAgregar(true);
    }else{
      setAgregar(false);
    }
  }
  console.log("agg",agregar);
  return (
    <div className={style.top}>
        <div className={style.topT}>
            <h3>USUARIOS</h3>
            <div>
                <div className={style.botonA} onClick={() =>handleSetAgregar()}>Agregar Usuario</div>
                <div className={style.botonB}>Export</div>
            </div>
        </div>

        <div className={style.espacio}></div>
        <div className={style.topB}>
          <div className={style.topBLeft}>
              <p>Ver</p> 
              <select onChange={(e) => handleSetItems(e)}>
                  <option key={10}>10</option>
                  <option key={9}>9</option>
                  <option key={8}>8</option>
                  <option key={7}>7</option>
                  <option key={6}>6</option>
                  <option key={5}>5</option>
                  <option key={4}>4</option>
                  <option key={3}>3</option>
                  <option key={2}>2</option>
                  <option key={1}>1</option>
              </select>
          </div>
          <form className={style.topBRight}>
              <label>
                  Buscar
                  <input type="text" name="buscar" onChange={(e)=>{handleFilterName(e)}}/>
              </label>
          </form>
        </div>
    </div>
  )
}

export default Top
