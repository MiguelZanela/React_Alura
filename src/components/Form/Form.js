import './Form.css';
import TextBox from '../TextBox'
import DropDownList from '../DropDownList'
import Button from '../Button';

export const Form = () => {

    const teams = [
        '',
        'Programming',
        'Front-End',
        'Data Science',
        'Devops',
        'UX and Design',
        'Mobile',
        'Innovation and Management'
    ]

    const whenSaving = (event) => {
        event.preventDefault()
        console.log('Form submit')
    }

    return (
        <section className="form">            
            <form onSubmit={whenSaving}>
                <h2>Fill in the data to create the contributor card</h2>    	    
                <TextBox mandatory={true} label="Name" placeholder="type your name" />
                <TextBox mandatory={true} label="Job title" placeholder="enter your job title" />
                <TextBox label="Image" placeholder="provide the URL of the image" />
                <DropDownList mandatory={true} label="Teams" itens={teams} />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )    
}