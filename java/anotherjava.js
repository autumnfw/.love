let button = document.getElementById("button1");

let bigsection = document.getElementById("mybigsection");

let biggestsection = document.getElementById("myotherbigsection");

  function show_image(src, width, height, top, left) {
            let img = document.createElement("img");
            img.src = src;
            img.style.maxWidth = width;
            img.height = height;
            img.style.zIndex = "99";
            img.style.position = "relative";
            img.style.top = top;
            img.style.left = left;
            img.style.display = "block";
            img.style.marginLeft = "auto";
            img.style.marginRight = "auto";   
            img.id = "coffee"
document.getElementById("myotherbigsection").appendChild(img);}

show_image("../anotherasset/besties/broken.jpg", 500, 400,);
show_image("../anotherasset/besties/purple.jpg", 500, 400,);
show_image("./anotherasset/besties/smoke.jpg", 300, 400,);
show_image("./anotherasset/besties/bed.jpg", 500, 400,);
show_image("./anotherasset/besties/park.jpg", 500, 400,);
show_image("./anotherasset/besties/down.jpg", 500, 400,);
show_image("./anotherasset/besties/glow.jpg", 300, 400,);
show_image("./anotherasset/besties/mod.jpg", 300, 400,);
show_image("./anotherasset/besties/day.jpg", 300, 400,);
show_image("./anotherasset/besties/befr.jpg", 200, 400,);


 function alertstatus () {
button.setAttribute("disabled", "disabled")
setTimeout(enable, 10000);   
 }

function enable() {
button.removeAttribute("disabled");
 }

function sectionhide() {
    bigsection.style.display = "none";
    biggestsection.style.display = "block"

}

function unhidesectionhide() {
    bigsection.style.display = "unset";
    biggestsection.style.display = "none"
}


function myfunction() {
if (button.value === "myvalueisrighthere") {
timefunction();
alertstatus();
sectionhide();
button.value = "myvaluechanged";
} else {
timefunction22();
alertstatus();
unhidesectionhide();
button.value = "myvalueisrighthere";
}}


// switches to glass    

function timefunction() {
timeout = setTimeout(imageflip, 150);
}

 function imageflip() {
   document.getElementById("marble32").src = "../anotherasset/webp/glass32.webp";
      timeout = setTimeout(imageflip2, 150)
 }

function imageflip2() {
   document.getElementById("marble31").src = "../anotherasset/webp/glass31.webp";
timeout = setTimeout(imageflip3, 150)
}

function imageflip3() {
    document.getElementById("marble29").src = "../anotherasset/webp/glass29.webp";
timeout = setTimeout(imageflip4, 150)
}

function imageflip4() {
  document.getElementById("marble30").src = "../anotherasset/webp/glass30.webp";
timeout = setTimeout(imageflip5, 150)
} 

function imageflip5() {
    document.getElementById("marble11").src = "../anotherasset/webp/glass11.webp";
timeout = setTimeout(imageflip6, 150)
}

function imageflip6() {
    document.getElementById("marble26").src = "../anotherasset/webp/glass26.webp";
timeout = setTimeout(imageflip7, 150)
}

function imageflip7() {
    document.getElementById("marble25").src = "../anotherasset/webp/glass25.webp";
timeout = setTimeout(imageflip8, 150)
}

function imageflip8() {
    document.getElementById("marble14").src = "../anotherasset/webp/glass14.webp";
timeout = setTimeout(imageflip9, 150)
}

function imageflip9() {
    document.getElementById("marble13").src = "../anotherasset/webp/glass13.webp";
timeout = setTimeout(imageflip10, 150)
}

function imageflip10() {
    document.getElementById("marble9").src = "../anotherasset/webp/glass9.webp";
timeout = setTimeout(imageflip11, 150)
}

function imageflip11() {
    document.getElementById("marble10").src = "../anotherasset/webp/glass10.webp";
timeout = setTimeout(imageflip12, 150)
}

function imageflip12() {
    document.getElementById("marble27").src = "../anotherasset/webp/glass27.webp";
timeout = setTimeout(imageflip13, 150)
}

function imageflip13() {
    document.getElementById("marble28").src = "../anotherasset/webp/glass28.webp";
timeout = setTimeout(imageflip15, 150)
}

