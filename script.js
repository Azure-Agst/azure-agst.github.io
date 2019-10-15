script = [
    // Line 1
    { "type": "newSect" },
    { "type": "sleep", "value": 500 },
    { "type": "text", "value": "Hey there! ", "speed": 30 },
    { "type": "sleep", "value": 900 },
    { "type": "text", "value": "Welcome to my website! ", "speed": 20 },
    { "type": "sleep", "value": 1500 },

    // Line 2
    { "type": "newSect" },
    { "type": "text", "value": "My name's Andrew Augustine and I'm a Computer Science student at Florida State University. ", "speed": 20 },
    { "type": "sleep", "value": 1500 },

    // Line 3
    { "type": "newSect" },
    { "type": "text", "value": "I'm currently a freshman at the university, and an intern at the FSU Innovation Hub as a software developer. ", "speed": 20 },
    { "type": "sleep", "value": 1500 },

    // Line 4
    // { "type": "newSect" },
    // { "type": "text", "value": "My current project with the Hub is a webapp geared pairing students with other students/companies to work on projects for their resume. ", "speed": 20 },
    // { "type": "sleep", "value": 500 },
    // { "type": "text", "value": "It's called \"Creator Connect\" and can be found on our github ", "speed": 20 },
    // { "type": "link", "value": "here.", "href": "https://github.com/FSUInnovationHub/CreatorConnect", "speed": 20 },
    // { "type": "sleep", "value": 1500 },

    // Line 5
    { "type": "newSect" },
    { "type": "text", "value": "If you're here to look at my resume and/or portfolio, let me get a few links for you", "speed": 20 },
    { "type": "sleep", "value": 500 },
    { "type": "text", "value": ".", "speed": 1 },
    { "type": "sleep", "value": 500 },
    { "type": "text", "value": ".", "speed": 1 },
    { "type": "sleep", "value": 500 },
    { "type": "text", "value": ". ", "speed": 1 },
    { "type": "sleep", "value": 1500 },

    // Line 6
    { "type": "newSect" },
    { "type": "text", "value": "Wait a minute. ", "speed": 20 },
    { "type": "sleep", "value": 1000 },
    { "type": "text", "value": "This is pretty boring isn't it? ", "speed": 20 },
    { "type": "sleep", "value": 1000 },
    { "type": "text", "value": "You've probably come here to see what I can do, not get this boring lecture about what I've done. ", "speed": 20 },
    { "type": "sleep", "value": 1500 },

    // Line 6
    { "type": "newSect" },
    { "type": "text", "value": "Alright. ", "speed": 20 },
    { "type": "sleep", "value": 1000 },
    { "type": "text", "value": "Let's spice it up. ", "speed": 20 },
    { "type": "sleep", "value": 1000 },
    { "type": "text", "value": "I'll open up a terminal for us to mess with.", "speed": 20 },
    { "type": "sleep", "value": 1500 },

    // open console
    { "type": "function", "value": function() {
        console.log("wow!")
        document.getElementById('text').style.width = "50%";
        document.getElementById('console').style.width = "50%";
    } },
]