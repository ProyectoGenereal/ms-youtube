import {Router} from "express";

const rutaCanal = Router();

rutaCanal.get("/", (req, res) => {
    res.json({
        "application": "YouTube",
    })
});

rutaCanal.get("/canal", (req, res) => {
    res.json({
        "Msg": "Hola mundo",
        "user": "Vélez",
        "application": "YouTube",
        "type": "Back"
    })
});

export default rutaCanal;