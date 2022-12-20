import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import WLMDO from './WLMDO.png';
import NNQ from './NNQ.png';
import WA from './WA.png'
import GM from './GM.png'

function Projects(){
    return(
        <Container>
          <Card>
        <Card.Header>
            Projects
        </Card.Header>
        
        <Row>
          <Col>
          <Card>
      <Card.Img variant="top" src={NNQ} />
      <Card.Body>
        <Card.Title>Nerd Knowledge Quiz</Card.Title>
        <Card.Text>
        Full stack web-based quiz game. Built using Bootstrap, Node.js, and MySQL leveraging MVC architecture.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Shadin Al-Arab, Patrick Sobczyk, Shep Sheperdigian, Jacob Reeves, and Deborah Wade</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/shadin-a/ayatollah-of-rock-and-rolla">Github</Card.Link>
        <Card.Link href="https://sheltered-shore-88493.herokuapp.com/">Link</Card.Link>
      </Card.Body>
    </Card> 
          </Col>
          <Col>
          <Card>
      <Card.Img variant="top" src={WLMDO} />
      <Card.Body>
        <Card.Title>Who Let My DaWg Out</Card.Title>
        <Card.Text>
        RESTful web-based application to handle API calls. Front end design with Foundation. Calls were made to Google Maps API. 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Shadin Al-Arab, Patrick Sobczyk, Shep Sheperdigian, Akarim Abdi, and Scott Gauthier</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/sobe1290/wholetmydaWgout">Github</Card.Link>
        <Card.Link href="https://sobe1290.github.io/wholetmydaWgout/">Link</Card.Link>
      </Card.Body>
    </Card>
    </Col>
    <Col><Card>
      <Card.Img variant="top" src={GM} />
      <Card.Body>
        <Card.Title>GoMode</Card.Title>
        <Card.Text>
        Built using React, Node.js, and MongoDB leveraging Client/Server architecture., GoMode is an invite-only application. 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Shadin Al-Arab, Patrick Sobczyk, Shep Sheperdigian, Jacob Reeves, and Tony Tran</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/zshep/Fortress_of_Solitude">Github</Card.Link>
        <Card.Link href="https://gomodez.herokuapp.com/">Link</Card.Link>
      </Card.Body>
    </Card></Col>
        </Row>
        <Row>
          
          <Col>  <Card>
      <Card.Img variant="top" src={WA} />
      <Card.Body>
        <Card.Title>Weather Forecast</Card.Title>
        <Card.Text>
          Weather Application relying on API calls. Front end built with Bootstrap.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Shadin Al-Arab</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/shadin-a/MODULE6-WEATHER-DASHBOARD">Github</Card.Link>
        <Card.Link href="https://shadin-a.github.io/MODULE6-WEATHER-DASHBOARD/">Link</Card.Link>
      </Card.Body>
    </Card></Col>
        </Row>
        </Card>
      </Container>
    );
    }
    
    export default Projects;