const express = require("express");
const router = express.Router();
const con = require("../controllers/controllers.js");

router.get("/", con.defaultCon);
router.post("/todoCon", con.todoCon)

module.exports = router;