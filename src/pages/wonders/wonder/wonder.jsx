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
import { CustomModal } from "../../../components";
import "./css/wonder.css";

export default function Wonder({ metadata, itemData, lang }) {
  return (
    <div className="blog-slider swiper-container-fade swiper-container-horizontal">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide swiper-slide-active">
          <div className="blog-slider__img">
            <img src={itemData.image} alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">{itemData.location[lang]}</span>
            <div className="blog-slider__title">{itemData.name[lang]}</div>
            <div className="blog-slider__text">
              {itemData.desc[lang].replace(/^(.{250}[^\s]*).*/, "$1")}&hellip;
            </div>
            <CustomModal
              btnObj={{
                name: metadata.labels.readmore[lang],
                color: "primary",
                class: "blog-slider__button",
              }}
              modalBd={itemData.desc[lang]}
            />
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>

    // <Card className="wonderCard" color="primary" outline>
    //   <img alt={itemData.name[lang]} src={itemData.image} />
    //   <CardBody>
    //     <CardTitle tag="h5">{itemData.name[lang]}</CardTitle>
    //     <CardSubtitle className="mb-2 text-muted" tag="h6">
    //       {itemData.location[lang]}
    //     </CardSubtitle>
    //     <CardText>{itemData.desc[lang]}</CardText>
    //   </CardBody>
    // </Card>
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
