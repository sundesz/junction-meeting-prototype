import React from 'react'
import Rating from './Rating'

const Skill = (skill) => {
  return (
    <div className='skill'>
      <Rating rating={skill.skill.rating} />
      <div className='name'>{skill.skill.skill.name}</div>
    </div>
  )
}

export default Skill
