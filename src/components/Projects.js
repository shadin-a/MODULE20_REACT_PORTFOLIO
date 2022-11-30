import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card} from 'react-bootstrap';
import WLMDO from './WLMDO.png';

function Projects(){
    return(
        <Container>
        <Row>
          <Col> <Card className="bg-dark text-black">
      <Card.Img src={WLMDO} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Nerd Knowledge Quiz</Card.Title>
        <Card.Text>
        Fullstack web-based quiz game. Built using Bootstrap, Node.js, and MySQL leveraging MVC architecture.
        </Card.Text>
        <Card.Text>Link</Card.Text>
      </Card.ImgOverlay>
    </Card></Col>
          <Col> <Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card></Col>
        </Row>
        <Row>
          <Col><Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card></Col>
          <Col><Card className="bg-dark text-white">
      <Card.Img src="holder.js/100px270" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card></Col>
        </Row>
      </Container>
    );
    }
    
    export default Projects;