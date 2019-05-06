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
    b = $('#sira')[0].getElementsByTagName("div").length;
    b = b - 1;
    c = $('#sira')[0].getElementsByClassName("node" + b)[0].style.borderColor = "black";
    //Renk


    if (counter < countValArr.length) {

        //Renk
        var a = $("#siraDiv")[0].getElementsByClassName("node" + counter)[0];
        a.style.borderColor = "red";
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
            var b = $('#sira')[0].getElementsByClassName("node" + d)[0];
            b.style.borderColor = "black";
            //Renk

        }
        a = $('#sira')[0].getElementsByClassName("node" + counter)[0];
        val = a.getElementsByTagName('p')[0].innerHTML;
        upperVal = $('#siraDiv')[0].getElementsByClassName("node" + upperCounter)[0].getElementsByTagName('p')[0].innerHTML;
        degerDiv = $('#degerDiv')[0].getElementsByClassName("node" + upperCounter)[0].getElementsByTagName('p')[0];
        //console.log(upperVal, val);

        if (upperVal == val) {
            degerDiv.innerHTML = parseInt(degerDiv.innerHTML) + 1;
        }
        //Renk
        a.style.borderColor = "blue";
        //Renk


        counter++;
        setTimeout(inputArrayNodesColor, 100, counter, upperCounter);
    }else {
        $("#siraDiv")[0].getElementsByClassName("node" + upperCounter)[0].style.borderColor = "black";
        upperCounter++;
        setTimeout(countValArrColor, 1000, upperCounter);
    }
}


/*
* Siralama Kısmı
* */



function siraDivColor(index) {
    length = $('#degerDiv')[0].getElementsByTagName('div').length;
    if (length > index) {
        //Renk
        a = $('#siraDiv')[0].getElementsByClassName('node' + index)[0];
        a.style.borderColor = "red";
        //Renk

        val = $('#degerDiv')[0].getElementsByClassName('node' + index)[0].getElementsByTagName('p')[0].innerHTML;
        setTimeout(degerDivColor, 1000, index, val);

    }
}


function degerDivColor(upperIndex ,val) {


    //Renk
    div = $('#degerDiv')[0].getElementsByClassName('node' + upperIndex)[0];
    div.style.borderColor = "blue";
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