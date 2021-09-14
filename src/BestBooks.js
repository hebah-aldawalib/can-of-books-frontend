
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

class BestBooks extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      bookData:[],
    }
  }


  componentDidMount = () => {
   

    axios.get(`${process.env.REACT_APP_API_URL}/book`).then((bookResponse) => {



      this.setState({  bookData: bookResponse.data });
      console.log(this.state.bookData);

 

      this.setState({  bookData: bookResponse.data });
      console.log(bookResponse);

    }).catch(error => alert(error.message));

  }
  render() {
   
    return (
      <div>
      {
        this.state.bookData.length > 0 &&
        <>
          {
            this.state.bookData.map(book => {
              return (
                <>
                  <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src={book.title} /> */}
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>
                         Status: {book.status}
                      </Card.Text>
                     
                      <Card.Text>
                      The description:  {book.description}
                      </Card.Text>
                      <Card.Text>
                       User email: {book.email}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              )
            })
          }
        </>
      }
    </div>
    );
  }
}

  
  
  
export default BestBooks
  
  
  
  
   
