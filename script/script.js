let colorMode = "custom";

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('custom-color').addEventListener('change', () => {
        colorMode = "custom";
    });

    document.getElementById('random-color').addEventListener('change', () => {
        colorMode = "random";
    });

    document.getElementById('eraser').addEventListener('change', ()=>{
        colorMode = "eraser";
    })
});

function button_click(){
    var input_div = document.getElementById("input_grid").value;
    var get_div_id = document.getElementById("total");
    const btn = document.getElementById('btn');
    var custom = document.getElementById('custom-color');
    var randomc = document.getElementById("random-color"); 
    get_div_id.innerHTML = "";
    var divwidth = get_div_id.clientWidth;
    var divheight = get_div_id.clientHeight;
    var width_box = divwidth / input_div ;
    for(var i=0;i<input_div*input_div;i++){
        var box = document.createElement('div')
        box.className = 'box'
        box.style.width = width_box + 'px';
        box.style.height = width_box + 'px'; 
        box.addEventListener('mouseenter', function(){
            applycolor(this);
        });
        get_div_id.appendChild(box);
    };
}
function applycolor(box){
    if(colorMode === "custom"){
        customcolor(box);
    }
    else if(colorMode === "random"){
        randomcol(box);
    }
    else if(colorMode === "eraser"){
        eraser(box);
    }
}


function customcolor(box){
    var color_select = document.getElementById('color-select').value;
    box.style.backgroundColor = color_select;
}

function randomcol(box){
    var rc = randomcolor();
    box.style.backgroundColor = rc;
}
function eraser(box){
    var eraser_select = document.getElementById("eraser");
    box.style.backgroundColor = "white";
}

function randomcolor(){
    var letters  = '123456789ABCDEF';
    var color = '#';
    for(var i=0;i<6;i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
