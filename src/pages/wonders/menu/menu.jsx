import { Col } from "reactstrap";
import { CONFIGS } from "../../../helpers";

function Menu({ allWonders, selectWonder, selectedWonder, lang }) {
  return (
    <Col
      className="bg-light btnCol"
      lg={{
        offset: 3,
        size: 6,
      }}
      sm="12"
    >
      <div className="btnDiv">
        {allWonders &&
          allWonders.map((aw) => (
            <button
              key={aw.id}
              id={aw.id}
              onClickCapture={selectWonder}
              className={`btnWonders ${
                selectedWonder && selectedWonder.id === aw.id && "activeWonder"
              }`}
            >
              <div className="btnDetails">{aw.icon[lang]}</div>
              <img
                src={`${CONFIGS.icons}/${aw.id}/64.png`}
                alt={`${aw.icon[lang]}`}
              ></img>
            </button>
          ))}
      </div>
    </Col>
  );
}

export default Menu;
