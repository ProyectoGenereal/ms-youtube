import server from "./src/server.js";

const main = async() => {
    try {
        console.log("Puerto conectado");
        await server.listen(server.get("port"))
    } catch (error) {
        const er = "Error al conectarse al puerto: "
        console.log(er, error);
    }
}

main();