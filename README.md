# Proyecto Git

Este proyecto contiene funciones y módulos de ejemplo para practicar Git.

## 📌 Funcionalidades

### 1. Calculadora
- `sum(a, b)` — retorna la suma de dos números.

**Ejemplo:**
```js
const { sum } = require('./features/calculator');
console.log(sum(2, 3)); // Resultado: 5


const { validateEmail } = require('./utils/validation');
console.log(validateEmail("test@mail.com"));
console.log(validateEmail(""));