const tareaService = require("../services/tareaService");

async function getTareas(req, res){

try {
    // req.user viene del middleware verificarToken
    const usuarioId = req.user.userId;
    const tareas = await tareaService.getTareas(usuarioId);
    console.log(tareas);
    res.status(200).json({message: "Tareas obtenidas correctamente", data: tareas});

    }
    catch (error) {

res.status(500).json({message: error.message});
}
}

async function deleteTarea(req, res){
    try {
        // req.user viene del middleware verificarToken
        const usuarioId = req.user.userId;
        const tareaId = req.params.id;
        const tarea = await tareaService.deleteTarea(tareaId, usuarioId);
        res.status(200).json({message: "Tarea eliminada correctamente", data: tarea});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

async function createTarea(req, res){
    try {
        // req.user viene del middleware verificarToken
        const usuarioId = req.user.userId;
        const tarea = await tareaService.createTarea(req.body, usuarioId);
        res.status(200).json({message: "Tarea creada correctamente", data: tarea});
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
}