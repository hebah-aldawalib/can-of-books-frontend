
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddBook from "./addBook";
import UpdateBook from './updatebooks';



class BestBooks extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      bookData:[],
      showAddModal: false,
      showUpdateModal: false,
      selectedbookDataObj: {}

    }
  }

  
  handelAddModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.booktitle.value,
      status: e.target.bookDescription.value,
      description: e.target.statusabook.value,
      email: e.target.email.value,}




    axios.get(`${process.env.REACT_APP_API_URL}/book`).then((bookResponse) => {



      this.setState({  bookData: bookResponse.data });
      console.log(this.state.bookData);

 


      axios.post(`${process.env.REACT_APP_API_URL}/book`, reqBody).then(createdbookObject => {
        this.state.bookData.push(createdbookObject.data); 
        this.setState({ bookData: this.state.bookData }); 
        this.handelDisplayAddModal(); 
      }).catch(() => alert("Something went wrong!"));
    }


//====================Update========================================================================

  handelUpdateModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      email: e.target.email.value,

    };

    axios.put(`${process.env.REACT_APP_API_URL}/book/${this.state.selectedbookDataObj._id}`, reqBody).then(updatedbookObject => {

    

      const updatebookArr = this.state.bookData.map(book => {
       

        if (book._id === this.state.selectedbookDataObj._id) {
          book = updatedbookObject.data

          return book;
        }

        return book; 

      });

      this.setState({
        bookData: updatebookArr,
        selectedbookDataObj: {}
      })



      this.handelDisplayUpdateModal(); // hide the update modal

    }).catch(() => alert("Something went wrong!"));
  }

  //=========================================Delete===================
    
    handelDeletebook = (bookId) => {
  
   
  
      axios.delete(`${process.env.REACT_APP_API_URL}/book/${bookId}`).then(deleteResponse => {
        if (deleteResponse.data.deletedCount === 1) {
          const newbookArr = this.state.bookData.filter(book=> book._id !== bookId);
       
          this.setState({ bookData: newbookArr });
        }
      }).catch(() => alert("something went wrong"));
    }
  
//============================Add================================

    handelDisplayAddModal = () => {
      this.setState({ showAddModal: !this.state.showAddModal });
    }
  



    handelDisplayUpdateModal = (bookObj) => {
      this.setState({
        showUpdateModal: !this.state.showUpdateModal,
        selectedbookDataObj: bookObj
      });
    }





    componentDidMount = () => {
  
  
      axios.get(`${process.env.REACT_APP_API_URL}/book`).then((bookResponse) => {
  
        this.setState({ bookData: bookResponse.data });
      }).catch(error => alert(error.message));
  
  
    }



    //======================Render function============================
  render() {
   
    return (
      <div>
           <Button onClick={this.handelDisplayAddModal}>
          Show Add Book  Modal Form
        </Button>

{

        this.state.showAddModal &&
          <>
            <AddBook
              show={this.state.showAddModal}
              handelAddModal={this.handelAddModal}
              handelDisplayAddModal={this.handelDisplayAddModal}
            />
          </>



  }

{
          this.state.showUpdateModal &&
          <>
            <UpdateBook
              show={this.state.showUpdateModal}
              handelUpdateModal={this.handelUpdateModal}
              handelDisplayUpdateModal={this.handelDisplayUpdateModal}
              selectedbookDataObj={this.state.selectedbookDataObj}
            />
          </>
        }

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
                      <Button variant="danger" onClick={() => this.handelDeletebook(book._id)}>Delete the book</Button>
                        <br />
                        <Button variant="warning" onClick={() => this.handelDisplayUpdateModal(book)}>Update book </Button>
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
  
  
  
  
   
