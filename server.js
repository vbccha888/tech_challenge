//file server

import "dotenv/config"; 
import app from "./src/app.js"; 

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("servidor on");
});

