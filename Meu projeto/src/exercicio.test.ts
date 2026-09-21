import { somar, buscarAluno } from "./exercicio";

// ========================================
// TESTE 1 - SOMA DE DOIS NÚMEROS
// ========================================

test("deve somar dois números corretamente", () => {

// Arrange (preparação)
  const numero1 = 10;
  const numero2 = 5;

  // Act (execução)
  const resultado = somar(numero1, numero2);

  // Assert (verificação)
  expect(resultado).toBe(15);
});


// ========================================
// TESTE 2 - SOMA COM NÚMEROS NEGATIVOS
// ========================================

test("deve somar números negativos corretamente", () => {

  const resultado = somar(-10, 5);

  expect(resultado).toBe(-5);
});


// ========================================
// TESTE 3 - TESTANDO UMA PROMISE
// ========================================

test("deve retornar uma mensagem ao buscar o aluno", async () => {

  // Como buscarAluno() retorna uma Promise,
  // precisamos utilizar async/await no teste.

  const resultado = await buscarAluno();

  expect(resultado).toBe("Aluno encontrado com sucesso!");
});