import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card, ListGroup } from 'react-bootstrap';
import { cardArray } from '../data/cardData';
import "./CardComponent.css"

function CardComponent() {

    const [isContentVisible, setContentVisibility] = useState(false);

    const toggleContent = () => {
      setContentVisibility(!isContentVisible);
    }
  return (
    <div className='row ms-3 mt-4'>
    
    {
        
    cardArray.map(card=>( 
      <div className='col-lg-4 mt-3 '>
      <Card className='cardstyle 'style={{ width: '90%',height:'100%',padding:'12px',boxShadow:'2px 2px 30px ' }} >
      {/* <Card.Img variant="top" src={} /> */}
      <Card.Body>
        <Card.Title>{card.id}</Card.Title>
        <Card.Text>
          {card.parent_sec}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Type: {card.data_type}</ListGroup.Item>
        <ListGroup.Item> : {card.data_value} %</ListGroup.Item>
        <ListGroup.Item>Rating :<a>{card.link_name}</a> </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
    </div>

    ))
    }
  </div>
      )
}

export default CardComponent