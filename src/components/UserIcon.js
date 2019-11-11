import React,{useState} from 'react';

const UserIcon =(props)=>{
    console.log(props)
    const[activesIcon, setactivesIcon] =useState(false)
    const handleChange = ()=>{
         setactivesIcon(!activesIcon);
         props.activeHandle(activesIcon);
    }
    return (
        <>
        <div className={`user-icon-container`}>
        	<a href="#" className={`user-icon ${activesIcon===true ? 'active':'' }`} onClick={handleChange} >{props.iconTexts}</a>			
        </div>
        </>
    )
}
export default UserIcon;