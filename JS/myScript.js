//


TweenMax.ticker.fps(10);

var all = $("#all");
var frame = $("#frame");
var L_Boy = $("#L_Boy_back");
var R_Boy = $("#R_Boy_back");
var twoBoysPlank = $("#twoBoysPlank");
var ladder = $("#ladder");
var seesaw = $("#seesaw");
var allV = $("#allV");
var allW = $("#allW");
var w = $("#w");
var L_Boy_backCar = $("#L_Boy_backCar");
var bush2 = $("#bush2");

////////////////////////////////////

TweenMax.set(bush2, {
  transformOrigin: "50% 50%",
  scale: 1,
  x: 0,
  y: 0
});
TweenMax.set("#woman", {
  scale: 0.07,
  x: 933,
  y: 157
});

//******************************

var tamarinG = $("#tamarinG");
var tamarinG3 = $("#tamarinG3");
TweenMax.set(tamarinG, {
  scale: 0.04,
  x: 907,
  y: 189
});
TweenMax.set(roll, {
  scale: 0.1,
  opacity: 0
});
TweenMax.set("#post", {
  x: 823,
  y: 139,
  scale: 0.17
});

////////////////////////////////////////////////////////////////

function sceneZero() {
  var tl11 = new TimelineMax();
  tl11.to(tamarinG, 0.5, {
    delay: 0,
    y: 189 - 25,
    repeat: 3,
    yoyo: true
  });
  tl11.to(tamarinG, 1.5, {
    bezier: {
      type: "cubic",
      values: [{
        x: 870,
        y: 198,
        scale: 0.035
      }, {
        x: 750,
        y: 158,
        scale: 0.06
      }, {
        x: 565 + 20,
        y: 218,
        scale: 0.09
      }, {
        x: 565 + 20,
        y: 558,
        scale: 0.14
      }],
      autoRotate: false
    },
    repeat: 0,
    ease: Power2.easeIn
  });
  return tl11;
}

////////////////////////////////////////////////////////////


//***********************

TweenMax.set("#chassieFar", {
  scale: 0.2,
  x: 395,
  y: 435,
  opacity: 1
});
TweenMax.set(seesaw, {
  y: 400,
  x: 200,
  scale: 0.5,
  opacity: 1
});
TweenMax.set("#twoBoysPlank", {
  x: 50
});
TweenMax.set("#w", {
  transformOrigin: "50% 50%",
  scale: 0.8,
  x: 600,
  y: 200
});
TweenMax.set(".R_Boy", {
  transformOrigin: "50% 50%",
  x: -100,
  y: 20
});
//transformPerspective:200
TweenMax.set(allW, {
  transformOrigin: "50% 50%",
  scale: 1,
  x: 450,
  y: 250,
  opacity: "1",
  transformPerspective: 100
});

///////////////////////////////////

function sceneTwo() {
  var tl = new TimelineMax();
  tl.addLabel("begin", 5.5);
  tl.to(twoBoysPlank, 1, {
    transformOrigin: "53% 54.5%",
    rotation: 45,
    repeat: 4,
    yoyo: true
  });
  tl.to(twoBoysPlank, 0.5, {
    transformOrigin: "53% 54.5%",
    rotation: 15,
    repeat: 0,
    yoyo: false
  });
  tl.set(tamarinG3, {
    transformOrigin: "50% 50%",
    scale: 0.14,
    opacity: 1
  }, "begin"); //coLocate with tamarinG
  tl.set(tamarinG, {
    opacity: 0
  }, "begin"); //syntax is wrong
  tl.fromTo(tamarinG3, 0.05, {
    rotation: 0,
    x: 155,
    y: 130
  }, {
    rotation: 20,
    x: 160,
    y: 233
  }, "begin");
  tl.to(twoBoysPlank, 0.05, {
    transformOrigin: "53% 54.5%",
    rotation: 45,
    repeat: 0,
    yoyo: false
  }, "begin");
  tl.set(".L_Boy", {
    transformOrigin: "50% 50%"
  });
  tl.to(".L_Boy", 2.5, {
    bezier: {
      type: "soft",
      values: [{
        x: -650,
        y: -800,
        rotation: 45
      }, {
        x: 1000,
        y: -1700,
        rotation: 145
      }, {
        x: 1600,
        y: -1000,
        rotation: 345
      }]
    },
    repeat: 0
  });
  tl.set(tamarinG3, {
    opacity: 0
  }, "begin+=3");
  return tl;
}

///////////////////////////////////

function sceneTwoA() {
  var tl = new TimelineMax({
    repeat: -1
  });
  tl.to(w, 0.8, {
    opacity: "1",
    rotation: -360,
    ease: Linear.easeNone,
    repeat: -1
  });
  tl.to(w, 2, {
    x: 450
  });
  return tl;
}

//***************************//
//3D transformPerspective vs perspective

