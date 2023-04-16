db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'junction_meeting',
    },
  ],
})

db.createCollection('teams')
db.createCollection('members')
db.createCollection('skills')
db.createCollection('skillSets')
db.createCollection('roles')

db.teams.insertMany([
  {
    _id: 'team_1',
    name: 'Team 1',
    hashtag: 'fazer',
    description:
      "Team 1 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum",
    projectIdea:
      "Our idea is to design a team 1. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    contactInfo: 'Team 1 contact info',
    members: ['member_1', 'member_2', 'member_3'],
    roles: ['role_1', 'role_2', 'role_3'],
  },
  {
    _id: 'team_2',
    name: 'Team 2',
    hashtag: 'team2',
    description:
      "Team 2 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum",
    projectIdea:
      "Our idea is to design a team 2. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    contactInfo: 'Team 2 contact info',
    members: ['member_4', 'member_5', 'member_6'],
    roles: ['role_4', 'role_5', 'role_6'],
  },
  {
    _id: 'team_3',
    name: 'Team 3',
    hashtag: 'team3',
    description:
      "Team 3 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum",
    projectIdea:
      "Our idea is to design a team 3. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    contactInfo: 'Team 3 contact info',
    members: ['member_7', 'member_1', 'member_2'],
    roles: ['role_7', 'role_8', 'role_9'],
  },
  {
    _id: 'team_4',
    name: 'Team 4',
    hashtag: 'team4',
    description:
      "Team 4 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum",
    projectIdea:
      "Our idea is to design a team 4. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    contactInfo: 'Team 4 contact info',
    members: ['member_3', 'member_4', 'member_5'],
    roles: ['role_10', 'role_1', 'role_2'],
  },
  {
    _id: 'team_5',
    name: 'Team 5',
    hashtag: 'team5',
    description:
      "Team 5 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum",
    projectIdea:
      "Our idea is to design a team 5. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    contactInfo: 'Team 5 contact info',
    members: ['member_6', 'member_7', 'member_1'],
    roles: ['role_3', 'role_4', 'role_5'],
  },
])

db.members.insertMany([
  {
    _id: 'member_1',
    name: 'Member 1',
    email: 'member_1@email.com',
    description:
      "member_1 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: ['skill_1', 'skill_2', 'skill_3', 'skill_4'],
  },
  {
    _id: 'member_2',
    name: 'Member 2',
    email: 'member_2@email.com',
    description:
      "member_2 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: ['skill_5', 'skill_6', 'skill_7', 'skill_8'],
  },
  {
    _id: 'member_3',
    name: 'Member 3',
    email: 'member_3@email.com',
    description:
      "member_3 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: ['skill_9', 'skill_10', 'skill_11', 'skill_12'],
  },
  {
    _id: 'member_4',
    name: 'Member 4',
    email: 'member_4@email.com',
    description:
      "member_4 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: ['skill_13', 'skill_14', 'skill_15', 'skill_16'],
  },
  {
    _id: 'member_5',
    name: 'Member 5',
    email: 'member_5@email.com',
    description:
      "member_5 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: ['skill_17', 'skill_18', 'skill_19', 'skill_20'],
  },
  {
    _id: 'member_6',
    name: 'Member 6',
    email: 'member_6@email.com',
    description:
      "member_6 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: ['skill_21', 'skill_22', 'skill_23', 'skill_24'],
  },
  {
    _id: 'member_7',
    name: 'Member 7',
    email: 'member_7@email.com',
    description:
      "member_7 description. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    skills: ['skill_25', 'skill_26', 'skill_27', 'skill_28'],
  },
])

