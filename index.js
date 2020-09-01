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
document.querySelector("#export-svg").onclick = (e) => {};
document.querySelector("#export-png").onclick = (e) => {};
