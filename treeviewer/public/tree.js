function drawIndentedTree(data, colors, leafColor) {
    const nodeSize = 17;
    const root = d3.hierarchy(data).eachBefore((i => d => d.index = i++)(0));
    const nodes = root.descendants();

    // Calculate width and height based on node size and number of nodes
    const width = document.querySelector('.content-area').clientWidth;
    const height = (nodes.length + 1) * nodeSize;

    // Remove previous content if any
    const svgElement = document.querySelector("svg");
    svgElement.innerHTML = '';
    const svg = d3.select(svgElement)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-nodeSize / 2, -nodeSize * 3 / 2, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif; overflow: visible;");

    // Draw links
    const link = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#999")
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr("d", d => `
            M${d.source.depth * nodeSize},${d.source.index * nodeSize}
            V${d.target.index * nodeSize}
            h${nodeSize}
        `);

    // Draw nodes
    const node = svg.append("g")
        .selectAll("g")
        .data(nodes)
        .join("g")
        .attr("class", d => `node depth-${d.depth} ${d.children ? "" : "leaf-node"}`)
        .attr("transform", d => `translate(0,${d.index * nodeSize})`);

    node.append("circle")
        .attr("cx", d => d.depth * nodeSize)
        .attr("r", 2.5)
        .attr("fill", d => d.children ? colors[d.depth % colors.length] : leafColor); // Color leaf nodes

    node.append("text")
        .attr("dy", "0.32em")
        .attr("x", d => d.depth * nodeSize + 6)
        .text(d => d.data.name)
        .style("fill", d => d.children ? colors[d.depth % colors.length] : leafColor); // Match text color to node color

    node.append("title")
        .text(d => d.ancestors().reverse().map(d => d.data.name).join("/"));
}
