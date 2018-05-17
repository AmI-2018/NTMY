var path = "./images/icons/"

var nodes = [
    {
        "id": "server",
        "label": "Central server",
        "image": path + "server.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "room-client",
        "label": "Room client",
        "image": path + "board.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "lights",
        "label": "Lights",
        "image": path + "lights.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "tv",
        "label": "TV",
        "image": path + "television.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "speakers",
        "label": "Speakers",
        "image": path + "speaker.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "sign-controller",
        "label": "Sign controller",
        "image": path + "board.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "sign",
        "label": "Smart sign",
        "image": path + "sign.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "smartphone",
        "label": "Smartphone",
        "image": path + "smartphone.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    },
    {
        "id": "wearable",
        "label": "Wearable",
        "image": path + "wearable.svg",
        "shape": "image",
        "font": {
            "face": "Montserrat"
        }
    }
];

var edges = [
    {
        from: "server",
        to: "room-client",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "server",
        to: "smartphone",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "smartphone",
        to: "wearable",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "server",
        to: "sign-controller",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "room-client",
        to: "tv",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "room-client",
        to: "speakers",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "room-client",
        to: "lights",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "sign-controller",
        to: "wearable",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
    {
        from: "sign-controller",
        to: "sign",
        width: 2,
        dashes: true,
        color: {
            color: "#f96332",
            highlight: "#f96332"
        }
    },
];

var options = {
    layout: {
        randomSeed: 793173
    },
    interaction: {
        dragNodes: false,
        dragView: false,
        zoomView: false
    }
};
var container = document.querySelector('.diagram');
var data = {
    nodes: nodes,
    edges: edges
};
network = new vis.Network(container, data, options);

network.on("click", function(params) {
    var node = this.getNodeAt(params.pointer.DOM);
    if (node) {
        $(".arch-desc").addClass("d-none");
        $("#arch-content-" + node).removeClass("d-none");
    }
});

network.selectNodes(["server"]);