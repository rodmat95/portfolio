// Obtener el nodo del lienzo y el contexto de dibujo
const canvas = document.getElementById("canv");
const ctx = canvas.getContext("2d");

// Establecer el ancho y alto del lienzo
const w = (canvas.width = document.documentElement.clientWidth);
const h = (canvas.height = document.documentElement.clientHeight);

// Dibujar un rectángulo negro con el mismo ancho y alto que el lienzo
ctx.fillStyle = "#000";
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix() {
  // Dibujar un rectángulo negro semitransparente encima del dibujo anterior
  ctx.fillStyle = "#0001";
  ctx.fillRect(0, 0, w, h);

  // Establecer el color en gris y la fuente en 15pt monoespaciada en el contexto de dibujo
  ctx.fillStyle = "rgb(14 165 233 / 1)";
  ctx.font = "15pt monospace";

  // Para cada columna, colocar un carácter aleatorio al final
  ypos.forEach((y, ind) => {
    // Generar un carácter aleatorio
    const text = String.fromCharCode(Math.random() * 128);

    // Coordenada x de la columna, la coordenada y ya está dada
    const x = ind * 20; // Dibujar el carácter en (x, y)
    ctx.fillText(text, x, y); // Restablecer aleatoriamente el final de la columna si tiene al menos 100px de altura

    if (y > 100 + Math.random() * 10000) ypos[ind] = -100;
    // De lo contrario, simplemente mover la coordenada y de la columna 20px hacia abajo
    else ypos[ind] = y + 20;
  });
}

// Renderizar la animación a 60 FPS
setInterval(matrix, 60);
