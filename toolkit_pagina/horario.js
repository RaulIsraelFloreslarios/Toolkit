// Obtener todas las celdas editables
const celdasEditables = document.querySelectorAll('[contenteditable]');

// Cargar los valores guardados en localStorage (si hay alguno)
for (let i = 0; i < celdasEditables.length; i++) {
	const celdaEditable = celdasEditables[i];
	const valorGuardado = localStorage.getItem(celdaEditable.id);
	if (valorGuardado !== null) {
		celdaEditable.textContent = valorGuardado;
	}
}

// Guardar el valor de cada celda editable cuando se edita
for (let i = 0; i < celdasEditables.length; i++) {
	const celdaEditable = celdasEditables[i];
	celdaEditable.addEventListener('input', () => {
		localStorage.setItem(celdaEditable.id, celdaEditable.textContent);
	});
}
