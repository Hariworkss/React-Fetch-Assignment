import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card, ListGroup } from 'react-bootstrap';
import { cardArray } from '../data/cardData';
import "./CardComponent.css"

function CardComponent() {

    // const [isContentVisible, setContentVisibility] = useState(false);

    // const toggleContent = () => {
    //   setContentVisibility(!isContentVisible);
    // }


    // toggle theme 
      const [isBlackBackground, setIsBlackBackground] = useState(false);
    
      const toggleBackgroundColor = () => {
        setIsBlackBackground(!isBlackBackground);
      };
    
      const divStyle = {
        color: isBlackBackground ? 'white' : 'black',
        backgroundColor: isBlackBackground ? 'black' : 'white',
      };

    //mapping until card 3
    function mapCardArrayUntilCard3(cardArray) {
      const result = [];
    
      for (const card of cardArray) {
        result.push(card);
    
        if (card.id === "card3") {
          break; 
        }
      }
    
      return result;
    }
    const mappedCards = mapCardArrayUntilCard3(cardArray);

    // mapping remaining cards after card 3
    function mapCardArrayAfterCard3(cardArray) {
      const result = [];
    
      let foundCard3 = false;
    
      for (const card of cardArray) {
        if (foundCard3) {
          result.push(card);
        }
    
        if (card.id === "card3") {
          foundCard3 = true;
        }
      }
    
      return result;
    }
    const cardsAfterCard3 = mapCardArrayAfterCard3(cardArray);


    //state & fn for toggle content 
      const [showContent, setShowContent] = useState(false);
    
      function toggleContent () {
        setShowContent(!showContent);
      }
    

  return (
    
    <div className='row ms-3 mt-4 pb-4' style={divStyle}>
    <h1 className='text-center fw-bolder  mt-4 mb-2'>Card Section</h1>
    {/* toggle theme  - button */}
    <div className='row  mt-4 mb-5'>
        <div className='col-lg-4 mt-3 '></div>
        <div className='col-lg-4 mt-3 text-center '>
    <button className='btn  btn-secondary border-4 w-50 shadow' onClick={toggleBackgroundColor}>
        {isBlackBackground ? 'Dark Mode' : 'Light Mode'}
      </button>
      </div>
      <div className='col-lg-4 mt-3 '>
        </div>
      </div>
    { 
        
    mappedCards.map(card=>( 
      <div className='col-lg-4 mt-3 '>
      <Card className='cardstyle 'style={{ width: '90%',height:'100%',padding:'12px',boxShadow:'2px 2px 30px ' }} >
      <Card.Body>
        <Card.Title>{card.id}</Card.Title>
        <Card.Text>
          {card.parent_sec}
        </Card.Text>
      </Card.Body>
        {card.id=="card11" &&
      <Card.Img variant="top" src={card.data_value} />
    }
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


    {/* button seemore */}
        <div className='row  mt-4'>
        <div className='col-lg-4 mt-3 '></div>
        <div className='col-lg-4 mt-3 text-center '>
    <button className='btn btn-primary shadow' onClick={toggleContent}>
        {showContent ? 'Hide Content' : 'See More'}
      </button>
      </div>
      <div className='col-lg-4 mt-3 '>
        </div>
      </div>


    {/* cards after card 3 */}
    { showContent && (

        
        cardsAfterCard3.map(card=>( 
          <div className='col-lg-4 mt-3 p-3'>
          <Card className='cardstyle 'style={{ width: '90%',height:'100%',padding:'12px',boxShadow:'2px 2px 30px ' }} >
          <Card.Body>
            <Card.Title>{card.id}</Card.Title>
            <Card.Text>
              {card.parent_sec}
            </Card.Text>
          </Card.Body>
            {card.id=="card11" &&
          <Card.Img variant="top" src={card.data_value} />
        }
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Type: {card.data_type}</ListGroup.Item>
            {card.id!=="card11" &&
            <ListGroup.Item>Content : {card.data_value} %</ListGroup.Item>
              }
          </ListGroup>
          <Card.Body>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        </div>
    
        ))
        )}
        

  </div>
      )
}

export default CardComponent