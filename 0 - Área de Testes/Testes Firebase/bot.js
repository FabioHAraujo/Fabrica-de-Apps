// main.js
const { ref, get } = require('firebase/database');
const db = require("./firebase/connection");

async function vemUltimo() {
  try {
    const dbRef = ref(db, 'teste');
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Não deu: ", error);
  }
}

function main() {
  vemUltimo();
}

main();
