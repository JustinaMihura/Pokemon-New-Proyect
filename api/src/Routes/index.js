const {Router} = require("express");
const {getPokes} = require("../Controllers/getPokes.js")

const router = Router();

router.get("/pokemons" , async (req,res) => {
  const pokes = await getPokes();
  res.status(200).json(pokes) 
});



module.exports = router;