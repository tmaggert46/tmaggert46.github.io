
const initialStats = {
    "Alear": { Level: 1, HP: 22, Str: 6, Mag: 0, Dex: 5, Spd: 7, Def: 5, Res: 3, Lck: 5, Bld: 4 },
    "Vander": { Level: 21, HP: 40, Str: 11, Mag: 5, Dex: 10, Spd: 8, Def: 10, Res: 8, Lck: 6, Bld: 6 },
    "Clanne": { Level: 1, HP: 19, Str: 1, Mag: 8, Dex: 11, Spd: 9, Def: 4, Res: 7, Lck: 4, Bld: 4 },
    "Framme": { Level: 1, HP: 18, Str: 3, Mag: 5, Dex: 8, Spd: 7, Def: 4, Res: 8, Lck: 5, Bld: 4 },
    "Alfred": { Level: 5, HP: 27, Str: 9, Mag: 2, Dex: 10, Spd: 6, Def: 8, Res: 5, Lck: 8, Bld: 5 },
    "Etie": { Level: 4, HP: 21, Str: 10, Mag: 0, Dex: 11, Spd: 6, Def: 3, Res: 2, Lck: 8, Bld: 4 },
    "Boucheron": { Level: 4, HP: 29, Str: 10, Mag: 0, Dex: 8, Spd: 7, Def: 6, Res: 3, Lck: 5, Bld: 9 },
    "Céline": { Level: 5, HP: 22, Str: 7, Mag: 9, Dex: 9, Spd: 10, Def: 5, Res: 7, Lck: 11, Bld: 4 },
    "Chloé": { Level: 6, HP: 26, Str: 8, Mag: 4, Dex: 13, Spd: 13, Def: 5, Res: 9, Lck: 10, Bld: 5 },
    "Louis": { Level: 6, HP: 30, Str: 13, Mag: 0, Dex: 11, Spd: 3, Def: 16, Res: 1, Lck: 4, Bld: 8 },
    "Yunaka": { Level: 6, HP: 25, Str: 8, Mag: 5, Dex: 14, Spd: 12, Def: 9, Res: 7, Lck: 8, Bld: 5 },
    "Alcryst": { Level: 10, HP: 28, Str: 11, Mag: 2, Dex: 17, Spd: 12, Def: 8, Res: 5, Lck: 8, Bld: 6 },
    "Citrinne": { Level: 10, HP: 24, Str: 2, Mag: 15, Dex: 13, Spd: 10, Def: 3, Res: 12, Lck: 10, Bld: 4 },
    "Lapis": { Level: 10, HP: 26, Str: 11, Mag: 2, Dex: 12, Spd: 14, Def: 7, Res: 6, Lck: 7, Bld: 5 },
    "Diamant": { Level: 11, HP: 32, Str: 13, Mag: 3, Dex: 13, Spd: 13, Def: 10, Res: 6, Lck: 10, Bld: 9 },
    "Amber": { Level: 11, HP: 31, Str: 15, Mag: 2, Dex: 13, Spd: 11, Def: 9, Res: 3, Lck: 9, Bld: 8 },
    "Jade": { Level: 12, HP: 33, Str: 14, Mag: 4, Dex: 14, Spd: 5, Def: 18, Res: 6, Lck: 5, Bld: 8 },
    "Ivy": { Level: 17, HP: 32, Str: 7, Mag: 17, Dex: 15, Spd: 13, Def: 12, Res: 15, Lck: 4, Bld: 7 },
    "Kagetsu": { Level: 21, HP: 35, Str: 17, Mag: 5, Dex: 22, Spd: 22, Def: 14, Res: 10, Lck: 17, Bld: 9 },
    "Zelkov": { Level: 17, HP: 35, Str: 15, Mag: 3, Dex: 19, Spd: 19, Def: 14, Res: 5, Lck: 7, Bld: 9 },
    "Fogado": { Level: 17, HP: 33, Str: 12, Mag: 7, Dex: 17, Spd: 18, Def: 10, Res: 11, Lck: 8, Bld: 8 },
    "Pandreo": { Level: 21, HP: 34, Str: 7, Mag: 16, Dex: 18, Spd: 17, Def: 8, Res: 22, Lck: 14, Bld: 8 },
    "Bunet": { Level: 21, HP: 41, Str: 15, Mag: 5, Dex: 15, Spd: 9, Def: 20, Res: 8, Lck: 13, Bld: 11 },
    "Timerra": { Level: 18, HP: 35, Str: 14, Mag: 6, Dex: 17, Spd: 18, Def: 16, Res: 8, Lck: 10, Bld: 5 },
    "Panette": { Level: 21, HP: 46, Str: 25, Mag: 3, Dex: 19, Spd: 13, Def: 11, Res: 7, Lck: 11, Bld: 11 },
    "Merrin": { Level: 21, HP: 36, Str: 15, Mag: 10, Dex: 21, Spd: 21, Def: 12, Res: 12, Lck: 14, Bld: 9 },
    "Hortensia": { Level: 19, HP: 27, Str: 5, Mag: 12, Dex: 21, Spd: 19, Def: 6, Res: 23, Lck: 17, Bld: 5 },
    "Seadall": { Level: 15, HP: 33, Str: 12, Mag: 4, Dex: 15, Spd: 16, Def: 10, Res: 10, Lck: 11, Bld: 8 },
    "Rosado": { Level: 23, HP: 44, Str: 16, Mag: 7, Dex: 19, Spd: 21, Def: 15, Res: 11, Lck: 8, Bld: 8 },
    "Goldmary": { Level: 23, HP: 40, Str: 17, Mag: 2, Dex: 18, Spd: 20, Def: 20, Res: 12, Lck: 13, Bld: 9 },
    "Lindon": { Level: 25, HP: 38, Str: 8, Mag: 19, Dex: 21, Spd: 19, Def: 12, Res: 21, Lck: 8, Bld: 10 },
    "Saphir": { Level: 27, HP: 51, Str: 24, Mag: 2, Dex: 23, Spd: 19, Def: 19, Res: 9, Lck: 15, Bld: 15 },
    "Veyle": { Level: 35, HP: 35, Str: 20, Mag: 26, Dex: 24, Spd: 23, Def: 17, Res: 29, Lck: 18, Bld: 7 },
    "Mauvier": { Level: 32, HP: 51, Str: 21, Mag: 23, Dex: 25, Spd: 22, Def: 26, Res: 24, Lck: 16, Bld: 12 },
    "Anna": { Level: 5, HP: 29, Str: 10, Mag: 2, Dex: 9, Spd: 7, Def: 4, Res: 5, Lck: 3, Bld: 7 },
    "Jean": { Level: 1, HP: 19, Str: 4, Mag: 5, Dex: 10, Spd: 7, Def: 4, Res: 8, Lck: 3, Bld: 3 },
    "Nel": { Level: 20, HP: 35, Str: 14, Mag: 12, Dex: 17, Spd: 19, Def: 14, Res: 15, Lck: 16, Bld: 8 },
    "Rafal": { Level: 20, HP: 39, Str: 19, Mag: 7, Dex: 17, Spd: 16, Def: 20, Res: 11, Lck: 12, Bld: 9 },
    "Zelestia": { Level: 20, HP: 38, Str: 17, Mag: 18, Dex: 16, Spd: 20, Def: 15, Res: 19, Lck: 7, Bld: 9 },
    "Gregory": { Level: 21, HP: 35, Str: 10, Mag: 25, Dex: 13, Spd: 13, Def: 13, Res: 25, Lck: 9, Bld: 8 },
    "Madeline": { Level: 21, HP: 46, Str: 24, Mag: 6, Dex: 12, Spd: 7, Def: 27, Res: 9, Lck: 9, Bld: 13 }
};

