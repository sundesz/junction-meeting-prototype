import { useParams } from 'react-router-dom'
import ErrorPage from '../../components/ErrorPage'
import Loading from '../../components/Loading'
import { useGetMemberByIdQuery } from './membersApiSlice'
import Rating from './Rating'
import { Container } from 'react-bootstrap'
import Skill from './Skill'

const SingleMember = () => {
  const { memberId } = useParams()
  const {
    data: member,
    isLoading,
    error,
    isError,
  } = useGetMemberByIdQuery(memberId)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorPage error={error} />
  }

  return (
    <Container className='member py-5'>
      <div className='section-1'>
        <div className='name-role'>
          <div className='name'>{member.name}</div>
          <div className='role text-muted'>/ UX Designer</div>
        </div>
        <div className='email'>{member.email}</div>
      </div>
      <div className='section-2 mt-5'>
        <div className='photo'>
          {/* <img src='' alt='test' /> */}
          <div className='image'>No Photo</div>
        </div>
        <div className='skills'>
          <div className='title'>Skills</div>
          <div className='skill-sets mt-3'>
            {member?.skills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div className='about-me'>
          <div className='title mb-3'>About me</div>

          <p>{member.description}</p>
        </div>
      </div>
    </Container>
  )
}

export default SingleMember

// import { Container } from 'react-bootstrap'
// import Rating from './Rating'

// const Members = () => {
//   return (
//     <Container className='py-5'>
//       <div className='member'>
//         <div className='section-1'>
//           <div className='name-role'>
//             <div className='name'>Andrea Smith</div>
//             <div className='role text-muted'>/ UX Designer</div>
//           </div>
//           <div className='email'>andrea.smith@junction.fi</div>
//         </div>
//         <div className='section-2 mt-5'>
//           <div className='photo'>
//             {/* <img src='' alt='test' /> */}
//             <div className='image'>No Photo</div>
//           </div>
//           <div className='skills'>
//             <div className='title'>Skills</div>
//             <div className='skill-sets mt-3'>
//               <div className='skill'>
//                 <Rating rating={4} />
//                 <div className='name'>Photoshop</div>
//               </div>
//               <div className='skill'>
//                 <Rating rating={3} />
//                 <div className='name'>Photoshop</div>
//               </div>
//               <div className='skill'>
//                 <Rating rating={2} />
//                 <div className='name'>Photoshop</div>
//               </div>
//             </div>
//           </div>
//           <div className='about-me'>
//             <div className='title mb-3'>About me</div>

//             <p>
//               I'm studying at Aalto university. I have experience in UX Design
//               which I acquire not only through studying but also through working
//               for 2 years with Google. I aim to develop a feasible and useful
//               idea that is based on empathy and understanding of human
//               psychology. We are a team of three friends studying at Aalto
//               University. We have several ideas for the upcoming project but we
//               are sure that we would like to approach the topic from a user
//               centered point of view. We aim to develop a feasible and useful
//               idea that is based on empathy and understanding of human
//               psychology
//             </p>
//           </div>
//         </div>
//       </div>
//     </Container>
//   )
// }

// export default Members
