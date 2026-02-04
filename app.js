import express from 'express';

const app = express();
const PORT = 3000;

 
app.use(express.json());
 
// 1. 
 
app.get('/saludo', (req, res) => {
    const { nombre, ciudad } = req.query;
    res.json({
        mensaje: `Hola ${nombre}, qué bueno que nos escribes desde ${ciudad}`
    });
});

 
// 2.  
 
app.get('/restar', (req, res) => {
    const n1 = parseFloat(req.query.num1);
    const n2 = parseFloat(req.query.num2);
    res.status(200).json({

        operacion: "resta",
        resultado: n1 - n2
    });
});

 
// 3. 
app.get('/producto/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: "Información del producto",
        id: id,
        nombre: "Producto de ejemplo",
        precio: 99.99
    });
});
 ---
// 4. 
 
app.post('/producto', (req, res) => {
    const { codigo, nombre, precio, stock } = req.body;
    res.status(201).json({
        confirmacion: "Producto creado con éxito",
        datosRecibidos: { codigo, nombre, precio, stock }
    });
});
 
// 5.  
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validación básica
    if (!email || !password) {
        return res.status(400).json({
            error: "Datos incompletos",
            mensaje: "Por favor, proporciona email y contraseña"
        });
    }

    res.json({
        mensaje: "Login exitoso",
        usuario: email
    });
});

 
// 6.  
 
app.put('/producto/:codigo', (req, res) => {
    const { codigo } = req.params;
    const { nombre, precio } = req.body;
    res.json({
        mensaje: "Producto actualizado correctamente",
        codigoActualizado: codigo,
        nuevoNombre: nombre,
        nuevoPrecio: precio
    });
});

 
// 7. 
 
app.delete('/producto/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: "Producto eliminado del sistema",
        idEliminado: id
    });
});

 
// 8.  
 
app.get('/pedido/:userId/:orderId', (req, res) => {
    const { userId, orderId } = req.params;
    res.json({
        mensaje: "Información de pedido recuperada",
        usuarioIdentificador: userId,
        pedidoIdentificador: orderId
    });
});

// CONFIGURACIÓN DEL SERVIDOR
app.listen(PORT, () => {
    console.log(` Servidor encendido y escuchando en: http://localhost:${PORT}`);
    console.log(`Listo para recibir peticiones...`);
});