//Initialise functions
{
  function loadNATOArmyORBAT () {
    //Declare local instance variables
    var nato_army_orbat = [
      ['103rd Reconnaissance Battalion "Huzaren van Boreel"', 'Seedorf', 'armour'],
      ['41 Pantserbrigade', 'Seedorf', 'armour'],
      ['41st Pantser Battalion "Regiment Huzaren Prins Alexander"', 'Bergen-Hohne', 'armour'],
      ['43rd Pantser Battalion "Regiment Huzaren van Sytzama"', 'Langemannshof', 'armour'],
      ['42nd Pantserinfanterie Battalion "Regiment Limburgse Jagers"', 'Seedorf', 'armour'],
      ['41st Field Artillery Battalion', 'Seedorf', 'artillery'],
      ['41st Armored Engineer Company', 'Seedorf', 'armour'],
      ['41st Brigade Supply Company', 'Seedorf', 'infantry'],
      ['41st Brigade Maintenance Company', 'Seedorf', 'infantry'],
      ['41st Brigade Medical Company', 'Seedorf', 'infantry'],
      ['I British Corps', 'Bielefeld', 'infantry'], // HQ default
      ['1st (BR) Corps HQ Defence Company', 'Bielefeld', 'infantry'],
      ['1st The Queen\'s Dragoon Guards', 'Wolfenbüttel', 'armour'],
      ['16th/5th Queen\'s Royal Lancers', 'Herford', 'armour'],
      ['664 Squadron AAC', 'Minden', 'air'],
      ['Commander Royal Artillery 1 (BR) Corps', 'Bielefeld', 'artillery'], // Command
      ['1st Artillery Brigade', 'Dortmund', 'artillery'],
      ['5th Heavy Regiment, Royal Artillery', 'Dortmund', 'artillery'],
      ['32nd Heavy Regiment, Royal Artillery', 'Dortmund', 'artillery'],
      ['Corps Support Group', 'Bielefeld', 'infantry'], // Support
      ['39th Heavy Regiment, Royal Artillery', 'Sennelager', 'artillery'],
      ['50 Missile Regiment Royal Artillery', 'Menden', 'artillery'],
      ['Air Defence Group', 'Dortmund', 'air'],
      ['12th Air Defence Regiment, Royal Artillery', 'Dortmund', 'air'],
      ['22nd Air Defence Regiment, Royal Artillery', 'Dortmund', 'air'],
      ['8th Transport Regiment, Royal Corps of Transport', 'Münster', 'infantry'], // Transport
      ['Commander Royal Engineers 1 (BR) Corps', 'Bielefeld', 'infantry'], // Command
      ['23rd Engineer Regiment, Royal Engineers', 'Osnabrück', 'infantry'],
      ['25th Engineer Regiment, Royal Engineers', 'Osnabrück', 'infantry'],
      ['28th Amphibious Engineer Regiment, Royal Engineers', 'Hameln', 'infantry'],
      ['32nd Armoured Engineer Regiment, Royal Engineers', 'Munsterlager', 'armour'], // Direct armoured support
      ['43rd Plant Squadron, Royal Engineers', 'Osnabrück', 'infantry'],
      ['65th Corps Support Squadron, Royal Engineers', 'Hameln', 'infantry'],
      ['211th Mobile Civilian Artisan Group, Royal Engineers', 'Schloss Neuhaus', 'infantry'],
      ['256th Mobile Civilian Plant Group, Royal Engineers', 'Hannover', 'infantry'],
      ['1st Postal & Courier Regiment, Royal Engineers', 'Hannover', 'infantry'], // Postal
      ['Commander Aviation BAOR and 1 (BR) Corps', 'Bielefeld', 'air'], // Command
      ['1 Regiment AAC', 'Hildesheim', 'air'],
      ['3 Regiment AAC', 'Soest', 'air'],
      ['4 Regiment AAC', 'Detmold', 'air'],
      ['Commander Communications 1 (BR) Corps', 'Bielefeld', 'infantry'], // Command
      ['7th Signal Regiment, Royal Signals', 'Herford', 'infantry'], // Signals
      ['14th Signal Regiment, Royal Signals', 'Celle', 'infantry'], // Signals (EW)
      ['22nd Signal Regiment, Royal Signals', 'Lippstadt', 'infantry'], // Signals
      ['Commander Transport 1 (BR) Corps', 'Bielefeld', 'infantry'], // Command
      ['7th Tank Transporter Regiment, Royal Corps of Transport', 'Sennelager', 'infantry'], // Transport
      ['10th Corps Transport Regiment, Royal Corps of Transport', 'Bielefeld', 'infantry'], // Transport
      ['24th Transport & Movement Regiment, Royal Corps of Transport', 'Hanover', 'infantry'], // Transport
      ['25th Transport & Movement Regiment, Royal Corps of Transport', 'Bielefeld', 'infantry'], // Transport
      ['14th Corps Support Squadron, Royal Corps of Transport', 'Bielefeld', 'infantry'], // Transport Support
      ['Commander Medical 1 (BR) Corps', 'Bielefeld', 'infantry'], // Command
      ['21st Field Hospital, Royal Army Medical Corps', 'Rinteln', 'infantry'], // Medical
      ['32nd Field Hospital, Royal Army Medical Corps', 'Hannover', 'infantry'], // Medical
      ['83rd Field Medical Equipment Depot, Royal Army Medical Corps', 'Hannover', 'infantry'], // Medical Supply
      ['Commander Supply 1 (BR) Corps', 'Bielefeld', 'infantry'], // Command
      ['5th Ordnance Battalion, Royal Army Ordnance Corps', 'Paderborn', 'infantry'], // Ordnance/Supply
      ['6th Ordnance Battalion, Royal Army Ordnance Corps', 'Bielefeld', 'infantry'], // Ordnance/Supply
      ['2nd Aircraft Support Unit, Royal Army Ordnance Corps', 'Detmold', 'air'], // Direct Air Supply/Support
      ['Commander Maintenance 1 (BR) Corps', 'Bielefeld', 'infantry'], // Command
      ['1st (BR) Corps Troops Workshop, Royal Electrical and Mechanical Engineers', 'Bielefeld', 'infantry'], // Maintenance
      ['20th Electronics Workshop, Royal Electrical and Mechanical Engineers', 'Minden', 'infantry'], // Maintenance
      ['71st Aircraft Workshop, Royal Electrical and Mechanical Engineers', 'Detmold', 'air'], // Direct Air Maintenance
      ['Provost Marshal 1 (BR) Corps', 'Bielefeld', 'infantry'], // Command (MP)
      ['110th Provost Company, Royal Military Police', 'Sennelager', 'infantry'], // MP
      ['115th Provost Company, Royal Military Police', 'Osnabrück', 'infantry'], // MP
      ['1st Armoured Division', 'Verden', 'armour'],
      ['HQ 1st Armoured Division & Signal Regiment, Royal Signals', 'Verden', 'armour'], // Div HQ
      ['7th Armoured Brigade', 'Soltau', 'armour'],
      ['Royal Scots Dragoon Guards', 'Fallingbostel', 'armour'],
      ['2nd Royal Tank Regiment', 'Fallingbostel', 'armour'],
      ['1st Btn, Staffordshire Regiment', 'Fallingbostel', 'infantry'],
      ['12th Armoured Brigade', 'Osnabrück', 'armour'],
      ['4th Royal Tank Regiment', 'Osnabrück', 'armour'],
      ['1st Btn, Royal Irish Rangers', 'Osnabrück', 'infantry'],
      ['1st Btn, Royal Green Jackets', 'Osnabrück', 'infantry'],
      ['22nd Armoured Brigade', 'Bergen-Hohne', 'armour'],
      ['Queen\'s Own Hussars', 'Bergen-Hohne', 'armour'],
      ['1st Royal Tank Regiment', 'Hildesheim', 'armour'],
      ['1st Btn, Scots Guards', 'Bergen-Hohne', 'infantry'],
      ['2nd Btn, Royal Anglian Regiment', 'Celle', 'infantry'],
      ['1st Field Regiment, Royal Horse Artillery', 'Bergen-Hohne', 'artillery'],
      ['4th Field Regiment, Royal Artillery', 'Osnabrück', 'artillery'],
      ['40th Field Regiment, Royal Artillery', 'Bergen-Hohne', 'artillery'],
      ['21st Engineer Regiment, Royal Engineers', 'Nienburg', 'infantry'],
      ['1st Armoured Division Transport Regiment, Royal Corps of Transport', 'Bunde', 'infantry'], // Div Transport
      ['1st Ordnance Battalion, Royal Army Ordnance Corps', 'Verden', 'infantry'], // Div Ordnance
      ['7th Armoured Workshop, Royal Electrical and Mechanical Engineers', 'Fallingbostel', 'infantry'], // Div Maintenance
      ['12th Armoured Workshop, Royal Electrical and Mechanical Engineers', 'Osnabrück', 'infantry'], // Div Maintenance
      ['1st Armoured Field Ambulance, Royal Army Medical Corps', 'Bergen-Hohne', 'infantry'], // Div Medical
      ['2nd Armoured Field Ambulance, Royal Army Medical Corps', 'Osnabrück', 'infantry'], // Div Medical
      ['111th Provost Company, Royal Military Police', 'Bergen-Hohne', 'infantry'], // Div MP
      ['3rd Armoured Division', 'Soest', 'armour'],
      ['HQ 3rd Armoured Division & Signal Regiment, Royal Signals', 'Soest', 'armour'], // Div HQ
      ['4th Armoured Brigade', 'Münster', 'armour'],
      ['14th/20th King\'s Hussars', 'Münster', 'armour'],
      ['17th/21st Lancers', 'Münster', 'armour'],
      ['1st Btn, Grenadier Guards', 'Münster', 'infantry'],
      ['6th Armoured Brigade', 'Soest', 'armour'],
      ['3rd Royal Tank Regiment', 'Hemer', 'armour'],
      ['1st Btn, Royal Scots', 'Werl', 'infantry'],
      ['3rd Btn, Royal Regiment of Fusiliers', 'Hemer', 'infantry'],
      ['33rd Armoured Brigade', 'Paderborn', 'armour'],
      ['Blues and Royals', 'Sennelager', 'armour'],
      ['1st Btn, Queen\'s Own Highlanders', 'Münster', 'infantry'],
      ['1st Btn, Queen\'s Lancashire Regiment', 'Paderborn', 'infantry'],
      ['2nd Field Regiment, Royal Artillery', 'Münster', 'artillery'],
      ['3rd Field Regiment, Royal Horse Artillery', 'Paderborn', 'artillery'],
      ['49th Field Regiment, Royal Artillery', 'Lippstadt', 'artillery'],
      ['26th Engineer Regiment, Royal Engineers', 'Iserlohn', 'infantry'],
      ['3rd Armoured Division Transport Regiment, Royal Corps of Transport', 'Duisburg', 'infantry'], // Div Transport
      ['3rd Ordnance Battalion, Royal Army Ordnance Corps', 'Soest', 'infantry'], // Div Ordnance
      ['5th Armoured Workshop, Royal Electrical and Mechanical Engineers', 'Soest', 'infantry'], // Div Maintenance
      ['6th Armoured Workshop, Royal Electrical and Mechanical Engineers', 'Münster', 'infantry'], // Div Maintenance
      ['11th Armoured Workshop, Royal Electrical and Mechanical Engineers', 'Soest', 'infantry'], // Div Maintenance
      ['3rd Armoured Field Ambulance, Royal Army Medical Corps', 'Sennelager', 'infantry'], // Div Medical
      ['5th Armoured Field Ambulance, Royal Army Medical Corps', 'Münster', 'infantry'], // Div Medical
      ['113th Provost Company, Royal Military Police', 'Werl', 'infantry'], // Div MP
      ['4th Armoured Division', 'Herford', 'armour'],
      ['HQ 4th Armoured Division & Signal Regiment, Royal Signals', 'Herford', 'armour'], // Div HQ
      ['11th Armoured Brigade', 'Minden', 'armour'],
      ['5th Royal Inniskilling Dragoon Guards', 'Paderborn', 'armour'],
      ['1st Btn, Argyll and Sutherland highlanders', 'Minden', 'infantry'],
      ['2nd Btn, Queen\'s Regiment', 'Minden', 'infantry'],
      ['20th Armoured Brigade', 'Detmold', 'armour'],
      ['4th/7th Royal Dragoon Guards', 'Detmold', 'armour'],
      ['15th/19th King\'s Royal Hussars', 'Detmold', 'armour'],
      ['2nd Btn, Royal Irish Rangers', 'Lemgo', 'infantry'],
      ['19th Field Regiment, Royal Artillery', 'Dortmund', 'artillery'],
      ['26th Field Regiment, Royal Artillery', 'Gütersloh', 'artillery'],
      ['35th Engineer Regiment, Royal Engineers', 'Hamlen', 'infantry'],
      ['4th Armoured Division Transport Regiment, Royal Corps of Transport', 'Minden', 'infantry'], // Div Transport
      ['4th Ordnance Battalion, Royal Army Ordnance Corps', 'Herford', 'infantry'], // Div Ordnance
      ['4th Armoured Workshop, Royal Electrical and Mechanical Engineers', 'Detmold', 'infantry'], // Div Maintenance
      ['4th Armoured Field Ambulance, Royal Army Medical Corps', 'Minden', 'infantry'], // Div Medical
      ['114th Provost Company, Royal Military Police', 'Detmold', 'infantry'], // Div MP
      ['Corps Reconnaissance Command', 'Arolsen', 'armour'], // Command
      ['1ste Jagers te Paard', 'Arolsen', 'armour'], // Light Cavalry/Recon
      ['2de Jagers te Paard', 'Lüdenscheid', 'armour'], // Light Cavalry/Recon
      ['4e Chasseurs à Cheval', 'Arnsberg', 'armour'], // Light Cavalry/Recon
      ['1er Compagnie d\'Equipes Spéciales de Reconnaissance', 'Troisdorf', 'infantry'], // Special Recon
      ['210th Logistic Company', 'Arolsen', 'infantry'], // Logistics
      ['Corps Artillery Command', 'Cologne', 'artillery'], // Command
      ['3rd Artillery Regiment', 'Werl', 'artillery'],
      ['13th Artillery Regiment', 'Büren', 'artillery'],
      ['14th Anti-Air Artillery Battalion', 'Spich', 'air'],
      ['17th Horse Artillery Regiment', 'Altenrath', 'artillery'],
      ['18th Artillery Regiment', 'Brasschaat', 'artillery'],
      ['20th Artillery Regiment', 'Werl', 'artillery'],
      ['35th Anti-Air Artillery Battalion', 'Spich', 'air'],
      ['73rd Special Ammunition Battery', 'Soest', 'artillery'], // Artillery Support
      ['80th Observation and Surveillance Battery', 'Cologne', 'artillery'], // Artillery Support
      ['95th Hawk and Lance Maintenance Battery', 'Werl', 'artillery'], // Missile Maintenance
      ['1st Light Aviation Group', 'Cologne', 'air'],
      ['16th Light Aviation Squadron', 'Cologne', 'air'],
      ['17th Light Aviation Squadron', 'Werl', 'air'],
      ['18th Light Aviation Squadron', 'Merzbrück', 'air'],
      ['1st Engineer Group', 'Cologne', 'infantry'], // Command
      ['1st Engineer Regiment', 'Cologne', 'infantry'],
      ['3rd Bridge Engineer Regiment', 'Cologne', 'infantry'],
      ['6th Engineer Regiment', 'Cologne', 'infantry'],
      ['10th Field Engineer Regiment', 'Amay', 'infantry'],
      ['17th Field Engineer Regiment', 'Zwijndrecht', 'infantry'],
      ['Topography and Geography Company', 'Cologne', 'infantry'], // Support
      ['1st Signal Group', 'Cologne', 'infantry'], // Command
      ['4th Signal Battalion', 'Cologne', 'infantry'], // Signals
      ['6th Signal Battalion', 'Lüdenscheid', 'infantry'], // Signals
      ['13th Signal Company', 'Krefeld', 'infantry'], // Signals
      ['17th Signal Company', 'Cologne', 'infantry'], // Signals
      ['20th Signal Company', 'Cologne', 'infantry'], // Signals
      ['4th Logistic Battalion', 'Cologne', 'infantry'], // Logistics
      ['18th Logistic Battalion', 'Lüdenscheid', 'infantry'], // Logistics
      ['20th Logistic Battalion', 'Cologne', 'infantry'], // Logistics
      ['29th Logistic Battalion', 'Eschweiler', 'infantry'], // Logistics
      ['51st Logistic Battalion', 'Aachen', 'infantry'], // Logistics
      ['2nd Military Police Company', 'Arnsberg', 'infantry'], // MP
      ['6th Military Police Company', 'Cologne', 'infantry'], // MP
      ['7th Military Police Company', 'Liège', 'infantry'], // MP
      ['1st Ambulance Company', 'Soest', 'infantry'], // Medical
      ['2nd Ambulance Company', 'Cologne', 'infantry'], // Medical
      ['3rd Ambulance Company', 'Cologne', 'infantry'], // Medical
      ['16de Pantserdivisie', 'Neheim-Hüsten', 'armour'],
      ['4de Pantserinfanteriebrigade', 'Soest', 'armour'], // Mech Inf Brigade
      ['4de Regiment Lansiers', 'Soest', 'armour'], // Lancers
      ['1ste Regiment Grenadiers', 'Soest', 'infantry'], // Grenadiers
      ['5de Linieregiment', 'Soest', 'infantry'], // Line Regiment
      ['6de Regiment Artillerie', 'Soest', 'artillery'],
      ['17ème Brigade Blindée', 'Siegen', 'armour'], // Armoured Brigade
      ['1er Régiment des Guides', 'Siegen', 'armour'], // Guides (Cavalry)
      ['2e Regiment Gidsen', 'Altenrath', 'armour'], // Guides (Cavalry)
      ['1ste Regiment Karabiniers Wielrijders', 'Spich', 'infantry'], // Carabiniers-Cyclists
      ['2ème Régiment de Carabiniers-cyclistes', 'Siegen', 'infantry'], // Carabiniers-Cyclists
      ['19e Régiment d\'Artillerie à Cheval', 'Siegen', 'artillery'], // Horse Artillery
      ['5th Personnel Group', 'Frankfurt', 'infantry'], // Support
      ['5th Finance Group', 'Frankfurt', 'infantry'], // Support
      ['4th Battalion, 2nd Air Defense Artillery', 'Giessen', 'air'],
      ['12th Aviation Brigade', 'Wiesbaden', 'air'],
      ['5th Squadron, 6th Cavalry', '(location not specified)', 'armour'], // Note: Location missing
      ['5th Battalion, 158th Aviation', 'Frankfurt-Bonames', 'air'],
      ['6th Battalion, 229th Aviation', '(location not specified)', 'air'], // Note: Location missing
      ['130th Engineer Brigade', 'Hanau', 'infantry'], // Command
      ['54th Engineer Battalion', '(location not specified)', 'infantry'], // Note: Location missing
      ['317th Engineer Battalion', '(location not specified)', 'infantry'], // Note: Location missing
      ['547th Engineer Battalion', '(location not specified)', 'infantry'], // Note: Location missing
      ['559th Engineer Battalion', '(location not specified)', 'infantry'], // Note: Location missing
      ['18th Military Police Brigade', 'Frankfurt', 'infantry'], // Command
      ['93rd Military Police Battalion', 'Frankfurt', 'infantry'], // MP
      ['709th Military Police Battalion', 'Frankfurt', 'infantry'], // MP
      ['22nd Signal Brigade', 'Frankfurt', 'infantry'], // Command
      ['17th Signal Battalion', 'Frankfurt', 'infantry'], // Signals
      ['32nd Signal Battalion', 'Frankfurt', 'infantry'], // Signals
      ['44th Signal Battalion', 'Darmstadt', 'infantry'], // Signals
      ['205th Military Intelligence Brigade', 'Frankfurt', 'infantry'], // Command
      ['1st Military Intelligence Battalion', 'Wiesbaden', 'infantry'], // MI
      ['165th Military Intelligence Battalion', 'Darmstadt', 'infantry'], // MI
      ['302nd Military Intelligence Battalion', 'Frankfurt', 'infantry'], // MI
      ['3rd Armored Division', 'Frankfurt', 'armour'],
      ['1st Brigade', 'Kirch-Göns', 'armour'], // Brigade under Armored Div
      ['2nd Battalion, 32nd Armor', 'Kirch-Göns', 'armour'],
      ['4th Battalion, 32nd Armor', 'Kirch-Göns', 'armour'],
      ['3rd Squadron, 5th Cavalry', 'Kirch-Göns', 'armour'],
      ['5th Squadron, 5th Cavalry', 'Kirch-Göns', 'armour'],
      ['2nd Brigade', 'Gelnhausen', 'armour'], // Brigade under Armored Div
      ['3rd Squadron, 8th Cavalry', 'Gelnhausen', 'armour'],
      ['4th Squadron, 8th Cavalry', 'Gelnhausen', 'armour'],
      ['4th Battalion, 18th Infantry', 'Gelnhausen', 'infantry'],
      ['3rd Brigade', 'Friedberg', 'armour'], // Brigade under Armored Div
      ['2nd Battalion, 67th Armor', 'Friedberg', 'armour'],
      ['4th Battalion, 67th Armor', 'Friedberg', 'armour'],
      ['5th Battalion, 18th Infantry', 'Friedberg', 'infantry'],
      ['4th Brigade (Aviation)', 'Hanau', 'air'],
      ['4th Squadron, 7th Cavalry', 'Büdingen', 'air'], // Air Cavalry
      ['2nd Battalion, 227th Aviation', '(location not specified)', 'air'], // Note: Location missing
      ['3rd Battalion, 227th Aviation', '(location not specified)', 'air'], // Note: Location missing
      ['3rd Armored Division Artillery', 'Hanau', 'artillery'], // Div Arty
      ['2nd Battalion, 3rd Field Artillery', 'Kirch-Göns', 'artillery'],
      ['2nd Battalion, 82nd Field Artillery', 'Friedberg', 'artillery'],
      ['4th Battalion, 82nd Field Artillery', 'Hanau', 'artillery'],
      ['3rd Armored Division Support Command', 'Frankfurt', 'infantry'], // Div Support
      ['45th Support Battalion', 'Gelnhausen', 'infantry'], // Support
      ['54th Support Battalion', 'Friedberg', 'infantry'], // Support
      ['122nd Support Battalion', 'Hanau', 'infantry'], // Support
      ['503rd Support Battalion', 'Kirchgoens', 'infantry'], // Support
      ['3rd Battalion, 5th Air Defense Artillery', 'Büdingen', 'air'],
      ['23rd Engineer Battalion', 'Hanau', 'infantry'],
      ['143rd Signal Battalion', 'Frankfurt', 'infantry'], // Div Signals
      ['533rd Military Intelligence Battalion', 'Frankfurt', 'infantry'], // Div MI
      ['8th Infantry Division (Mechanized)', 'Bad Kreuznach', 'armour'], // US Mech Inf Div -> armour
      ['1st Brigade', 'Gonsenheim', 'armour'], // Brigade under Mech Div
      ['2nd Brigade', 'Baumholder', 'armour'], // Brigade under Mech Div
      ['3rd Brigade', 'Mannheim', 'armour'], // Brigade under Mech Div
      ['4th Brigade (Aviation)', 'Mainz-Finthen', 'air'],
      ['8th Infantry Division Artillery', 'Baumholder', 'artillery'], // Div Arty
      ['8th Infantry Division Support Command', 'Bad Kreuznach', 'infantry'], // Div Support
      ['118th Support Battalion', 'Mainz', 'infantry'], // Support
      ['202nd Support Battalion', 'Mannheim', 'infantry'], // Support
      ['208th Support Battalion', 'Baumholder', 'infantry'], // Support
      ['708th Support Battalion', 'Bad Kreuznach', 'infantry'], // Support
      ['5th Battalion, 3rd Air Defense Artillery', 'Wackernheim', 'air'],
      ['12th Engineer Battalion', 'Dexheim', 'infantry'],
      ['8th Signal Battalion', 'Bad Kreuznach', 'infantry'], // Div Signals
      ['108th Military Intelligence Battalion', 'Bad Kreuznach', 'infantry'], // Div MI
      ['7th Personnel Group', 'Nellingen auf den Fildern', 'infantry'], // Support
      ['7th Finance Group', 'Stuttgart', 'infantry'], // Support
      ['84th Army Band', 'Stuttgart', 'infantry'], // Support
      ['5th Battalion, 2nd Air Defense Artillery', 'Crailsheim', 'air'],
      ['11th Aviation Brigade', 'Illesheim', 'air'],
      ['2nd Squadron, 6th Cavalry', 'Illesheim', 'air'], // Air Cavalry
      ['4th Battalion, 159th Aviation', 'Stuttgart', 'air'],
      ['4th Battalion, 229th Aviation', 'Illesheim', 'air'],
      ['7th Engineer Brigade', 'Kornwestheim', 'infantry'], // Command
      ['9th Engineer Battalion', 'Aschaffenburg', 'infantry'],
      ['78th Engineer Battalion', 'Ettlingen', 'infantry'],
      ['82nd Engineer Battalion', 'Bamberg', 'infantry'],
      ['237th Engineer Battalion', 'Heilbronn', 'infantry'],
      ['565th Engineer Battalion', 'Karlsruhe', 'infantry'],
      ['14th Military Police Brigade', 'Kornwestheim', 'infantry'], // Command
      ['385th Military Police Battalion', 'Kornwestheim', 'infantry'], // MP
      ['793rd Military Police Battalion', 'Fürth', 'infantry'], // MP
      ['93rd Signal Brigade', 'Ludwigsburg', 'infantry'], // Command
      ['26th Signal Battalion', 'Heilbronn', 'infantry'], // Signals
      ['34th Signal Battalion', 'Ludwigsburg', 'infantry'], // Signals
      ['51st Signal Battalion', 'Ludwigsburg', 'infantry'], // Signals
      ['207th Military Intelligence Brigade', 'Ludwigsburg', 'infantry'], // Command
      ['2nd Military Intelligence Battalion', 'Stuttgart', 'infantry'], // MI
      ['307th Military Intelligence Battalion', 'Ludwigsburg', 'infantry'], // MI
      ['511th Military Intelligence Battalion', 'Ludwigsburg', 'infantry'], // MI
      ['1st Armored Division', 'Ansbach', 'armour'],
      ['1st Brigade', 'Vilseck', 'armour'], // Brigade under Armored Div
      ['2nd Brigade', 'Erlangen', 'armour'], // Brigade under Armored Div
      ['3rd Brigade', 'Bamberg', 'armour'], // Brigade under Armored Div
      ['4th Brigade (Aviation)', 'Katterbach', 'air'],
      ['1st Armored Division Artillery', 'Zirndorf', 'artillery'], // Div Arty
      ['1st Armored Division Support Command', 'Fürth', 'infantry'], // Div Support
      ['47th Support Battalion', 'Erlangen', 'infantry'], // Support
      ['123rd Support Battalion', 'Fürth', 'infantry'], // Support
      ['125th Support Battalion', 'Bamberg', 'infantry'], // Support
      ['501st Support Battalion', 'Vilseck', 'infantry'], // Support
      ['6th Battalion, 3rd Air Defense Artillery', 'Schwabach', 'air'],
      ['16th Engineer Battalion', 'Fürth', 'infantry'],
      ['141st Signal Battalion', 'Ansbach', 'infantry'], // Div Signals
      ['501st Military Intelligence Battalion', 'Ansbach', 'infantry'], // Div MI
      ['1st Infantry Division (Mechanized)', 'Fort Riley, KS', 'armour'], // US Mech Inf Div -> armour (HQ Location is CONUS)
      ['1st Infantry Division (Forward)', 'Göppingen', 'armour'], // Forward element of Mech Div
      ['3rd Battalion, 34th Armor', 'Böblingen', 'armour'],
      ['1st Battalion, 16th Infantry', 'Böblingen', 'infantry'],
      ['4th Battalion, 16th Infantry', 'Göppingen', 'infantry'],
      ['2nd Battalion, 5th Field Artillery', 'Neu-Ulm', 'artillery'],
      ['299th Support Battalion', 'Göppingen', 'infantry'], // Support
      ['3rd Infantry Division (Mechanized)', 'Würzburg', 'armour'], // US Mech Inf Div -> armour
      ['1st Brigade', 'Schweinfurt', 'armour'], // Brigade under Mech Div
      ['2nd Brigade', 'Kitzingen', 'armour'], // Brigade under Mech Div
      ['3rd Brigade', 'Aschaffenburg', 'armour'], // Brigade under Mech Div
      ['4th Brigade (Aviation)', 'Giebelstadt', 'air'],
      ['3rd Infantry Division Artillery', 'Würzburg', 'artillery'], // Div Arty
      ['3rd Infantry Division Support Command', 'Würzburg', 'infantry'], // Div Support
      ['3rd Support Battalion', 'Schweinfurt', 'infantry'], // Support
      ['26th Support Battalion', 'Aschaffenburg', 'infantry'], // Support
      ['203rd Support Battalion', 'Kitzingen', 'infantry'], // Support
      ['703rd Support Battalion', 'Würzburg', 'infantry'], // Support
      ['4th Battalion, 3rd Air Defense Artillery', 'Kitzingen', 'air'],
      ['10th Engineer Battalion', 'Kitzingen', 'infantry'],
      ['123rd Signal Battalion', 'Würzburg', 'infantry'], // Div Signals
      ['103rd Military Intelligence Battalion', 'Würzburg', 'infantry'], // Div MI
      ['2nd Armored Cavalry', 'Nuremberg', 'armour'], // ACR
      ['1-2nd Armored Cavalry Squadron', 'Bindlach', 'armour'], // ACR Squadron
      ['2-2nd Armored Cavalry Squadron', 'Bamberg', 'armour'], // ACR Squadron
      ['3-2nd Armored Cavalry Squadron', 'Amberg', 'armour'], // ACR Squadron
      ['4-2nd Air Cavalry Squadron', 'Feucht', 'air'], // Air Cavalry Squadron
      ['VII Corps Artillery', 'Augsburg', 'artillery'], // Command
      ['17th Field Artillery Brigade', 'Augsburg', 'artillery'],
      ['4th Battalion, 12th Field Artillery', 'Crailsheim', 'artillery'],
      ['1st Battalion, 18th Field Artillery', 'Augsburg', 'artillery'],
      ['1st Battalion, 36th Field Artillery', 'Augsburg', 'artillery'],
      ['2nd Battalion, 77th Field Artillery', 'Augsburg', 'artillery'],
      ['72nd Field Artillery Brigade', 'Wertheim', 'artillery'],
      ['3rd Battalion, 12th Field Artillery', 'Aschaffenburg', 'artillery'],
      ['2nd Battalion, 14th Field Artillery', 'Bamberg', 'artillery'],
      ['4th Battalion, 14th Field Artillery', 'Bamberg', 'artillery'],
      ['4th Battalion, 27th Field Artillery', 'Wertheim', 'artillery'],
      ['3rd Battalion, 35th Field Artillery', 'Wertheim', 'artillery'],
      ['210th Field Artillery Brigade', 'Herzogenaurach', 'artillery'],
      ['3rd Battalion, 5th Field Artillery', 'Nuremberg', 'artillery'],
      ['2nd Battalion, 12th Field Artillery', 'Herzogenaurach', 'artillery'],
      ['3rd Battalion, 17th Field Artillery', 'Ansbach', 'artillery'],
      ['5th Battalion, 17th Field Artillery', 'Herzogenaurach', 'artillery'],
      ['2nd Corps Support Command', 'Nellingen auf den Fildern', 'infantry'], // Command
      ['Special Troops Battalion', 'Nellingen auf den Fildern', 'infantry'], // Support
      ['4th Transportation Battalion', 'Ludwigsburg', 'infantry'], // Transport
      ['7th Battalion, 159th Aviation', 'Nellingen auf den Fildern', 'air'],
      ['101st Ordnance Battalion', 'Heilbronn', 'infantry'], // Ordnance/Supply
      ['7th Corps Support Group', 'Crailsheim', 'infantry'], // Support
      ['13th Supply and Service Battalion', 'Ludwigsburg', 'infantry'], // Supply
      ['1st Maintenance Battalion', 'Böblingen', 'infantry'], // Maintenance
      ['71st Maintenance Battalion', 'Fürth', 'infantry'], // Maintenance
      ['87th Maintenance Battalion', 'Wertheim', 'infantry'], // Maintenance
      ['30th Medical Group', 'Ludwigsburg', 'infantry'], // Command
      ['31st Combat Support Hospital', 'Nellingen auf den Fildern', 'infantry'], // Medical
      ['67th Evacuation Hospital', 'Würzburg', 'infantry'], // Medical
      ['128th Combat Support Hospital', 'Nellingen auf den Fildern', 'infantry'] // Medical
    ];
    
    ministrat.main.unique_locations.nato = [];

    var unique_locations = ministrat.main.unique_locations.nato;

    //Iterate over all nato_army_orbat rows
    for (var i = 0; i < nato_army_orbat.length; i++)
      if (!unique_locations.includes(nato_army_orbat[i][1]))
        if (!ministrat.config.locations[nato_army_orbat[i][1]])
          if (!ministrat.config.all_locations.includes(nato_army_orbat[i][1]))
            unique_locations.push(nato_army_orbat[i][1]);

    //Add to unique_locations
    ministrat.config.all_locations = ministrat.config.all_locations.concat(unique_locations);

    //Load all units
    setTimeout(function () {
      for (var i = 0; i < nato_army_orbat.length; i++) {
        var local_key = nato_army_orbat[i][0];
        var local_location = nato_army_orbat[i][1];
        var local_type = nato_army_orbat[i][2];

        var ministrat_location = ministrat.config.locations[local_location];

        if (local_location != "" && local_location != "(location not specified)")
          ministrat.gamestate.units[local_key] = new Ministrat_Unit({
            country: "nato",
            name: local_key,
            type: local_type,
            x: ministrat_location[0],
            y: ministrat_location[1]
          });
      }
    }, ministrat.config.defines.common.unit_load_delay);
  }
}
