class POOF {
    constructor(name, img, rarity, features, description) {
        if (!(name & img & rarity & features & description)) {
            this.name = "Testy";
            this.img = "test.png";
            this.rarity = 1;
            this.features = ["Joke", "Words of Affirmation", "Cat Picturew"]
            this.description = "I am a POOF whose only purpose in life is to serve as a placeholder for testing."
        }

        this.name = name;
        this.img = img;
        this.rarity = rarity;
        this.features = features
        this.description = description
        this.css_element;
    }

    getName() {
        return this.name;
    }
    getRarity() {
        return this.rarity;
    }
    getFeatures(num) {
        return this.features[num];
    }
    getDescription() {
        return this.description;
    }

    setUpCSS(positionX, positionY, document) {
        const Add_Custom_CSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css

            Add_Custom_CSS(`
                .square {

                    all: initial;
                    position: fixed;
                    width: 50px !important;
                    height: 50px !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    background: blue;
                    z-index: 2147483647; /* Maximum possible */
                    transform: translateZ(0);
                    box-sizing: content-box !important;
                    ${`left: ${positionX};`}
                    ${`top: ${positionY};`}
                }
            `)
    }

    Create_Custom_Element(tag, attr_name, id, text) {
        const custom_element = document.createElement(tag);
        custom_element.className = attr_name;
        if (id) custom_element.id = id;
        if (text) custom_element.textContent = text;
        document.body.append(custom_element);
        this.css_element = custom_element;
        return custom_element;
    }

    dragElement() {
        const elmnt = this.css_element;

        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // Calculate new position
            const newX = e.clientX;
            const newY = e.clientY;
            
            // Update position
            elmnt.style.left = (newX - 10) + "px";
            elmnt.style.top = (newY - 20) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            chrome.storage.local.set({
                positionX: elmnt.style.left,
                positionY: elmnt.style.top
            });
        }
    }

    dialogueElement() {
        const element = this.css_element;
        let startTime = 0;
        let startX = 0;
        let startY = 0;

        // Store references to remove listeners later if needed
        const mouseDownHandler = (e) => {
            startTime = Date.now();
            startX = parseInt(element.style.left) || 0;
            startY = parseInt(element.style.top) || 0;
        };

        const clickHandler = (e) => {
            const duration = Date.now() - startTime;
            const currentX = parseInt(element.style.left) || 0;
            const currentY = parseInt(element.style.top) || 0;

            if (duration < 150 && 
                Math.abs(currentX - startX) < 50 && 
                Math.abs(currentY - startY) < 50) {
                alert("You clicked the square! Duration: " + duration + "ms");
            }
        };

        element.addEventListener("mousedown", mouseDownHandler);
        element.addEventListener("click", clickHandler);

        // Optional: Cleanup method
        this.cleanupDialogueListeners = () => {
            element.removeEventListener("mousedown", mouseDownHandler);
            element.removeEventListener("click", clickHandler);
        };
    }
}