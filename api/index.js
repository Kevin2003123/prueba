const server = require("./src/app.js");
const { conn, User, Contact} = require("./src/db.js");
const {fillUser} = require("./src/controllers/user.js")
const {fillContact} = require("./src/controllers/contact.js")
// Syncing all the models at once.

const uploadData = async () =>{
  await fillUser(User);
  await fillContact(Contact);
}

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    uploadData();
    console.log("%s listening at 3001"); // eslint-disable-line no-console
    //fillTemperaments(Temperament);
  });
});