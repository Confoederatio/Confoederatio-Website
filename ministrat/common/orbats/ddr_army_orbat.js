//Initialise functions
{
  function loadDDRArmyORBAT () {
    //Declare local instance variables
    var ddr_army_orbat = [
      ['40. Artilleriebrigade', 'Berlin-Johannisthal', 'artillery'],
      ['Geschosswerferabteilung 40', 'Schildow', 'artillery'],
      ['Ingenieurbaubataillon 40', 'Brandenburg', 'infantry'],
      ['Pionierbaubataillon 40', 'Bitterfeld', 'infantry'],
      ['Fallschirmjägerbasis 40', 'Burg', 'infantry'],
      ['Fla-Raketen-Ausbildungszentrum 40', 'Zingst', 'air'],
      ['4. Mot. Schützendivision', 'Erfurt', 'infantry'],
      ['Mot. Schützenregiment 22', 'Mühlhausen', 'infantry'],
      ['Mot. Schützenregiment 23', 'Bad Salzungen', 'infantry'],
      ['Mot. Schützenregiment 24', 'Erfurt', 'infantry'],
      ['Panzerregiment 4', 'Gotha', 'armour'],
      ['Artillerieregiment 4', 'Erfurt', 'artillery'],
      ['Fla-Raketenregiment 4', 'Erfurt', 'air'],
      ['Geschosswerferabteilung 4', 'Erfurt', 'artillery'],
      ['Aufklärungsbataillon 4', 'Bad Salzungen', 'infantry'],
      ['Pionierbatallion 4', 'Bad Salzungen', 'infantry'],
      ['Panzerjägerabteilung 4', 'Bad Salzungen', 'armour'],
      ['Nachrichtenbataillon 4', 'Erfurt', 'infantry'],
      ['Bataillon Mat. Sicherstellung 4', 'Erfurt', 'infantry'],
      ['Instandsetzungbataillon 4', 'Gotha', 'infantry'],
      ['Bataillon Chemische Abwehr 4', 'Erfurt', 'infantry'],
      ['11. Mot. Schützendivision', 'Halle', 'infantry'],
      ['Mot. Schützenregiment 16', 'Bad Frankenhausen', 'infantry'],
      ['Mot. Schützenregiment 17', 'Halle', 'infantry'],
      ['Mot. Schützenregiment 18', 'Weißenfels', 'infantry'],
      ['Panzerregiment 11', 'Sondershausen', 'armour'],
      ['Artillerieregiment 11', 'Wolfen', 'artillery'],
      ['Fla-Raketenregiment 11', 'Weißenfels', 'air'],
      ['Raketenabteilung 11', 'Hermsdorf', 'artillery'],
      ['Geschosswerferabteilung 11', 'Wolfen', 'artillery'],
      ['Aufklärungsbataillon 11', 'Bad Frankenhausen', 'infantry'],
      ['Pionierbataillon 11', 'Zeithain', 'infantry'],
      ['Nachrichtenbataillon 11', 'Halle', 'infantry'],
      ['Bataillon Mat. Sicherstellung 11', 'Halle', 'infantry'],
      ['Instandsetzungbataillon 11', 'Halle', 'infantry'],
      ['Bataillon Chemische Abwehr 11', 'Bad Frankenhausen', 'infantry'],
      ['7. Panzerdivision', 'Dresden', 'armour'],
      ['Mot. Schützenregiment 7', 'Marienberg', 'infantry'],
      ['Panzerregiment 14', 'Spremberg', 'armour'],
      ['Panzerregiment 15', 'Cottbus', 'armour'],
      ['Panzerregiment 16', 'Großenhain', 'armour'],
      ['Artillerieregiment 7', 'Frankenberg', 'artillery'],
      ['Fla-Raketenregiment 7', 'Zeithain', 'air'],
      ['Raketenabteilung 7', 'Zeithain', 'artillery'],
      ['Geschosswerferabteilung 7', 'Frankenberg', 'artillery'],
      ['Aufklärungsbataillon 7', 'Dresden', 'infantry'],
      ['Pionierbataillon 7', 'Pirna', 'infantry'],
      ['Nachrichtenbataillon 7', 'Dresden', 'infantry'],
      ['Bataillon Mat. Sicherstellung 7', 'Dresden', 'infantry'],
      ['Instandsetzungbataillon 7', 'Spremberg', 'infantry'],
      ['Bataillon Chemische Abwehr 7', 'Pirna', 'infantry'],
      ['3. Raketenbrigade', 'Tautenhain', 'artillery'],
      ['Artillerieregiment 3', 'Leipzig', 'artillery'],
      ['Fla-Raketenregiment 3', 'Hohenmölsen', 'air'],
      ['Pionierregiment 3', 'Gera', 'infantry'],
      ['Nachrichtenregiment 3', 'Leipzig', 'infantry'],
      ['Pontonregiment 3', 'Dessau', 'infantry'],
      ['Leitungsbauregiment 3', 'Döbeln', 'infantry'],
      ['Kampfhubschraubergeschwader 3', 'Cottbus', 'air'],
      ['Geschoßweferabteilung 3', 'Eilenburg', 'artillery'],
      ['Panzerjägerabteilung 3', 'Zwickau', 'armour'],
      ['Nachrichtenbataillon 3001', 'Leipzig', 'infantry'],
      ['Bataillon Mat. Sicherstellung 3', 'Herzberg', 'infantry'],
      ['Instandsetzungbataillon 3', 'Naunhof', 'infantry'],
      ['Bataillon Chemische Abwehr 3', 'Bad Düben', 'infantry'],
      ['Detonomie- und Aufklärungsbataillon 3', 'Bad Düben', 'infantry'],
      ['Funktechnisches Bataillon 3', 'Leipzig', 'infantry'],
      ['Bataillon Funkeletonischer Kampf 3', 'Eilenburg', 'infantry'],
      ['Funk- und Funktechnisches Aufklärungsbataillon 3', 'Rudolstadt', 'infantry'],
      ['Fliegertechnisches Bataillon 103', 'Cottbus', 'air'],
      ['Wach- und Sicherstellungsbataillon 3', 'Leipzig', 'infantry'],
      ['1. Mot. Schützendivision', 'Potsdam', 'infantry'],
      ['Mot. Schützenregiment 1', 'Oranienburg', 'infantry'],
      ['Mot. Schützenregiment 2', 'Stahnsdorf', 'infantry'],
      ['Mot. Schützenregiment 3', 'Brandenburg-Hohenstücken', 'infantry'],
      ['Panzerregiment 1', 'Beelitz', 'armour'],
      ['Artillerieregiment 1', 'Brandenburg-Lehnitz', 'artillery'],
      ['Fla-Raketenregiment 1', 'Brück', 'air'],
      ['Raketenabteilung 1', 'Groß Behnitz', 'artillery'],
      ['Geschosswerferabteilung 1', 'Beelitz', 'artillery'],
      ['Aufklärungsbataillon 1', 'Beelitz', 'infantry'],
      ['Pionierbataillon 1', 'Brandenburg-Kirchmöser', 'infantry'],
      ['Artillerieabteilung 1', 'Beelitz', 'artillery'],
      ['Nachrichtenbataillon 1', 'Potsdam-Eiche', 'infantry'],
      ['Bataillon Mat. Sicherstellung 1', 'Lehnin-Damsdorf', 'infantry'],
      ['Instandsetzungbataillon 1', 'Potsdam', 'infantry'],
      ['Bataillon Chemische Abwehr 1', 'Oranienburg-Lehnitz', 'infantry'],
      ['8. Mot. Schützendivision', 'Schwerin-Stern Buchholz', 'infantry'],
      ['Mot. Schützenregiment 27', 'Schwerin-Stern Buchholz', 'infantry'],
      ['Mot. Schützenregiment 28', 'Rostock', 'infantry'],
      ['Mot. Schützenregiment 29', 'Hagenow', 'infantry'],
      ['Panzerregiment 8', 'Goldberg', 'armour'],
      ['Artillerieregiment 8', 'Rostock', 'artillery'],
      ['Fla-Raketenregiment 8', 'Schwerin-Stern Buchholz', 'air'],
      ['Raketenabteilung 8', 'Goldberg', 'artillery'],
      ['Geschosswerferabteilung 8', 'Schwerin-Stern Buchholz', 'artillery'],
      ['Aufklärungsbataillon 8', 'Hagenow', 'infantry'],
      ['Pionierbataillon 8', 'Hagenow', 'infantry'],
      ['Panzerjägerabteilung 8', 'Schwerin-Stern Buchholz', 'armour'],
      ['Nachrichtenbataillon 8', 'Schwerin', 'infantry'],
      ['Bataillon Mat. Sicherstellung 8', 'Karow', 'infantry'],
      ['Instandsetzungbataillon 8', 'Karow', 'infantry'],
      ['Instandsetzungbataillon 8', 'Schwerin-Stern Buchholz', 'infantry'],
      ['Bataillon Chemische Abwehr 4', 'Karow', 'infantry'],
      ['9. Panzerdivision', 'Eggesin', 'armour'],
      ['Mot. Schützenregiment 9', 'Torgelow-Drögeheide', 'infantry'],
      ['Panzerregiment 21', 'Torgelow-Spechtberg', 'armour'],
      ['Panzerregiment 22', 'Torgelow-Spechtberg', 'armour'],
      ['Panzerregiment 23', 'Stallberg', 'armour'],
      ['Artillerieregiment 9', 'Eggesin-Karpin', 'artillery'],
      ['Fla-Raketenregiment 9', 'Eggesin-Karpin', 'air'],
      ['Raketenabteilung 9', 'Torgelow-Spechtberg', 'artillery'],
      ['Geschosswerferabteilung 9', 'Eggesin-Karpin', 'artillery'],
      ['Aufklärungsbataillon 9', 'Torgelow-Drögeheide', 'infantry'],
      ['Pionierbataillon 9', 'Eggesin-Karpin', 'infantry'],
      ['Nachrichtenbataillon 9', 'Eggesin', 'infantry'],
      ['Bataillon Mat. Sicherstellung 9', 'Torgelow-Drögeheide', 'infantry'],
      ['Instandsetzungbataillon 9', 'Torgelow-Drögeheide', 'infantry'],
      ['Bataillon Chemische Abwehr 9', 'Eggesin-Karpin', 'infantry'],
      ['Ausbildungszentrum 19', 'Burg', 'infantry'],
      ['Mot. Schützenausbildungsregiment 30', 'Burg', 'infantry'],
      ['Mot. Schützenausbildungsregiment 31', 'Glöwen', 'infantry'],
      ['Mot. Schützenausbildungsregiment 32', 'Burg', 'infantry'],
      ['Panzerausbildungsregiment 19', 'Burg', 'armour'],
      ['Artillerieausgbildungsregiment 19', 'Klietz', 'artillery'],
      ['Fla-Raketenausbildungsregiment 19', 'Burg', 'air'],
      ['Raketenabteilung 19', 'Klietz', 'artillery'],
      ['Geschosswerferausbildungsabteilung 19', 'Klietz', 'artillery'],
      ['Aufklärungsausbildungsbataillon 19', 'Burg', 'infantry'],
      ['Pionierausbildungsbataillon 19', 'Havelberg', 'infantry'],
      ['Panzerjägerausbildungsabteilung 4', 'Klietz', 'armour'],
      ['Nachrichtenausbildungsbataillon 19', 'Burg', 'infantry'],
      ['Ausbildungsbataillon MS 19', 'Burg', 'infantry'],
      ['Instandsetzungsausbildungsbataillon 19', 'Burg', 'infantry'],
      ['Ausbildungsbataillon ChA 19', 'Havelberg', 'infantry'],
      ['5. Raketenbrigade', 'Demen', 'artillery'],
      ['Artillerieregiment 5', 'Daßel', 'artillery'],
      ['Fla-Raketenregiment 5', 'Basepohl', 'air'], // Corrected typo "Regiument"
      ['Pionierregiment 5', 'Pasewalk', 'infantry'],
      ['Nachrichtenregiment 5', 'Neubrandenburg-Fünfeichen', 'infantry'],
      ['Pontonregiment 5', 'Havelberg', 'infantry'],
      ['Leitungsbauregiment 5', 'Neubrandenburg-Fünfeichen', 'infantry'],
      ['Ausbildungsregiment Militärtransportwesen 15', 'Prora', 'infantry'],
      ['Kampfhubschraubergeschwader 5', 'Basepohl', 'air'],
      ['Panzerjägerabteilung 5', 'Daßel', 'armour'],
      ['Nachrichtenbataillon 5001', 'Neubrandenburg', 'infantry'],
      ['Bataillon Mat. Sicherstellung 5', 'Prenzlau', 'infantry'],
      ['Instandsetzungbataillon 5', 'Murchin', 'infantry'],
      ['Bataillon Chemische Abwehr 5', 'Prenzlau', 'infantry'],
      ['Detonomie- und Aufklärungsbataillon 5', 'Prenzlau', 'infantry'],
      ['Funktechnisches Bataillon 5', 'Basepohl', 'infantry'],
      ['Bataillon Funkelektronischer Kampf 5', 'Goldberg', 'infantry'],
      ['Funk- und Funktechnisches Aufklärungsbataillon 5', 'Schwerin', 'infantry'],
      ['Fliegertechnisches Bataillon 105', 'Basepohl', 'air'],
      ['Wach- und Sicherstellungsbataillon 5', 'Neubrandenburg', 'infantry'],
      ['Raketenabteilung 20', 'Eggesin-Karpin', 'artillery']
    ];

    ministrat.main.unique_locations.ddr = [];

    var unique_locations = ministrat.main.unique_locations.ddr;

    //Iterate over all ddr_army_orbat rows
    for (var i = 0; i < ddr_army_orbat.length; i++)
      if (!unique_locations.includes(ddr_army_orbat[i][1]))
        if (!ministrat.config.locations[ddr_army_orbat[i][1]])
          if (!ministrat.config.all_locations.includes(ddr_army_orbat[i][1]))
            unique_locations.push(ddr_army_orbat[i][1]);
    
    //Add to unique_locations
    ministrat.config.all_locations = ministrat.config.all_locations.concat(unique_locations);

    //Load all units
    setTimeout(function () {
      for (var i = 0; i < ddr_army_orbat.length; i++) {
        var local_key = ddr_army_orbat[i][0];
        var local_location = ddr_army_orbat[i][1];
        var local_type = ddr_army_orbat[i][2];

        var ministrat_location = ministrat.config.locations[local_location];

        if (local_location != "")
          ministrat.gamestate.units[local_key] = new Ministrat_Unit({
            country: "ddr",
            name: local_key,
            type: local_type,
            x: ministrat_location[0],
            y: ministrat_location[1]
          });
      }
    }, ministrat.config.defines.common.unit_load_delay);
  }
}