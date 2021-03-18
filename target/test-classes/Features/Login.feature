# language: pt
# enconding: UTF-8
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema

  @RealizarLogin @SmokeTest
  Esquema do Cenario: Realizar Login com Sucesso
    Quando informar o campo Username como "<usuario>"
    E informar o campo Password como "<senha>"
    E clicar no botao login
    Entao o sistema devera autorizar o login, exibindo o conteudo do Dashboard.

    Exemplos: 
      | usuario | senha    |
      | Admin   | admin123 |
