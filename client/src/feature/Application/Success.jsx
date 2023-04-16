import { Container } from 'react-bootstrap'
import { CheckCircleFill } from 'react-bootstrap-icons'

const Success = () => {
  return (
    <Container className='application py-5'>
      <div className='mx-auto paragraph'>
        <h1 className='header'>Apply</h1>
        <p className='description'>
          Send you profile information and motivation message to PINK UNICORN.
        </p>
      </div>

      <div className='block'>
        <div className='title py-4'>
          <div className='name'>pink unicorn</div>
          <div className='hashtag'>#Fazer</div>
        </div>
        <div className='success-block py-2'>
          <CheckCircleFill size={180} color='#2ed26e' />
          <div className='py-3'>
            <div style={{ fontSize: '2rem' }}>From sent successfully</div>
            <div>View the form</div>
          </div>
          <div className='pt-5'>
            Please wait for the team's response in your mail.
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Success
