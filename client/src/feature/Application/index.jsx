import { Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Application = () => {
  const { teamId, memberId } = useParams()
  const navigate = useNavigate()

  const successPageHandler = () => {
    navigate('/application/success')
  }

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

        <div className='text-field'>
          <div>
            Why do you want to apply for the position of a Designer and work
            with "Pink Unicorn?"
          </div>
          <div>Max. 400 words </div>

          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            className='form-control'
          ></textarea>
          <div>
            * Your profile information is automatically included in the
            application.
          </div>

          <div className='application-btn my-4'>
            <Button variant='info' size='lg' onClick={successPageHandler}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Application
