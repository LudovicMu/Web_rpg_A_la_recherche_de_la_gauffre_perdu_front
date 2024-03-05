import { characterLogin, characterLoginError } from "./characterSlice";

const characterMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  if (action.type === "SUBMIT_CHARACTERCREATION") {
    const { characterName, characterClass } = state.character;
    console.log(`characterName: ${characterName} classId: ${characterClass}`);

    // ------------------------------------------
    // ---------CHARACTER CREATION---------------
    // ------------------------------------------
    fetch(`http://localhost:3001/user/character/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.jwtToken}`,
      },
      body: JSON.stringify({
        nickname: characterName,
        user_id: localStorage.user_id,
        class_id: characterClass,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problème côté serveur (forcemment)");
        }

        return response.json();
      })
      .then((data) => {
        console.table(data);
        store.dispatch(characterLogin(data));
      })

      .catch((error) => {
        store.dispatch(characterLoginError(error.message));
      });
  }

  if (action.type === "LOGIN_CHARACTER") {
    // --------------------------------------------------------
    // ---------CHARACTER RECUPERATION AFTER LOGIN ----------------
    // --------------------------------------------------------
    const { character_1, characterName } = state.user.user;
    console.log("ça passe bien par là");

    fetch(`http://localhost:3001/user/character`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.jwtToken,
      },
      body: JSON.stringify({
        user_id: localStorage.user_id,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Problème côté serveur (forcemment)");
        }

        return response.json();
      })
      .then((data) => {
        console.table(data);
        store.dispatch(characterLogin(data));
      })

      .catch((error) => {
        store.dispatch(characterLoginError(error.message));
      });
  }

  next(action);
};

export default characterMiddleware;
