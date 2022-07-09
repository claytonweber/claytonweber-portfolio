import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

function ProjectCard(props) {


  return(
    <Col className="col-6 p-2 text-center">
      <Card className="card">
        <Card.Body className="card">
          <Card.Title className="card-title">{props.name}</Card.Title>
          
          <Button variant="primary">{props.name}</Button>
        </Card.Body>
        <Card.Body>
          <Card.Link></Card.Link>
        </Card.Body>
      </Card>
    </Col>

  )
}

export default ProjectCard;