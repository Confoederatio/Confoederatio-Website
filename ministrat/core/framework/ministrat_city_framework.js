class Ministrat_City {
  constructor (arg0_options) {
    //Convert from parameters
    var options = (arg0_options) ? arg0_options : {};

    //Declare local instance variables
    var cities_dom = ministrat.main.map_elements.cities_dom;

    this.controller = (options.controller) ? 
      options.controller : "neutral";
    this.owner = (options.owner) ? 
      options.owner : "neutral";
    this.is_capital = (options.is_capital) ? 
      options.is_capital : false;
    this.label_selector = options.label_selector;
    this.marker_selector = options.marker_selector;
    this.size = returnSafeNumber(options.size, 1);

    //1. Fetch .label_el; .marker_el
    this.label_el = cities_dom.querySelector(this.label_selector);
    this.marker_el = cities_dom.querySelector(this.marker_selector);

    //2. Fetch .name field from label_selector
    this.name = (!options.name) ? 
      this.label_el.textContent : options.name;
    
    //Set colour
    this.draw();
  }

  draw () {
    //Declare local instance variables
    var country_obj = ministrat.gamestate.countries[this.owner];

    if (country_obj) {
      var adjusted_label_colour = [
        Math.min(255, country_obj.colour[0] + 20),
        Math.min(255, country_obj.colour[1] + 20),
        Math.min(255, country_obj.colour[2] + 20)
      ];
      var local_colour = `rgb(${adjusted_label_colour[0]}, ${adjusted_label_colour[1]}, ${adjusted_label_colour[2]})`;

      //Convert image to rect so we can draw the actual colour
      if (this.marker_el.tagName == "image") {
        var image_el = this.marker_el;
        var rect_el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect_el.setAttribute('x', image_el.getAttribute('x'));
        rect_el.setAttribute('y', image_el.getAttribute('y'));
        rect_el.setAttribute('width', image_el.getAttribute('width'));
        rect_el.setAttribute('height', image_el.getAttribute('height'));
        rect_el.setAttribute('id', image_el.getAttribute('id'));
        
        image_el.parentNode.replaceChild(rect_el, image_el);
        this.marker_el = rect_el;
      }

      if (!this.is_capital) {
        this.marker_el.style.fill = local_colour;
        this.marker_el.style.stroke = local_colour;
      } else {
        this.marker_el.style.fill = `rgb(240, 216, 120)`;
        this.marker_el.style.stroke = `rgb(240, 216, 120)`;
      }

      var interior_label_els = this.label_el.querySelectorAll("tspan");

      this.label_el.setAttribute("fill", local_colour);
      this.label_el.setAttribute("style", 
        this.label_el.getAttribute("style").replace(/fill\s*:\s*[^;]+;?/i, "")
      );
      for (var i = 0; i < interior_label_els.length; i++) {
        interior_label_els[i].setAttribute("fill", local_colour);
        interior_label_els[i].setAttribute("style", 
          interior_label_els[i].getAttribute("style").replace(/fill\s*:\s*[^;]+;?/i, "")
        );
      }

      if (this.is_capital)
        for (var i = 0; i < interior_label_els.length; i++) {
          interior_label_els[i].style.fontWeight = "700";
          interior_label_els[i].style.textDecoration = "underline";
        }
    }
  }
}

