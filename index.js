let mind = new MindElixir({
    el: '#map',
    direction: MindElixir.LEFT,
    // create new map data
    data: MindElixir.new('new topic'),
    // or set as data that is return from `.getAllData()`
    draggable: true, // default true
    contextMenu: true, // default true
    toolBar: true, // default true
    nodeMenu: true, // default true
    keypress: true, // default true
})
mind.init()