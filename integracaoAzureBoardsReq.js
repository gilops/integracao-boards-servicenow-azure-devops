var VSTSUtilsAdq_Request = Class.create();

VSTSUtilsAdq_Request.prototype = {
    initialize: function() {},

    //------------------------------------------Métodos Chamados nas BRS------------------------------------------
    updateWIStatus: function(req, assignment_group_created) {
        switch (assignment_group_created.toString()) {
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                this._updateWIStatus(req, '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                this._updateWIStatus(req, '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                this._updateWIStatus(req, '$(organization1)');
                break;
        }
    },

    updateWIHoldReason: function(req, assignment_group_created) {
        switch (assignment_group_created.toString()) {
            // GRUPO 1
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                this._updateWIHoldReason(req, '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                this._updateWIHoldReason(req, '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                this._updateWIHoldReason(req, '$(organization1)');
                break;
        }
    },

    updateWIWorkNotes: function(req, assignment_group_created, texto) {
        switch (assignment_group_created.toString()) {
            // GRUPO 1
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                this._updateWIWorkNotes(req, texto, '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                this._updateWIWorkNotes(req, texto, '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                this._updateWIWorkNotes(req, texto, '$(organization1)');
                break;		
        }
    },

    updateWIAssignment: function(req, assignment_group_created, assignment_group, assignment_group_old) {
        //req, ProjetoUltimoIntegrado, OrganizacaoUltimaIntegrada, ProjetoOndeVem, OrganizacaoOndeVem, ProjetoOndeVai, OrganizacaoOndeVai, AreaPathOndeVai, IterationPathOndeVai
        var organizationCreated = '',
            projectCreated = '',
            projectOld = '',
            organizationOld = '',
            projectNew = '',
            organizationNew = '',
            areaPathNew = '',
            iterationPathNew = '';

        switch (assignment_group_old.toString()) {
            // GRUPO 1
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                projectOld = '$(projeto1)';
                organizationOld = '$(organization1)';
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                projectOld = '$(projeto1)';
                organizationOld = '$(organization1)';
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                projectOld = '$(projeto2)';
                organizationOld = '$(organization1)';
                break;
            default:
                break;
        }

        switch (assignment_group_created.toString()) {
            // GRUPO 1
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                projectCreated = '$(projeto1)';
                organizationCreated = '$(organization1)';
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                projectCreated = '$(projeto1)';
                organizationCreated = '$(organization1)';
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                projectCreated = '$(projeto2)';
                organizationCreated = '$(organization1)';
                break;			

            default:
                break;
        }

        switch (assignment_group.toString()) {
            // GRUPO 1
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                projectNew = '$(projeto1)';
                organizationNew = '$(organization1)';
                areaPathNew = '$(projeto1)\\$(time1_extenso)';
                iterationPathNew = '$(projeto1)';
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                projectNew = '$(projeto1)';
                organizationNew = '$(organization1)';
                areaPathNew = '$(projeto1)\\$(time2_extenso)';
                iterationPathNew = '$(projeto1)';
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                projectNew = '$(projeto2)';
                organizationNew = '$(organization1)';
                areaPathNew = '$(projeto2)\\$(time3_extenso)';
                iterationPathNew = '$(projeto2)';
                break;				

            default:
                break;
        }

        if ((organizationOld != '' && organizationNew != '') || (organizationOld == '' && organizationNew != '' && organizationCreated != '')) { //movimentação dos cards
            this._updateWIAssignmentGroups(req, projectNew, areaPathNew, iterationPathNew, organizationNew);
        } else if ((projectNew == '') && (projectOld == '$(time4)' || projectOld == '$(time5)')) { //saida dos times de integrações $(organization1)
            this._updateWIAssignment$(organization1)(req, projectOld, organizationOld);
        } else { //saida dos times de integrações $(organization2)
            this._updateWIAssignment(req, projectOld, organizationOld);
        }
    },

    createWorkItem: function(reqNumber, assignment_group_created) {
        switch (assignment_group_created.toString()) {
            
            // GRUPO 1
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                this._getInsertWorkItem(reqNumber, assignment_group_created, '$(projeto1)\\$(time1_extenso)', '$(projeto1)', '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                this._getInsertWorkItem(reqNumber, assignment_group_created, '$(projeto1)\\$(time2_extenso)', '$(projeto1)', '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                this._getInsertWorkItem(reqNumber, assignment_group_created, '$(projeto2)\\$(time3_extenso)', '$(projeto2)', '$(organization1)');
                break;		
        }
    },

    sendAttachmentIT: function(req, assignment_group) { //envia o attachment quando o trigger vem da tabela de solicitação
        switch (assignment_group.toString()) {
            // GRUPO 1
            case gs.getProperty('vsts.integration.resolver.$(time1)'):
                this._sendAttachmentIT(req, '$(projeto1)', '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time2)'):
                this._sendAttachmentIT(req, '$(projeto1)', '$(organization1)');
                break;
            case gs.getProperty('vsts.integration.resolver.$(time3)'):
                this._sendAttachmentIT(req, '$(projeto2)', '$(organization1)');
                break;			
        }
    },

    sendAttachmentAT: function(attach) { //envia o attachment quando o trigger vem da tabela de attachments
        var arrayssign = [
            gs.getProperty('vsts.integration.resolver.$(time1)'), // GRUPO 1
            gs.getProperty('vsts.integration.resolver.$(time2)'),
            gs.getProperty('vsts.integration.resolver.$(time3)'),
        ];

        var queryAssign = 'assignment_group=' + arrayssign[0];

        for (var i = 1; i < arrayssign.length; i++) {
            queryAssign += '^ORassignment_group=' + arrayssign[i];
        }

        var request = new GlideRecord('sc_req_item');
        request.addQuery('sys_id', attach.table_sys_id);
        request.addNotNullQuery('u_vsts_request');
        request.addEncodedQuery(queryAssign);

        request.query();

        if (request.next()) {
            switch (request.assignment_group.toString()) {
                // GRUPO 1
                case gs.getProperty('vsts.integration.resolver.$(time1)'):
                    this._sendAttachmentAT(request, attach, '$(projeto1)', '$(organization1)');
                    break;
                case gs.getProperty('vsts.integration.resolver.$(time2)'):
                    this._sendAttachmentAT(request, attach, '$(projeto1)', '$(organization1)');
                    break;
                case gs.getProperty('vsts.integration.resolver.$(time3)'):
                    this._sendAttachmentAT(request, attach, '$(projeto2)', '$(organization1)');
                    break;		
            }
        }
    },

    attStatus: function(time, record, holdReason, status, resolution, resolutionNotes, grUser, torre, sisImp, menu, subMenu) {
        switch (time) {
            // GRUPO 1
            case '$(projeto1)\\$(time1_extenso)':
                this._attStatus(record, holdReason, status, resolution, resolutionNotes, grUser, torre, sisImp, menu, subMenu, '0');
                break;
            case '$(projeto1)\\$(time2_extenso)':
                this._attStatus(record, holdReason, status, resolution, resolutionNotes, grUser, torre, sisImp, menu, subMenu, '0');
                break;
            case '$(projeto2)\\$(time3_extenso)':
                this._attStatus(record, holdReason, status, resolution, resolutionNotes, grUser, 'sistemas_$(organization2)', 'Transação POS/TEF', 'outros_$(time3)', 'outros_$(time3)', '0');
                break;			
        }
    },

    getAssignmentgroup: function(timeIntegracao) {
        var retorno;
        switch (timeIntegracao.toString()) {
            // GRUPO 1
            case "$(projeto1)\\$(time1_extenso)":
                retorno = 'state!=6^assignment_group=' + gs.getProperty('vsts.integration.resolver.$(time1)');
                break;
            case "$(projeto1)\\$(time2_extenso)":
                retorno = 'state!=6^assignment_group=' + gs.getProperty('vsts.integration.resolver.$(time2)');
                break;
            case "$(projeto2)\\$(time3_extenso)":
                retorno = 'state!=6^assignment_group=' + gs.getProperty('vsts.integration.resolver.$(time3)');
                break;			
            default:
                retorno = '';
                break;
        }
        return retorno;
    },

    filtroIntegracaoReq: function() {
        var arrayProperties = [
            'vsts.integration.resolver.$(time1)', // GRUPO 1
            'vsts.integration.resolver.$(time2)',
            'vsts.integration.resolver.$(time3)',
        ];

        var queryProp = 'name=' + arrayProperties[0];
        for (var i = 1; i < arrayProperties.length; i++) {
            queryProp += '^ORname=' + arrayProperties[i];
        }

        var groups = [];
        var properties = new GlideRecord('sys_properties');
        properties.addEncodedQuery(queryProp);
        properties.query();

        while (properties.next()) {
            groups.push(properties.getValue('value').toString());
        }

        return groups;
    },

    getAttachment: function(id, request, filename, VSTSProject, areaPath) {
        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Get Attachment');
            r.setStringParameterNoEscape('id', id);
            r.setStringParameterNoEscape('project', VSTSProject);
            r.setStringParameterNoEscape('organization', '$(organization1)');

            r.saveResponseBodyAsAttachment("sc_req_item", request, filename);

            var response = r.execute();
            var httpStatus = response.getStatusCode();

        } catch (ex) {
            var message = ex.message;
        }
    },
    //------------------------------------------Fim dos Métodos Chamados nas BRS------------------------------------------ 



    //------------------------------------------Métodos Usados no Scripted Rest API------------------------------------------
    _createWorkItemAuto: function(reqNumber, projectName, areaPath, organization, iterationPath) {
        var req = new GlideRecord('sc_req_item');
        req.addEncodedQuery('number=' + reqNumber);
        req.query();

        if (req.next()) {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Create Work Item');
            r.setStringParameterNoEscape('project', projectName);
            r.setStringParameterNoEscape('organization', organization);
            r.setStringParameterNoEscape('type', '$Custom.$(field_solicitacao)'); // solicitação $(organization1)

            r.setRequestBody(this._getObjInsertAuto(req, areaPath, iterationPath));

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

            var json = new JSON().decode(responseBody);
            var vstsNumber = json["id"].toString().split(".")[0];

            req.u_vsts_request = vstsNumber;
            req.update();
        }
    },

    _updateWIAssignment$(organization1): function(req, project, organization) {
        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
            r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._updtAssignmentGroup$(organization1)(req, project));

            var response = r.execute();

            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

        } catch (ex) {
            var message = ex.message;
        }
    },

    _updateWIAssignment: function(req, assignment_group_created, organization) {
        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
            r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._updtAssignmentGroup(req));

            var response = r.execute();

            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

        } catch (ex) {
            var message = ex.message;
        }
    },

    _getInsertWorkItem: function(reqNumber, assignment_group_created, areaPath, project, organization, iteration) {
        var req = new GlideRecord('sc_req_item');
        req.addEncodedQuery('number=' + reqNumber);
        req.query();

        if (req.next()) {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Create Work Item');
            if (areaPath == '$(projeto3)\\$(time6_extenso)')
                r.setStringParameterNoEscape('type', '$Custom.$(campo_solicitacao)'); // solicitação adq $(projeto3)
            else if (project == 'ImpulsionarVendas' || project == '$(projeto1)' || project == '$(projeto2)')
                r.setStringParameterNoEscape('type', '$Custom.fieldname'); // (organization1)
            else if (project == 'SalesForce')
                r.setStringParameterNoEscape('type', '$Custom.fieldname'); // $(organization1)
            else if (project == 'ProjTemporario')
                r.setStringParameterNoEscape('type', '$Custom.fieldname'); //  $(organization1)
            else
                r.setStringParameterNoEscape('type', '$Custom.$(campo_solicitacao)'); // solicitação $(organization1)

            r.setStringParameterNoEscape('project', project);
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._getInsertValue(req, areaPath, iteration));

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();
            var json = new JSON().decode(responseBody);
            var vstsNumber = json["id"].toString().split(".")[0];

            req.u_vsts_request = vstsNumber;
            req.u_assignment_created = assignment_group_created;

            req.update();
        }
    },

    _sendAttachmentAT: function(req, attach, projectName, organization) {
        var filename, cckfilename, cckfilename2;

        //remove caraceteres especiais
        filename = attach.file_name.replace(/[^A-Za-z0-9.]+/g, "");
        //verifica a existência do arquivo no VSTS
        cckfilename = this._checkNotes(req.getValue('u_vsts_request'), filename, projectName, organization);
        cckfilename2 = this._checkNotes(req.getValue('u_vsts_request'), attach.file_name.toString(), projectName, organization);

        if (!cckfilename && !cckfilename2) {
            try {
                var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Send Attachment');
                r.setStringParameterNoEscape('Attachment', filename);
                r.setStringParameterNoEscape('project', projectName);
                r.setStringParameterNoEscape('organization', organization);

                r.setRequestBodyFromAttachment(attach.sys_id);

                var response = r.execute();
                var responseBody = response.getBody();
                var httpStatus = response.getStatusCode();
            } catch (ex) {
                var message = ex.message;
            }

            var json = new JSON().decode(responseBody);
            if (httpStatus == "200" || httpStatus == "201") {
                var attUrl = json['url'].toString();

                try {
                    var rSync = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Link Attachment');
                    rSync.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
                    rSync.setStringParameterNoEscape('project', projectName);
                    rSync.setStringParameterNoEscape('organization', organization);

                    rSync.setRequestBody("[" +
                        "{" +
                        "'op': 'add'," +
                        "'path': '/relations/-'," +
                        "'value': {" +
                        "'rel': 'AttachedFile'," +
                        "'url': '" + attUrl + "'," +
                        "'attributes': {" +
                        "'comment': 'Attachment from ServiceNow'" +
                        "}" +
                        "}" +
                        "}" +
                        ']');

                    var responseSync = rSync.execute();
                    var responseBodySync = responseSync.getBody();
                    var httpStatusSync = responseSync.getStatusCode();

                } catch (ex) {
                    var messageSync = ex.message;
                }
            }
        }
    },

    _sendAttachmentIT: function(req, projectName, organization) {
        var filename, cckfilename, cckfilename2;

        var attachment = new GlideRecord('sys_attachment');
        attachment.addQuery('table_name', req.getTableName());
        attachment.addQuery('table_sys_id', req.sys_id);
        attachment.query();

        while (attachment.next()) {
            //remove caraceteres especiais
            filename = attachment.file_name.replace(/[^A-Za-z0-9.]+/g, "");

            //verifica a existência do arquivo no VSTS
            cckfilename = this._checkNotes(req.getValue('u_vsts_request'), filename, projectName, organization);
            cckfilename2 = this._checkNotes(req.getValue('u_vsts_request'), attachment.file_name, projectName, organization);

            if ((!cckfilename) && (!cckfilename2)) {
                try {
                    var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Send Attachment');
                    r.setStringParameterNoEscape('Attachment', filename);
                    r.setStringParameterNoEscape('project', projectName);
                    r.setStringParameterNoEscape('organization', organization);

                    r.setRequestBodyFromAttachment(attachment.sys_id);

                    var response = r.execute();
                    var responseBody = response.getBody();
                    var httpStatus = response.getStatusCode();
                } catch (ex) {
                    var message = ex.message;
                }

                var json = new JSON().decode(responseBody);
                if (httpStatus == "200" || httpStatus == "201") {
                    var attUrl = json['url'].toString();
                    try {
                        var rSync = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Link Attachment');
                        rSync.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
                        rSync.setStringParameterNoEscape('project', projectName);
                        rSync.setStringParameterNoEscape('organization', organization);

                        rSync.setRequestBody("[" +
                            "{" +
                            "'op': 'add'," +
                            "'path': '/relations/-'," +
                            "'value': {" +
                            "'rel': 'AttachedFile'," +
                            "'url': '" + attUrl + "'," +
                            "'attributes': {" +
                            "'comment': 'Attachment from ServiceNow'" +
                            "}" +
                            "}" +
                            "}" +
                            ']');

                        var responseSync = rSync.execute();
                        var responseBodySync = responseSync.getBody();
                        var httpStatusSync = responseSync.getStatusCode();
                    } catch (ex) {
                        var messageSync = ex.message;
                    }
                }
            }
        }
    },

    _updateWIAssignmentGroups: function(req, projectName, areaPath, iterationPath, organization) {
        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Move Work Item');
            r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._updtAssignmentGroupBack(projectName, areaPath, iterationPath));

            var response = r.execute();

            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

            if (httpStatus == 200 || httpStatus == 201) {
                var r1 = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
                r1.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
                r1.setStringParameterNoEscape('organization', organization);

                r1.setRequestBody("[" +
                    "{" +
                    "'op': 'add'," +
                    "'path': '/fields/System.State'," +
                    "'value': 'To Do'" +
                    "}" +
                    "]");

                var response1 = r1.execute();

                var responseBody1 = response1.getBody();
                var httpStatus1 = response1.getStatusCode();
            }

        } catch (ex) {
            var message = ex.message;
        }
    },

    _updateWIWorkNotes: function(req, texto, organization) {
        var r1 = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Default GET');
        r1.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
        r1.setStringParameterNoEscape('organization', organization);

        var response1 = r1.execute();
        var responseBody1 = response1.getBody();
        var json = new JSON().decode(responseBody1);
        var textovsts = json["fields"]["System.History"];

        if (!textovsts)
            textovsts = '';

        if (!texto.contains('Robo VSTS (Comentários adicionais)') && textovsts != texto && !(texto.contains("Solicitação #" + req.u_vsts_request) || texto.contains("commented on by"))) {
            try {
                var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
                r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
                r.setStringParameterNoEscape('organization', organization);

                r.setRequestBody(this._getNotesValue(texto));

                var response = r.execute();
                var responseBody = response.getBody();
                var httpStatus = response.getStatusCode();
            } catch (ex) {
                var message = ex.message;
            }
        }
    },

    _updateWIHoldReason: function(req, organization) {
        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
            r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._getHoldReasonValue(req));

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

        } catch (ex) {
            var message = ex.message;
        }
    },

    _updateWIHoldReasonAuto: function(req, organization) {
        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
            r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._getHoldReasonValueAuto(req));

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

        } catch (ex) {
            var message = ex.message;
        }
    },

    _updateWIStatusAuto: function(req, organization) {
        var response, responseBody, httpStatus, message, r;

        try {
            r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
            r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._getStateValueAuto(req));

            response = r.execute();
            responseBody = response.getBody();
            httpStatus = response.getStatusCode();
        } catch (ex) {
            message = ex.message;
        }
    },

    _updateWIStatus: function(req, organization) {
        var response, responseBody, httpStatus, message, r;

        try {
            r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
            r.setStringParameterNoEscape('id', req.getValue('u_vsts_request'));
            r.setStringParameterNoEscape('organization', organization);

            r.setRequestBody(this._getStateValue(req));

            response = r.execute();
            responseBody = response.getBody();
            httpStatus = response.getStatusCode();

        } catch (ex) {
            message = ex.message;
        }
    },

    checkNotes: function(VSTSRequest, filename, VSTSProject) {
        var vetorNames = [];

        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Get Attachments');
            r.setStringParameterNoEscape('id', VSTSRequest);
            r.setStringParameterNoEscape('project', VSTSProject);

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

            //var json = new JSON().decode(responseBody);
            var relationsa = new JSON().decode(responseBody);
            var vetorRelations = relationsa.relations;
            for (var i = 0; i < vetorRelations.length; i++) {
                vetorNames.push(vetorRelations[i].attributes.name);
            }
            var arrayUtil = new ArrayUtil();
            return arrayUtil.contains(vetorNames, filename);
        } catch (ex) {
            var message = ex.message;
        }
    },

    sendNotes: function(sysId, vstsId, VSTSProject) {
        var workNotes, reqComments;
        var req = new GlideRecord('sc_req_item');
        req.addQuery('sys_id', sysId);
        req.query();
        if (req.next()) {
            //workNotes = req.work_notes.getJournalEntry(-1);
            workNotes = req.work_notes.getHTMLValue();
            reqComments = req.comments.getHTMLValue();
            try {
                var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Change Work Item');
                r.setStringParameterNoEscape('id', vstsId);
                r.setStringParameterNoEscape('project', VSTSProject);

                r.setRequestBody("[" +
                    "{" +
                    "'op': 'add'," +
                    "'path': '/fields/System.History'," +
                    "'value': '" + workNotes + "'" +
                    "}" +
                    "]");

                var response = r.execute();
                var responseBody = response.getBody();
                var httpStatus = response.getStatusCode();

            } catch (ex) {
                var message = ex.message;
            }
        }
    },

    _getWorkItem: function(reqNumber, organization) {
        var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Default GET');
        r.setStringParameterNoEscape('id', reqNumber);
        r.setStringParameterNoEscape('organization', organization);

        var response = r.execute();
        var responseBody = response.getBody();
        var httpStatus = response.getStatusCode();

        return new JSON().decode(responseBody);
    },

    _checkNotes: function(VSTSRequest, filename, VSTSProject, organization) {
        var vetorNames = [];
        try {
            var r = new sn_ws.RESTMessageV2('VSTS Integration $(organization2)', 'Get Attachments');
            r.setStringParameterNoEscape('id', VSTSRequest);
            r.setStringParameterNoEscape('project', VSTSProject);
            r.setStringParameterNoEscape('organization', organization);

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

            var relationsa = new JSON().decode(responseBody);
            var vetorRelations = relationsa.relations;
            for (var i = 0; i < vetorRelations.length; i++) {
                vetorNames.push(vetorRelations[i].attributes.name);
            }
            var arrayUtil = new ArrayUtil();
            return arrayUtil.contains(vetorNames, filename);
        } catch (ex) {
            var message = ex.message;
        }
    },
    //------------------------------------------Fim dos Métodos Usados no Scripted Rest API------------------------------------------



    //------------------------------------------Sub Métodos Usados no Scripted Rest API------------------------------------------
    _attAssignment_created: function(req, assignment) {
        req.u_assignment_created = assignment;
        req.update();
    },

    _attStatusAuto: function(record, holdReason, status, resolution, resolutionNotes, grUser, torreSol, sistImpSol, menuSol, subMenu, baseDeConhecimento) {
        if (status != record.getDisplayValue('status')) {
            switch (status) {
                case "To do":
                    record.setValue('state', '1');
                    break;
                case "WIP":
                    record.setValue('state', '2');
                    break;
                case "Blocked":
                    record.setValue('state', '3');
                    this._attHoldReason(holdReason, record);
                    switch (holdReason) {
                        case "Aguardando Solicitante":
                            record.setValue('assignment_group', '$sysIdgroup');
                            break;
                        case "Aguardando Evidência":
                            record.setValue('assignment_group', '$sysIdgroup');
                            break;
                        case "Aguardando Problema":
                            record.setValue('assignment_group', '$sysIdgroup');
                            break;
                    }
                    break;
                case "Closed":
                    record.setValue('state', '6');
                    this._closedFields(record, torreSol, sistImpSol, menuSol, subMenu, resolution, baseDeConhecimento, resolutionNotes);
                    break;
                case "Canceled":
                    record.setValue('state', '8');
                    break;
            }

            if (grUser != "") {
                this.assignUser(grUser, record.getValue('assignment_group'));
            }

            record.setValue('assigned_to', grUser);

            record.update();
        }
    },

    _getObjInsertAuto: function(req, areaPath, iterationPath) {
        var array = [];
        var severidade;

        switch (req.urgency.toString()) {
            case "1":
                severidade = "2";
                break;
            case "2":
                severidade = "3";
                break;
            case "3":
                severidade = "4";
                break;
            case "4":
                severidade = "1";
                break;
        }


        var objArea = {};
        objArea.op = 'add';
        objArea.path = '/fields/System.AreaPath';
        objArea.value = areaPath;

        var objIteration = {};
        objIteration.op = 'add';
        objIteration.path = '/fields/System.IterationPath';
        objIteration.value = iterationPath;

        var objTitle = {};
        objTitle.op = 'add';
        objTitle.path = '/fields/System.Title';
        objTitle.value = req.number + ' | ' + req.cat_item.getDisplayValue();

        var objPriority = {};
        objPriority.op = 'add';
        objPriority.path = '/fields/Microsoft.VSTS.Common.Priority';
        if (req.priority.toString() == '4' || req.priority.toString() == '1' || req.priority.toString() == '2' || req.priority.toString() == '3')
            objPriority.value = req.priority.toString();
        else
            objPriority.value = '3';

        var objseverity = {};
        objseverity.op = 'add';
        objseverity.path = '/fields/Microsoft.VSTS.Common.Severity';
        objseverity.value = severidade;

        var objStatusSN = {};
        objStatusSN.op = 'add';
        objStatusSN.path = '/fields/Custom.StatusServiceNow';
        objStatusSN.value = 'Open';

        var objNumSN = {};
        objNumSN.op = 'add';
        objNumSN.path = '/fields/Custom.NumerodochamadoServiceNow';
        objNumSN.value = req.number.toString();

        var objDescription = {};
        objDescription.op = 'add';
        objDescription.path = '/fields/Custom.$(campo_descricao)'; //Descrição ServiceNow'
        objDescription.value = this._customDescriptionAuto(req);

        var objDate = {};
        objDate.op = 'add';
        objDate.path = '/fields/Custom.$(campo_data_criacao)'; //Custom.Datadecriacao
        objDate.value = this._getCreatedDate(req);

        array.push(JSON.stringify(objIteration), JSON.stringify(objArea), JSON.stringify(objTitle), JSON.stringify(objPriority), JSON.stringify(objseverity), JSON.stringify(objStatusSN), JSON.stringify(objNumSN), JSON.stringify(objDescription), JSON.stringify(objDate));

        return '[' + array + ']';
    },

    _getCreateObjInsert: function(req, fields, areaPath, iterationPath, organization) {
        var array = [];

        var objTitle = {};
        objTitle.op = 'add';
        objTitle.path = '/fields/System.Title';
        objTitle.value = fields["System.Title"];

        var objArea = {};
        objArea.op = 'add';
        objArea.path = '/fields/System.AreaPath';
        objArea.value = areaPath;

        var objIteration = {};
        objIteration.op = 'add';
        objIteration.path = '/fields/System.IterationPath';
        objIteration.value = iterationPath;

        var objPriority = {};
        objPriority.op = 'add';
        objPriority.path = '/fields/Microsoft.VSTS.Common.Priority';
        objPriority.value = fields["Microsoft.VSTS.Common.Priority"];

        var objseverity = {};
        objseverity.op = 'add';
        objseverity.path = '/fields/Microsoft.VSTS.Common.Severity';
        objseverity.value = fields["Microsoft.VSTS.Common.Severity"];

        var objStatusSN = {};
        objStatusSN.op = 'add';
        objStatusSN.path = '/fields/Custom.StatusServiceNow';
        objStatusSN.value = 'Open';

        var objNumSN = {};
        if (fields["Custom.NumerodoServiceNow"]) {
            objNumSN.op = 'add';
            objNumSN.path = '/fields/Custom.NumerodoServiceNow';
            objNumSN.value = fields["Custom.NumerodoServiceNow"];
        } else {
            objNumSN.op = 'add';
            objNumSN.path = '/fields/Custom.NumerodoServiceNow';
            objNumSN.value = fields["Custom.NumerodochamadoServiceNow"];
        }

        var objDescription = {};
        if (fields["Custom.DescricaoServiceNow"]) {
            objDescription.op = 'add';
            objDescription.path = '/fields/Custom.DescricaoServiceNow';
            objDescription.value = fields["Custom.DescricaoServiceNow"];
        } else {
            objDescription.op = 'add';
            objDescription.path = '/fields/Custom.DescricaoServiceNow';
            objDescription.value = fields["Custom.$(campo_descricao)"]; //Custom.DescricaoServiceNow
        }


        var objDate = {};
        if (fields["Custom.Datadecriacao"]) {
            objDate.op = 'add';
            objDate.path = '/fields/Custom.Datadecriacao';
            objDate.value = fields["Custom.Datadecriacao"];
        } else {
            objDate.op = 'add';
            objDate.path = '/fields/Custom.Datadecriacao';
            objDate.value = fields["Custom.$(campo_data_criacao)"]; //Custom.Datadecriacao
        }


        var objSLALink = {};
        objSLALink.op = 'add';
        objSLALink.path = '/fields/Custom.SLAlink';
        objSLALink.value = gs.getProperty("glide.servlet.uri") + 'sc_req_item.do?sys_id=' + req.sys_id;
        array.push(JSON.stringify(objSLALink));


        if (fields["Custom.DescricaoSolucaodada"]) {
            var objDescricaoDada = {};
            objDescricaoDada.op = 'add';
            objDescricaoDada.path = '/fields/Custom.DescricaoSolucaodada';
            objDescricaoDada.value = fields["Custom.DescricaoSolucaodada"];
            array.push(JSON.stringify(objDescricaoDada));
        }

        array.push(JSON.stringify(objArea), JSON.stringify(objIteration), JSON.stringify(objTitle), JSON.stringify(objPriority), JSON.stringify(objseverity), JSON.stringify(objStatusSN), JSON.stringify(objNumSN), JSON.stringify(objDescription), JSON.stringify(objDate), JSON.stringify(objSLALink));

        return '[' + array + ']';
    },

    _getCreateObjInsertAuto: function(req, fields, areaPath, iterationPath, organization) {
        var array = [];

        var objTitle = {};
        objTitle.op = 'add';
        objTitle.path = '/fields/System.Title';
        objTitle.value = fields["System.Title"];

        var objArea = {};
        objArea.op = 'add';
        objArea.path = '/fields/System.AreaPath';
        objArea.value = areaPath;

        var objIteration = {};
        objIteration.op = 'add';
        objIteration.path = '/fields/System.IterationPath';
        objIteration.value = iterationPath;

        var objPriority = {};
        objPriority.op = 'add';
        objPriority.path = '/fields/Microsoft.VSTS.Common.Priority';
        objPriority.value = fields["Microsoft.VSTS.Common.Priority"];

        var objseverity = {};
        objseverity.op = 'add';
        objseverity.path = '/fields/Microsoft.VSTS.Common.Severity';
        objseverity.value = fields["Microsoft.VSTS.Common.Severity"];

        var objStatusSN = {};
        objStatusSN.op = 'add';
        objStatusSN.path = '/fields/Custom.StatusServiceNow';
        objStatusSN.value = 'Open';

        var objNumSN = {};
        objNumSN.op = 'add';
        objNumSN.path = '/fields/Custom.NumerodochamadoServiceNow';
        objNumSN.value = fields["Custom.NumerodoServiceNow"];

        var objDescription = {};
        objDescription.op = 'add';
        objDescription.path = '/fields/Custom.$(campo_descricao)'; //Custom.DescricaoServiceNow
        objDescription.value = fields["Custom.DescricaoServiceNow"];

        var objDate = {};
        objDate.op = 'add';
        objDate.path = '/fields/Custom.$(campo_data_criacao)'; //Custom.Datadecriacao
        objDate.value = fields["Custom.Datadecriacao"];

        if (fields["Custom.DescricaoSolucaodada"]) {
            var objDescricaoDada = {};
            objDescricaoDada.op = 'add';
            objDescricaoDada.path = '/fields/Custom.$(campo_descricao_solucao)'; //Custom.DescricaoSolucaodada
            objDescricaoDada.value = fields["Custom.DescricaoSolucaodada"];
            array.push(JSON.stringify(objDescricaoDada));
        }

        array.push(JSON.stringify(objArea), JSON.stringify(objIteration), JSON.stringify(objTitle), JSON.stringify(objPriority), JSON.stringify(objseverity), JSON.stringify(objStatusSN), JSON.stringify(objNumSN), JSON.stringify(objDescription), JSON.stringify(objDate));

        return '[' + array + ']';
    },

    checkAttachmentInSNow: function(idReq, fileName) {
        var att = new GlideRecord('sys_attachment');
        att.addQuery('table_sys_id', idReq);
        att.addQuery('file_name', fileName);
        att.query();
        if (att.next()) {
            return true;
        } else {
            return false;
        }
    },

    checkUser: function(userId, userName) {
        var grUser = new GlideRecord('sys_user');
        grUser.addQuery('user_name', userId);
        grUser.query();
        if (!grUser.next()) {
            grUser.initialize();
            grUser.user_name = userId;
            grUser.first_name = userName;
            grUser.email = userId;
            grUser.insert();
        }

        return grUser.sys_id;
    },

    assignUser: function(user, group) {

        var groupMember = new GlideRecord('sys_user_grmember');
        groupMember.addQuery('user', user);
        groupMember.addQuery('group', group);
        groupMember.query();
        if (!groupMember.next()) {
            groupMember.initialize();
            groupMember.user = user;
            groupMember.group = group;
            groupMember.insert();
        }
    },

    _attStatus: function(record, holdReason, status, resolution, resolutionNotes, grUser, torreSol, sistImpSol, menuSol, subMenu, baseDeConhecimento) {
        if (status != record.getDisplayValue('status')) {
            switch (status) {
                case "WIP":
                    record.setValue('state', '2');
                    break;
                case "Blocked":
                    record.setValue('state', '-5');
                    this._attHoldReason(holdReason, record);
                    break;
                case "Resolved":
                    //confirmar os valores dos campos
                    record.setValue('state', '6');
                    this._closedFields(record, torreSol, sistImpSol, menuSol, subMenu, resolution, baseDeConhecimento, resolutionNotes);
                    break;
                case "Closed":
                    record.setValue('state', '3');
                    break;
                case "Canceled":
                    record.setValue('state', '8');
                    break;
            }

            if (grUser != "") {
                this.assignUser(grUser, record.getValue('assignment_group'));
            }

            record.setValue('assigned_to', grUser);

            record.update();
        }
    },

    _getNotesValue: function(notes) {
        var array = [];
        var objWorkNote = {};

        objWorkNote.op = 'add';
        objWorkNote.path = '/fields/System.History';
        objWorkNote.value = notes;

        array.push(JSON.stringify(objWorkNote));

        return '[' + array + ']';
    },

    _getHoldReasonValue: function(req) {
        var holdReason;
        var array = [];
        var objMotivo = {};

        switch (req.getValue('u_motivo').toString()) {
            case "1":
                holdReason = 'Aguardando Solicitante';
                break;
            case "2":
                holdReason = 'Aguardando Evidência';
                break;
            case "3":
                holdReason = 'Aguardando Problema';
                break;
            case "4":
                holdReason = 'Aguardando Fornecedor';
                break;
            case "5":
                holdReason = 'Aguardando Mudança';
                break;
        }

        objMotivo.op = 'add';
        objMotivo.path = '/fields/Custom.MotivodaPendencia';
        objMotivo.value = holdReason;

        array.push(JSON.stringify(objMotivo));

        return '[' + array + ']';
    },

    _getHoldReasonValueAuto: function(req) {
        var holdReason;
        var array = [];
        var objMotivo = {};

        switch (req.getValue('u_motivo').toString()) {
            case "1":
                holdReason = 'Aguardando Solicitante';
                break;
            case "2":
                holdReason = 'Aguardando Evidência';
                break;
            case "3":
                holdReason = 'Aguardando Problema';
                break;
            case "4":
                holdReason = 'Aguardando Fornecedor';
                break;
            case "5":
                holdReason = 'Aguardando Mudança';
                break;
        }

        objMotivo.op = 'add';
        objMotivo.path = '/fields/Custom.$sysIdgroup'; //Custom.MotivodaPendencia
        objMotivo.value = holdReason;

        array.push(JSON.stringify(objMotivo));

        return '[' + array + ']';
    },

    _getInsertValue: function(req, areaPath, iteration) {
        var array = [];
        var severidade;

        switch (req.urgency.toString()) {
            case "1":
                severidade = "2";
                break;

            case "2":
                severidade = "3";
                break;

            case "3":
                severidade = "4";
                break;

            case "4":
                severidade = "1";
                break;
        }

        if (iteration) {
            var objIteration = {};
            objIteration.op = 'add';
            objIteration.path = '/fields/System.IterationPath';
            objIteration.value = iteration;

            array.push(JSON.stringify(objIteration));
        }

        var objArea = {};
        objArea.op = 'add';
        objArea.path = '/fields/System.AreaPath';
        objArea.value = areaPath;

        var objTitle = {};
        objTitle.op = 'add';
        objTitle.path = '/fields/System.Title';
        objTitle.value = req.number + ' | ' + req.short_description;

        var objPriority = {};
        objPriority.op = 'add';
        objPriority.path = '/fields/Microsoft.VSTS.Common.Priority';
        objPriority.value = req.priority.toString();

        var objseverity = {};
        objseverity.op = 'add';
        objseverity.path = '/fields/Microsoft.VSTS.Common.Severity';
        objseverity.value = severidade;

        var objStatusSN = {};
        objStatusSN.op = 'add';
        objStatusSN.path = '/fields/Custom.StatusServiceNow';
        objStatusSN.value = 'Open';

        var objNumSN = {};
        objNumSN.op = 'add';
        objNumSN.path = '/fields/Custom.NumerodoServiceNow';
        objNumSN.value = req.number.toString();

        var objDescription = {};
        objDescription.op = 'add';
        objDescription.path = '/fields/Custom.DescricaoServiceNow';
        //objDescription.value = 'teste description';
        objDescription.value = this._customDescription(req);

        var objDate = {};
        objDate.op = 'add';
        objDate.path = '/fields/Custom.Datadecriacao';
        objDate.value = this._getCreatedDate(req);

        var objSLALink = {};
        objSLALink.op = 'add';
        objSLALink.path = '/fields/Custom.SLAlink';
        objSLALink.value = gs.getProperty("glide.servlet.uri") + 'sc_req_item.do?sys_id=' + req.sys_id;

        array.push(JSON.stringify(objArea), JSON.stringify(objTitle), JSON.stringify(objPriority), JSON.stringify(objseverity), JSON.stringify(objStatusSN), JSON.stringify(objNumSN), JSON.stringify(objDescription), JSON.stringify(objDate), JSON.stringify(objSLALink));

        return '[' + array + ']';
    },

    _getStateValueAuto: function(req) {
        var state;
        var texto;
        var array = [];
        var objState = {},
            objSNStatus = {},
            objDesc = {},
            objDataFechamento = {},
            objResolucao = {};

        state = req.getValue('state').toString();

        if (state == '1' || state == '75') { // Open - Encaminhado
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'To do';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Open';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '2') { // Em Andamento
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'WIP';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Em Andamento';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '-5') { // Pendente
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Blocked';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Pendente';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '6') { // Resolved
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Closed';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Resolved';

            objDesc.op = 'add';
            objDesc.path = '/fields/Custom.$(campo_descricao_solucao)'; //Custom.DescricaoSolucaodada
            objDesc.value = this._getResolution(req);

            objResolucao.op = 'add';
            objResolucao.path = '/fields/Custom.8cc700c9-a71d-4852-8dd5-9db35d232d17'; //Custom.Resolucao
            objResolucao.value = req.getDisplayValue('close_code');

            objDataFechamento.op = 'add';
            objDataFechamento.path = '/fields/Microsoft.VSTS.Common.ClosedDate';
            objDataFechamento.value = this._getClosedDate();

            array.push(JSON.stringify(objDataFechamento), JSON.stringify(objResolucao), JSON.stringify(objDesc), JSON.stringify(objSNStatus), JSON.stringify(objState));

        } else if (state == '3') { // Closed	
            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Closed';

            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Closed';

            objDataFechamento.op = 'add';
            objDataFechamento.path = '/fields/Microsoft.VSTS.Common.ClosedDate';
            objDataFechamento.value = this._getClosedDate();

            array.push(JSON.stringify(objDataFechamento), JSON.stringify(objSNStatus), JSON.stringify(objState));

        } else if (state == '8') { // Canceled
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Canceled';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Canceled';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '-15') { //Reopened
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'To Do';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Reopened';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));
        }

        return '[' + array + ']';
    },

    _getStateValue: function(req) {
        var state;
        var texto;
        var array = [];
        var objState = {},
            objSNStatus = {},
            objDesc = {},
            objDataFechamento = {},
            objResolucao = {};

        state = req.getValue('state').toString();

        if (state == '1' || state == '75') { // Open - Encaminhado
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'To do';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Open';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '2') { // Em Andamento
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'WIP';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Em Andamento';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '-5') { // Pendente
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Blocked';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Pendente';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '6') { // Resolved
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Resolved';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Resolved';

            objDesc.op = 'add';
            objDesc.path = '/fields/Custom.DescricaoSolucaodada';
            objDesc.value = this._getResolution(req);

            objResolucao.op = 'add';
            objResolucao.path = '/fields/Custom.Resolucao';
            objResolucao.value = req.getDisplayValue('u_paliat_deft');

            objDataFechamento.op = 'add';
            objDataFechamento.path = '/fields/Microsoft.VSTS.Common.ClosedDate';
            objDataFechamento.value = this._getClosedDate();

            array.push(JSON.stringify(objDataFechamento), JSON.stringify(objResolucao), JSON.stringify(objDesc), JSON.stringify(objSNStatus), JSON.stringify(objState));

        } else if (state == '3') { // Closed	
            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Closed';

            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Closed';

            objDataFechamento.op = 'add';
            objDataFechamento.path = '/fields/Microsoft.VSTS.Common.ClosedDate';
            objDataFechamento.value = this._getClosedDate();

            array.push(JSON.stringify(objDataFechamento), JSON.stringify(objSNStatus), JSON.stringify(objState));

        } else if (state == '8') { // Canceled
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Canceled';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Canceled';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));

        } else if (state == '-15') { //Reopened
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'To do';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Reopened';

            array.push(JSON.stringify(objState), JSON.stringify(objSNStatus));
        }

        return '[' + array + ']';
    },

    _updtAssignmentGroupBack: function(project, area, iteration) {
        var array = [];
        var objProject = {},
            objArea = {},
            objIteration = {};

        objProject.op = 'add';
        objProject.path = '/fields/System.TeamProject';
        objProject.value = project;

        objArea.op = 'add';
        objArea.path = '/fields/System.AreaPath';
        objArea.value = area;

        objIteration.op = 'add';
        objIteration.path = '/fields/System.IterationPath';
        objIteration.value = iteration;

        array.push(JSON.stringify(objProject), JSON.stringify(objArea), JSON.stringify(objIteration));

        return '[' + array + ']';
    },

    _updtAssignmentGroup$(organization1): function(req, project) {
        var array = [];
        var objSNStatus = {},
            objIteration = {},
            objDescSolucao = {},
            objCom = {};

        if (project == '$(time5)' || project == '$(projeto1)' || project == 'ImpulsionarVendas') { // GRUPO 2
            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/System.State';
            objSNStatus.value = 'Blocked';

            objIteration.op = 'add';
            objIteration.path = '/fields/System.IterationPath';
            objIteration.value = '$(time5)\\Sus Team';

            objDescSolucao.op = 'add';
            objDescSolucao.path = '/fields/Custom.$(campo_descricao_solucao)'; //Custom.DescricaoSolucaodada
            objDescSolucao.value = 'Chamado redirecionado para fila: ' + req.getDisplayValue('assignment_group');

            array.push(JSON.stringify(objSNStatus), JSON.stringify(objIteration), JSON.stringify(objDescSolucao));

        } else if (project == '$(projeto2)' || project == '$(projeto1)' || project == 'ImpulsionarVendas') {
            objState.op = 'add';
            objState.path = '/fields/System.State';
            objState.value = 'Blocked';

            objMotivo.op = 'add';
            objMotivo.path = '/fields/Custom.MotivodaPendencia';
            objMotivo.value = 'Aguardando Solicitante';

            objSNStatus.op = 'add';
            objSNStatus.path = '/fields/Custom.StatusServiceNow';
            objSNStatus.value = 'Pendente';

            objCom.op = 'add';
            objCom.path = '/fields/System.History';
            objCom.value = 'Chamado redirecionado para fila: ' + req.getDisplayValue('assignment_group');

            array.push(JSON.stringify(objCom), JSON.stringify(objSNStatus), JSON.stringify(objState), JSON.stringify(objMotivo));
        }

        return '[' + array + ']';
    },

    _updtAssignmentGroup: function(req) {
        var array = [];
        var objSNStatus = {},
            objState = {},
            objMotivo = {},
            objCom = {};

        objState.op = 'add';
        objState.path = '/fields/System.State';
        objState.value = 'Blocked';

        objMotivo.op = 'add';
        objMotivo.path = '/fields/Custom.MotivodaPendencia';
        objMotivo.value = 'Aguardando Solicitante';

        objSNStatus.op = 'add';
        objSNStatus.path = '/fields/Custom.StatusServiceNow';
        objSNStatus.value = 'Pendente';

        objCom.op = 'add';
        objCom.path = '/fields/System.History';
        objCom.value = 'Chamado redirecionado para fila: ' + req.getDisplayValue('assignment_group');

        array.push(JSON.stringify(objCom), JSON.stringify(objSNStatus), JSON.stringify(objState), JSON.stringify(objMotivo));

        return '[' + array + ']';
    },

    _customDescription: function(req) {
        var description = " ";
        var grRitm = new GlideRecord('sc_req_item');
        if (grRitm.get(req.sys_id)) {
            var variables = grRitm.variables.getElements();
            for (var i = 0; i < variables.length; i++) {
                var question = variables[i].getQuestion();
                if (question.getValue() != '') {
                    if (question.getLabel() == 'Solicitado para:' ||
                        question.getLabel() == 'Aberto por:') {
                        var user = new GlideRecord('sys_user');
                        user.addQuery('sys_id', question.getValue());
                        user.query();

                        if (user.next()) {
                            var name = user.name;
                            description = description + "<b>" + question.getLabel() + " </b>" + name + "<br> ";
                        }
                    } else if (question.getValue() != 'true') {
                        description = description + "<b>" + question.getLabel() + " </b>" + question.getValue() + "<br> ";
                    }
                }
            }
        }

        return description.replace(/[#$^&*]+/g, '').replace(/(\r\n|\n|\r)/gm, '<br>');
    },

    _customDescriptionAuto: function(req) {
        var description = " ";
        var gr = new GlideRecord('sc_req_item');
        if (gr.get(req.sys_id)) {
            var variables = gr.variables.getElements();
            for (var i = 0; i < variables.length; i++) {
                var question = variables[i].getQuestion();
                if (question.getValue() != '') {
                    if (question.getLabel() == 'Solicitado para:' ||
                        question.getLabel() == 'Aberto por:') {
                        var user = new GlideRecord('sys_user');
                        user.addQuery('sys_id', question.getValue());
                        user.query();

                        if (user.next()) {
                            var name = user.name;
                            description = description + "<b>" + question.getLabel() + " </b>" + name + "<br> ";
                        }
                    } else if (question.getValue() != 'true') {
                        description = description + "<b>" + question.getLabel() + " </b>" + question.getValue() + "<br> ";
                    }
                }
            }
        }
        return description;
    },

    _getCreatedDate: function(req) {
        var date = req.sys_created_on;
        return date.replace(" ", "T");
    },

    _getResolution: function(req) {
       
        var f = "<br> <b> Resolution Notes:  </b>" + req.getDisplayValue('close_notes');
        return a0 + a + b + c + d + e + f;
    },

    _attHoldReason: function(holdReason, record) {
        switch (holdReason) {
            case "Aguardando Solicitante":
                record.setValue('u_motivo', '1');
                break;

            case "Aguardando Mudança":
                record.setValue('u_motivo', '5');
                break;

            case "Aguardando Evidência":
                record.setValue('u_motivo', '2');
                break;

            case "Aguardando Problema":
                record.setValue('u_motivo', '3');
                break;

            case "Aguardando Fornecedor":
                record.setValue('u_motivo', '4');
                break;
        }
    },

    _closedFields: function(record, torreSol, sistImpSol, menuSol, subMenu, closeCode, baseDeConhecimento, closeNotes) {
        if (!torreSol) {
            torreSol = 'sistemas_$(organization2)';
            sistImpSol = 'Outros';
            menuSol = 'Outros';
            subMenu = 'outros30';
        } else {
            var obj = {};
            obj = this._getCloseInformation(torreSol, sistImpSol, menuSol, subMenu);
            torreSol = obj.torre;
            sistImpSol = obj.sisImp;
            menuSol = obj.menuSoli;
            subMenu = obj.subiMenu;
        }

        
        record.setValue('close_notes', closeNotes);
    },

    _getCloseInformation: function(torreSol, sistImpSol, menuSol, subMenu) {
        var obj = {};

        var torre = new GlideRecord('sys_choice');
        torre.addEncodedQuery('name=sc_req_item^element=u_torre_sol^label=' + torreSol);
        torre.query();

        if (torre.next())
            obj.torre = torre.getValue('value');

        var sisImp = new GlideRecord('sys_choice');
        sisImp.addEncodedQuery('name=sc_req_item^element=u_sist_imp_sol^label=' + sistImpSol + '^dependent_value=' + obj.torre);
        sisImp.query();

        if (sisImp.next())
            obj.sisImp = sisImp.getValue('value');

        var menuSoli = new GlideRecord('sys_choice');
        menuSoli.addEncodedQuery('name=sc_req_item^element=u_menu_sol^label=' + menuSol + '^dependent_value=' + obj.sisImp);
        menuSoli.query();

        if (menuSoli.next())
            obj.menuSoli = menuSoli.getValue('value');

        var subiMenu = new GlideRecord('sys_choice');
        subiMenu.addEncodedQuery('name=sc_req_item^element=u_sub_menu^label=' + subMenu + '^dependent_value=' + obj.menuSoli);
        subiMenu.query();

        if (subiMenu.next())
            obj.subiMenu = subiMenu.getValue('value');

        return obj;
    },

    _getResolutionValue: function(resolution) {
        var resolutionCode = new GlideRecord('sys_choice');
        resolutionCode.addEncodedQuery('name=sc_req_item^element=u_paliat_deft^label=' + resolution);
        resolutionCode.query();

        if (resolutionCode.next())
            return resolutionCode.value;

        return "";
    },

    _getClosedDate: function() {
        var gdt = new GlideDateTime().getDisplayValueInternal().toString().replace(' ', 'T') + 'Z';
        return gdt;
    },
    //------------------------------------------Fim dos Sub Métodos Usados no Scripted Rest API------------------------------------------
    type: 'VSTSUtilsAdq_Request'
};