import { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import * as wondersData from "../../data/wonders.json";
import Wonder from "./wonder/wonder";
import { CustomModal } from "../../components";
import LangControls from "./lang/lang";
import PositionControls from "./position/position";
import Header from "./header/header";
import Menu from "./menu/menu";

import "./css/wonders.css";

export default function Wonders() {
  const [allWonders, setAllWonders] = useState([]);
  const [selectedWonder, setSelectedWonder] = useState("");
  const [metadata, setMetadata] = useState("");
  const [lang, setLang] = useState("en");
  const [position, setPosition] = useState("top");

  const changeLang = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id !== lang) {
      setLang(e.target.id);
    }
  };

  const changePosition = (e) => {
    e.preventDefault();
    const id = e.target.id;
    if (id !== position) {
      setPosition(e.target.id);
    }
  };

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

  const modalBd = (dt, ln) => (
    <>
      <h5>{dt.institution[ln]}</h5>
      <h5>{dt.course[ln]}</h5>
      <h5>{dt.unit}</h5>
      <p>{dt.labels.credits[ln]}</p>
      <ol>
        {dt.editors.map((ed) => (
          <li id={ed.adm}>
            {ed.adm} - {ed.name}
          </li>
        ))}
      </ol>
    </>
  );

  useEffect(() => {
    // console.log("useEffect response", wondersData);
    const datos = wondersData.default.data;
    setMetadata(wondersData.default.metadata);
    setAllWonders(datos);
    setSelectedWonder(datos[Math.floor(Math.random() * datos.length)]);
  }, []);

  const menuRow = (
    <Menu
      allWonders={allWonders}
      selectWonder={selectWonder}
      selectedWonder={selectedWonder}
      lang={lang}
    />
  );

  const contentRow = (
    <Col
      className="bg-light wonderCol"
      lg={{
        offset: 3,
        size: 9,
      }}
      sm="12"
    >
      {selectedWonder && (
        <Wonder metadata={metadata} itemData={selectedWonder} lang={lang} />
      )}
    </Col>
  );

  return (
    <>
      <Container className="wonders bg-light" fluid>
        <Row>
          <Header metadata={metadata} lang={lang} />
        </Row>
        <Row>
          <Col
            className="controlCol"
            lg={{
              offset: 4,
              size: 4,
            }}
            md={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            <CustomModal
              btnObj={{
                name: metadata && metadata.labels.credits[lang],
                color: "primary",
              }}
              modalBd={metadata && modalBd(metadata, lang)}
            />
            <LangControls changeLang={changeLang} lang={lang} />
            <PositionControls
              changePosition={changePosition}
              position={position}
              lang={lang}
              metadata={metadata}
            />
          </Col>
        </Row>
        <Row>{position === "top" ? menuRow : contentRow}</Row>
        <Row>{position === "top" ? contentRow : menuRow}</Row>
      </Container>
    </>
  );
}
