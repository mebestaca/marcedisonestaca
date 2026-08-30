import { NavCardProp } from '@/type'
import React from 'react'



const NavCard = ({label} : NavCardProp) => {
  return (
    <div>
      <p>{label}</p>
    </div>
  )
}

export default NavCard
