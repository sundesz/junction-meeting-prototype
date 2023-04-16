import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Page404 from './components/Page404'
import Home from './feature/Home'
import Teams from './feature/Teams'
import Members from './feature/Members'
import Application from './feature/Application'
import SingleTeam from './feature/Teams/SingleTeam'
import SingleMember from './feature/Members/SingleMember'
import Success from './feature/Application/Success'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />

          <Route path='teams'>
            <Route index element={<Teams />} />
            <Route path=':teamId' element={<SingleTeam />} />
            <Route
              path=':teamId/application/:memberId'
              element={<Application />}
            />
          </Route>

          <Route path='members'>
            <Route index element={<Members />} />
            <Route path=':memberId' element={<SingleMember />} />
          </Route>

          <Route path='application'>
            <Route
              path='/application/:teamId/:memberId'
              element={<Application />}
            />
            <Route path='/application/success' element={<Success />} />
          </Route>

          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