const statColors = {
    HP: "#004d00",        // Dark Green
    Str: "#8b0000",       // Dark Red
    Mag: "#00008b",       // Dark Blue
    Dex: "#800080",       // Purple
    Spd: "#ff00ff",       // Magenta
    Def: "#000000",       // Black
    Res: "#00ffff",       // Aqua
    Lck: "#b8860b",       // Dark Yellow
    Bld: "#808080"        // Gray
};

const margin = { top: 20, right: 30, bottom: 40, left: 40 };
const width = 800 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

const x = d3.scaleBand()
    .range([0, width])
    .padding(0.1);

const y = d3.scaleLinear()
    .range([height, 0]);

svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`);

svg.append("g")
    .attr("class", "y-axis");

function updateChart(selectedCharacter) {
    const stats = initialStats[selectedCharacter];
    const data = Object.keys(stats).filter(key => key !== "Level").map(key => ({
        name: key,
        value: stats[key]
    }));

    x.domain(data.map(d => d.name));
    y.domain([0, 55]).nice();

    const bars = svg.selectAll(".bar")
        .data(data, d => d.name);

    bars.enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.name))
        .attr("y", height)
        .attr("width", x.bandwidth())
        .attr("height", 0)
        .attr("fill", d => statColors[d.name])
        .merge(bars)
        .transition()
        .delay(250)
        .duration(1000)
        .attr("x", d => x(d.name))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.value))
        .attr("height", d => height - y(d.value));

    bars.exit().remove();

    svg.select(".x-axis")
        .call(d3.axisBottom(x));

    svg.select(".y-axis")
        .call(d3.axisLeft(y));

    // Add text elements to display bar values
    const labels = svg.selectAll(".bar-label")
        .data(data, d => d.name);

    labels.enter().append("text")
        .attr("class", "bar-label")
        .attr("x", d => x(d.name) + x.bandwidth() / 2)
        .attr("y", height)
        .attr("text-anchor", "middle")
        .merge(labels)
        .transition()
        .delay(250)
        .duration(1000)
        .attr("x", d => x(d.name) + x.bandwidth() / 2)
        .attr("y", d => y(d.value) - 5)
        .text(d => d.value.toFixed(0));

    labels.exit().remove();
}


function initializeDropdowns() {
    const classSelect = d3.select("#class-select");

    // List of classes to highlight
    const highlightedClasses = ["Etie", "Chloé", "Veyle"];

    // Add class options
    Object.keys(initialStats).forEach(cls => {
        const option = classSelect.append("option")
            .attr("value", cls)
            .text(cls);
        
        // Highlight specified classes
        if (highlightedClasses.includes(cls)) {
            option.attr("class", "highlighted-option");
        }
    });
} 

updateChart("Alear");
initializeDropdowns();

// Add event listener to dropdown
d3.select("#class-select").on("change", function() {
    const selectedCharacter = d3.select(this).property("value");
    updateChart(selectedCharacter);
});
