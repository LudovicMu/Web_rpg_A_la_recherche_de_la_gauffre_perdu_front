import sort from "/src/assets/sort.svg";
import more from "/src/assets/more.svg";
import supression from "/src/assets/delete.svg";
import "./MonsterTab.scss";

export default function MonstersTab() {
  return (
    <>
      <div className="tableMonsters">
        <div className="tableMonsters__headTable">
          <div className="tableMonsters__headTable__monster">
            <p>Nom du monstre</p>
            <img
              src={sort}
              alt="sorting"
              className="tableMonsters__headTable__monster__icon"
            />
          </div>
          <div className="tableMonsters__headTable__PV">
            <p>points de vie</p>
            <img
              src={sort}
              alt="sorting"
              className="tableMonsters__headTable__PV__icon"
            />
          </div>
          <div className="tableMonsters__headTable__degPhys">
            <p>dégats physiques</p>
            <img
              src={sort}
              alt="sorting"
              className="tableMonsters__headTable__degPhys__icon"
            />
          </div>
          <div className="tableMonsters__headTable__degMag">
            <p>dégats magiques</p>
            <img
              src={sort}
              alt="sorting"
              className="tableMonsters__headTable__degMag__icon"
            />
          </div>
          <div className="tableMonsters__headTable__run">
            <p>fuite</p>
            <img
              src={sort}
              alt="sorting"
              className="tableMonsters__headTable__run__icon"
            />
          </div>
          <p className="tableMonsters__headTable__gestion">Gestion</p>
        </div>

        <div className="tableMonsters__entryTable">
          <div className="tableMonsters__entryTable__monster">
            <p>Gaufrosaurus moucheté</p>
          </div>
          <div className="tableMonsters__entryTable__PV">
            <p>15</p>
          </div>
          <div className="tableMonsters__entryTable__degPhys">
            <p>65</p>
          </div>
          <div className="tableMonsters__entryTable__degMag">
            <p>0</p>
          </div>
          <div className="tableMonsters__entryTable__run">
            <p>1%</p>
          </div>
          <div className="tableMonsters__entryTable__gestion">
            <img
              src={more}
              alt="more"
              className="tableMonst__entryTable__gestion__more"
            />
            <img
              src={supression}
              alt="more"
              className="tableMonsters__entryTable__gestion__delete"
            />
          </div>
        </div>

        <div className="tableMonsters__entryTable">
          <div className="tableMonsters__entryTable__monster">
            <p>Devsousredbull sauvage</p>
          </div>
          <div className="tableMonsters__entryTable__PV">
            <p>1</p>
          </div>
          <div className="tableMonsters__entryTable__degPhys">
            <p>100</p>
          </div>
          <div className="tableMonsters__entryTable__degMag">
            <p>0</p>
          </div>
          <div className="tableMonsters__entryTable__run">
            <p>5%</p>
          </div>
          <div className="tableMonsters__entryTable__gestion">
            <img
              src={more}
              alt="more"
              className="tableMonst__entryTable__gestion__more"
            />
            <img
              src={supression}
              alt="more"
              className="tableMonsters__entryTable__gestion__delete"
            />
          </div>
        </div>
      </div>
    </>
  );
}
