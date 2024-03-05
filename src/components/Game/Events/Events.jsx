import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loader from "../../Utils/Loader";
import Combat from "./Combat/Combat";
import Roleplay from "./Roleplay/Roleplay";

export default function Events() {
  const event = useSelector((state) => state.event);
  const heroPrev = useSelector((state) => state.character);
  const ennemiePrev = event.monster;
  let hero = heroPrev;
  let ennemie = ennemiePrev;

  return (
    <div className="eventContainer">
      {event.type === "battle" && <Combat />}
      {event.type === "encounter" && <Roleplay />}
      <Combat />
    </div>
  );
}
