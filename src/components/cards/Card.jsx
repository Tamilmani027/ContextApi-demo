import React, { use, useContext } from 'react'
import Button from '../buttons/Button'
import Context from '../Context'

const Card = ({name,email,btn}) => {
	const {count,setCount}=useContext(Context);
	
	return (
		<div className='CardUI'>
		<div className='cardinfo'>
			<h3>{name}</h3>
			<p>{email}</p>
		</div>

		<div className='Btn'>
			<Button onClick={()=>setCount(count+1)} btn={btn}></Button>
		</div>
		</div>
	)
}

export default Card
