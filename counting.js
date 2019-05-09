function slideDownSiraDiv() {
    $("#siraDiv").slideDown(slDwn);
    setTimeout(slideDownDegerDiv, slDwn + 500);
}

function slideDownDegerDiv() {
    $("#degerDiv").slideDown(slDwn);
    setTimeout(countValArrColor, slDwn + 800, 0);
}

function countValArrColor(counter) {

    //Renk
    b = $('#sira div').length;
    b = b - 1;
    $('#sira .node' + b).removeAttr('id').attr('id', 'node');
    //Renk


    if (counter < countValArr.length) {

        //Renk
        $('#siraDiv .node' + counter).removeAttr('id').attr('id', 'nodeRed');
        //Renk


        setTimeout(inputArrayNodesColor, 800, 0, counter);
    }else {
        setTimeout(siraDivColor, 2000, 0);
    }
}

function inputArrayNodesColor(counter, upperCounter) {
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
            console.log(degerDiv.text());
            degerDiv.text(parseInt(degerDiv.text()) + 1);
        }
        //Renk
        $('#sira .node' + counter).removeAttr('id').attr('id', 'nodeBlue');
        //Renk


        counter++;
        setTimeout(inputArrayNodesColor, 100, counter, upperCounter);
    }else {
        $('#siraDiv .node' + upperCounter).removeAttr('id').attr('id', 'node');
        upperCounter++;
        setTimeout(countValArrColor, 1000, upperCounter);
    }
}


/*
* Siralama Kısmı
* */



function siraDivColor(index) {
    //length = $('#degerDiv')[0].getElementsByTagName('div').length;
    length = $('#degerDiv div').length;
    if (length > index) {

        if (index > 0) {
            $('#siraDiv .node' + (index - 1)).removeAttr('id').attr('id', 'node');
        }
        //Renk
        $('#siraDiv .node' + index).removeAttr('id').attr('id', 'nodeRed');
        //Renk

        val = $('#degerDiv .node' + index + ' p').text();
        setTimeout(degerDivColor, 1000, index, val);

    }
}


function degerDivColor(upperIndex ,val) {

    if (upperIndex > 0) {
        $('#degerDiv .node' + (upperIndex - 1)).removeAttr('id').attr('id', 'node');
    }

    //Renk
    $('#degerDiv .node' + upperIndex).removeAttr('id').attr('id', 'nodeBlue');
    //Renk


    setTimeout(siraliDivColor, 1000, val, upperIndex);
}


function siraliDivColor(val, upperIndex) {
    if (val == 0) {
        setTimeout(function () {
            upperIndex++;
            setTimeout(siraDivColor, 1000, upperIndex);
        }, 1000);
    }else {
        node('siraliDiv', upperIndex, upperIndex);
        val--;
        vale = $('#degerDiv')[0].getElementsByClassName('node' + upperIndex)[0].getElementsByTagName('p')[0];
        vale.innerHTML = parseInt(vale.innerHTML) - 1;
        setTimeout(degerDivColor, 1000, upperIndex, val);
    }
}