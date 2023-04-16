import { Link } from 'react-router-dom'
import Role from './Role'

const Team = ({ team }) => {
  return (
    <div className='team'>
      <div className='header'>
        <div className='title'>
          <Link to={`/teams/${team.id}`}>{team.name}</Link>
        </div>
        <div className='hashtag'>#{team.hashtag}</div>
      </div>
      <p>{team.projectIdea}</p>
      <div>
        <div className='uppercase mb-2'>We are looking for</div>

        <div className='roles'>
          {team?.roles?.map((role) => (
            <Role key={role.id} role={role} />
          ))}
        </div>
      </div>

      <div className='pt-3'>
        <Link to={`/teams/${team.id}`}>Read more ...</Link>
      </div>
    </div>
  )
}

export default Team
