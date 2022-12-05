// JS-объект:
//
// {
//     list: [
//         { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//         { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
// }

const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>`;

var list = [];

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentList = xmlDOM.querySelector("list");
const studentAll = studentList.querySelectorAll('student');
for (let i = 0; i < studentAll.length; i++) {
    const student = studentAll[i].querySelector("name");
    const studentLang = student.getAttribute("lang");
    const firstName = student.querySelector("first");
    const secondName = student.querySelector("second");
    const studentAge = studentAll[i].querySelector("age");
    console.log(`studentAge: ${studentAge.textContent}`);
    const studentProf = studentAll[i].querySelector("prof");
    console.log(`studentProf: ${studentProf.textContent}`);

    list.push({
        name: firstName.textContent+" "+secondName.textContent,
        age: Number(studentAge.textContent),
        prof: studentProf.textContent,
        lang: studentLang
    });
};

console.log({list: list});
