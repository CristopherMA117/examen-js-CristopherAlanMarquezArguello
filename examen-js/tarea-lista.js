// basicos/tarea-lista.js
let lista = [];
function render() {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";
  let comp = 0, incomp = 0;
  lista.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t.texto;
    if (t.completa) {
      li.classList.add("completada");
      comp++;
    } else {
      incomp++;
    }
    li.onclick = () => toggle(i);
    ul.appendChild(li);
  });
  document.getElementById("comp").textContent = comp;
  document.getElementById("incomp").textContent = incomp;
}
function agregarTarea() {
  const texto = document.getElementById("nuevaTarea").value;
  if (!texto) return;
  lista.push({ texto, completa: false });
  document.getElementById("nuevaTarea").value = "";
  render();
}
function toggle(i) {
  lista[i].completa = !lista[i].completa;
  render();
}
