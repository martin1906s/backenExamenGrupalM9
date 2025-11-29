const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

async function getTareas(usuarioId){
    return await prisma.tarea.findMany({
        where: {
            usuarioId: usuarioId
        }
    });
}

async function deleteTarea(id, usuarioId){
    // Convertir el id a número entero y validar
    const tareaId = parseInt(id);
    
    if (isNaN(tareaId)) {
        throw new Error("ID de tarea inválido");
    }
    
    // Primero verificar que la tarea pertenezca al usuario
    const tarea = await prisma.tarea.findFirst({
        where: {
            id: tareaId,
            usuarioId: usuarioId
        }
    });
    
    if (!tarea) {
        throw new Error("Tarea no encontrada o no tienes permisos para eliminarla");
    }
    
    // Si la tarea existe y pertenece al usuario, eliminarla
    return await prisma.tarea.delete({
        where: {id: tareaId}
    });
}

async function createTarea(data, usuarioId){
    return await prisma.tarea.create({
        data: { 
            ...data, 
            usuarioId: usuarioId
        }
    });
}

module.exports = {
    getTareas,
    deleteTarea,
    createTarea
}