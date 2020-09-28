const proffs = [{
    name: "João Pablo",
    avatar: "https://instagram.fbsb15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119713586_180415873580102_2347263711263243162_n.jpg?_nc_ht=instagram.fbsb15-1.fna.fbcdn.net&_nc_ohc=qrPdJCWc-4wAX9xZoh0&oh=fcfdd0ae0352b303e56283e61da5329e&oe=5F93CD80",
    whatsap: 6199807353,
    bio: "Entusiasta e apaixonado por tecnologias.<br><br>Software Developer | Pós-Graduado Banco de Dados e Business Intelligence Soft Skills: ReactJs, NodeJs, JavaScript, HTML, CSS, Python, Git, Criação de API, Power BI, MongoDB, SQL, Heroku,Linux",
    subject: "Programação",
    cost: 50,
    weekday: [0],
    time_frm: [720],
    time_to: [1220]
}]



const express = require('express');
const server = express();

server.use(express.static('public'))

.get("/", (req, res) => {
        return res.sendFile(__dirname + '/views/index.html');
    })
    .get("/study", (req, res) => {
        return res.sendFile(__dirname + '/views/study.html');
    })
    .get("/give-classes", (req, res) => {
        return res.sendFile(__dirname + '/views/give-classes.html');
    })

.listen(5500);