* [ ] Dar contexto (breve resumo) da task desenvolvida, e explicar solução implementada
* [ ] Código na mesma linguagem: português
* [ ] Convenções de naming e de estrutura de diretórios da linguagem: https://www.w3schools.com/js/js_conventions.asp
* [ ] Nomes precisos e consistentes
* [ ] Remover dead code e imports não utilizados
* [ ] Remover coisas “development only” hardcoded no código
* [ ] Utilizar encapsulamento (modificadores de acesso)
* [ ] Evitar variáveis globais, favorecer imutabilidade (https://martinfowler.com/bliki/ValueObject.html)
* [ ] Não deixar console.log de debugging
* [ ] Máximo 10 arquivos
    * Quebrar em PRs pequenos, incrementais
    * Mais seguro, menos chance de passar algo errado
* [ ] Mínimo 10 testes unitários
    * Testar edge cases, passando null, passando valores muito grandes, etc (pensar e validar todas possibilidades)
    * Testes que façam sentido, testar lógica
* [ ] Design está complexo?
    * Muitas classes / métodos?
    * Classes / métodos rasos, com pouco valor, ou que não adicionam nenhuma abstração?
    * Código duplicado, uma mesma informação espalhada em muitos lugares?
    * Nomes vagos?
    * Código obscuro, trechos de código não óbvios? (adicionar comentários)
