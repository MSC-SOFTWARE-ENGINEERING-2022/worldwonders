import { Col } from "reactstrap";

function Header({ metadata, lang }) {
  return (
    <Col
      className="bg-light"
      lg={{
        offset: 3,
        size: 6,
      }}
      sm="12"
    >
      <p className="title">{metadata && metadata.header[lang]}</p>
    </Col>
  );
}

export default Header;
