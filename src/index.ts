//import cluster from "cluster";
//import { cpus } from "os";
import { application } from "./app";

const PORT = process.env.PORT || 4545;

application.listen(PORT, () => console.log(`Server running at port: ${PORT}`))