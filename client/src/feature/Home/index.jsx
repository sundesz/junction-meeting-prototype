import { Card, Container } from 'react-bootstrap'
import Teams from '../Teams'

const Home = () => {
  return (
    <>
      <section className='py-5'>
        <Container className='home'>
          <div className='mx-auto paragraph'>
            <h1 className='header'>Join a team </h1>
            <p className='description'>
              Apply for a role that suits you the most and join a team.
            </p>
          </div>

          <Teams />
        </Container>
      </section>
    </>
  )
}

export default Home
