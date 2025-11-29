const express = require("express");
const router = express.Router();
const { verificarToken } = require("../middleware/authMiddleware");
const {autorizarRoles} = require("../middleware/rolMiddleware");
const tareaController = require("../controllers/tareaController");

router.get('/tareas', verificarToken, tareaController.getTareas);
router.post('/tareas', verificarToken, tareaController.createTarea);
router.delete('/tareas/:id', verificarToken, autorizarRoles('admin'), tareaController.deleteTarea);

module.exports = router;
  /// /api/usuarios 