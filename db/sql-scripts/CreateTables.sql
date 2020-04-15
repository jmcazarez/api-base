CREATE TABLE IF NOT EXISTS Usuarios (
    nIdUsuario INT AUTO_INCREMENT PRIMARY KEY,
    cLogin VARCHAR(255),
    cNombre VARCHAR(255) NOT NULL,
    cApellidoPaterno VARCHAR(255),
    cApellidoMaterno VARCHAR(255),
    cPassword VARCHAR(255)
);