const ELEMENT = document.getElementById("records");
var d = new Date();

var groups = [
    {id: 1, name:"Operation System"}, 
    {id: 2, name:"Languages"},
    {id: 3, name:"Frameworks"},
    {id: 4, name:"Databases"},
    {id: 5, name:"Embeddeds"},
    {id: 6, name:"Science Computer"},
    {id: 7, name:"Others"}
];

var techs = [
    {name: "Linux", id_group: 1, year: 2000, projects: 1},
    {name: "Android", id_group: 1},

    {name: "Clipper", id_group: 2, year: 1997, projects: 35},
    {name: "Delphi", id_group: 2, year: 2001, projects: 112},
    {name: "C", id_group: 2, year: 2018, projects: 1},
    {name: "C++", id_group: 2},
    {name: "Python", id_group: 2},
    {name: "JavaScript", id_group: 2, year: 2018, projects: 1},
    {name: "ShellScript", id_group: 2, year: 2000, projects: 32 },

    {name: "Odoo", id_group: 3, year: 2018, projects: 2},
    {name: "Django", id_group: 3},
    {name: "AWS", id_group:     3},

    {name: "PostgreSQL", id_group: 4, year: 2017, projects: 1},
    {name: "MySQL", id_group: 4},
    {name: "SQLite", id_group:4, year: 2018, projects: 1},
    {name: "MongoDB", id_group: 4},
    {name: "Firebird", id_group: 4, year: 2001, projects: 100},

    {name: "Raspberry Pi", id_group: 5, year: 2018, projects: 1},
    {name: "Arduino", id_group: 5, year: 2017, projects: 4},
    {name: "PIC", id_group: 5},

    {name: "Deep Learning", id_group: 6},
    {name: "Learning Machine", id_group: 6},

    {name: "HTML", id_group: 7, year: 2015 , projects: 8},
    {name: "CSS", id_group:7, year: 2018, project: 1},
    {name: "JSON", id_group: 7, year: 2018, projects: 1}

]

for(let i=0; i<groups.length; i++) {
    //Master
    let master = document.createElement("h3");
    let node = document.createTextNode(groups[i].name);
    master.appendChild(node);
    ELEMENT.appendChild(master);

   
    //Detail
    for (let j=0; j<techs.length; j++) {
        if ( techs[j].id_group == (i+1) ) {
            let dif_year = d.getFullYear() - techs[j].year;

            let node_name = document.createTextNode(techs[j].name);
            let node_year = document.createTextNode(dif_year + " years");
            let node_project = document.createTextNode(techs[j].projects + " projects");

            let line = document.createElement("div");
            line.setAttribute("class", "tools-line");

            let name = document.createElement("div");
            name.setAttribute("class", "tools-column");
            name.appendChild(node_name);
            line.appendChild(name);
            
            let year = document.createElement("div");
            year.setAttribute("class", "tools-column");      
            year.appendChild(node_year);
            line.appendChild(year);
  
            let project = document.createElement("div");
            project.setAttribute("class", "tools-column");
            project.appendChild(node_project);
            line.appendChild(project);

            ELEMENT.appendChild(line);
        }
    }
}


