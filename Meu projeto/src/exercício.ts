//==================
// 1. USO DE ARRAYS
//==================

// Arrays contendo nomes de alunos
const alunos: string[] = ["Ana", "Carlos", "Maria"];
console.log("Alunos", alunos);

// Podemos adicionar um novo aluno:
alunos.push("João");
console.log("Alunos após adicionar João", alunos);

//==================
// 2. USO DE OBJETOS
//==================

// Criamos um objeto representando alunos

const aluno = {
    nome:"Ana",
    idade: 20,
    aprovado: true

};

console.log("Aluno", aluno);
console.log("Nome do Aluno", aluno.nome);

//===========================
// 3.SIMULAÇÃO DE UMA PROMISE
//===========================

// Promise é utilizada para representar uma operação
// que será concluída no futuro.
//
// Neste exemplo, simula uma consulta a uma API.
// O setTimeout representa o tempo que uma API poderia
// levar para responder.

function buscarAluno(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Aluno encontrado com sucesso!");
        }, 2000);
    });
}

// =====================================
// 4. FUNÇÃO ASSÍNCRONA COM ASYNC/AWAIT
// =====================================

async function executarBusca(): Promise<void> {

    console.log("Iniciando Busca...");

  // O await faz a função esperar a Promise terminar.
  //
  // Importante:
  // O JavaScript não fica "travado" esperando.
  // A função assíncrona fica aguardando a resposta
  // e o restante do programa pode continuar executando.
  //
  // Quando a Promise for resolvida, o resultado será
  // armazenado na variável resultado.

  const resultado = await buscarAluno();

  console.log("Resultado:", resultado);

  console.log("Busca finalizada!");    
}

// Executamos a função assíncrona
executarBusca();

// ==============================================
// 5. FUNÇÃO PARA TESTARMOS COM TESTES UNITÁRIOS
// ==============================================

// Esta função recebe dois números e retorna a soma.
// Ela será utilizada nos testes unitários.

export function somar(a: number, b:number): number {
  return a + b;
}
// Exportamos também a função para que ela possa
// ser utilizada no arquivo de testes.

export {buscarAluno};