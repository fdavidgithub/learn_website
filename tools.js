const ELEMENT = document.getElementById("records");
var d = new Date();

var theURL = "./wp_category.php";
    
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", theURL, false);
xmlhttp.send(); 

var groups = JSON.parse(xmlhttp.responseText);

for(let i=0; i<groups.length; i++) {
    //Master
    let master = document.createElement("h3");
    let node = document.createTextNode(groups[i].name);
    master.appendChild(node);
    ELEMENT.appendChild(master);

   
    //Detail
    for (let j=0; j<groups[i].child.length; j++) {
        let dif_year = d.getFullYear() - groups[i].child[j].year;

        let node_name = document.createTextNode(groups[i].child[j].name);
        let node_year = document.createTextNode(dif_year + " years");
        let node_project = document.createTextNode(groups[i].child[j].projects + " projects");

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
        //project.appendChild(node_project);
        let project_url = document.createElement("a");
        project_url.setAttribute("href", groups[i].child[j].url);
        project_url.appendChild(node_project);
        line.appendChild(project_url);
        line.appendChild(project);

        ELEMENT.appendChild(line);
    }
}


