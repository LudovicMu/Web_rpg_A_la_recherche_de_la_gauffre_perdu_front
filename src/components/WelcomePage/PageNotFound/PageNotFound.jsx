import "./PageNotFound.scss";
import merchant from "/src/assets/merchant.png";

export default function PageNotFound() {
  return (
    <>
      <div className="pageNotFound">
        <img src={merchant} className="pageNotFound__picture" />
        <div className="pageNotFound__dialogueBox">
          <p className="pageNotFound__dialogueBox__text">
            Tu t'es perdu poto ?
          </p>
          <div className="pageNotFound__dialogueBox__triangleTopLeft" />
        </div>
      </div>
    </>
  );
}
