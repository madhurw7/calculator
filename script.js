

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
        return false;
    }
    
    but[1].onclick = function() {
        clearDisplay();
        butValue("1");
        return false;
    }
    
    but[2].onclick = function() {
        clearDisplay();
        butValue("2");
        return false;
    }
    
    but[3].onclick = function() {
        clearDisplay();
        butValue("3");
        return false;
    }
    
    but[4].onclick = function() {
        clearDisplay();
        butValue("4");
        return false;
    }
    
    but[5].onclick = function() {
        clearDisplay();
        butValue("5");
        return false;
    }
    
    but[6].onclick = function() {
        clearDisplay();
        butValue("6");
        return false;
    }
    
    but[7].onclick = function() {
        clearDisplay();
        butValue("7");
        return false;
    }
    
    but[8].onclick = function() {
        clearDisplay();
        butValue("8");
        return false;
    }
    
    but[9].onclick = function() {
        clearDisplay();
        butValue("9");
        return false;
    }
    
    butAdd.onclick = function() {
        clearDisplay();
        butValue("+ ");
        return false;
    }
    
    butMinus.onclick = function() {
        clearDisplay();
        butValue("- ");
        return false;
    }
    
    butResult.onclick = function() {
        var res = eval(displayArea.value);
        document.getElementById("result").innerHTML = res.toString();
        return false;
    }
    
     butClear.onclick = function() {
        displayArea.value = "";
        return false;
    }
    
    
    
    butDivide.onclick = function() {
        clearDisplay();
        butValue("/ ");
        return false;
    }
    
    butMultiply.onclick = function() {
        clearDisplay();
        butValue("* ");
        return false;
    }
    
   
    
    
//}

/*window.onload = function() {
    startEventHandlers();
};*/