db.skillSets.insertMany([
  { _id: 'skillset_1', name: 'Photoshop' },
  { _id: 'skillset_2', name: 'Illustrator' },
  { _id: 'skillset_3', name: 'Design Management' },
  { _id: 'skillset_4', name: 'Set Design' },
  { _id: 'skillset_5', name: 'Figma' },
  { _id: 'skillset_6', name: 'Rhinoceros 3D' },
  { _id: 'skillset_7', name: 'HTML/CSS' },
  { _id: 'skillset_8', name: 'PHP' },
  { _id: 'skillset_9', name: 'SQL' },
  { _id: 'skillset_10', name: 'React' },
  { _id: 'skillset_11', name: 'React Native' },
  { _id: 'skillset_12', name: 'Node.js' },
  { _id: 'skillset_13', name: 'MongoDB' },
  { _id: 'skillset_14', name: 'PostgresDB' },
])

db.skills.insertMany([
  { _id: 'skill_1', member: 'member_1', skill: 'skillset_1', rating: '2' },
  { _id: 'skill_2', member: 'member_1', skill: 'skillset_2', rating: '4' },
  { _id: 'skill_3', member: 'member_1', skill: 'skillset_3', rating: '4' },
  { _id: 'skill_4', member: 'member_1', skill: 'skillset_4', rating: '5' },
  { _id: 'skill_5', member: 'member_2', skill: 'skillset_5', rating: '2' },
  { _id: 'skill_6', member: 'member_2', skill: 'skillset_6', rating: '4' },
  { _id: 'skill_7', member: 'member_2', skill: 'skillset_7', rating: '4' },
  { _id: 'skill_8', member: 'member_2', skill: 'skillset_8', rating: '5' },
  { _id: 'skill_9', member: 'member_3', skill: 'skillset_9', rating: '2' },
  { _id: 'skill_10', member: 'member_3', skill: 'skillset_10', rating: '4' },
  { _id: 'skill_11', member: 'member_3', skill: 'skillset_11', rating: '4' },
  { _id: 'skill_12', member: 'member_3', skill: 'skillset_12', rating: '5' },
  { _id: 'skill_13', member: 'member_4', skill: 'skillset_13', rating: '2' },
  { _id: 'skill_14', member: 'member_4', skill: 'skillset_14', rating: '4' },
  { _id: 'skill_15', member: 'member_4', skill: 'skillset_1', rating: '4' },
  { _id: 'skill_16', member: 'member_4', skill: 'skillset_2', rating: '5' },
  { _id: 'skill_17', member: 'member_5', skill: 'skillset_3', rating: '2' },
  { _id: 'skill_18', member: 'member_5', skill: 'skillset_4', rating: '4' },
  { _id: 'skill_19', member: 'member_5', skill: 'skillset_5', rating: '4' },
  { _id: 'skill_20', member: 'member_5', skill: 'skillset_6', rating: '5' },
  { _id: 'skill_21', member: 'member_6', skill: 'skillset_7', rating: '2' },
  { _id: 'skill_22', member: 'member_6', skill: 'skillset_8', rating: '4' },
  { _id: 'skill_23', member: 'member_6', skill: 'skillset_9', rating: '4' },
  { _id: 'skill_24', member: 'member_6', skill: 'skillset_10', rating: '5' },
  { _id: 'skill_25', member: 'member_7', skill: 'skillset_11', rating: '2' },
  { _id: 'skill_26', member: 'member_7', skill: 'skillset_12', rating: '4' },
  { _id: 'skill_27', member: 'member_7', skill: 'skillset_13', rating: '4' },
  { _id: 'skill_28', member: 'member_7', skill: 'skillset_14', rating: '5' },
])

db.roles.insertMany([
  { _id: 'role_1', name: 'Designer' },
  { _id: 'role_2', name: 'UX Designer' },
  { _id: 'role_3', name: 'UI Designer' },
  { _id: 'role_4', name: 'Developer' },
  { _id: 'role_5', name: 'Frontend Developer' },
  { _id: 'role_6', name: 'Backend Developer' },
  { _id: 'role_7', name: 'Fullstack Developer' },
  { _id: 'role_8', name: 'Devops' },
  { _id: 'role_9', name: 'Engineer 1' },
  { _id: 'role_10', name: 'Engineer 2' },
])
