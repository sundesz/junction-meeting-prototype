import { Container } from 'react-bootstrap'
import { useGetAllTeamsQuery } from './teamsApiSlice'
import ErrorPage from '../../components/ErrorPage'
import Loading from '../../components/Loading'
import Team from './Team'
import { useSelector } from 'react-redux'

const Teams = (isHomePage = false) => {
  const { data: teams, isLoading, error, isError } = useGetAllTeamsQuery()
  const teamFilter = useSelector((state) => state.teamFilter.filter)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorPage error={error} />
  }

  const filteredTeam =
    teamFilter === ''
      ? teams
      : teams.filter(
          (team) =>
            team.name.toLowerCase().includes(teamFilter) ||
            team.hashtag.toLowerCase().includes(teamFilter)
        )

  return (
    <>
      <Container className='teams py-5'>
        {filteredTeam?.map((team) => (
          <Team key={team.id} team={team} />
        ))}
      </Container>
    </>
  )
}

export default Teams
