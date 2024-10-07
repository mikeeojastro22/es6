const students = [ 
    { name: "Manny", city: "Manila" },
    { name: "Jose", city: "Intramuros"},
    { name: "Ana", city: "Mandaluyong" }
];

for (const student of students){
    const { name, city } = student;
    console.log(`${name} lives in ${city}`);
}