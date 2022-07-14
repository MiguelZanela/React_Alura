import './Collaborator.css'

// instead of using the props, you can unstructure the props to get only the variables you need
export const Collaborator = ({name, job, image, backgroundcolor}) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: backgroundcolor }}>
                <img src={image} alt='Miguel Zanela'/>
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{job}</h5>
            </div>
        </div>
    )
}