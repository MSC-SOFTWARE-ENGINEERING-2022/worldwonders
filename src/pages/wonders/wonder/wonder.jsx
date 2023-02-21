import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
  Button,
  Row,
  Col,
} from "reactstrap";
import "./css/wonder.css";

export default function Wonder({ itemData, lang }) {
  return (
    <Card className="wonderCard" color="primary" outline>
      {/* <img alt={itemData.name[lang]} src={itemData.image} /> */}
      <CardBody>
        <CardTitle tag="h5">{itemData.name[lang]}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {itemData.location[lang]}
        </CardSubtitle>
        <CardText>{itemData.desc[lang]}</CardText>
      </CardBody>
    </Card>
    // // {selectedWonder.desc[lang]}
    // <Container
    //   className="containerWonder"
    //   //   style={{
    //   //     backgroundImage: `url(${itemData.image})`,
    //   //   }}
    // >
    //   {/* <Row>
    //     <Col
    //       className="bg-light border"
    //       md={{
    //         offset: 3,
    //         size: 6,
    //       }}
    //       sm="12"
    //     > */}
    //   <Card color="primary" outline>
    //     {/* <img alt={itemData.name[lang]} src={itemData.image} /> */}
    //     <CardBody>
    //       <CardTitle tag="h5">{itemData.name[lang]}</CardTitle>
    //       <CardSubtitle className="mb-2 text-muted" tag="h6">
    //         {itemData.location[lang]}
    //       </CardSubtitle>
    //       <CardText>{itemData.desc[lang]}</CardText>
    //     </CardBody>
    //   </Card>
    //   {/* </Col>
    //   </Row> */}
    // </Container>
  );
}
