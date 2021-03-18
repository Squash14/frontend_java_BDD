$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Admin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Admin",
  "description": "",
  "id": "admin",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Admin"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"\u003cusuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"\u003cperfil\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"\u003cnomeFuncionario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"\u003csituacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "admin;pesquisar-usuario;",
  "rows": [
    {
      "cells": [
        "usuario",
        "perfil",
        "nomeFuncionario",
        "situacao"
      ],
      "line": 20,
      "id": "admin;pesquisar-usuario;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "Paul Collings",
        "Enabled"
      ],
      "line": 21,
      "id": "admin;pesquisar-usuario;;2"
    },
    {
      "cells": [
        "Anthony.Nolan",
        "ESS",
        "Anthony Nolan",
        "Enabled"
      ],
      "line": 22,
      "id": "admin;pesquisar-usuario;;3"
    },
    {
      "cells": [
        "Ehioze.Ebo",
        "ESS",
        "Ehioze Ebo",
        "Enabled"
      ],
      "line": 23,
      "id": "admin;pesquisar-usuario;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1991345100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2767956700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2710378100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"Admin\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Paul Collings\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 918875200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 130535000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 144694000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paul Collings",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 142393900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 154726100,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 479608800,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 54421700,
  "status": "passed"
});
formatter.after({
  "duration": 629237200,
  "status": "passed"
});
formatter.before({
  "duration": 1350227200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2848512500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2987468200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Anthony.Nolan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Anthony Nolan\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 986382400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anthony.Nolan",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 137603100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 141596400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anthony Nolan",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 138723300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 157364200,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 468827500,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 82455300,
  "status": "passed"
});
formatter.after({
  "duration": 632687400,
  "status": "passed"
});
formatter.before({
  "duration": 1368674600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2775661000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2723835400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 2,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo de busca Username como \"Ehioze.Ebo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca User Role como \"ESS\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca Employee Name como \"Ehioze Ebo\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1014971800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ehioze.Ebo",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 129677500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 125828600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ehioze Ebo",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 140718600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 140914200,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 447986000,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 69277800,
  "status": "passed"
});
formatter.after({
  "duration": 632406400,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    },
    {
      "line": 2,
      "value": "# enconding: UTF-8"
    }
  ],
  "line": 4,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@RealizarLogin"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "informar o campo Username como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo Password como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o sistema devera autorizar o login, exibindo o conteudo do Dashboard.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ],
      "line": 18,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1350045200,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2621080800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Realizar Login com Sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 9,
      "name": "@RealizarLogin"
    },
    {
      "line": 9,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "informar o campo Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 12,
  "name": "informar o campo Password como \"admin123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "clicar no botao login",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "o sistema devera autorizar o login, exibindo o conteudo do Dashboard.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Username_como(String)"
});
formatter.result({
  "duration": 102145300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Password_como(String)"
});
formatter.result({
  "duration": 93931300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_bot_o_login()"
});
formatter.result({
  "duration": 2534121500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_o_conteudo_do_Dashboard()"
});
formatter.result({
  "duration": 45108700,
  "status": "passed"
});
formatter.after({
  "duration": 632064200,
  "status": "passed"
});
});