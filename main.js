/* Some intertesting snippets of code
 */

/*
 * log messages to the head of body
 * */
function log(varArgs){
    var argArr = Array.prototype.slice.call(arguments, 0);
    var message = argArr.join(" ");
    var messagesContainer = document.createElement("div");
    messagesContainer.setAttribute("class", "messages-container");
    messagesContainer.innerHTML = message;

    var container = document.getElementsByTagName("body")[0];
    container.insertBefore(messagesContainer, container.firstChild);
}
