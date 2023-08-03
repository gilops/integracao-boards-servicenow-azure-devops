<h1 align="center"> Integração ServiceNow - Azure DevOps Boards </h1>

Integração de incidentes e solicitações do ServiceNow com o boards Microsoft Azure DevOps 

## Requisitos:
- Organização criada no Azure DevOps;
- Licença administrador no projeto para criação de webhook;
- Licença administrador ServiceNow para criação de scripts;

## Estrutura do projeto:
- integracaoAzureBoardsReq.js: arquivo com o script para integrar os ambientes

## Variáveis:
- organization = Organização do Azure DevOps;
- time = Grupo de time dentro do projeto no Azure DevOps;
- time_extenso = Nome do grupo do time;
- field_solicitação = Campo com o valor de referência do Work Item Type referente à Solicitação.

## Como usar:
1. Atribuir valores para as variáveis;
2. Criar webhook no projeto que será integrado no Azure DevOps;
3. Criar Work Item Type com os campos que serão integrados;
4. Substituir os valores específicos dos campos que serão integrados;
5. Substituir os estados dos cards que serão integrados.
   
