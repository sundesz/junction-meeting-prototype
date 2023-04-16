import { Link } from 'react-router-dom'

const MemberImage = (member) => {
  return (
    <div className='member-image'>
      <Link to={`/members/${member.member.id}`}>
        <div className='image'>{member.member.name}</div>
      </Link>

      <div className='email mt-3'>{member.member.email}</div>
    </div>
  )
}

export default MemberImage
