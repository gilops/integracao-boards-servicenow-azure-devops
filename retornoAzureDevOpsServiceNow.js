(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {
    
    var resolution, holdReason, torre, sisImp, menu, subMenu;
    var body = request.body.data;

    var fields = body.resource.fields;
    var status = fields["System.State"].newValue; //state
    var resolutionN = body.resource.revision.fields["Custom.DescricaoSolucaodada"]; //descricao solucao dada
    var incNumber = body.resource.revision.fields["Custom.NumerodoServiceNow"]; //numero do chamado service now
    var project = body.resource.revision.fields["System.TeamProject"]; //Projeto do vsts
    var time = body.resource.revision.fields["System.AreaPath"]; //Time da integração
    var user = body.resource.revision.fields["System.AssignedTo"]; //assigned to
    var changedBy = body.resource.revision.fields["System.ChangedBy"]; //Changed By
    var resolutionNotes = resolutionN.replace(/<(?:.|\n)*?>/gm, '');

    var incQuery = new global.VSTSUtilsAdq().getAssignmentgroup(time); //pega a query do assignment group

    resolution = body.resource.revision.fields["Custom.Resolucao"]; //resolucao
    torre = body.resource.revision.fields["Custom.torreSol"]; //Torre
    sisImp = body.resource.revision.fields["Custom.sistImpSol"]; //SistImpSol
    menu = body.resource.revision.fields["Custom.menuSol"]; //MenuSol
    subMenu = body.resource.revision.fields["Custom.sub_menu"]; //Sub Menu
    holdReason = body.resource.revision.fields["Custom.MotivodaPendencia"]; //motivo da pendencia

    if (changedBy != '${useradmin}' && incQuery != '') {
        if (user.includes("<")) {
            var userId = user.split("<")[1].split(">")[0];
            var userName = user.split("<")[0];
            //chamada do script para checar o usuário
            var grUser = new global.VSTSUtilsAdq().checkUser(userId, userName);
        } else {
            grUser = "";
        }

        var incident = new GlideRecord('incident');
        incident.addQuery('number', incNumber);
        incident.addEncodedQuery(incQuery);
        incident.query();

        if (incident.next()) {
            new global.VSTSUtilsAdq().attStatus(time, incident, holdReason, status, resolution, resolutionNotes, grUser, torre, sisImp, menu, subMenu);
        }
    }
})(request, response);
