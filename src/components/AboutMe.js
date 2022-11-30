import { Stack } from 'react-bootstrap';
import React from "react";
import {Card, Row, Col, Image} from 'react-bootstrap';
import PP from './PP.jpeg';
//CREATE FUNCTION
function About(){

    return(
        <Card>
        <Card.Header>
            About Me
        </Card.Header>
        <Stack direction="horizontal" className="m-3 p-3">
        </Stack>
        <Row>
          <Col sm={4}>
        <Image roundedCircle src={PP} alt="your mom" />
        </Col>
        <Col sm={8}>
        <Card.Body>
          <Card.Text>
          I am a Full Stack JavaScript Web Developer, MERN Stack, with a background in linguistics and Romance and Semitic languages.
          </Card.Text>
          <Card.Text>
        As a lifelong student, I focus my attentions on the intersection of languages, technology, and learning. A ardent beleiver in the KISS methodology and collabrative work.
        When I'm not imbedded in my computer screen, you can find me outside with my dog, touching some grass.
          </Card.Text>
          <Card.Text>
         Skills include: Node.js, CSS, Javascript
          </Card.Text>
        </Card.Body>
        </Col>
        </Row>
      </Card>
    );
}
//EXPORT FUNCTION

export default About;