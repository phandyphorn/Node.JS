const RED_STATUS = "RED";
const YELLOW_STATUS = "YELLOW";
const GREEN_STATUS = "GREEN";
/**
 * Function used to refresh the DOM after user set the color.
 * @param {String} status 
 */
function refreshDom(status) {
    RED_LIGHT.className = "grey";
    YELLOW_LIGHT.className = "grey";
    GREEN_LIGHT.className = "grey";
    //TODO*
    // COPY FROM EXERICSE 01

  }

/**
 * Function used to get status from input and 
 * call function refreshDom by put status as paramater.
 */
function setStatus(){
    //TODO*
    let status = TRAFFIC_STATUS.value;
    // Set the status to server

}

/**
 * Function used to get status from server.
 */
function getStatus(){
  // Get the status from server.

}

// -------------------MAIN CODE--------------------------------
const RED_LIGHT = document.querySelector("#redLight");
const YELLOW_LIGHT = document.querySelector("#yellowLight");
const GREEN_LIGHT = document.querySelector("#greenLight");
const TRAFFIC_STATUS = document.querySelector("#trafficStatus");
const SET_BUTTON = document.querySelector("#setAllColor");
SET_BUTTON.addEventListener("click", setStatus);

// To call the getStatus function several times for each second
setInterval(getStatus, 500);