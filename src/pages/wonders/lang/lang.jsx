import { Button, ButtonGroup } from "reactstrap";

function LangControls({ changeLang, lang }) {
  return (
    <ButtonGroup className="my-2" size="sm">
      <Button
        className={`btnLangs ${lang === "sw" && "active"}`}
        id="sw"
        onClick={changeLang}
      >
        SW
      </Button>
      <Button
        className={`btnLangs ${lang === "en" && "active"}`}
        id="en"
        onClick={changeLang}
      >
        EN
      </Button>
    </ButtonGroup>
  );
}

export default LangControls;
