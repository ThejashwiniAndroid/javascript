function create()
{
   
    let para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);
    document.body.appendChild(para);

}