import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          
          <Button variant="primary" type="submit">
              LOG IN !
            </Button>
          {/* TODO: add a `LoginButton` component here that will log the user in */}

          <a href="./LoginButton">Login</a>


        </Card.Body>
      </Card>
    )
  }
}

export default Login;
