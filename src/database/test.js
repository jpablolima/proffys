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

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })



    // Query entered data
    const selectecProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectecProffys);

    const selectClassAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);
    // console.log(selectClassAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "1"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"

    
    `);
    console.log(selectClassesSchedules);


});