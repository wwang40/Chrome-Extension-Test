chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "POOF_UPDATE") {
        //Receive instruction to activate or deactive extension
        const POOF_ON = document.getElementById("test")
        const onDisplay = new POOF("Testy", "test.png", 1, ["Joke", "Words of Affirmation", "Cat Picture"], "I am a POOF whose only purpose in life is to serve as a placeholder for testing.");

        if (message.value) { // POOF is ON
            if (!POOF_ON) { // POOF not already made
                chrome.storage.local.get(['positionX', 'positionY'], (result) => {
                    //Inject CSS code into document
                    onDisplay.setUpCSS(result.positionX, result.positionY, document)
                })
                
                onDisplay.Create_Custom_Element("div", "square", "test", "CLICK ME!")

                onDisplay.dragElement()

                onDisplay.dialogueElement()
                

                //FRAMEWORK FOR NEXT STEP:
                //dialogueTree(CUSTOM ELEMENT)

            } else { // POOF is ON and has previously been made
                POOF_ON.style.display = 'block'
            }
        } else { // POOF is OFF but has previously been made
            if (POOF_ON) {
                POOF_ON.style.display = 'none'
            }
            return;
        }


        //FRAMEWORK
        //difogueTree(element, # (this will probably be a list of strings with 1 per feature))
        //Gives the element a dialogue tree with # interactables. 
        //element.onmousedown => spawn a # of interactables depending on element's position (mimic a dialogue bubble)

        //interactable(dialogue, action)
        //Combine with dialogueTree()?
        //when dialogue is selected/clicked, action will happen. First work on making text appear, then images, then audio, etc.
    }

    else if (message.type === "POS_UPDATE") {
        chrome.storage.local.get(['positionX', 'positionY'], (result) => {
            document.getElementById("test").style.top = result.positionY
            document.getElementById("test").style.left = result.positionX
        });
    }

});
