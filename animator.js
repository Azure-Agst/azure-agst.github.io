siteRoot = document.getElementById('text');
var skip = false;

function setSkip(){
    skip = true;
}

function sleep (time) {
    if (!skip){
        return new Promise((resolve) => setTimeout(resolve, time));
    } else {
        return new Promise((resolve) => {resolve()});
    }
}
  
async function renderPage(){
    var element;
    for (i = 0; i < script.length; i++){
        var entry = script[i]; // remove this later
        switch (entry.type){
            case "text":
                // letters.
                var letters = entry.value.split("");
                for (letter = 0; letter < letters.length; letter++){
                    element.appendChild(document.createTextNode(letters[letter]));
                    await sleep(entry.speed);
                }
                break;
            
            case "link":
                // make A class
                link = document.createElement("a");
                link.setAttribute("href", entry.href);
                element.appendChild(link);

                // now for letters.
                var letters = entry.value.split("");
                for (letter = 0; letter < letters.length; letter++){
                    link.appendChild(document.createTextNode(letters[letter]));
                    await sleep(entry.speed);
                }
                break;

            case "newSect":
                // create new node and push.
                element = document.createElement("code");
                siteRoot.appendChild(element);
                br = document.createElement("br");
                siteRoot.appendChild(br);
                break;

            case "function":
                entry.value();
                break;
            
            case "sleep":
                await sleep(entry.value);
                break;
        }
    }
}

// Render page!
renderPage();