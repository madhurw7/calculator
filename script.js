

//function startEventHandlers(){
    var but = [];
    var i = 0;
    for(i = 0; i < 11; i++){
        but[i] = document.getElementById("but" + i);
    }
    var butAdd = document.getElementById("butAdd");
    var butMinus = document.getElementById("butMinus");
    var butMultiply = document.getElementById("butM");
    var butResult = document.getElementById("butResult");
    var butDivide = document.getElementById("butDivide");
    var butClear = document.getElementById("butClear");
    var displayArea = document.getElementById("displayArea");
    var butOpen = document.getElementById("butOpen");
    var butClose = document.getElementById("butClose");
    var butMod = document.getElementById("butMod");
    var butPoint = document.getElementById("butPoint");

    function clearDisplay(){
        if (displayArea.value == "Everything appears here")
        displayArea.value = "";
    }
    
    function butValue(x) {
        displayArea.value = displayArea.value + x;
        
    }
    
   // document.onclick = function() {
     //   alert("What");
    //};
    
    displayArea.onfocus = function(){
        clearDisplay();
    }; 
    
    
    
    //Button Clicking Event Handlers
    but[0].onclick = function() {
        clearDisplay();
        butValue("0");
        but[0].blur();
        return false;
    }
    
    but[1].onclick = function() {
        clearDisplay();
        butValue("1");
        but[1].blur();
        return false;
    }
    
    but[2].onclick = function() {
        clearDisplay();
        butValue("2");
        but[2].blur();
        return false;
    }
    
    but[3].onclick = function() {
        clearDisplay();
        butValue("3");
        but[3].blur();
        return false;
    }
    
    but[4].onclick = function() {
        clearDisplay();
        butValue("4");
        but[4].blur();
        return false;
    }
    
    but[5].onclick = function() {
        clearDisplay();
        butValue("5");
        but[5].blur();
        return false;
    }
    
    but[6].onclick = function() {
        clearDisplay();
        butValue("6");
         but[6].blur();
        return false;
    }
    
    but[7].onclick = function() {
        clearDisplay();
        butValue("7");
        but[7].blur();
        return false;
    }
    
    but[8].onclick = function() {
        clearDisplay();
        butValue("8");
        but[8].blur();
        return false;
    }
    
    but[9].onclick = function() {
        clearDisplay();
        butValue("9");
        but[9].blur();
        return false;
    }
    
    butAdd.onclick = function() {
        clearDisplay();
        butValue("+");
        butAdd.blur();
        return false;
    }
    
    butMinus.onclick = function() {
        clearDisplay();
        butValue("-");
        butMinus.blur();
        return false;
    }
    
    butResult.onclick = function() {
        var res = eval(displayArea.value);
        document.getElementById("result").innerHTML = res.toString();
        displayArea.value = res.toString();
        return false;
    }
    
     butClear.onclick = function() {
        displayArea.value = "";
        document.getElementById("result").innerHTML = "0";
        return false;
    }
    
    
    
    butDivide.onclick = function() {
        clearDisplay();
        butValue("/");
        return false;
    }
    
    butMultiply.onclick = function() {
        clearDisplay();
        butValue("*");
        return false;
    }
    
    butOpen.onclick = function() {
        clearDisplay();
        butValue("(");
        return false;
    }
    
    butClose.onclick = function() {
        clearDisplay();
        butValue(")");
        return false;
    }
    
    butMod.onclick = function() {
        clearDisplay();
        butValue("%");
        return false;
    }
    
    butPoint.onclick = function() {
        clearDisplay();
        butValue(".");
        return false;
    }
   
   
    
//  window.addEventListener("keydown", keyDownTextField, false);

    window.onkeydown = function keyDownTextField(e) {
        var keyCode = e.keyCode;
        if(keyCode==13) {
            //var res = eval(displayArea.value);
            //document.getElementById("result").innerHTML = res.toString();
            butResult.click();
           return false;   
        }
        
    }
    
    
    
//}

/*window.onload = function() {
    startEventHandlers();
};*/
