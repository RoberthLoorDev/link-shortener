import express from "express";

export const app = express();
const port = 3000;

app.listen(port, () => {
    return console.log("servidor corriendo en el puerto 3000");
});
