let mind = new MindElixir({
    el: "#map",
    direction: MindElixir.LEFT,
    // create new map data
    data: MindElixir.new("new topic"),
    // or set as data that is return from `.getAllData()`
    draggable: true, // default true
    contextMenu: true, // default true
    toolBar: true, // default true
    nodeMenu: true, // default true
    keypress: true, // default true
});
mind.init();
document.querySelector("#export-json").onclick = (e) => {
    let blob = new Blob([mind.getAllDataString()]);
    let dlUrl = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = dlUrl;
    a.download = mind.nodeData.topic + ".json";
    a.click();
};
document.querySelector("#export-svg").onclick = (e) => {
    painter.exportSvg()
};
document.querySelector("#export-png").onclick = (e) => {
    painter.exportPng()
};
document.querySelector("#import").onchange = e => {
    let file = e.target.files[0]
    var reader = new FileReader();
    reader.onload = function (evt) {
        let data = JSON.parse(evt.target.result)
        mind.nodeData = data.nodeData || {}
        mind.linkData = data.linkData || {}

        mind.addParentLink(mind.nodeData)
        mind.toCenter()
        mind.layout()
        mind.linkDiv()
    };
    reader.readAsText(file);
}
