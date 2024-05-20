const express = require("express")
const router = express.Router()

const userController = require('../controllers/user.controller')

router.get("/getUserDiary/:userId", userController.getUserDiary)
/*router.post("/", bookController.create)
router.put("/:id", bookController.updateById)
router.delete("/:id", bookController.deleteById)*/

module.exports = router