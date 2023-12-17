import { useNavigate } from "react-router-dom";


import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductCard = ({ info }) => {

    const navigate = useNavigate()

  return (
   
      <Container className="text-center d-flex gap-3 justify-content-center">
        <Row>
          {info?.map(({ id, image, title, price }) => (
            <Col key={id} md={4}>
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={image} height="450px" onClick={()=> navigate(`/products/${id}`)} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{price} $</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  
  );
};

export default ProductCard;
