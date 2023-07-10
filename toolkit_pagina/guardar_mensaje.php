<?php
// Establecer la conexión a la base de datos
$host = "localhost";
$user = "root";
$password = "";
$database = "contacto";
$conexion = mysqli_connect($host, $user, $password, $database);

// Verificar la conexión
if (!$conexion) {
	die("Error al conectar con la base de datos: " . mysqli_connect_error());
}

// Obtener los datos del formulario
$nombre = $_POST["nombre"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

// Insertar los datos en la tabla de mensajes
$sql = "INSERT INTO datos (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";
$resultado = mysqli_query($conexion, $sql);

// Verificar si se insertaron los datos correctamente
if ($resultado) {
	echo "<script>alert('Gracias por tus comentarios');
    window.location.href='index.html';document.getElementById('formul').reset();</script>";
} else {
	echo "<script>alert('Error: el mensaje no se envio ');
    window.location.href='index.html';document.getElementById('formul').reset();</script>";
	mysqli_error($conexion);
}

// Cerrar la conexión
mysqli_close($conexion);
?>
