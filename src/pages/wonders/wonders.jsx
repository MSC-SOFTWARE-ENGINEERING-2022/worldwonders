import { useEffect, useState } from "react";
import { Container, Col, Row, Button, ButtonGroup } from "reactstrap";
import { CONFIGS, DEPE } from "../../helpers";
import * as wondersData from "../../data/wonders.json";
import "./css/wonders.css";
import Wonder from "./wonder/wonder";
import { CustomModal } from "../../components";

export default function Wonders() {
  const [allWonders, setAllWonders] = useState([]);
  const [selectedWonder, setSelectedWonder] = useState("");
  const [metadata, setMetadata] = useState("");
  const [lang, setLang] = useState("en");

  const changeLang = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id !== lang) {
      setLang(e.target.id);
    }
  };

  const checkLangColor = (item) => (item === lang ? "success" : "secondary");

  const selectWonder = (event) => {
    // console.log(event);
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    event.preventDefault();
    const elem =
      event.target === event.currentTarget
        ? event.target
        : event.target.parentElement;
    // console.log(elem);

    const id = elem.id;
    if (!selectedWonder || selectedWonder.id !== id) {
      // console.log(id);
      setSelectedWonder(allWonders.filter((aw) => aw.id === id)[0]);
    }
  };

  useEffect(() => {
    // console.log("useEffect response", wondersData);
    // console.log(CONFIGS.icons);
    const datos = wondersData.default.data;
    setMetadata(wondersData.default.metadata);
    setAllWonders(datos);
    setSelectedWonder(datos[Math.floor(Math.random() * datos.length)]);
  }, []);

  return (
    <>
      <Container className=" wonders bg-light border" fluid>
        <Row>
          <Col
            className="bg-light border"
            lg={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            <p className="title">{metadata && metadata.header[lang]}</p>
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border"
            lg={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            <ButtonGroup className="my-2" size="sm">
              <Button color={checkLangColor("sw")} id="sw" onClick={changeLang}>
                SW
              </Button>
              <Button color={checkLangColor("en")} id="en" onClick={changeLang}>
                EN
              </Button>
            </ButtonGroup>
            <CustomModal btnName="Credits" />
          </Col>
        </Row>
        <Row>
          <Col
            className="bg-light border btnCol"
            lg={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            <Container
              className="containerMain"
              style={{
                backgroundImage: `url(${selectedWonder.image})`,
              }}
            >
              <div className="btnDiv">
                {allWonders &&
                  allWonders.map((aw) => (
                    <button
                      key={aw.id}
                      id={aw.id}
                      onClickCapture={selectWonder}
                      className={`btnWonders ${
                        selectedWonder &&
                        selectedWonder.id === aw.id &&
                        "activeWonder"
                      }`}
                    >
                      <div className="btnDetails">{aw.icon[lang]}</div>
                      <img src={`${CONFIGS.icons}/${aw.id}/64.png`}></img>
                    </button>
                  ))}
              </div>
              {selectedWonder && (
                <Wonder itemData={selectedWonder} lang={lang} />
              )}
            </Container>
          </Col>
        </Row>
        {/* <Row>
          <Col
            className="wonderCol bg-light border"
            lg={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            {selectedWonder && <Wonder itemData={selectedWonder} lang={lang} />}
          </Col>
        </Row> */}
      </Container>
    </>
  );
}