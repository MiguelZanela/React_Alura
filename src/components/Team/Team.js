import './Team.css'
import Collaborator from '../Collaborator'

export const Team = (props) => {
    // can be done this way, creating a constant and use in the style without the secondary {}
    // const cssSecondaryColor = { backgroundColor: props.secondaryColor }
    // <section className="team" style={cssSecondaryColor}>

    return(
        props.collaborators.length > 0 ? <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}> {props.name}</h3>
            <div className="teams">
                {props.collaborators.map(collaborator => <Collaborator
                                                        backgroundcolor={props.primaryColor}
                                                        key={collaborator.name}
                                                        name={collaborator.name}
                                                        job={collaborator.job} 
                                                        image={collaborator.image}
                                                        team={collaborator.team}
                />)}
            </div>            
        </section>
        : ''
    )
}