function imageflip15() {
    document.getElementById("marble16").src = "../anotherasset/webp/glass16.webp";
timeout = setTimeout(imageflip16, 150);
}

function imageflip16() {
    document.getElementById("marble24").src = "../anotherasset/webp/glass24.webp";
timeout = setTimeout(imageflip17, 150);
}

function imageflip17() {
    document.getElementById("marble23").src = "../anotherasset/webp/glass23.webp";
timeout = setTimeout(imageflip18, 150);
}

function imageflip18() {
    document.getElementById("marble15").src = "../anotherasset/webp/glass15.webp";
timeout = setTimeout(imageflip19, 150);
}

function imageflip19() {
    document.getElementById("marble22").src = "../anotherasset/webp/glass22.webp";
timeout = setTimeout(imageflip20, 150);
}

function imageflip20() {
    document.getElementById("marble12").src = "../anotherasset/webp/glass12.webp";
timeout = setTimeout(imageflip21, 150);
}

function imageflip21() {
    document.getElementById("marble7").src = "../anotherasset/webp/glass7.webp";
timeout = setTimeout(imageflip22, 150);
}

function imageflip22() {
    document.getElementById("marble4").src = "../anotherasset/webp/glass4.webp";
timeout = setTimeout(imageflip23, 150);
}

function imageflip23() {
    document.getElementById("marble17").src = "../anotherasset/webp/glass17.webp";
timeout = setTimeout(imageflip24, 150);
}

function imageflip24() {
    document.getElementById("marble8").src = "../anotherasset/webp/glass8.webp";
timeout = setTimeout(imageflip25, 150);
}

function imageflip25() {
    document.getElementById("marble5").src = "../anotherasset/webp/glass5.webp";
timeout = setTimeout(imageflip26, 150);
}

function imageflip26() {
    document.getElementById("marble3").src = "../anotherasset/webp/glass3.webp";
timeout = setTimeout(imageflip27, 150);
}

function imageflip27() {
    document.getElementById("marble2").src = "../anotherasset/webp/glass2.webp";
timeout = setTimeout(imageflip28, 150);
}

function imageflip28() {
    document.getElementById("marble1").src = "../anotherasset/webp/glass1.webp";
timeout = setTimeout(imageflip29, 150);
}

function imageflip29() {
    document.getElementById("marble6").src = "../anotherasset/webp/glass6.webp";
timeout = setTimeout(imageflip30, 150);
}

function imageflip30() {
    document.getElementById("marble20").src = "../anotherasset/webp/glass20.webp";
timeout = setTimeout(imageflip31, 150);
}

function imageflip31() {
    document.getElementById("marble18").src = "../anotherasset/webp/glass18.webp";
timeout = setTimeout(imageflip32, 150);
}

function imageflip32() {
    document.getElementById("marble19").src = "../anotherasset/webp/glass19.webp";
timeout = setTimeout(imageflip33, 150);
}

function imageflip33() {
    document.getElementById("marble21").src = "../anotherasset/webp/glass21.webp";
}


// sets it back to marble 

function timefunction22() {
timeout = setTimeout(marbleflip, 150);
}

function marbleflip() {
    document.getElementById("marble21").src = "../anotherasset/webp/marble21.webp";
    timeout = setTimeout(marbleflip1, 150);
}

function marbleflip1() {
    document.getElementById("marble19").src = "../anotherasset/webp/marble19.webp";
    timeout = setTimeout(marbleflip3, 150);
}

function marbleflip3() {
    document.getElementById("marble18").src = "../anotherasset/webp/marble18.webp";
    timeout = setTimeout(marbleflip4, 150);
}

function marbleflip4() {
    document.getElementById("marble20").src = "../anotherasset/webp/marble20.webp";
    timeout = setTimeout(marbleflip5, 150);
}

function marbleflip5() {
    document.getElementById("marble6").src = "../anotherasset/webp/marble6.webp";
    timeout = setTimeout(marbleflip6, 150);
}

function marbleflip6() {
    document.getElementById("marble1").src = "../anotherasset/webp/marble1.webp";
    timeout = setTimeout(marbleflip7, 150);
}

function marbleflip7() {
    document.getElementById("marble2").src = "../anotherasset/webp/marble2.webp";
    timeout = setTimeout(marbleflip8, 150);
}

