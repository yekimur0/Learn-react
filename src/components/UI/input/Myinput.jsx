import React from 'react'
import classes from './Myinput.module.css'

const Myinput = React.forwardRef((props, ref) => {
 return (

  <input ref={ref} {...props} className={classes.myInput}/>



 )
});

export default Myinput