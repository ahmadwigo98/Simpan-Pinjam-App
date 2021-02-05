import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3080/api/",
    headers: {
        "Content-type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:8090"
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        // "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    }
});