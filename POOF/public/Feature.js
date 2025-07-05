// Class for individual features. Contains all possible features and attaches to a POOF

class Feature {
    constructor(name, num) {
        this.name = name
        this.num = num
        this.css_element;
    }

    getCSS() {
        return this.css_element;
    }

    // Adds HTML element to webpage which we can change through functions
    Create_Custom_Element(name) {
        const Add_Custom_CSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css

        Add_Custom_CSS(`
            .feature {
                position: absolute;
                width: 150px !important;
                height: 20px !important;
                margin: 0 !important;
                padding: 0 !important;
                background: red;
                z-index: 2147483647; /* Maximum possible */
                transform: translateZ(0);
                box-sizing: content-box !important;
                display: none;
                right: 50px;
                top: 0px;
            }
        `)


        const custom_element = document.createElement("div");
        custom_element.className = "feature";
        custom_element.textContent = name;
        document.body.append(custom_element);

        custom_element.style.top = (this.num * 20).toString() + "px";

        this.css_element = custom_element;
    }

    





}