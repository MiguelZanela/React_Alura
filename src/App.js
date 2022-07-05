import { useState } from 'react';

import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: '',
    },
    {
      name: 'Programming',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX and Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Innovation and Management',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ];

  const [collaborators, setCollaborator] = useState([])

  const toTheNewRegisteredCollaborator = (collaborator) => {
    console.log(collaborator)
    setCollaborator([...collaborators, collaborator])
  }

  const returnOnlyValidTeams = (teams) => {
    var validTeams = teams.reduce((validTeams,team) => {
      if (team.name !== '') {
        validTeams.push(team);
      }
      return validTeams;
    }, []);
    return validTeams;
  }

  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map(team => team.name)} toTheRegisteredCollaborator={collaborator => toTheNewRegisteredCollaborator(collaborator)}/>
      {returnOnlyValidTeams(teams).map(team => <Team 
                                        key={team.name} 
                                        name={team.name} 
                                        primaryColor={team.primaryColor} 
                                        secondaryColor={team.secondaryColor}
                                        collaborator={collaborators}
                                        />)}
    </div>
  );
}

export default App;
