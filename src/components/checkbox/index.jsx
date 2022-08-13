import { useState,forwardRef } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
const CheckBox = forwardRef(
   ({id,checked,...props},forwardedRef)=>{
  const [isChecked, setIsChecked] = useState(checked)
    return <div className={styles.checkboxContainer}>
      <input type="checkbox" checked={isChecked} id={id}onChange={()=> setIsChecked(!isChecked)} {...props} ref={forwardedRef}/>
      <label htmlFor={id}></label>
    </div>
})

CheckBox.propTypes = {
  id:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  checked:PropTypes.bool
}
export default CheckBox