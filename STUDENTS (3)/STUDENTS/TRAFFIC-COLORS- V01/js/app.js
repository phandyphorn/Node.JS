const RED_STATUS = "RED";
const YELLOW_STATUS = "YELLOW";
const GREEN_STATUS = "RED";
/**
 * Function used to refresh the DOM after user set the color.
 * @param {String} status 
 */
function refreshDom(status) {
    RED_LIGHT.className = "grey";
    YELLOW_LIGHT.className = "grey";
    GREEN_LIGHT.className = "grey";
    //TODO*

    // Check is status equal to RED_STATUS set className = "red" to RED_LIGHT

    // Check is status equal to YELLOW_STATUS set className = "yellow" to YELLOW_LIGHT

    // Check is status equal to GREEN_STATUS set className = "green" to GREEN_LIGHT

  }

/**
 * Function used to get status from input and 
 * call function  refreshDom by put status as paramater.
 */
function setStatus(){
    //TODO*

    // 1- get status from combo box

    // 2 refresh DOM

}

// -------------------MAIN CODE--------------------------------
const RED_LIGHT = document.querySelector("#redLight");
const YELLOW_LIGHT = document.querySelector("#yellowLight");
const GREEN_LIGHT = document.querySelector("#greenLight");
const TRAFFIC_STATUS = document.querySelector("#trafficStatus");
const SET_BUTTON = document.querySelector("#setAllColor");
SET_BUTTON.addEventListener("click", setStatus);