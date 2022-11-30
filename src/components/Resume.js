import React from 'react'
import { Container, Button} from 'react-bootstrap'

function Resume() {
        const Clickdownload = () => {
            // using fetch moethod to grab the pdf
            fetch('public/ALARAB_RESUME.pdf').then(response => {
                response.blob().then(blob => {
                    let alink = document.createElement('a');
                    alink.href = "./ALARAB_RESUME.pdf";
                    alink.download = `ALARAB_RESUME`;
                    alink.click();
                })
            })
        }
    
        return(

                <Container center>
    
                    <Button value="download" onClick={Clickdownload}>Download Resume</Button>
    
                </Container>
                );
}

export default Resume