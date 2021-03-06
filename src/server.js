const proffys = [{
    name: "João Pablo",
    avatar: "https://instagram.fbsb15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119713586_180415873580102_2347263711263243162_n.jpg?_nc_ht=instagram.fbsb15-1.fna.fbcdn.net&_nc_ohc=qrPdJCWc-4wAX9xZoh0&oh=fcfdd0ae0352b303e56283e61da5329e&oe=5F93CD80",
    whatsapp: 61998073453,
    bio: "Entusiasta e apaixonado por tecnologias.<br><br>Software Developer | Pós-Graduado Banco de Dados e Business Intelligence Soft Skills: ReactJs, NodeJs, JavaScript, HTML, CSS, Python, Git, Criação de API, Power BI, MongoDB, SQL, Heroku,Linux",
    subject: "Programação",
    cost: 50,
    weekday: [0],
    time_frm: [720],
    time_to: [1220]
}, {
    name: "Luan Lima",
    avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQEehVhjry0R0g/profile-displayphoto-shrink_100_100/0?e=1603324800&v=beta&t=wIypMmdskrOSbZSEmQofOrO3LL_lnYUsrhRsSsaDLh4",
    whatsapp: 6199907553,
    bio: "Entusiasta e apaixonado por Computação Gráfica e Design 3D .<br><br> Acelere sua Criatividade. Soft Skills: Photoshop, InDesign, Adobe Premiere Pro, llustrator, Adobe XD, Autodesk Maya, Zbrush.",
    subject: "Design gráfico",
    cost: 40,
    weekday: [1],
    time_frm: [720],
    time_to: [1220]
}, ]

const subjects = [

    "Artes",
    "Biologia",
    "Ciências",
    "Design gráfico",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
    "Programação",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",

]


// Funcionalidades 
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position];
}



function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", {
        proffys,
        filters,
        subjects,
        weekdays
    });
}

function pageGiveClasses(req, res) {
    const data = req.query;

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data);

        return res.redirect('/study');
    } else {

        return res.render("give-classes.html", { subjects, weekdays });

    }

}


const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

// configuração do Nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

server
// configuração de arquivos estáticos (css, scripts, imagens)
    .use(express.static('public'))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500);