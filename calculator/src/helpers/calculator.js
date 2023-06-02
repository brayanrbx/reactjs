export const calculator = (input, setInput, evaluate) => {
  const agregarInput = val => {
      setInput(input + val);
  };

  const calcularResultado = () => {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("Por favor ingrese valores para realizar los cálculos.");
      }
  };

  return {agregarInput, calcularResultado};
};