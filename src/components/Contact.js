import React from 'react'
import { Stack, FloatingLabel, Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';


function Contact() {
    return (
        <Stack gap={2} className="col-md-5 mx-auto">
            <h1>Want to collaborate?</h1>
        <Form>
        <FloatingLabel controlId="floatingName" label="Name">
        <Form.Control type="text" placeholder="Charlie Brown" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingMessage" label="Message">
          <Form.Control type="text"/>
        </FloatingLabel>
        <Button variant="dark" type="submit">
        Send
      </Button>
      </Form>
      </Stack>
    )
}

export default Contact