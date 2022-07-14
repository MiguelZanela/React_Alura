import { useState } from 'react';

import './Form.css';
import TextBox from '../TextBox'
import DropDownList from '../DropDownList'
import Button from '../Button';


export const Form = (props) => {

    // Hooks, value field for read and setValue for set the value
    // const [value, setValue] = useState('you can put any default value here')
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const whenSaving = (event) => {
        event.preventDefault()
        props.toTheRegisteredCollaborator({
            name, // the same as  name: name
            job, // the same as  job: job
            image, // the same as  image: image
            team // the same as  team: team
        })
        setName('')
        setJob('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">            
            <form onSubmit={whenSaving}>
                <h2>Fill in the data to create the contributor card</h2>    	    
                <TextBox 
                    mandatory={true} 
                    label="Name" 
                    placeholder="type your name" 
                    value={name}
                    whenChanged={value => setName(value)}
                />
                <TextBox 
                    mandatory={true} 
                    label="Job title" 
                    placeholder="enter your job title" 
                    value={job}
                    whenChanged={value => setJob(value)}
                />
                <TextBox 
                    label="Image" 
                    placeholder="provide the URL of the image" 
                    value={image}
                    whenChanged={value => setImage(value)}
                />
                <DropDownList 
                    mandatory={true} 
                    label="Teams"
                    items={props.teamsName}
                    value={team}
                    whenChanged={value => setTeam(value)}
                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )    
}