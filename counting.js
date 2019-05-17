function slideDownSiraDiv() {
    $("#siraDiv").slideDown(slDwn);
    clock += 500;
    stTmOut = setTimeout(slideDownDegerDiv, clock);
}

function slideDownDegerDiv() {
    $("#degerDiv").slideDown(slDwn);
    clock += 800;
    startTime = new Date().getTime();
    fonkName = "countValArrColor";
    params.push(0);
    stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);
}

function activeStep(element) {
    var step = document.getElementById(element).classList.add("active");
}

function deactiveStep(element) {
    var step = document.getElementById(element).classList.remove("active");
}

funcs = {
    "countValArrColor": function(counter) {
        deactiveStep("bolum2");
        deactiveStep("bolum4");
        activeStep("bolum3");
        //Renk
        b = $('#sira div').length;
        b = b - 1;
        $('#sira .node' + b).removeAttr('id').attr('id', 'node');
        //Renk


        if (counter < countValArr.length) {

            //Renk
            $('#siraDiv .node' + counter).removeAttr('id').attr('id', 'nodeRed');
            //Renk



            clock = 800;
            startTime = new Date().getTime();
            fonkName = "inputArrayNodesColor";
            params = new Array();
            params.push(0, counter);
            stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);
        } else {

            clock = 2000;
            startTime = new Date().getTime();
            fonkName = "siraDivColor";
            params = new Array();
            params.push(0);
            stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);
        }
    },
    "inputArrayNodesColor": function(counter, upperCounter) {
        if (counter < inputArray.length) {
            if (counter > 0) {
                d = counter - 1;

                //Renk
                $('#sira .node' + d).removeAttr('id').attr('id', 'node');
                //Renk

            }
            a = $('#sira')[0].getElementsByClassName("node" + counter)[0];
            val = $('#sira .node' + counter + ' p').text();
            upperVal = $('#siraDiv .node' + upperCounter + ' p').text();
            degerDiv = $('#degerDiv .node' + upperCounter + ' p');

            if (upperVal == val) {
                degerDiv.text(parseInt(degerDiv.text()) + 1);
                deactiveStep("bolum3");
                activeStep("bolum4");
                //Renk
                $('#sira .node' + counter).removeAttr('id').attr('id', 'nodeMatch');
                //Renk
            } else {
                //Renk
                $('#sira .node' + counter).removeAttr('id').attr('id', 'nodeBlue');
                deactiveStep("bolum4");
                activeStep("bolum3");
                //Renk
            }


            counter++;
            clock = 100;
            startTime = new Date().getTime();
            fonkName = "inputArrayNodesColor";
            params = new Array();
            params.push(counter, upperCounter);
            stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);
        } else {
            $('#siraDiv .node' + upperCounter).removeAttr('id').attr('id', 'node');
            upperCounter++;
            clock = 1000;
            startTime = new Date().getTime();
            fonkName = "countValArrColor";
            params = new Array();
            params.push(upperCounter);
            stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);
        }
    },
    "siraDivColor": function(index) {
        deactiveStep("bolum3");
        activeStep("bolum4");
        //length = $('#degerDiv')[0].getElementsByTagName('div').length;
        length = $('#degerDiv div').length;
        if (length > index) {

            if (index > 0) {
                $('#siraDiv .node' + (index - 1)).removeAttr('id').attr('id', 'node');
            }
            //Renk
            $('#siraDiv .node' + index).removeAttr('id').attr('id', 'nodeRed');
            //Renk
            deactiveStep("bolum6");
            deactiveStep("bolum4");
            activeStep("bolum5");

            val = $('#degerDiv .node' + index + ' p').text();
            clock = 1000;
            startTime = new Date().getTime();
            fonkName = "degerDivColor";
            params = new Array();
            params.push(index, val);
            stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);

        }
    },
    "degerDivColor": function degerDivColor(upperIndex, val) {

        if (upperIndex > 0) {
            $('#degerDiv .node' + (upperIndex - 1)).removeAttr('id').attr('id', 'node');
        }

        //Renk
        $('#degerDiv .node' + upperIndex).removeAttr('id').attr('id', 'nodeBlue');
        //Renk


        clock = 1000;
        startTime = new Date().getTime();
        fonkName = "siraliDivColor";
        params = new Array();
        params.push(upperIndex, val);
        stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);

    },
    "siraliDivColor": function siraliDivColor(upperIndex, val) {
        deactiveStep("bolum3");
        deactiveStep("bolum4");
        activeStep("bolum5");
        deactiveStep("bolum6");
        if (val == 0) {
            setTimeout(function() {
                upperIndex++;

                clock = 1000;
                startTime = new Date().getTime();
                fonkName = "siraDivColor";
                params = new Array();
                params.push(upperIndex);
                stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);
            }, 1000);
        } else {
            node('siraliDiv', upperIndex, upperIndex);
            deactiveStep("bolum5");
            activeStep("bolum6");
            val--;
            vale = $('#degerDiv')[0].getElementsByClassName('node' + upperIndex)[0].getElementsByTagName('p')[0];
            vale.innerHTML = parseInt(vale.innerHTML) - 1;

            clock = 1000;
            startTime = new Date().getTime();
            fonkName = "degerDivColor";
            params = new Array();
            params.push(upperIndex, val);
            stTmOut = setTimeout(funcs[fonkName], clock, params[0], params[1], params[2]);

        }
    }
}