//Initialise functions
{
  function loadBRDArmyORBAT () {
    //Declare local instance variables
    var brd_army_orbat = [
      ['Korpsartillerie', 'Flensburg', 'artillery'],
      ['600. Flugabwehrregiment', 'Rendsburg', 'air'],
      ['6. Flugabwehrregiment', 'Lütjenberg', 'air'],
      ['51. Heimatschutzbrigade', 'Eutin', 'infantry'],
      ['6. Panzerdivision', 'Neumünster', 'armour'],
      ['18. Panzergrenadierbrigade', 'Neumünster', 'armour'],
      ['17. Panzergrenadierbrigade', 'Hamburg', 'armour'],
      ['16. Panzergrenadierbrigade', 'Wentorf', 'armour'],
      ['6. Heeresfliegerregiment', 'Hohenlockstedt', 'air'],
      ['6. Artillerieregiment', 'Kellinghusen', 'artillery'],
      ['1. Panzerdivision', 'Hannover', 'armour'],
      ['Panzergrenadierbrigade 1', 'Hildesheim', 'armour'],
      ['Panzerbrigade 2', 'Braunschweig', 'armour'],
      ['Panzerbrigade 3', 'Nienburg', 'armour'],
      ['3. Panzerdivision', 'Buxtehude', 'armour'],
      ['Panzergrenadierbrigade 7', 'Hamburg', 'armour'],
      ['Panzerbrigade 8', 'Lüneburg', 'armour'],
      ['Panzerlehrbrigade 9', 'Munster', 'armour'],
      ['7. Panzerdivision', 'Unna', 'armour'],
      ['Panzergrenadierbrigade 19', 'Ahlen', 'armour'],
      ['Panzerbrigade 20', 'Iserlohn', 'armour'],
      ['Panzerbrigade 21', 'Augustdorf', 'armour'],
      ['6. Panzergrenadierdivision', 'Neumünster', 'armour'],
      ['Panzergrenadierbrigade 16', 'Wentorf', 'armour'],
      ['Panzergrenadierbrigade 17', 'Hamburg', 'armour'],
      ['Panzerbrigade 18', 'Boostedt', 'armour'],
      ['11. Panzergrenadierdivision', 'Oldenburg', 'armour'],
      ['Panzergrenadierbrigade 31', 'Oldenburg', 'armour'],
      ['Panzergrenadierbrigade 32', 'Schwanewede', 'armour'],
      ['Panzerbrigade 33', 'Celle', 'armour'],
      ['Luftlandebrigade 27', 'Lippstadt', 'infantry'], // Airborne Brigades contain paratroopers (infantry)
      ['Artilleriekommando 1', 'Münster', 'artillery'],
      ['Raketenartilleriebataillon 150', 'Wesel', 'artillery'],
      ['Nachschubbataillon Sw 120', 'Werlte', 'infantry'], // Logistics/Support default to infantry if no other category fits
      ['Sicherungsbataillon 100', 'Ahaus', 'infantry'], // Security Battalions are typically infantry
      ['Drohnenbatterie 100', 'Coesfeld', 'air'], // Drones operate in the air domain
      ['Heeresfliegerkommando 1', 'Handorf', 'air'], // Army Aviation Command
      ['Flugabwehrkommando 1', 'Münster', 'air'], // Air Defence Command
      ['Pionierkommando 1', 'Münster', 'infantry'], // Engineers default to infantry
      ['Fernmeldekommando 1', 'Münster', 'infantry'], // Signals default to infantry
      ['Nachschubkommando 1', 'Rheine', 'infantry'], // Supply/Logistics Command default to infantry
      ['Instandsetzungskommando 1', 'Bielefeld', 'infantry'], // Maintenance Command default to infantry
      ['Sanitätskommando 1', 'Münster', 'infantry'], // Medical Command default to infantry
      ['ABC-Abwehrbataillon', 'Emden', 'infantry'], // NBC Defence default to infantry
      ['Feldjägerbataillon', 'Emden', 'infantry'], // Military Police default to infantry
      ['4. Panzergrenadierdivision', 'Regensburg', 'armour'],
      ['Panzergrenadierbrigade 10', 'Weiden', 'armour'],
      ['Panzergrenadierbrigade 11', 'Bogen', 'armour'],
      ['Panzerbrigade 12', 'Amberg', 'armour'],
      ['1. Gebirgsdivision', 'Garmisch-Partenkirchen', 'infantry'], // Mountain Division
      ['Panzergrenadierbrigade 22', 'Murnau', 'armour'], // Even within GebDiv, it's a PzGren Bde
      ['Gebirgsjägerbrigade 23', 'Bad Reichenhall', 'infantry'], // Mountain Infantry
      ['Panzerbrigade 24', 'Landshut', 'armour'],
      ['Heimatschutzbrigade 56', 'München', 'infantry'], // Home Guard/Territorial Defence
      ['1. Luftlandedivision', 'Esslingen am Neckar', 'infantry'], // Airborne Division
      ['Fallschirmjägerbrigade 25', 'Calw', 'infantry'], // Paratroopers
      ['Fallschirmjägerbrigade 26', 'Saarlouis', 'infantry'], // Paratroopers
      ['Fallschirmjägerbrigade 27', 'Lippstadt', 'infantry'], // Paratroopers
      ['10. Panzerdivision', 'Sigmaringen', 'armour'],
      ['Panzerbrigade 28', 'Dornstadt', 'armour'],
      ['Panzerbrigade 29', 'Sigmaringen', 'armour'],
      ['Panzergrenadierbrigade 30', 'Ellwangen', 'armour'],
      ['Artilleriekommando 2', '', 'artillery'],
      ['Feldartilleriebataillon 210', 'Philippsburg', 'artillery'],
      ['Feldartilleriebataillon 220', 'Philippsburg', 'artillery'],
      ['Raketenartilleriebataillon 250', 'Großengstingen', 'artillery'],
      ['Nachschubbataillon 220 SW', 'Günzburg', 'infantry'], // Logistics/Support default
      ['Flugabwehrkommando 2', '', 'air'],
      ['Panzerflugabwehrraketenregiment', 'München', 'air'], // Air Defence
      ['Flugabwehrbataillon', 'München', 'air'],
      ['Flugabwehrbataillon', 'München', 'air'],
      ['Heeresfliegerkommando 2', '', 'air'],
      ['Heeresfliegertransportregiment', 'München', 'air'], // Army Aviation
      ['Heeresfliegertransportregiment', 'München', 'air'],
      ['Panzerabwehrhubschrauberregiment', 'München', 'air'], // Anti-Tank Helicopters
      ['Pionierkommando 2', '', 'infantry'], // Engineers default
      ['Pionierbataillon', 'München', 'infantry'],
      ['Pionierbataillon', 'München', 'infantry'],
      ['Pionierbataillon', 'München', 'infantry'],
      ['Pionierbataillon', 'München', 'infantry'],
      ['Amphibisches Pionierbataillon 230', 'Ingolstadt', 'infantry'],
      ['Schwimmbrückenbataillon', 'München', 'infantry'], // Bridging Engineers default
      ['Schwimmbrückenbataillon', 'München', 'infantry'],
      ['ABC-Abwehrlehrbataillon 210', 'München', 'infantry'], // NBC Defence default
      ['Fernmeldekommando 2', '', 'infantry'], // Signals default
      ['Fernmeldebetriebsbataillon 210', 'Dillingen', 'infantry'],
      ['Fernmeldeverbindungsbataillon 230', 'Dillingen', 'infantry'],
      ['Fernmeldebataillon Elektronischer Kampf 220', 'Donauwörth', 'infantry'], // EW/Signals default
      ['Nachschubkommando 2', '', 'infantry'], // Supply/Logistics default
      ['Nachschubbataillon', 'München', 'infantry'],
      ['Transportbataillon', 'München', 'infantry'],
      ['Transportbataillon', 'München', 'infantry'],
      ['Instandsetzungskommando 2', '', 'infantry'], // Maintenance default
      ['Instandsetzungsbataillon Elektronik', 'München', 'infantry'],
      ['Instandsetzungsbataillon', 'München', 'infantry'],
      ['Instandsetzungsbataillon', 'München', 'infantry'],
      ['Kampfmittelbeseitigungszug', 'München', 'infantry'], // EOD default
      ['Sanitätskommando 2', '', 'infantry'], // Medical default
      ['Sanitätsbataillon', 'München', 'infantry'],
      ['Sanitätsbataillon', 'München', 'infantry'],
      ['Krankentransportbataillon', 'München', 'infantry'],
      ['2. Panzergrenadierdivision', 'Kassel', 'armour'],
      ['Panzergrenadierbrigade 4', 'Göttingen', 'armour'],
      ['Panzergrenadierbrigade 5', 'Homberg', 'armour'],
      ['Panzerbrigade 6', 'Hofgeismar', 'armour'],
      ['5. Panzerdivision', 'Diez', 'armour'],
      ['Panzergrenadierbrigade 13', 'Wetzlar', 'armour'],
      ['Panzerbrigade 14', 'Neustadt', 'armour'],
      ['Panzerbrigade 15', 'Koblenz', 'armour'],
      ['12. Panzerdivision', 'Veitshöchheim', 'armour'],
      ['Panzerbrigade 34', 'Koblenz', 'armour'],
      ['Panzergrenadierbrigade 35', 'Hammelburg', 'armour'],
      ['Panzerbrigade 36', 'Bad Mergentheim', 'armour'],
      ['Artilleriekommando 3', '', 'artillery'],
      ['Raketenartilleriebataillon Lance', 'Koblenz', 'artillery'],
      ['Nachschubbataillon Sonderwaffen', 'Koblenz', 'infantry'], // Logistics/Support default
      ['Sicherungsbataillon', 'Koblenz', 'infantry'],
      ['Drohnenbatterie', 'Koblenz', 'air'],
      ['Flugabwehrkommando 3', '', 'air'],
      ['Panzerflugabwehrraketenregiment', 'Koblenz', 'air'],
      ['Flugabwehrbataillon', 'Koblenz', 'air'],
      ['Flugabwehrbataillon', 'Koblenz', 'air'],
      ['Heeresfliegerkommando 3', '', 'air'],
      ['Heeresfliegertransportregiment', 'Koblenz', 'air'],
      ['Heeresfliegertransportregiment', 'Koblenz', 'air'],
      ['Panzerabwehrhubschrauberregiment', 'Koblenz', 'air'],
      ['Pionierkommando 3', '', 'infantry'], // Engineers default
      ['Pionierbataillon', 'Koblenz', 'infantry'],
      ['Pionierbataillon', 'Koblenz', 'infantry'],
      ['Pionierbataillon', 'Koblenz', 'infantry'],
      ['Pionierbataillon', 'Koblenz', 'infantry'],
      ['Amphibisches Pionierbataillon 330', 'Speyer', 'infantry'],
      ['Schwimmbrückenbataillon', 'Koblenz', 'infantry'],
      ['Schwimmbrückenbataillon', 'Koblenz', 'infantry'],
      ['Fernmeldekommando 3', '', 'infantry'], // Signals default
      ['Fernmeldebetriebsbataillon', 'Koblenz', 'infantry'],
      ['Fernmeldeverbindungsbataillon', 'Koblenz', 'infantry'],
      ['Fernmeldebataillon Elektronischer Kampf', 'Koblenz', 'infantry'], // EW/Signals default
      ['Nachschubkommando 3', '', 'infantry'], // Supply/Logistics default
      ['Nachschubbataillon', 'Koblenz', 'infantry'],
      ['Transportbataillon', 'Koblenz', 'infantry'],
      ['Transportbataillon', 'Koblenz', 'infantry'],
      ['Instandsetzungskommando 3', '', 'infantry'], // Maintenance default
      ['Instandsetzungsbataillon Elektronik', 'Koblenz', 'infantry'],
      ['Instandsetzungsbataillon', 'Koblenz', 'infantry'],
      ['Instandsetzungsbataillon', 'Koblenz', 'infantry'],
      ['Kampfmittelbeseitigungszug', 'Koblenz', 'infantry'], // EOD default
      ['Sanitätskommando 3', '', 'infantry'], // Medical default
      ['Sanitätsbataillon', 'Koblenz', 'infantry'],
      ['Sanitätsbataillon', 'Koblenz', 'infantry'],
      ['Krankentransportbataillon', 'Koblenz', 'infantry']
    ];
    
    ministrat.main.unique_locations.brd = [];

    var unique_locations = ministrat.main.unique_locations.brd;

    //Iterate over all brd_army_orbat rows
    for (var i = 0; i < brd_army_orbat.length; i++)
      if (!unique_locations.includes(brd_army_orbat[i][1]))
        if (!ministrat.config.locations[brd_army_orbat[i][1]])
          if (!ministrat.config.all_locations.includes(brd_army_orbat[i][1]))
            unique_locations.push(brd_army_orbat[i][1]);

    //Add to unique_locations
    ministrat.config.all_locations = ministrat.config.all_locations.concat(unique_locations);

    //Load all units
    setTimeout(function () {
      for (var i = 0; i < brd_army_orbat.length; i++) {
        var local_key = brd_army_orbat[i][0];
        var local_location = brd_army_orbat[i][1];
        var local_type = brd_army_orbat[i][2];
  
        var ministrat_location = ministrat.config.locations[local_location];
  
        if (local_location != "")
          ministrat.gamestate.units[local_key] = new Ministrat_Unit({
            country: "brd",
            name: local_key,
            type: local_type,
            x: ministrat_location[0],
            y: ministrat_location[1],
          });
      }
    }, ministrat.config.defines.common.unit_load_delay);
  }
}