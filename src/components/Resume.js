import React from 'react'
import { Container, ListGroup} from 'react-bootstrap'
import {Col, Row} from 'react-bootstrap'
import resume from './ALARAB_RESUME.pdf';

function Resume() {
        // const Clickdownload = () => {
        //     // using fetch moethod to grab the pdf
        //     fetch('public/ALARAB_RESUME.pdf').then(response => {
        //         response.blob().then(blob => {
        //             let alink = document.createElement('a');
        //             alink.href = "./ALARAB_RESUME.pdf";
        //             alink.download = `ALARAB_RESUME`;
        //             alink.click();
        //         })
        //     })
        // }
    
        return(
                <Row>
                    <Col>
                <Container >
                <h2>Resume </h2>
                    {/* <Button variant="dark" value="download"> */}
                        <a href={resume} target="_blank" rel="noreferrer">Download</a>
                        {/* </Button> */}
    
                </Container>
                </Col>
                <Col> <h2>Proficiencies </h2>
                <ListGroup variant="flush">
      <ListGroup.Item>MySQL</ListGroup.Item>
      <ListGroup.Item>Javascript</ListGroup.Item>
      <ListGroup.Item>Bootstrap</ListGroup.Item>
      <ListGroup.Item>Node.js</ListGroup.Item>
      <ListGroup.Item>Heroku</ListGroup.Item>
      <ListGroup.Item>Github</ListGroup.Item>
      <ListGroup.Item>MongoDB</ListGroup.Item>
    </ListGroup>
                </Col>
                </Row>
                );
}

export default Resume