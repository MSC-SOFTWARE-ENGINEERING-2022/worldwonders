import { CustomModal } from "../../../components";
import "./css/wonder.css";

export default function Wonder({ metadata, itemData, lang }) {
  return (
    <div className="wonderParent">
      <div className="wonderParent__wrp">
        <div className="wonderParent__item wonderParent_active">
          <div className="wonderParent__img">
            <img src={itemData.image} alt={`${itemData.name[lang]}`} />
          </div>
          <div className="wonderParent__content">
            <span className="wonderParent__location">
              {itemData.location[lang]}
            </span>
            <div className="wonderParent__title">{itemData.name[lang]}</div>
            <div className="wonderParent__text">
              {itemData.desc[lang].replace(/^(.{250}[^\s]*).*/, "$1")}&hellip;
            </div>
            <CustomModal
              btnObj={{
                name: metadata.labels.readmore[lang],
                color: "primary",
                class: "wonderParent__button",
              }}
              modalBd={itemData.desc[lang]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