function marbleflip8() {
    document.getElementById("marble3").src = "../anotherasset/webp/marble3.webp";
    timeout = setTimeout(marbleflip9, 150);
}

function marbleflip9() {
    document.getElementById("marble5").src = "../anotherasset/webp/marble5.webp";
    timeout = setTimeout(marbleflip10, 150);
}

function marbleflip10() {
    document.getElementById("marble8").src = "../anotherasset/webp/marble8.webp";
    timeout = setTimeout(marbleflip11, 150);
}

function marbleflip11() {
    document.getElementById("marble17").src = "../anotherasset/webp/marble17.webp";
    timeout = setTimeout(marbleflip12, 150);
}

function marbleflip12() {
    document.getElementById("marble4").src = "../anotherasset/webp/marble4.webp";
    timeout = setTimeout(marbleflip13, 150);
}

function marbleflip13() {
    document.getElementById("marble7").src = "../anotherasset/webp/marble7.webp";
    timeout = setTimeout(marbleflip14, 150);
}

function marbleflip14() {
    document.getElementById("marble12").src = "../anotherasset/webp/marble12.webp";
    timeout = setTimeout(marbleflip15, 150);
}

function marbleflip15() {
    document.getElementById("marble22").src = "../anotherasset/webp/marble22.webp";
    timeout = setTimeout(marbleflip16, 150);
}

function marbleflip16() {
    document.getElementById("marble15").src = "../anotherasset/webp/marble15.webp";
    timeout = setTimeout(marbleflip17, 150);
}

function marbleflip17() {
    document.getElementById("marble23").src = "../anotherasset/webp/marble23.webp";
    timeout = setTimeout(marbleflip18, 150);
}

function marbleflip18() {
    document.getElementById("marble24").src = "../anotherasset/webp/marble24.webp";
    timeout = setTimeout(marbleflip19, 150);
}


function marbleflip19() {
    document.getElementById("marble16").src = "../anotherasset/webp/marble16.webp";
    timeout = setTimeout(marbleflip20, 150);
}

function marbleflip20() {
    document.getElementById("marble28").src = "../anotherasset/webp/marble28.webp";
    timeout = setTimeout(marbleflip21, 150);
}

function marbleflip21() {
    document.getElementById("marble27").src = "../anotherasset/webp/marble27.webp";
    timeout = setTimeout(marbleflip22, 150);
}

function marbleflip22() {
    document.getElementById("marble10").src = "../anotherasset/webp/marble10.webp";
    timeout = setTimeout(marbleflip23, 150);
}

function marbleflip23() {
    document.getElementById("marble9").src = "../anotherasset/webp/marble9.webp";
    timeout = setTimeout(marbleflip24, 150);
}

function marbleflip24() {
    document.getElementById("marble13").src = "../anotherasset/webp/marble13.webp";
    timeout = setTimeout(marbleflip25, 150);
}

function marbleflip25() {
    document.getElementById("marble14").src = "../anotherasset/webp/marble14.webp";
    timeout = setTimeout(marbleflip26, 150);
}

function marbleflip26() {
    document.getElementById("marble25").src = "../anotherasset/webp/marble25.webp";
    timeout = setTimeout(marbleflip27, 150);
}

function marbleflip27() {
    document.getElementById("marble26").src = "../anotherasset/webp/marble26.webp";
    timeout = setTimeout(marbleflip28, 150);
}

function marbleflip28() {
    document.getElementById("marble11").src = "../anotherasset/webp/marble11.webp";
    timeout = setTimeout(marbleflip29, 150);
}

function marbleflip29() {
    document.getElementById("marble30").src = "../anotherasset/webp/marble30.webp";
    timeout = setTimeout(marbleflip30, 150);
}

function marbleflip30() {
    document.getElementById("marble29").src = "../anotherasset/webp/marble29.webp";
    timeout = setTimeout(marbleflip31, 150);
}

function marbleflip31() {
    document.getElementById("marble31").src = "../anotherasset/webp/marble31.webp";
    timeout = setTimeout(marbleflip32, 150);
}

function marbleflip32() {
    document.getElementById("marble32").src = "../anotherasset/webp/marble32.webp";
}