//Initialise functions
{
  function loadMinistratCities () {
    //Declare local instance variables
    var cities_obj = ministrat.gamestate.cities;

    //East Germany
    {
      //Major East German Cities
      cities_obj.cottbus = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#cottbus",
        marker_selector: "#cottbus-marker",
        size: 2
      });
      cities_obj.dresden = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#dresden",
        marker_selector: "#dresden-marker",
        size: 2
      });
      cities_obj.erfurt = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#erfurt",
        marker_selector: "#erfurt-marker",
        size: 2
      });
      cities_obj.halle = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#halle",
        marker_selector: "[id='image845-9-2-3']",
        size: 2
      });
      cities_obj.karl_marx_stadt = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#karl-marx-stadt",
        marker_selector: "#karl-marx-stadt-marker",
        size: 2
      });
      cities_obj.leipzig = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#leipzig",
        marker_selector: "[id='image845-9-2']",
        size: 2
      });
      cities_obj.magdeburg = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#magdeburg",
        marker_selector: "#magdeburg-marker",
        size: 2
      });
      cities_obj.ost_berlin = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#ost-berlin",
        marker_selector: "#ost-berlin-marker",
        size: 2
      });
      cities_obj.potsdam = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#potsdam",
        marker_selector: "#potsdam-marker",
        size: 2
      });
      cities_obj.rostock = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#rostock",
        marker_selector: "#rostock-marker",
        size: 2
      });

      //Minor East German Cities
      //Brandenburg
      cities_obj.brandenburg_an_der_havel = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#brandenburg-an-der-havel",
        marker_selector: "#brandenburg-an-der-havel-marker",
      });
      cities_obj.dessau_rosslau = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#dessau-rosslau",
        marker_selector: "#dessau-rosslau-marker",
      });
      cities_obj.eberswalde = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#eberswalde",
        marker_selector: "#eberswalde-marker",
      });
      cities_obj.eisenhuettenstadt = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#eisenhuettenstadt",
        marker_selector: "#eisenhuettenstadt-marker",
      });
      cities_obj.frankfurt_an_der_oder = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#frankfurt-an-der-oder",
        marker_selector: "#frankfurt-an-der-oder-marker",
      });
      cities_obj.halberstadt = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#halberstadt",
        marker_selector: "#halberstadt-marker",
      });
      cities_obj.luckenwalde = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#luckenwalde",
        marker_selector: "#luckenwalde-marker",
      });
      cities_obj.neuruppin = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#neuruppin",
        marker_selector: "#neuruppin-marker",
      });
      cities_obj.schwedt = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#schwedt",
        marker_selector: "#schwedt-marker",
      });
      cities_obj.stendal = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#stendal",
        marker_selector: "#stendal-marker",
      });
      cities_obj.wittenberg = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#wittenberg",
        marker_selector: "#wittenberg-marker",
      });
      
      //Mecklenburg-Vorpommern
      cities_obj.greifswald = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#greifswald",
        marker_selector: "#greifswald-marker",
      });
      cities_obj.guestrow = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#guestrow",
        marker_selector: "#guestrow-marker",
      });
      cities_obj.neubrandenburg = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#neubrandenburg",
        marker_selector: "#neubrandenburg-marker",
      });
      cities_obj.neustrelitz = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#neustrelitz",
        marker_selector: "#neustrelitz-marker",
      });
      cities_obj.schwerin = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#schwerin",
        marker_selector: "#schwerin-marker",
      });
      cities_obj.stralsund = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#stralsund",
        marker_selector: "#stralsund-marker",
      });
      cities_obj.waren = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#waren",
        marker_selector: "#waren-marker",
      });
      cities_obj.wismar = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#wismar",
        marker_selector: "#wismar-marker",
      });
      
      //Sachsen
      cities_obj.freiberg = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#freiberg",
        marker_selector: "#freiberg-marker",
      });
      cities_obj.goerlitz = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#goerlitz",
        marker_selector: "#goerlitz-marker",
      });
      cities_obj.hoyerswerda = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#hoyerswerda",
        marker_selector: "#hoyerswerda-marker",
      });
      cities_obj.plauen = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#plauen",
        marker_selector: "#plauen-marker",
      });
      cities_obj.riesa = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#riesa",
        marker_selector: "#riesa-marker",
      });
      cities_obj.waldsiedlung = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "[id='eberswalde-9']",
        marker_selector: "[id='eberswalde-marker-0']",

        is_capital: true
      });
      cities_obj.zwickau = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#zwickau",
        marker_selector: "#zwickau-marker",
      });      

      //Thuringen
      cities_obj.eisenach = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#eisenach",
        marker_selector: "#eisenach-marker",
      });
      cities_obj.gera = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#gera",
        marker_selector: "#gera-marker",
      });
      cities_obj.jena = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#jena",
        marker_selector: "#jena-marker",
      });
      cities_obj.nordhausen = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#nordhausen",
        marker_selector: "#nordhausen-marker",
      });
      cities_obj.saalfeld = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#saalfeld",
        marker_selector: "#saalfeld-marker",
      });
      cities_obj.suhl = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#suhl",
        marker_selector: "#suhl-marker",
      });
      cities_obj.weimar = new Ministrat_City({
        controller: "ddr",
        owner: "ddr",
        label_selector: "#weimar",
        marker_selector: "#weimar-marker",
      });
    }

    //West Germany
    {
      //Major West German Cities
      cities_obj.aachen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#aachen",
        marker_selector: "#aachen-marker",
        size: 2
      });
      cities_obj.augsburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#augsburg",
        marker_selector: "#augsburg-marker",
        size: 2
      });
      cities_obj.braunschweig = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#braunschweig",
        marker_selector: "#braunschweig-marker",
        size: 2
      });
      cities_obj.bremen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bremen",
        marker_selector: "#bremen-marker",
        size: 2
      });
      cities_obj.bremerhaven = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bremerhaven",
        marker_selector: "#bremerhaven-marker",
        size: 2
      });
      cities_obj.darmstadt = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#darmstadt",
        marker_selector: "#darmstadt-marker",
        size: 2
      });
      cities_obj.dortmund = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#dortmund",
        marker_selector: "#dortmund-marker",
        size: 2
      });
      cities_obj.duesseldorf = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#duesseldorf",
        marker_selector: "#duesseldorf-marker",
        size: 2
      });
      cities_obj.essen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#essen",
        marker_selector: "#essen-marker",
        size: 2
      });
      cities_obj.frankfurt_am_main = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#frankfurt-am-main",
        marker_selector: "#frankfurt-am-main-marker",
        size: 2
      });
      cities_obj.freiburg_im_breisgau = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#freiburg-im-breisgau",
        marker_selector: "#freiburg-im-breisgau-marker",
        size: 2
      });
      cities_obj.goslar = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#goslar",
        marker_selector: "#goslar-marker",
        size: 2
      });
      cities_obj.hamburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#hamburg",
        marker_selector: "#hamburg-marker",
        size: 2
      });
      cities_obj.hannover = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#hannover",
        marker_selector: "#hannover-marker",
        size: 2
      });
      cities_obj.karlsruhe = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#karlsruhe",
        marker_selector: "#karlsruhe-marker",
        size: 2
      });
      cities_obj.kassel = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#kassel",
        marker_selector: "#kassel-marker",
        size: 2
      });
      cities_obj.koeln = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#koeln",
        marker_selector: "#koeln-marker",
        size: 2
      });
      cities_obj.luebeck = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#luebeck",
        marker_selector: "#luebeck-marker",
        size: 2
      });
      cities_obj.mannheim = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#mannheim",
        marker_selector: "#mannheim-marker",
        size: 2
      });
      cities_obj.muenster = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#muenster",
        marker_selector: "#muenster-marker",
        size: 2
      });
      cities_obj.oldenburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#oldenburg",
        marker_selector: "#oldenburg-marker",
        size: 2
      });
      cities_obj.muenchen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#muenchen",
        marker_selector: "#muenchen-marker",
        size: 2
      });
      cities_obj.nuernberg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#nuernberg",
        marker_selector: "#nuernberg-marker",
        size: 2
      });
      cities_obj.saarbruecken = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#saarbruecken",
        marker_selector: "#saarbruecken-marker",
        size: 2
      });
      cities_obj.stuttgart = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#stuttgart",
        marker_selector: "#stuttgart-marker",
        size: 2
      });
      cities_obj.west_berlin = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#west-berlin",
        marker_selector: "#west-berlin-marker",
        size: 2
      });
      cities_obj.wiesbaden = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#wiesbaden",
        marker_selector: "#wiesbaden-marker",
        size: 2
      });

      //Minor West German Cities
      //Baden-Wurttemberg
      cities_obj.aalen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#aalen",
        marker_selector: "#aalen-marker"
      });
      cities_obj.baden_baden = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#baden-baden",
        marker_selector: "#baden-baden-marker"
      });
      cities_obj.heidelberg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#heidelberg",
        marker_selector: "#heidelberg-marker"
      });
      cities_obj.heilbronn = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#heilbronn",
        marker_selector: "#heilbronn-marker"
      });
      cities_obj.konstanz = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#konstanz",
        marker_selector: "#konstanz-marker"
      });
      cities_obj.ludwigsburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#ludwigsburg",
        marker_selector: "#ludwigsburg-marker"
      });
      cities_obj.offenburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#offenburg",
        marker_selector: "#offenburg-marker"
      });
      cities_obj.sigmaringen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#sigmaringen",
        marker_selector: "#sigmaringen-marker"
      });
      cities_obj.pforzheim = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#pforzheim",
        marker_selector: "#pforzheim-marker"
      });
      cities_obj.reutlingen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#reutlingen",
        marker_selector: "#reutlingen-marker"
      });
      cities_obj.schwaebisch_hall = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#schwaebisch-hall",
        marker_selector: "#schwaebisch-hall-marker"
      });
      cities_obj.tuebingen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#tuebingen",
        marker_selector: "#tuebingen-marker"
      });
      cities_obj.ulm = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#ulm",
        marker_selector: "#ulm-marker"
      });
      cities_obj.villingen_schwenningen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#villingen-schwenningen",
        marker_selector: "#villingen-schwenningen-marker"
      });

      //Bayern
      cities_obj.amberg = new Ministrat_City({ 
        controller: "brd",
        owner: "brd",
        label_selector: "#amberg",
        marker_selector: "#amberg-marker"
      });
      cities_obj.ansbach = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#ansbach",
        marker_selector: "#ansbach-marker"
      });
      cities_obj.aschaffenburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#aschaffenburg",
        marker_selector: "#aschaffenburg-marker"
      });
      cities_obj.bamberg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bamberg",
        marker_selector: "#bamberg-marker"
      });
      cities_obj.bayeruth = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bayeruth",
        marker_selector: "#bayeruth-marker"
      });
      cities_obj.burghausen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#burghausen",
        marker_selector: "#burghausen-marker"
      });
      cities_obj.cham = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#cham",
        marker_selector: "#cham-marker"
      });
      cities_obj.coburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#coburg",
        marker_selector: "#coburg-marker"
      });
      cities_obj.dachau = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#dachau",
        marker_selector: "#dachau-marker"
      });
      cities_obj.deggendorf = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#deggendorf",
        marker_selector: "#deggendorf-marker"
      });
      cities_obj.donauworth = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#donauworth",
        marker_selector: "#donauworth-marker"
      });
      cities_obj.erlangen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#erlangen",
        marker_selector: "#erlangen-marker"
      });
      cities_obj.freising = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#freising",
        marker_selector: "#freising-marker"
      });
      cities_obj.fuerth = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#fuerth",
        marker_selector: "#fuerth-marker"
      });
      cities_obj.garmisch_partenkirchen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#garmisch-partenkirchen",
        marker_selector: "#garmisch-partenkirchen-marker"
      });
      cities_obj.hof = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#hof",
        marker_selector: "#hof-marker"
      });
      cities_obj.ingolstadt = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#ingolstadt",
        marker_selector: "#ingolstadt-marker"
      });
      cities_obj.kaufbeuren = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#kaufbeuren",
        marker_selector: "#kaufbeuren-marker"
      });
      cities_obj.kempten = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#kempten",
        marker_selector: "#kempten-marker"
      });
      cities_obj.landshut = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#landshut",
        marker_selector: "#landshut-marker"
      });
      cities_obj.memmingen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#memmingen",
        marker_selector: "#memmingen-marker"
      });
      cities_obj.neu_ulm = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#neu-ulm",
        marker_selector: "#neu-ulm-marker"
      });
      cities_obj.passau = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#passau",
        marker_selector: "#passau-marker"
      });
      cities_obj.regensburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#regensburg",
        marker_selector: "#regensburg-marker"
      });
      cities_obj.rosenheim = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#rosenheim",
        marker_selector: "#rosenheim-marker"
      });
      cities_obj.schwabach = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#schwabach",
        marker_selector: "#schwabach-marker"
      });
      cities_obj.schweinfurt = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#schweinfurt",
        marker_selector: "#schweinfurt-marker"
      });
      cities_obj.straubing = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#straubing",
        marker_selector: "#straubing-marker"
      });
      cities_obj.weiden = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#weiden",
        marker_selector: "#weiden-marker"
      });
      cities_obj.wuerzburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#wuerzburg",
        marker_selector: "#wuerzburg-marker"
      });
      
      
      
      
      //Hessen
      cities_obj.bad_hersfeld = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bad-hersfeld",
        marker_selector: "#bad-hersfeld-marker"
      });
      cities_obj.fulda = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#fulda",
        marker_selector: "#fulda-marker"
      });
      cities_obj.giessen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#giessen",
        marker_selector: "#giessen-marker"
      });
      cities_obj.hanau = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#hanau",
        marker_selector: "#hanau-marker"
      });
      cities_obj.marburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#marburg",
        marker_selector: "#marburg-marker"
      });
      cities_obj.offenbach = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#offenbach",
        marker_selector: "#offenbach-marker"
      });
      cities_obj.wetzlar = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#wetzlar",
        marker_selector: "#wetzlar-marker"
      });

      //Niedersachsen
      cities_obj.celle = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#celle",
        marker_selector: "#celle-marker"
      });
      cities_obj.cuxhaven = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#cuxhaven",
        marker_selector: "#cuxhaven-marker"
      });
      cities_obj.delmenhorst = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#delmenhorst",
        marker_selector: "#delmenhorst-marker"
      });
      cities_obj.emden = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#emden",
        marker_selector: "#emden-marker"
      });
      cities_obj.goettingen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#goettingen",
        marker_selector: "#goettingen-marker"
      });
      cities_obj.hameln = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#hammeln",
        marker_selector: "#hameln-marker"
      });
      cities_obj.hildesheim = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#hildesheim",
        marker_selector: "#hildesheim-marker"
      });
      cities_obj.meppen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#meppen",
        marker_selector: "#meppen-marker"
      });
      cities_obj.lueneburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#lueneburg",
        marker_selector: "#lueneburg-marker"
      });
      cities_obj.nienburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#nienburg",
        marker_selector: "#nienburg-marker"
      });
      cities_obj.osnabrueck = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#osnabrueck",
        marker_selector: "#osnabrueck-marker"
      });
      cities_obj.salzgitter = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#salzgitter",
        marker_selector: "#salzgitter-marker"
      });
      
      cities_obj.wilhelmshaven = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#wilhelmshaven",
        marker_selector: "#wilhelmshaven-marker"
      });
      cities_obj.wolfsburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#wolfsburg",
        marker_selector: "#wolfsburg-marker"
      });

      //Nordrhein-Westfalen (NRW)
      cities_obj.arnsberg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#arnsberg",
        marker_selector: "#arnsberg-marker"
      });
      cities_obj.bergisch_gladbach = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bergisch-gladbach",
        marker_selector: "#bergisch-gladbach-marker"
      });
      cities_obj.bielefeld = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bielefeld",
        marker_selector: "#bielefeld-marker"
      });
      cities_obj.bocholt = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bocholt",
        marker_selector: "#bocholt-marker"
      });
      cities_obj.bochum = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bochum",
        marker_selector: "#bochum-marker"
      })
      cities_obj.bonn = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bonn",
        marker_selector: "#eberswalde-marker-0-8",
        is_capital: true
      });
      cities_obj.detmold = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#detmold",
        marker_selector: "#detmold-marker"
      });
      cities_obj.dueren = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#dueren",
        marker_selector: "#dueren-marker"
      });
      cities_obj.duisburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#duisburg",
        marker_selector: "#duisburg-marker"
      });
      cities_obj.gelsenkirchen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#gelsenkirchen",
        marker_selector: "#gelsenkirchen-marker"
      });
      cities_obj.hamm = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#hamm",
        marker_selector: "#hamm-marker"
      });
      cities_obj.leverkusen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#leverkusen",
        marker_selector: "#leverkusen-marker"
      });
      cities_obj.luedenscheid = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#luedenscheid",
        marker_selector: "#luedenscheid-marker"
      });
      cities_obj.moenchengladbach = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#moenchengladbach",
        marker_selector: "#moenchengladbach-marker"
      });
      cities_obj.paderborn = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#paderborn",
        marker_selector: "#paderborn-marker"
      }); 
      cities_obj.siegen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#siegen",
        marker_selector: "#siegen-marker"
      });
      cities_obj.wuppertal = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#wuppertal",
        marker_selector: "#wuppertal-marker"
      });

      //Rheinland-Pfalz
      cities_obj.bad_kreuznach = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#bad-kreuznach",
        marker_selector: "#bad-kreuznach-marker"
      });
      cities_obj.cochem = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#cochem",
        marker_selector: "#cochem-marker"
      });
      cities_obj.frankenthal = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#frankenthal",
        marker_selector: "#frankenthal-marker"
      });
      cities_obj.kaiserslautern = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#kaiserslautern",
        marker_selector: "#kaiserslautern-marker"
      });
      cities_obj.koblenz = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#koblenz",
        marker_selector: "#koblenz-marker"
      });
      cities_obj.landau = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#landau",
        marker_selector: "#landau-marker"
      });
      cities_obj.ludwigshafen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#ludwigshafen",
        marker_selector: "#ludwigshafen-marker"
      });
      cities_obj.mainz = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#mainz",
        marker_selector: "#mainz-marker"
      });
      cities_obj.pirmasens = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#pirmasens",
        marker_selector: "#pirmasens-marker"
      });
      cities_obj.speyer = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#speyer",
        marker_selector: "#speyer-marker"
      }); 
      cities_obj.trier = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#trier",
        marker_selector: "#trier-marker"
      });
      cities_obj.worms = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#worms",
        marker_selector: "#worms-marker"
      });
      cities_obj.zweibruecken = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#zweibruecken",
        marker_selector: "#zweibruecken-marker"
      });

      //Saarland
      cities_obj.neunkirchen = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#neunkirchen",
        marker_selector: "#neunkirchen-marker"
      });

      //Schleswig-Holstein
      cities_obj.flensburg = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#flensburg",
        marker_selector: "#flensburg-marker"
      });
      cities_obj.kiel = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#kiel",
        marker_selector: "#kiel-marker"
      });
      cities_obj.neumuenster = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#neumuenster",
        marker_selector: "#neumuenster-marker"
      });
      cities_obj.norderstadt = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#norderstadt",
        marker_selector: "#norderstadt-marker"
      });
      cities_obj.schleswig = new Ministrat_City({
        controller: "brd",
        owner: "brd",
        label_selector: "#schleswig",
        marker_selector: "#schleswig-marker"
      });
    }
  }
}