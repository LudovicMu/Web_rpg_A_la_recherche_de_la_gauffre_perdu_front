import sort from "/src/assets/sort.svg";
import more from "/src/assets/more.svg";
import supression from "/src/assets/delete.svg";
import "./PlayerTab.scss";

export default function PlayersTab() {
  return (
    <>
      <div className="tablePlayers">
        <div className="tablePlayers__headTable">
          <div className="tablePlayers__headTable__pseudo">
            <p>Pseudo du joueur</p>
            <img
              src={sort}
              alt="sorting"
              className="tablePlayers__headTable__pseudo__icon"
            />
          </div>
          <div className="tablePlayers__headTable__Email">
            <p>Adresse Email</p>
            <img
              src={sort}
              alt="sorting"
              className="tablePlayers__headTable__Email__icon"
            />
          </div>
          <div className="tablePlayers__headTable__name">
            <p>Nom du personnage</p>
            <img
              src={sort}
              alt="sorting"
              className="tablePlayers__headTable__name__icon"
            />
          </div>
          <p className="tablePlayers__headTable__gestion">Gestion</p>

          <div></div>
          <div></div>
        </div>
        <div className="tablePlayers__entryTable">
          <div className="tablePlayers__entryTable__pseudo">
            <p>Gaufre_du_destin</p>
          </div>
          <div className="tablePlayers__entryTable__Email">
            <p>sucrette@gaufre.net</p>
          </div>
          <div className="tablePlayers__entryTable__name">
            <p>Poutoupoutoumonphillipe</p>
          </div>
          <div className="tablePlayers__entryTable__gestion">
            <img
              src={more}
              alt="more"
              className="tablePlayers__entryTable__gestion__more"
            />
            <img
              src={supression}
              alt="more"
              className="tablePlayers__entryTable__gestion__delete"
            />
          </div>
        </div>
        <div className="tablePlayers__entryTable">
          <div className="tablePlayers__entryTable__pseudo">
            <p>Super_gaufrette</p>
          </div>
          <div className="tablePlayers__entryTable__Email">
            <p>encoregaufre@gaufre.com</p>
          </div>
          <div className="tablePlayers__entryTable__name">
            <p>Leonardus</p>
          </div>
          <div className="tablePlayers__entryTable__gestion">
            <img
              src={more}
              alt="more"
              className="tablePlayers__entryTable__gestion__more"
            />
            <img
              src={supression}
              alt="more"
              className="tablePlayers__entryTable__gestion__delete"
            />
          </div>
        </div>
        <div className="tablePlayers__entryTable">
          <div className="tablePlayers__entryTable__pseudo">
            <p>Gauffrey</p>
          </div>
          <div className="tablePlayers__entryTable__Email">
            <p>g.paCompris@whatTheGaufre.net</p>
          </div>
          <div className="tablePlayers__entryTable__name">
            <p>MagicWaffleLord</p>
          </div>
          <div className="tablePlayers__entryTable__gestion">
            <img
              src={more}
              alt="more"
              className="tablePlayers__entryTable__gestion__more"
            />
            <img
              src={supression}
              alt="more"
              className="tablePlayers__entryTable__gestion__delete"
            />
          </div>
        </div>
      </div>
    </>
  );
}

/*
<img
              src={more}
              alt="more"
              className="tablePlayers__headTable__gestion__more"
            />
            <img
              src={supression}
              alt="more"
              className="tablePlayers__headTable__gestion__delete"
            />
            */
