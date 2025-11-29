function autorizarRoles(...rolesPermitidos){

return (req, res, next) => {
    console.log(req.user)
    const usuario = req.user
    if(!usuario) return res.status(401).json({message: "Usuario no autorizado"});

    if(!rolesPermitidos.includes(usuario.rol)) return res.status(403).json({message: "Usuario no autorizado"});

    next();
}
}

module.exports = {
    autorizarRoles
}