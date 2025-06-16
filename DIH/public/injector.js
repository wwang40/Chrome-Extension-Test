chrome.storage.local.get(['DIH'], (result) => {
      if (result.DIH) {

        //Add custom CSS 
        const Add_Custom_CSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css

        function Create_Custom_Element(tag, attr_name) {
            const custom_element = document.createElement(tag)
            custom_element.className = attr_name
            document.body.append(custom_element)
        }

        Add_Custom_CSS(`
            .square {
            position: fixed;
            bottom: 5px;
            right: 5px;
            width: 50px;
            height: 50px;
            background-color: blue;
            }
        `)

        Create_Custom_Element("div", "square")

        Create_Custom_Element("div", "square")
      }
    });

/*
const body = document.querySelector('body')
const app = document.createElement('div')

app.id = 'react-root'

if(body){
    body.prepend(app)
}

const container = document.getElementById('react-root');
const root = createRoot(container);
root.render(<App/>)
*/
