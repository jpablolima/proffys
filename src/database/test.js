const Database = require('./db');
const createProffy = require('./createProffy');



Database.then(async(db) => {
    // Inserir dados

    proffyValue = {

        name: "João Pablo",
        avatar: "https://instagram.fbsb15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119713586_180415873580102_2347263711263243162_n.jpg?_nc_ht=instagram.fbsb15-1.fna.fbcdn.net&_nc_ohc=qrPdJCWc-4wAX9xZoh0&oh=fcfdd0ae0352b303e56283e61da5329e&oe=5F93CD80",
        whatsapp: 61998073453,
        bio: "Entusiasta e apaixonado por tecnologias.<br><br>Software Developer | Pós-Graduado Banco de Dados e Business Intelligence Soft Skills: ReactJs, NodeJs, JavaScript, HTML, CSS, Python, Git, Criação de API, Power BI, MongoDB, SQL, Heroku,Linux",


    }

    classValue = {
        subject: "Programação",
        cost: 50,

    }

    classScheduleValues = [{
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {

            weekday: 1,
            time_from: 520,
            time_to: 1220

        }
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues })


});