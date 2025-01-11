// tar-1 

import fs from "node:fs/promises";

async function readFile(fileName) {
    try {
        // קריאת התוכן של הקובץ
        const data = await fs.readFile(fileName, "utf8");
        
        // ספירת מילים - פיצול לפי רווח אחד בין כל מילה
        const wordCount = data.split(" ").length;
        
        console.log(`Number of words is : ${wordCount}`);
    } catch (err) {
        // טיפול בשגיאות
        if (err.code === "ENOENT") {
            console.error("Error : File not found ");
        } else {
            console.error("Undifined error :", err.message);
        }
    }
}

// קריאה לפונקציה עם שם הקובץ
const fileName = "example.txt"; 
readFile(fileName);
