import { NavCardProp } from '@/type'
import React from 'react'



const NavCard = ({label, id, isActive, onClickHandler} : NavCardProp) => {
  return (
    <div>
      <p>{label}</p>
    </div>
  )
}

export default NavCard
