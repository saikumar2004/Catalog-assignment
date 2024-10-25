const fs = require('fs');

const inputFile = 'input.json'; 

const decode = (base, value) => {
    return parseInt(value, base);
};

const interpolate = (points) => {
    let c = 0;
    
    points.forEach((p1, i) => {
        let xi = p1.x;
        let yi = p1.y;

        let li = 1;
        points.forEach((p2, j) => {
            if (i !== j) {
                li *= (-p2.x) / (xi - p2.x);
            }
        });

        c += yi * li;
    });

    return Math.round(c);
};

const solve = (inputData) => {
    const n = inputData.keys.n;
    const k = inputData.keys.k;

    let points = [];

    for (let i = 1; i <= n; i++) {
        if (inputData[i.toString()]) { 
            const base = parseInt(inputData[i.toString()].base);
            const encodedValue = inputData[i.toString()].value;

            const y = decode(base, encodedValue);
            points.push({ x: i, y: y });
        } 
    }

    const secretC = interpolate(points.slice(0, k));
    
    console.log("The constant term 'c' is:", secretC);
};

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the input file:', err);
        return;
    }

    const inputData = JSON.parse(data);
    solve(inputData);
});
