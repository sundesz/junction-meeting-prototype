import { Button, Container } from 'react-bootstrap'
import Role from './Role'
import Loading from '../../components/Loading'
import ErrorPage from '../../components/ErrorPage'
import { useGetTeamByIdQuery } from './teamsApiSlice'
import { Link, useParams } from 'react-router-dom'
import MemberImage from '../Members/MemberImage'

MemberImage

const SingleTeam = () => {
  const { teamId } = useParams()
  const { data: team, isLoading, error, isError } = useGetTeamByIdQuery(teamId)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorPage error={error} />
  }

  return (
    <Container className='single-team py-5'>
      <div className='section-1'>
        <div className='name'>
          <div>{team.name}</div>
          <div>
            <i>#{team.hashtag}</i>
          </div>
        </div>
        <div className='email'>{team.contactInfo}</div>
      </div>
      <div className='section-2  py-3'>
        <div className='description'>
          <p>{team.description}</p>
        </div>

        <div className='py-5'>
          <div className='uppercase py-2'>What we are looking for</div>
          <p>{team.projectIdea}</p>

          <div className='roles mt-2'>
            {team?.roles?.map((role) => (
              <Role key={role.id} role={role} />
            ))}
          </div>
        </div>
        <div className='py-3'>
          <div className='uppercase py-2'>Who we are</div>

          <div className='team-members'>
            {team?.members?.map((member) => (
              <MemberImage key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>

      <div className='section-3  py-3'>
        <Button
          variant='info'
          size='lg'
          as={Link}
          to={`/application/${team.id}/643a4fdc492764d723b202dd`}
        >
          Apply
        </Button>
      </div>
    </Container>
  )
}

export default SingleTeam
