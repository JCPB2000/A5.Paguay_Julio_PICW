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
          <button id="calcular" class="btn btn-success w-100">Calcular</button>

          <div id="resultado" class="alert alert-secondary mt-3 text-center">
            Resultado aquí...
          </div>

          <h6 class="mt-4">Historial:</h6>
          <ul id="historial" class="list-group small"></ul>
        </div>
      </div>
    `;
  }
  connectedCallback() {
    const btn = this.shadowRoot.querySelector('#calcular');
    btn.addEventListener('click', () => this.realizarCalculo());
  }

  realizarCalculo() {
    const num1 = parseFloat(this.shadowRoot.querySelector('#num1').value);
    const num2 = parseFloat(this.shadowRoot.querySelector('#num2').value);
    const operacion = this.shadowRoot.querySelector('#operacion').value;
    const resultadoDiv = this.shadowRoot.querySelector('#resultado');
    // Validar entradas
    if (isNaN(num1) || isNaN(num2)) {
      resultadoDiv.className = 'alert alert-danger mt-3 text-center';
      resultadoDiv.textContent = 'Por favor ingrese números válidos.';
      return;
    }

    // Realizar operación
    let resultado = 0;
    let simbolo = '';

    switch (operacion) {
      case 'suma':
        resultado = num1 + num2;
        simbolo = '+';
        break;
      case 'resta':
        resultado = num1 - num2;
        simbolo = '-';
        break;
      case 'multiplicacion':
        resultado = num1 * num2;
        simbolo = '×';
        break;
      case 'division':
        if (num2 === 0) {
          resultadoDiv.className = 'alert alert-danger mt-3 text-center';
          resultadoDiv.textContent = 'Error: división por cero.';
          return;
        }
        resultado = num1 / num2;
        simbolo = '÷';
        break;
    }
    // Mostrar resultado
    resultadoDiv.className = 'alert alert-success mt-3 text-center';
    resultadoDiv.textContent = `Resultado: ${resultado}`;
