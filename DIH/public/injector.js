chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "DIH_UPDATE") {
        const DIH = document.getElementById("test")

        if (message.value) { // DIH is ON
            if (!DIH) { // DIH not already made
                //Inject CSS code into document
                const Add_Custom_CSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css

                Add_Custom_CSS(`
                .square {
                    position: fixed;
                    bottom: 5px;
                    right: 5px;
                    width: 50px;
                    height: 50px;
                    background-color: blue;
                    z-index: 9999; /* Come to front of page */
                }
                `)
                
                function Create_Custom_Element(tag, attr_name, id) {
                    const custom_element = document.createElement(tag);
                    custom_element.className = attr_name;
                    if (id) custom_element.id = id;
                    document.body.append(custom_element);
                    return custom_element;
                }

                dragElement(Create_Custom_Element("div", "square", "test")) // Make a draggable element
            } else { // DIH is ON and has previously been made
                DIH.style.display = 'block'
            }
        } else { // DIH is OFF but has previously been made
            if (DIH) {
                DIH.style.display = 'none'
            }
        }

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            // Move DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup:
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                // stop moving when mouse button is released:
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }

});