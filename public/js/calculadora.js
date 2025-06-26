class CalculadoraBasica extends HTMLElement {
  constructor() {
    super();

    // Crear Shadow DOM 
    this.attachShadow({ mode: 'open' });

    // Estructura interna con Bootstrap
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/lib/bootstrap/css/bootstrap.min.css">

      <div class="container mt-4">
        <div class="card shadow p-4">
          <h4 class="text-center text-primary mb-3">Calculadora Básica</h4>

          <div class="mb-3">
            <label class="form-label">Primer número:</label>
            <input type="number" id="num1" class="form-control" placeholder="Ej: 12">
          </div>

          <div class="mb-3">
            <label class="form-label">Segundo número:</label>
            <input type="number" id="num2" class="form-control" placeholder="Ej: 4">
          </div>

          <div class="mb-3">
            <label class="form-label">Operación:</label>
            <select id="operacion" class="form-select">
              <option value="suma">Suma</option>
              <option value="resta">Resta</option>
              <option value="multiplicacion">Multiplicación</option>
              <option value="division">División</option>
            </select>
          </div>
