import { Button, ButtonGroup } from "reactstrap";

function PositionControls({ changePosition, position, lang, metadata }) {
  return (
    <ButtonGroup className="my-2" size="sm">
      <Button
        className={`btnPositions ${position === "top" && "active"}`}
        onClick={changePosition}
        id="top"
      >
        {metadata && metadata.labels.top[lang]}
      </Button>
      <Button
        className={`btnPositions ${position === "bottom" && "active"}`}
        onClick={changePosition}
        id="bottom"
      >
        {metadata && metadata.labels.bottom[lang]}
      </Button>
    </ButtonGroup>
  );
}

export default PositionControls;