var chassieFar = $("#chassieFar");
var $perspective = $("#perspective");
var $transformPerspectiveBoxes1 = $("#transformPerspective1").find(".wheelContainerNear");
var $boxes1 = $(".wheelContainerNear");
var $transformPerspectiveBoxes2 = $("#transformPerspective2").find(".wheelContainerFar");
var $boxes2 = $(".wheelContainerFar");
var chassieNear = $("#chassieNear");
var fNearWheel = $("#fNearWheel");
var w1 = $("#w1");
var w1Shadow = $("#w1Shadow");
var w1Cap = $("#w1Cap");
var bNearWheel = $("#bNearWheel");
var w2 = $("#w2");
var w2Shadow = $("#w2Shadow");
var w2Cap = $("#w2Cap");
var bFarWheel = $("#fFarWheel");
var w3 = $("#w3");
var w3Shadow = $("#w3Shadow");
var w3Cap = $("#w3Cap");
var bFarWheel = $("#bFarWheel");
var w4 = $("#w4");
var w4Shadow = $("#w4Shadow");
var w4Cap = $("#w4Cap");

TweenMax.set($transformPerspectiveBoxes1, {
  css: {
    transformPerspective: 1800
  }
});
TweenMax.set($boxes1, {
  rotationY: 30
});
TweenMax.set(chassieNear, {
  transformOrigin: "50% 50%",
  scale: 0.39,
  x: 13,
  y: 92,
  opacity: 1
});
TweenMax.set(w1, {
  transformOrigin: "50% 50%",
  scale: 0.34,
  x: 247,
  y: 24,
  opacity: 1
});
TweenMax.set(w1Shadow, {
  transformOrigin: "50% 50%",
  scale: 0.3,
  opacity: 1,
  x: 254,
  y: 18
});
TweenMax.set(w1Cap, {
  transformOrigin: "50% 50%",
  scale: 0.09,
  x: 247,
  y: 24
});
TweenMax.set(w2, {
  transformOrigin: "50% 50%",
  scale: 0.34,
  x: 572,
  y: 24,
  opacity: 1
});
TweenMax.set(w2Shadow, {
  transformOrigin: "50% 50%",
  scale: 0.3,
  opacity: 1,
  x: 579,
  y: 18
});
TweenMax.set(w2Cap, {
  transformOrigin: "50% 50%",
  scale: 0.09,
  x: 572,
  y: 24
});
TweenMax.set($transformPerspectiveBoxes2, {
  css: {
    transformPerspective: 1800
  }
});
TweenMax.set($boxes2, {
  rotationY: 30
});
TweenMax.set(w3, {
  transformOrigin: "50% 50%",
  scale: 0.28,
  x: 88,
  y: -30
});
TweenMax.set(w3Shadow, {
  transformOrigin: "50% 50%",
  scale: 0.24,
  opacity: 1,
  x: 95,
  y: -36,
  opacity: 1
});
TweenMax.set(w3Cap, {
  transformOrigin: "50% 50%",
  scale: 0.05,
  x: 88,
  y: -30,
  opacity: 1
});
TweenMax.set(w4, {
  transformOrigin: "50% 50%",
  scale: 0.28,
  x: 392,
  y: -27
});
TweenMax.set(w4Shadow, {
  transformOrigin: "50% 50%",
  scale: 0.24,
  opacity: 1,
  x: 399,
  y: -33,
  opacity: 1
});
TweenMax.set(w4Cap, {
  transformOrigin: "50% 50%",
  scale: 0.09,
  x: 572,
  y: 24,
  opacity: 0
});


function sceneFour() {
  var tl2 = new TimelineMax({
    repeat: -1
  });
  tl2.addLabel("begin", 0);
  tl2.to(w1, 0.8, {
    opacity: "1",
    rotation: -360,
    ease: Linear.easeNone
  });
  tl2.to(w2, 0.8, {
    opacity: "1",
    rotation: -360,
    ease: Linear.easeNone
  }, "begin");
  tl2.to(w3, 0.8, {
    opacity: "1",
    rotation: -360,
    ease: Linear.easeNone
  }, "begin");
  tl2.to(w4, 0.8, {
    opacity: "1",
    rotation: -360,
    ease: Linear.easeNone
  }, "begin");
  return tl2;
}

TweenMax.set("#theCar", {
  transformOrigin: "50% 50%",
  x: 1000,
  y: 0,
  scale: 0.8
});
TweenMax.set("#passengers", {
  scale: 0.3,
  x: 316,
  y: 344,
  opacity: 1
});
TweenMax.set(L_Boy_backCar, {
  x: 330,
  y: -210 + 15,
  transformOrigin: "50% 50%",
  rotation: -23,
  scale: 0.57
});


function sceneFive() {
  var tl2 = new TimelineMax({
    repeat: -1
  });
  tl2.addLabel("begin", 0);
  tl2.addLabel("bounce1", 2);
  tl2.to("#theCar", 9, {
    x: -1400,
    y: 600,
    scale: 1.5
  }, "begin");
  tl2.to("#passengers", 0.02, {
    transformOrigin: "50% 50%",
    rotation: -6,
    y: 323,
    repeat: -1,
    yoyo: true
  }, "begin");
  tl2.to(L_Boy_backCar, 0.02, {
    y: -229 + 15,
    repeat: -1,
    yoyo: true
  }, "begin");
  return tl2;
}


//***************************//
var master = new TimelineMax({repeat:-1});
master.add("myLabel", 0);
master.add("monkeyJump", 2);
master.add("carStart", 6.5);

master.add(sceneZero(), "monkeyJump"); //Tamarin
master.add(sceneTwo(), "myLabel", "+=3"); //boys on seeSaw - Tamarin arrived
master.add(sceneFour(), "myLabel"); //Rotate Wheels
master.add(sceneFive(), "carStart"); //Car drive past


//***************************//
