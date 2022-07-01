import './Form.css';
import TextBox from '../TextBox'

export const Form = () => {
    return (
        <section className="form">            
            <form>
                <h2>fill in the data to create the contributor card</h2>    	    
                <TextBox label="Name" placeholder="type your name"/>
                <TextBox label="Job title" placeholder="enter your job title"/>
                <TextBox label="Image" placeholder="provide the URL of the image"/>
            </form>
        </section>
    )    
}