class CalculadoraBasica extends HTMLElement {
  constructor() {
    super();

    // Crear Shadow DOM 
    this.attachShadow({ mode: 'open' });

    // Estructura interna con Bootstrap
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/public/lib/bootstrap/css/bootstrap.min.css">
