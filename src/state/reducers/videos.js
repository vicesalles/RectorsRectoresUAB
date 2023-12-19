import { SET_CURRENT_VIDEO } from "../actions/types";

const initialState = {
  currentVideo: "z",
  videos: [{
    id: 'ferrer',
    nom: 'Lluís',
    cognoms: 'Ferrer Caubet',
    anys: [2002, 2009],
    yt: 'HScGd4v869E',
    events:
      [{ id: 0, sec: 6, txt: 'Primer rector escollit en vigència de la LOU', tags: ['LOU', 'PP', 'marc legal'] },
      { id: 1, sec: 85, txt: 'Conseqüències de la LOU', tags: ['LOU', 'conseqüències', 'marc legal'] },
      { id: 2, sec: 185, txt: 'Modificacions del marc legal', tags: ['LOU', 'LUC', 'marc legal'] },
      { id: 3, sec: 244, txt: 'Aprovació de nous estatuts', tags: ['estatuts', 'LOU', 'marc legal'] },
      { id: 4, sec: 324, txt: 'Aprovació d\'un nou pla director', tags: ['pla director', 'canvis'] },
      { id: 5, sec: 486, txt: 'Relació amb la Conselleria d\'Universitats', tags: ['conselleria', 'universitats', 'Carles Solà', 'Generalitat'] },
      { id: 6, sec: 569, txt: 'Adaptació al Pla Bolonya', tags: ['Pla Bolonya', 'homologació', 'Espai Europeu', 'reforma', 'universitats'] },
      { id: 7, sec: 946, txt: 'Pla pilot de titulacions adaptades', tags: ['titulacions', 'reestructuració', 'flexibilitat', 'pla pilot'] },
      { id: 8, sec: 1211, txt: 'Noves titulacions', tags: ['innovació', 'titulacions'] },
      { id: 9, sec: 1390, txt: 'Creació de la Facultat de Biociències', tags: ['facultats', 'Biociències', 'reestructuració'] },
      { id: 10, sec: 1715, txt: 'Ampliació de l\'hospital Germans Trias i Pujol', tags: ['unitat docent', 'Can Ruti', 'Germans Trias i Pujol'] },
      { id: 11, sec: 1805, txt: 'Aliança 4 Universitats', tags: ['internacionalització', 'Aliança 4 Universitats'] },
      { id: 12, sec: 2141, txt: 'Programa Study Abroad', tags: ['internacionalització', 'intercanvi', 'Study Abroad', 'estudiants'] },
      { id: 13, sec: 2221, txt: 'Impulsos a la recerca', tags: ['recerca', 'innovació'] },
      { id: 14, sec: 2423, txt: 'Nous centres de recerca', tags: ['recerca', 'CReSA', 'campus'] },
      { id: 15, sec: 2510, txt: 'Parc de Recerca i Esfera UAB', tags: ['recerca', 'Esfera UAB', 'campus'] },
      { id: 16, sec: 2855, txt: 'Fòrum de la Recerca UAB 2006', tags: ['recerca', 'fòrum'] },
      { id: 17, sec: 3017, txt: 'Creació de l\'Observatori per a la Igualtat', tags: ['observatori', 'igualtat', 'drets', 'gènere', 'campus'] },
      { id: 18, sec: 3220, txt: 'Primer acte institucional del Dia de la Dona', tags: ['institucional', 'dona', '8M', 'transparència', 'drets', 'igualtat'] },
      { id: 19, sec: 3307, txt: 'Campus Ítaca', tags: ['Campus Ítaca', 'integració', 'igualtat', 'talent'] },
      { id: 20, sec: 3688, txt: 'Els anys temàtics', tags: ['cultura', 'participació', 'campus'] },
      { id: 21, sec: 3862, txt: 'Compromís amb el medi ambient', tags: ['compromís', 'medi ambient', 'sostenibilitat', 'campus'] },
      { id: 22, sec: 4038, txt: 'Protestes contra la guerra d\'Iraq', tags: ['protestes', 'mobilitzacions', 'guerra d\'Iraq', 'campus', 'no a la guerra'] },
      { id: 23, sec: 4163, txt: 'Els doctors \'honoris causa\'', tags: ['doctors', 'honoris causa', 'reconeixement', 'talent'] },
      { id: 24, sec: 4318, txt: 'Ocupacions de les facultats', tags: ['ocupacions', 'protestes', 'vaga', 'estudiants', 'Pla Bolonya', 'campus'] },
      { id: 25, sec: 4538, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rector', 'Ferrer'] }]
  },
  {
    id: 'pascual',
    nom: 'Ramon',
    cognoms: 'Pascual de Sans',
    anys: [1986, 1990],
    yt: 'i4UC7IR3ILQ',
    events:
      [{ id: 0, sec: 6, txt: 'Breu període com a rector en funcions (1980)', tags: ['rector', 'Josep Laporte', 'Serra Ramoneda'] },
      { id: 1, sec: 69, txt: 'Director general d\'Universitats', tags: ['política', 'Generalitat', 'Jordi Pujol'] },
      { id: 2, sec: 222, txt: 'Reformes en l\'estructura de la UAB', tags: ['canvis', 'reformes', 'estructura', 'LRU'] },
      { id: 3, sec: 306, txt: 'Gran augment del finançament', tags: ['finançament', 'universitats', 'progrés'] },
      { id: 4, sec: 460, txt: 'Noves facultats', tags: ['facultat', 'polítiques', 'campus Sabadell', 'progrés', 'campus'] },
      { id: 5, sec: 604, txt: 'Un pressupost \'expansiu\'', tags: ['finançament', 'pressupost', 'recerca', 'biblioteques', 'rehabilitació', 'progrés'] },
      { id: 6, sec: 842, txt: 'Nous centres de recerca', tags: ['recerca', 'CSIC', 'CNM', 'consorcis', 'campus'] },
      { id: 7, sec: 1024, txt: 'Impuls a les unitats docents hospitalàries', tags: ['unitats docents', 'Germans Trias', 'Hospital del Mar', 'Sant Pau'] },
      { id: 8, sec: 1171, txt: 'El programa Erasmus', tags: ['Erasmus', 'intercanvi', 'Unió Europea', 'estudiants', 'internacionalització'] },
      { id: 9, sec: 1267, txt: 'Orígens del sincrotró Alba', tags: ['sincrotró Alba', 'accelerador de partícules', 'CELLS', 'CERN'] },
      { id: 10, sec: 1532, txt: 'El sincrotró dins del campus, inviable', tags: ['sincrotró Alba', 'accelerador de partícules', 'campus', 'CELLS'] },
      { id: 11, sec: 1652, txt: 'Protestes estudiantils', tags: ['protestes', 'mobilitzacions', 'estudiants', 'servei social substitutori', 'ocupació', 'vaga', 'rectorat'] },
      { id: 12, sec: 1820, txt: 'Condicions laborals del PAS', tags: ['condicions laborals', 'personal', 'PAS'] },
      { id: 13, sec: 2011, txt: 'Celebració del 20è aniversari', tags: ['20è aniversari', 'UAM', 'festa major', 'exposició', 'campus'] },
      { id: 14, sec: 2134, txt: 'Introducció de la Festa Major', tags: ['festa major', 'campus', 'cultura'] },
      { id: 15, sec: 2175, txt: 'Efectes de la fundació d\'altres universitats', tags: ['UDL', 'UDG', 'URV', 'UPF', 'URL', 'universitats'] },
      { id: 16, sec: 2395, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rector'] },
      { id: 17, sec: 2491, txt: 'Bons records del mandat', tags: ['records', 'urbanització', 'campus', 'reformes', 'biblioteques', 'recerca', 'mandat', 'Pascual'] }]
  },
  {
    id: 'valles',
    nom: 'Josep Maria',
    cognoms: 'Vallès Casadevall',
    anys: [1990, 1994],
    yt: '1KFT2I85kn0',
    events:
      [{ id: 0, sec: 7, txt: 'Les adversitats de l\'inici del mandat', tags: ['finançament', 'docència', 'mandat'] },
      { id: 1, sec: 131, txt: 'Noves facultats', tags: ['polítiques', 'sociologia', 'traducció', 'educació', 'facultats', 'campus', 'progrés'] },
      { id: 2, sec: 411, txt: 'Noves titulacions', tags: ['titulacions', 'innovació', 'docència'] },
      { id: 3, sec: 516, txt: 'Una forta restricció financera', tags: ['finançament', 'crisi', 'retallades', 'pressupost'] },
      { id: 4, sec: 599, txt: 'Edificació de la Vila Universitària', tags: ['Vila Universitària', 'residència', 'estudiants', 'policia'] },
      { id: 5, sec: 905, txt: 'Consolidació dels centres de recerca', tags: ['recerca', 'CREAF', 'CVC'] },
      { id: 6, sec: 983, txt: 'Gestió de la recerca', tags: ['recerca', 'gestió'] },
      { id: 7, sec: 1032, txt: 'Conveni amb l\'Hospital Parc Taulí', tags: ['conveni', 'Parc Taulí', 'Sabadell'] },
      { id: 8, sec: 1165, txt: 'Desenvolupament de la xarxa de biblioteques', tags: ['biblioteques', 'xarxa', 'coneixement', 'campus', 'progrés'] },
      { id: 9, sec: 1297, txt: 'Revisió integral dels plans d\'estudis', tags: ['reformes', 'plans d\'estudis', 'docència'] },
      { id: 10, sec: 1382, txt: 'Reducció de les llicenciatures de 5 a 4 anys', tags: ['reformes', 'llicenciatures', 'titulacions'] },
      { id: 11, sec: 1692, txt: 'Presència als rankings internacionals', tags: ['rankings', 'classificació', 'qualitat'] },
      { id: 12, sec: 1720, txt: 'Creació de Cultura en Viu i de la FAS', tags: ['cultura', 'FAS', 'voluntariat', 'campus', 'igualtat'] },
      { id: 13, sec: 1922, txt: 'Una matrícula un 0,5% més cara', tags: ['matrícula', 'cost', 'docència', 'ocupació', 'estudiants', 'protestes'] },
      { id: 14, sec: 2274, txt: 'Reimpuls de les revistes de la UAB', tags: ['publicacions', 'revistes', 'butlletí', 'comunicació'] },
      { id: 15, sec: 2395, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rector'] },
      { id: 16, sec: 2647, txt: 'El lligam personal amb la UAB', tags: ['records', 'vincles', 'Vallès'] }]
  },
  {
    id: 'serra',
    nom: 'Antoni',
    cognoms: 'Serra Ramoneda',
    anys: [1980, 1985],
    yt: 'Tyqd_7vOUUo',
    events:
      [{ id: 0, sec: 6, txt: 'Secretari de la Comissió Promotora de la UAB', tags: ['comissió promotora', 'fundació', 'UAB'] },
      { id: 1, sec: 150, txt: 'Participació en el Manifest de Bellaterra (1975)', tags: ['Manifest de Bellaterra', 'UAB'] },
      { id: 2, sec: 306, txt: 'Entrega de la medalla UAB a l\'exrector Josep Laporte', tags: ['medalla', 'UAB', 'Josep Laporte', 'rector', 'fundació', 'homenatge'] },
      { id: 3, sec: 329, txt: 'Conseqüències de la LRU', tags: ['LRU', 'reformes', 'marc legal'] },
      { id: 4, sec: 451, txt: 'Estabilització del personal numerari', tags: ['personal numerari', 'docència', 'condicions laborals'] },
      { id: 5, sec: 537, txt: 'Nous estatuts adaptats a la LRU', tags: ['estatuts', 'LRU', 'marc legal'] },
      { id: 6, sec: 569, txt: 'Oposició d\'estudiants i PAS als nous estatuts', tags: ['protestes', 'estatuts', 'marc legal', 'estudiants', 'PAS'] },
      { id: 7, sec: 599, txt: 'Creixement progressiu de la universitat', tags: ['creixement', 'progrés', 'campus', 'estudiants', 'professors', 'marc legal', 'protestes', 'tren', 'FGC'] },
      { id: 8, sec: 849, txt: 'Creació de la Facultat de Veterinària', tags: ['facultat', 'veterinària', 'conferència de rectors', 'campus'] },
      { id: 9, sec: 1022, txt: 'Inauguració del pavelló poliesportiu', tags: ['inauguració', 'poliesportiu', 'campus', 'esports'] },
      { id: 10, sec: 1107, txt: 'El procés d\'informatització', tags: ['informatització', 'modernització', 'ordinadors', 'càlcul'] },
      { id: 11, sec: 1221, txt: 'Novetats acadèmiques', tags: ['innovació', 'titulacions', 'facultats', 'ciències de la informació', 'traducció'] },
      { id: 12, sec: 1331, txt: 'Una sola biblioteca a l\'edifici del rectorat', tags: ['projecte', 'biblioteques', 'rectorat', 'coneixement'] },
      { id: 13, sec: 1418, txt: 'Creació de l\'ICE', tags: ['ICE', 'Josep Laporte', 'formació', 'educació', 'innovació', 'coneixement'] },
      { id: 14, sec: 1454, txt: 'Nous centres de recerca', tags: ['centres', 'recerca', 'CED', 'CNM', 'microelectrònica', 'IAE', 'CSIC', 'progrés'] },
      { id: 15, sec: 1595, txt: 'Relació amb la Direcció General d\'Universitats', tags: ['Ramon Pascual', 'Generalitat', 'Jordi Pujol'] },
      { id: 16, sec: 1612, txt: 'Converses sobre internacionalització', tags: ['internacionalització', 'convenis'] },
      { id: 17, sec: 1675, txt: 'Protestes estudiantils', tags: ['LRU', 'mobilitzacions', 'protestes', 'estudiants', 'vaga', 'ocupació', 'rectorat', 'campus'] },
      { id: 18, sec: 1810, txt: 'Reimpuls de l\'activitat cultural', tags: ['cultura', 'campus', 'aula de teatre', 'cor de la UAB'] },
      { id: 19, sec: 1865, txt: 'Gran èxit del concert de Lluís Llach', tags: ['concert', 'Lluís Llach', 'cultura', 'música', 'campus'] },
      { id: 20, sec: 1918, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rector'] },
      { id: 21, sec: 1998, txt: 'Records del cop d\'Estat del 23-F', tags: ['anècdota', 'records', 'cop d\'Estat', '23-F', 'Tejero', 'marxa sobre Cerdanyola', 'campus', 'Serra Ramoneda'] }]
  },
  {
    id: 'sola',
    nom: 'Carles',
    cognoms: 'Solà Ferrando',
    anys: [1994, 2002],
    yt: 'jXKC0Yogf_s',
    events:
      [{ id: 0, sec: 6, txt: 'Fundació de l\'Escola d\'Enginyeria', tags: ['escola d\'enginyeria', 'facultats', 'campus', 'progrés'] },
      { id: 1, sec: 87, txt: 'Innovacions acadèmiques', tags: ['titulacions', 'innovació', 'progrés'] },
      { id: 2, sec: 287, txt: 'Escola de Doctorat i Formació Continuada', tags: ['escola de doctorat', 'formació', 'campus'] },
      { id: 3, sec: 385, txt: 'Recursos per a la recerca', tags: ['recerca', 'finançament'] },
      { id: 4, sec: 512, txt: 'Nous centres de recerca', tags: ['recerca', 'centres', 'campus', 'progrés'] },
      { id: 5, sec: 644, txt: 'Constitució de l\'ICREA', tags: ['recerca', 'ICREA', 'talent', 'excel·lència', 'internacionalització'] },
      { id: 6, sec: 721, txt: 'Tensions pressupostàries', tags: ['finançament', 'pressupost', 'tensions'] },
      { id: 7, sec: 1022, txt: 'Informe Universitat 2000', tags: ['informe', 'estudi', 'finançament', 'PP', 'protestes', 'estudiants'] },
      { id: 8, sec: 1254, txt: 'Llei Orgànica d\'Universitats (LOU)', tags: ['LOU', 'PP', 'universitats', 'marc legal'] },
      { id: 9, sec: 1331, txt: 'Crisi institucional: la visita d\'Aznar', tags: ['crisi', 'Aznar', 'càrregues', 'policia', 'estudiants', 'protestes', 'mobilitzacions', 'campus'] },
      { id: 10, sec: 1701, txt: 'Inauguració de les columnes de la UAB', tags: ['columnes', 'monument', 'campus', 'UAB', 'Andreu Alfaro'] },
      { id: 11, sec: 1933, txt: 'El camí cap al Pla Bolonya', tags: ['Pla Bolonya', 'marc legal', 'reforma', 'Espai europeu', 'ensenyament', 'universitats'] },
      { id: 12, sec: 2166, txt: 'Líder en intercanvis europeus a l\'Estat', tags: ['intercanvi', 'mobilitat', 'internacionalització', 'estudiants'] },
      { id: 13, sec: 2351, txt: 'Creació del programa Universitat a l\'Abast', tags: ['Universitat a l\'Abast', 'formació', 'integració', 'igualtat'] },
      { id: 14, sec: 2401, txt: 'Nous espais per a biblioteques', tags: ['biblioteques', 'coneixement', 'campus', 'estudiants', 'progrés'] },
      { id: 15, sec: 2460, txt: 'Els doctors \'honoris causa\'', tags: ['doctors', 'honoris causa', 'reconeixement', 'talent'] },
      { id: 16, sec: 2498, txt: 'Connexió ferroviària amb Sabadell', tags: ['connexió', 'Sabadell', 'transport', 'tren', 'FGC', 'campus'] },
      { id: 17, sec: 2703, txt: 'Accident mortal d\'estudiants de Psicologia', tags: ['accident', 'estudiants', 'psicologia', 'França'] },
      { id: 18, sec: 2722, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rector'] },
      { id: 19, sec: 2849, txt: 'L\'anècdota dels migrants', tags: ['anècdota', 'records', 'migrants', 'Solà'] }]
  },
  {
    id: 'ripoll',
    nom: 'Ana',
    cognoms: 'Ripoll Aracil',
    anys: [2009, 2012],
    yt: '47DDqEwaDZk',
    events:
      [{ id: 0, sec: 6, txt: 'Vicerectora de Personal Acadèmic', tags: ['personal acadèmic', 'professorat', 'associats', 'becaris', 'Lluís Ferrer'] },
      { id: 1, sec: 247, txt: 'La primera dona rectora de la UAB', tags: ['dona', 'rectora', 'igualtat'] },
      { id: 2, sec: 364, txt: 'Programació acadèmica en el marc del Pla Bolonya', tags: ['planificació', 'titulacions', 'anglès', 'internacionalització', 'mobilitat', 'Pla Bolonya', 'Espai Europeu'] },
      { id: 3, sec: 441, txt: 'Noves titulacions en anglès', tags: ['titulacions', 'Pla Bolonya', 'graus', 'màsters', 'anglès', 'internacionalització', 'progrés'] },
      { id: 4, sec: 537, txt: 'Constitució del Consell d\'Estudiants', tags: ['consell d\'estudiants', 'participació', 'alumnat'] },
      { id: 5, sec: 555, txt: 'Modalitat de matrícula per via lenta', tags: ['matrícula', 'via lenta', 'estudiants', 'planificació', 'feina', 'temps parcial', 'igualtat'] },
      { id: 6, sec: 575, txt: 'Creació de les beques-salari Ítaca', tags: ['beques', 'Ítaca', 'estudiants', 'talent', 'igualtat'] },
      { id: 7, sec: 773, txt: 'UAB Campus d\'Excel·lència Internacional', tags: ['campus', 'excel·lència', 'internacionalització', 'Universitat de Corea', 'recerca', 'Ortelius', 'B-30', 'B30', 'coneixement', 'innovació'] },
      { id: 8, sec: 1112, txt: 'Noves facultats', tags: ['noves facultats', 'enginyeria', 'economia', 'empresa', 'Pla Bolonya', 'progrés', 'campus'] },
      { id: 9, sec: 1137, txt: 'Nous centres de recerca', tags: ['centres', 'recerca', 'projecte Melissa', 'CRAG', 'sincrotró Alba', 'Ortelius', 'internacionalització', 'progrés', 'campus'] },
      { id: 10, sec: 1295, txt: 'Relacions amb Àsia i Amèrica Llatina', tags: ['internacionalització', 'recerca', 'titulacions', 'Àsia', 'Corea', 'Amèrica Llatina', 'Lluís Ferrer'] },
      { id: 11, sec: 1362, txt: 'Crisi financera i retallades', tags: ['crisi financera', 'finançament', 'retallades', 'pressupost'] },
      { id: 12, sec: 1558, txt: 'Protestes estudiantils', tags: ['estudiants', 'protestes', 'mobilitzacions', 'vaga', 'campus'] },
      { id: 13, sec: 1595, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rectora', 'crisi financera'] },
      { id: 14, sec: 1836, txt: 'L\'anècdota: el nomenament com a vicerectora', tags: ['anècdota', 'records', 'Lluís Ferrer'] },
      { id: 15, sec: 1932, txt: 'Objectiu prioritari: tenir el millor professorat', tags: ['professorat', 'personal acadèmic', 'qualitat', 'talent', 'Ripoll'] }]
  },
  {
    id: 'sancho',
    nom: 'Ferran',
    cognoms: 'Sancho Pifarré',
    anys: [2012, 2016],
    yt: 'caFYiS66wVc',
    events:
      [{ id: 0, sec: 6, txt: 'Primer rector alumni de la UAB', tags: ['rector', 'alumni', 'exalumne'] },
      { id: 1, sec: 31, txt: 'D\'aspirant a periodista a estudiant d\'economia', tags: ['anècdota', 'records', 'periodisme', 'economia'] },
      { id: 2, sec: 145, txt: 'Vicerector durant el mandat de Carles Solà', tags: ['vicerector', 'Carles Solà'] },
      { id: 3, sec: 209, txt: 'Noves titulacions', tags: ['titulacions', 'graus', 'innovació', 'progrés'] },
      { id: 4, sec: 329, txt: 'Impuls a la formació en anglès', tags: ['formació', 'anglès'] },
      { id: 5, sec: 382, txt: 'L\'aposta pels MOOC amb la plataforma Coursera', tags: ['cursos online', 'formació', 'Coursera', 'coneixement', 'participació'] },
      { id: 6, sec: 457, txt: 'El programa UAB Emprèn', tags: ['UAB Emprèn', 'emprenedoria', 'coneixement', 'campus'] },
      { id: 7, sec: 512, txt: 'El Projecte B30', tags: ['Projecte B30', 'Àmbit 30', 'recerca', 'innovació', 'campus'] },
      { id: 8, sec: 573, txt: 'Integració a la YERUN', tags: ['YERUN', 'universitats', 'Europa', 'recerca', 'qualitat'] },
      { id: 9, sec: 678, txt: 'Altres iniciatives d\'internacionalització', tags: ['internacionalització', 'COFUND', 'recursos', 'talent'] },
      { id: 10, sec: 744, txt: 'Model de dedicació variable del PDI', tags: ['dedicació variable', 'PDI', 'docència', 'recerca', 'Wert', 'condicions laborals'] },
      { id: 11, sec: 881, txt: 'Crisi financera i retallades', tags: ['retallades', 'pressupost', 'crisi financera', 'finançament'] },
      { id: 12, sec: 959, txt: 'La polèmica taxa de reposició d\'efectius', tags: ['taxa de reposició', 'places', 'personal', 'condicions laborals', 'marc legal'] },
      { id: 13, sec: 1111, txt: 'Manca de relleu generacional', tags: ['relleu generacional', 'envelliment', 'jubilació', 'personal', 'condicions laborals'] },
      { id: 14, sec: 1142, txt: 'Mesures per pal·liar la precarització del personal', tags: ['mesures', 'precarització', 'personal', 'condicions laborals'] },
      { id: 15, sec: 1208, txt: 'Creació del programa de beques Finestreta', tags: ['beques', 'Finestreta', 'ajudes', 'igualtat'] },
      { id: 16, sec: 1278, txt: 'Beques Equitat i augment del 66% en les taxes', tags: ['beques', 'Equitat', 'taxes', 'ajudes', 'igualtat', 'marc legal'] },
      { id: 17, sec: 1358, txt: 'Protestes estudiantils', tags: ['protestes', 'estudiants', 'mobilitzacions', 'vaga', 'campus'] },
      { id: 18, sec: 1409, txt: 'Ocupació del rectorat', tags: ['ocupació', 'rectorat', 'protestes', 'mobilitzacions', 'vaga', 'estudiants', 'campus'] },
      { id: 19, sec: 1491, txt: 'Conseqüències de la crisi financera per a la recerca', tags: ['crisi financera', 'retallades', 'finançament', 'pressupost', 'recerca'] },
      { id: 20, sec: 1605, txt: 'Èxit de la recerca malgrat les adversitats', tags: ['recerca', 'talent', 'èxit', 'adversitats'] },
      { id: 21, sec: 1703, txt: 'Noves instal·lacions per a recerca', tags: ['recerca', 'inauguració', 'ICTA', 'campus', 'progrés'] },
      { id: 22, sec: 1917, txt: 'Campus Saludable i Sostenible', tags: ['campus', 'medi ambient', 'sostenibilitat'] },
      { id: 23, sec: 1986, txt: 'Recuperació de la Festa Major', tags: ['Festa Major', 'campus', 'cultura'] },
      { id: 24, sec: 2054, txt: 'Implantació del vot electrònic a les eleccions', tags: ['eleccions', 'rectorat', 'vot electrònic', 'participació'] },
      { id: 25, sec: 2180, txt: 'Els doctors \'honoris causa\'', tags: ['doctors', 'honoris causa', 'reconeixement', 'talent'] },
      { id: 26, sec: 2321, txt: 'Relació amb la Universitat de Corea', tags: ['anècdota', 'records', 'Universitat de Corea', 'internacionalització'] },
      { id: 27, sec: 2382, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rector', 'Sancho'] }]
  },{
  id: 'arboix',
  nom: 'Margarita',
  cognoms: 'Arboix Arzo',
  anys: [2016, 2020],
  yt: 'h9l0gnPU7Xo',
  events:
  [{ id: 0, sec: 6, txt: 'Incorporació a la UAB', tags: ['records', 'PNN', 'vaga', 'agència pública', 'govern'] },
    { id: 1, sec: 288, txt: 'Farmacòloga veterinària', tags: ['veterinària', 'facultats', 'farmacologia', 'serveis cientificotècnics'] },
    { id: 2, sec: 571, txt: 'Degana de la Facultat de Veterinària', tags: ['veterinària', 'facultats', 'degana', 'claustre', 'avaluació externa', 'finançament', 'govern', 'jocs olímpics'] },
    { id: 3, sec: 855, txt: 'Experiències a les administracions públiques', tags: ['govern', 'agència pública', 'ministeri', 'Europa', 'gestió'] },
    { id: 4, sec: 1206, txt: 'Candidatura renovadora', tags: ['òrgans de govern', 'plantilles', 'estabilització', 'estudiants', 'multidisciplinarietat', 'finançament', 'lletres', 'ciències', 'comunicació'] },
    { id: 5, sec: 1758, txt: 'Noves titulacions', tags: ['titulacions', 'multidisciplinarietat', 'gènere', 'ocupabilitat', 'lletres', 'ciències', 'enginyeria', 'IA', 'A4U'] },
    { id: 6, sec: 2096, txt: '50è aniversari de la UAB', tags: ['cinquantenari', 'rankings', 'mitjans'] },
    { id: 7, sec: 2250, txt: 'Activitats pel cinquantenari', tags: ['honoris causa', 'llegat', 'memòria', 'orígens', 'Sant Cugat', 'Sant Pau', 'medicina', 'Barcelona', 'territori'] },
    { id: 8, sec: 2638, txt: 'Fites en recerca', tags: ['recerca', 'talent', 'personal', 'PDI', 'finançament', 'transferència', 'burocràcia', 'Parc de Recerca UAB'] },
    { id: 9, sec: 2981, txt: 'Campanyes de sensibilització', tags: ['igualtat', 'estudiants', 'sostenibilitat', 'campus', 'mobilitat', 'solidaritat'] },
    { id: 10, sec: 3530, txt: 'Mobilitzacions pel procés', tags: ['protestes', 'mobilitzacions', 'vaga', 'política','procés', 'judici'] },
    { id: 11, sec: 3947, txt: 'Clam per un finançament millor', tags: ['finançament', 'pressupost', 'economia', 'política', 'Generalitat', 'campus'] },
    { id: 12, sec: 4216, txt: 'Relació amb les altres universitats', tags: ['política', 'Hospital del Mar'] },
    { id: 13, sec: 4396, txt: 'Segona dona rectora', tags: ['dones', 'feminisme', 'igualtat', 'conciliació', 'sostre de vidre'] },
    { id: 14, sec: 4616, txt: 'Nou pla director', tags: ['comunitat', 'política', 'participació'] },
    { id: 15, sec: 4829, txt: 'ECIU University', tags: ['internacionalització', 'Europa', 'innovació', 'estudis', 'estudiants'] },
    { id: 16, sec: 5060, txt: 'Premi nacional per a UAB Divulga', tags: ['comunicació', 'divulgació', 'premis', 'PAS'] },
    { id: 17, sec: 5174, txt: 'Pandèmia de COVID-19', tags: ['campus', 'comunitat', 'salut', 'recerca', 'estudiants'] },
    { id: 18, sec: 5615, txt: 'Balanç del mandat', tags: ['balanç', 'mandat', 'rectora', 'Arboix', 'igualtat', 'metoo', 'assetjament'] },
    { id: 19, sec: 5766, txt: 'Experiència com a rectora', tags: ['balanç', 'mandat', 'rectora', 'Arboix', 'transferència', 'mobilitat', 'recerca', 'transports', 'impacte social'] },
    { id: 20, sec: 6021, txt: 'Anècdotes', tags: ['assetjament', 'metoo', 'igualtat'] }]
}]

}

function videos(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_VIDEO:
      return {
        ...state,
        currentVideo: payload
      };
    default:
      return state;
  }
}

export default videos;
