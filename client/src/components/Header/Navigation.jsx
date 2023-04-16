import { Link, useLocation } from 'react-router-dom'
import { Container, Form, Nav, Navbar } from 'react-bootstrap'
import junctionLogo from '../../assets/logo.svg'
import { useDispatch } from 'react-redux'
import { setTeamFilter } from '../../feature/Teams/teamFilterSlice'
import { useState } from 'react'

const Navigation = () => {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  const location = useLocation()

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase()
  }

  const filterChangeHandler = (e) => {
    setFilter(() => e.target.value)
    dispatch(setTeamFilter(e.target.value))
  }

  return (
    <Navbar bg='dark' variant='dark' className='py-4'>
      <Container>
        <Navbar.Brand id='app-name' as={Link} to='/'>
          <img src={junctionLogo} className='logo' alt='Junction logo' />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end right-side-link'>
          <Nav className='me-auto'>
            <Nav.Link id='teams-link' as={Link} to='/teams' title='Teams'>
              Teams
            </Nav.Link>
            <Nav.Link id='members-link' as={Link} to='/members' title='Members'>
              Members
            </Nav.Link>
          </Nav>

          <Nav>
            {isCurrentURL('/teams') ? (
              <Navbar.Text>
                <Form.Control
                  type='text'
                  name='filter'
                  value={filter}
                  onChange={filterChangeHandler}
                  placeholder='Team filter ...'
                />
              </Navbar.Text>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
