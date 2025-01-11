// tar-2

//להריץ : npm install xlsx

import fs from "node:fs/promises";
import xlsx from "xlsx";


async function readFile(fileName) {
    try {
        // קריאת קובץ Excel 
        const fileBuffer = await fs.readFile(fileName);

        // xlsx קריאת התוכן באמצעות 
        const workbook = xlsx.read(fileBuffer, { type: "buffer" });

        // שליפת הנתונים מהגיליון הראשון
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = xlsx.utils.sheet_to_json(worksheet);

        // הדפסת סוג הנתונים של data
        console.log("Data type:", typeof data); 
        console.log("Data:", data); 

        // בניית מערך ציונים
        const scores = data.map(row => row["Grade"]) ; 
        console.log("scores:", scores); 

        // חישוב ממוצע הציונים
        let total = 0;
        scores.forEach(grade =>  total += grade);

        const average = total / scores.length;

        console.log(`Avaredge Grades is : ${average.toFixed(2)}`);

    } catch (err) {
        console.error("Eroor : ", err.message);
    }
}

// קריאה לפונקציה
const fileName = "grades.xlsx";
readFile(fileName);
