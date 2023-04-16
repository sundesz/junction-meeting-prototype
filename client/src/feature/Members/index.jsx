import { Container } from 'react-bootstrap'
import { useGetAllMembersQuery } from './membersApiSlice'
import Loading from '../../components/Loading'
import ErrorPage from '../../components/ErrorPage'
import MemberImage from './MemberImage'

const Members = () => {
  const { data: members, isLoading, error, isError } = useGetAllMembersQuery()

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorPage error={error} />
  }

  return (
    <Container className='members py-5'>
      {members?.map((member) => (
        <MemberImage key={member.id} member={member} />
      ))}
    </Container>
  )
}

export default Members
