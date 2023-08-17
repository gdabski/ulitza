import * as R from "ramda"

// Streep affixes for this street; use the regex for the given `country`
export const stripAffixes = country =>
  R.compose(R.trim, R.replace(affixes[country], ""))

const affixes = {
  afghanistan:                     / (street|road)$/i,
  albania:                         /^(rruga|bulevardi|autostrada) (at |e |)/i,
  algeria:                         /^(شارع|avenue|rue|boulevard|route|نهج) (رقم |du |de la |de l'|des |de |d' |)/i,
  "american-oceania":              /^(pale) | (street|road|drive|way|loop|court|place|avenue|st)$/ig,
  andorra:                         /^(carretera|avinguda) (del |d'|)/i,
  angola:                          /^(avenida|av.|rua|estrada|via) (dos |do |da |de |expressa |)/i,
  argentina:                       /^(([0-9]+ - |)avenida|boulevard|bulevar|boulevar|general|nacional|peatonal|avda.|autopista|pasaje|vuelta|camino|autovía|diagonal|paseo|av.) (general|del |de |[0-9]+ - |)|^ruta (provincial|nacional) [0-9]*|^calle [0-9]+.*| (sur|norte)$| \/ .*$/ig,
  armenia:                         /^((փողոց |)[0-9]*-(րդ|ին)) |(փողոց|խճուղի|պողոտա|st)$/ig,
  australia:                       /^(south|east|west|north) | (street|highway|road|parade|avenue|crescent|terrace|place|court|close|way|creek|head|drive)$/i,
  austria:                         /^(am|im) |^((an|auf|unterer|untere|unter|oberer|oberes|obere) (der |den |dem |))|((-|)(straße|gasse|platz|weg|allee| haupt))$/i,
  azerbaijan:                      /^(улица) | (prospekti|küçəsi|şossesi|küç.|улица|yolu|pr.|pr)$/i,
  azores:                          /^(estrada|rua|caminho|largo|avenida|praça) (de |dos |do |das |da |)/i,
  bangladesh:                      /^(road) | (road|highway)$/i,
  belarus:                         /^(вуліца|плошча|завулак) |^[1-9]-(я|й|го|е|ы|і) | (вуліца|завулак|вуліца)$/i,
  belgium:                         /^((rue|place|avenue|chaussée|route|chemin|oude|allée) (de la |de l'|du |des |de |))|((-|)(straat|straße|plein|dreef|laan|weg|steenweg|steen|weg|baan))$/i,
  belize:                          / (highway|road|street|drive|highway|lane|boulevard|hill|avenue)( south| north| east| west|)$/i,
  benin:                           /^(boulevard|rue) (de la |des |de l'|)/i,
  bolivia:                         /^(calle|avenida|camino|carretera) (de las |de la |del |a |)|^RN[0-9]+.*|^Doble Vía .*/i,
  "bosnia-herzegovina":            /^(ulica|trg|bulevar) /i,
  botswana:                        / (avenue|street|road|crescent|drive|rd)$/i,
  brazil:                          /^(avenida|av.|rua|rodovia|estrada|praça|travessa|largo|rio) (das |dos |do |de |da |federal |)|[a-z][a-z]-[0-9]+.*| (do Sul)/ig,
  "burkina-faso":                  /^(rue|avenue|route|boulevard) (du |des |de la |de l'|)/i,
  burundi:                         /^(rue|avenue|route|boulevard|bd.|chausseée|chausée|chaussée|blvd) (de la |de l'|des |du |de |)/i,
  bulgaria:                        /^(бул.|бул|Св. Св.|Св.|ул.|пл.)| (шосе|път)/i,
  cambodia:                        /^street [0-9]*/i,
  cameroon:                        /^(rue|route|boulevard) (du |de la |de |)| (avenue|street)$/i,
  canada:                          /^([0-9]+(e|er|ere|th|) |)(rue|highway|boulevard|avenue|autoroute|county road|chemin|rang|old|route|north|south|east|west|montée|lac-|lac|bay) (de la |des |de l'|du |de |)| (street|avenue|highway|way|road|boulevard|line|rang|ouest|est|north|nord|south|sud|rd.|rd|drive|SE|NW|NE|SW|station|lane|place|run|crescent|court|perimeter|lake|river|creek)( north| south| east| west| SE| SW| NW| NE|)$|^[a-z][a-z]-[0-9]+.*|^[0-9]+.*|^township .*|^range road .*| (.*[0-9]+)$/ig,
  "canary-islands":                /^(carretera|ctra.|avenida|paseo|calle|camino|plaza)( general|) (las |la |del |de los |los |de |el |)| (norte|sur)/ig,
  chad:                            /^(avenue|rue|av) |(نهج|شارع|طريق)/i,
  chile:                           /^(gran |)(avenida|pasaje|almirante|diagonal|camino|puerto|lago|isla|volcán|alcalde|calle|ruta|las|los) (central |alcalde |[0-9]+ |)|^(cruce|corral) .*| (sur|norte)$/ig,
  china:                           /(路|道|北|南|东|街)$/i,
  "congo-brazzaville":             /^(avenue|boulevard|rue|impasse|route|av.) (de la |de l'|des |de |du |le |)/i,
  colombia:                        /^avenida carrera |^(carrera|carretera|calle|avenida|transversal|manzana|calle|diagonal|vía) (de los |de la |del |[0-9]*)| (sur|bis|norte)$/ig,
  "congo-democratic-republic":     /^(avenue|boulevard|avenue|rue|route) (du |de la |de l'|des |de |l' |)/i,
  "costa-rica": /^(avenida|calle|este|paseo|rincon|ruta|boulevard|carretera|autopista|radial|corredor|vía|diagonal|nacional|transversal) (de las |de los |de la |la |las |del |(interamericana|pacífica|nacional|[0-9]*) |)| .* [0-9]+$/i,
  croatia:                         /^(ulica|trg|dr.|obala|cesta|put|bana) (kralja |dr. |bana |kneza |)|^(kralja|bana|kneza) | (ulica|cesta|trg)$/i,
  "czech-republic":                /^(náměstí|nám.|za|U|V|K|nad|ke|pod|třída|na|ve) |( náměstí|nám.|ská| třída| alej| sady)$|((-|)(straße))$/i,
  cyprus:                          / (avenue|street|ave.|caddesi|bulvarı)$/i,
  cuba:                            /^(calle|avenida|carretera|boulevard|calzada|vía) (de las |de los |de la |del |de |a |)| (avenida)$/i,
  denmark:                         /^(gammel|vester|vestre|Østre|Øster|nordre|Nørre)|(vejen|gårdsvej|vej|gade|vænget|vang| alle| lande| strand|have|høj|parken|mose|holm|gårds|gård|minde| allé| boulevard|borg)$/i,
  ecuador:                         /^(avenida|calle|vía|via|troncal|isla|boulevard|bulevar|ruta|av.|av) (de las |de la |de los |del |a |)/i,
  egypt:                           /^(نهج|شارع|طريق)/i,
  "el-salvador":                   /^([0-9]*(a |ª | |)(calle|carretera|avenida|boulevard|pasaje|pje.|pje|av.) (el |del |a |))| avenida| calle|(norte|poniente|pte|oriente)$/ig,  
  estonia:                         / (tee|mnt|põik|pst|allee)$/i,
  ethiopia:                        / (road|street|avenue|ave|av|st.)$/i,
  "faroe-islands":                 /^(Í|Undir|Við) |(vegur|gøta)$/i,
  fiji:                            / (road|street|highway|bay|avenue|place)$/i,
  finland:                         /(sentie|senkatu|tie|katu|sen|kuja|mäen|lan|vanha)$/i,
  france:                          /^(rue|place|avenue|impasse|route|chemin|allée|boulevard|cours|chaussée|faubourg|quai|esplanade|square|traverse|clos|parvis) (du |des |de la |de l'|d'|de |)| rue$|^le /i,
  "gcc-states":                    /^(نهج|شارع|طريق|street) |(جادة|road|street)$|[1-9]/ig,
  georgia:                         /^(улица) | (ქუჩა|გამზირი|улица|st)$/i,
  germany:                         /((-|)(straße|weg|platz|allee|gasse|chaussee|promenade|park|hain|höhe|garten))$|( ring|-ring| siedlung|-siedlung|-hof)$|^(am|im) |^((an|auf|unterer|untere|unter|oberer|oberes|obere|in|alter|alte|zum|zur|zu|in|im) (der |den |dem |))|^(straße (der |des |zum |am |))/ig,
  ghana:                           / (road|ridge|region|avenue|lane|street|close|drive|crescent)$/i,
  "great-britain":                 /^(the|west|western|north|east|eastern|south)|('s |)(street|road|lane|avenue|hill|way|place|park|square|drive|crescent|court|gardens|terrace|grove|close|walk|end|fields|view|bridge|cottages|parade|mews|hall|side|north|east|west|south|high|gate)$/ig,
  greece:                          /^(Λεωφόρος) /i,
  greenland:                       / (aqqutaa|aqquserna|aqq)$/i,
  guatemala:                       /^([0-9]*(a | |)(calle|carretera|avenida|calzada|bulevar|boulevard)( de los | de la | del | a |)( zona[1-9]*|))| avenida| calle|[0-9]*$/i,
  "guernsey-jersey":               /^(rue|clos|havre) (du |de la |de l'|des |de |)| (road|street|place)$/i,
  guinea:                          /^(autoroute|route|rue) (de la |de |)| (street|road)$/i,
  guyana:                          / (road|highway|street|drive|avenue)$/i,
  "haiti-and-domrep":              /^(avenida|calle|carretera|autopista|boulevard|route|paseo|rue|ave.|ave|av.|av) (de las |de la |de los |de l'|del |des |de |las |los |)/i,
  honduras:                        /^([0-9]*(a |ra |ma |na | |)(calle|carretera|boulevard|bulevar|boulevar|avenida|paseo|blv|ave.|av.|blvd.|blv.|blvd)( principal|)( de la | del |))/i,
  hungary:                         /(utca|körút|sétány|köz|út|útja|tere|tér|lakótelep|sor|liget)$/i,
  iceland:                         /(gata|vegur|braut)$/i,
  india:                           /^(main) | (road|highway|main|street|marg|nagar( road|))$/i,
  indonesia:                       /^(jalan|jl.)( raya| bypass| by pass|boulevard |bulevar |) /i,
  iran:                            /^(بلوار|خیابان|میدان|آیت|شهید)/i,
  iraq:                            /^(شارع|شەقامی|جادەیا|ڕێگای) | (boulevard|road|street)$/i,
  "ireland-and-northern-ireland":  /^(the) |('s|) (street|road|drive|avenue|square|hill|terrace|place|lane|view|close|park|grove|walk|court|cove|crescent)$|(view)$/i,
  italy:                           /^(viale|via|corso|piazzale|piazzetta|piazza|lungomare|autostrada|strada|traversa|largo|contrada|salita|vicolo|vico|monte|campo|borgo) (provinciale |statale |)([0-9]* |)(dell'|della |delle |dello |degli |del |dei |di |al |)| (sud|nord|vecchia|antica)$/ig,
  "isle-of-man":                   / (main |)(road|promenade|street|main|square|avenue|park)$/i,
  "israel-and-palestine":          /^(نهج|شارع|طريق|שדרות)/i,  
  "ivory-coast":                   /^(boulevard|avenue|rue|route) (de la |de l'|des |de |du |d'|)/i,
  jamaica:                         / (drive|road|avenue|street|boulevard|park|crescent|way|place|highway|close|blvd)$/i,
  jordan:                          /^(شارع الشهيد|شارع|الشارع)| (street|highway)$/i,
  kazakhstan:                      /^(улица|проспект|бульвар) | (улица|проспект)$/i,
  kenya:                           / (road|highway|avenue|bypass|street|drive|highway|lane|way)$/i,
  kosovo:                          /^(bulevardi|sheshi|rruga) (e |)/i,
  kyrgyzstan:                      /^(улица) | (улица|проспект|көчөсү|переулок)$/i,
  laos:                            /^(rue|avenue) | (street|road|avenue)$/i,
  latvia:                          /^(mazā) | (iela|laukums|prospekts|līnija|g.|aleja|bulvāris)$/ig,
  lebanon:                         /^(شارع)/i,
  liberia:                         / (street|road|highway|boulevard|drive)$/i,
  libya:                           /^(الطريق|شارع)| (road)$/i,
  liechtenstein:                   /(-strasse|strasse|weg)$/i,
  lithuania:                       /^(Šv.) | ([1-9]+-(i|)oji g.)$| (skg.|tak.|pl.|pr.|al.|g.|a.|plento g.|plento|kelio g.|kelio|kel.|aklg.)$/ig,
  luxembourg:                      /^(rue|place|avenue|impasse|route|chemin|allée|boulevard|cours|montée) (du|des|de la|de l'|d'|de|)|^(an der|an de|am|um|op den|op der) |( rue|strooss|gaass| wee|wee)$|^le /i,
  macedonia:                       /^(Булевар|Улица) /i,
  madagascar:                      /^(rue|avenue|route|làlana) (de la |de l'|des |de |du |d'|)/i,
  "malaysia-singapore-brunei":     /^(jalan) | (street( [0-9]*|)$)/i,
  malawi:                          / (road|avenue|highway|drive|street)$/i,
  mali:                            /^(rue|boulevard|bvd|carre|carrée) (de la |de l'|des |de |du |d'|)/i,
  malta:                           /^(triq|rue) (d'|il-|)| (street)$/i,
  mexico:                          /^(calle|avenida|boulevard|carretera|periférico|carr.|vía|calzada| sur|av.|av|blvd.|blvd|paseo|prolongación|plaza|plan) (Vía |via |)(de los|de las|de la|del|de|a |)|^(de los|de las|de la|del|de) | (sur|oriente|poniente)$/ig,
  moldova:                         /^(strada|stradela|aleea|bulevardul|calea|drumul|piața|intrarea|șoseaua|улица|переулок|ул.|str.) [0-9]*|(переулок|улица)$/i,
  monaco:                          /^(boulevard|avenue|rue|chemin|quai|place|allée|promenade) (de la |des |de l'|de |du |d'|)/i,
  mongolia:                        /( зам| өргөн чөлөө| гудамж|'s street)$/i,
  montenegro:                      /^(bulevar|ulica) /i,
  morocco:                         /^(avenue|route|rue|boulevard|avenida|bd|place|chemin|شارع) (des |de la |de l'|du |de |d'|)|(شارع)$/i,
  mozambique:                      /^(avenida|av.|estrada|rua|praça) (das |des |de |dos |do |da |)/i,
  myanmar:                         /^(ဗိုလ်ချုပ်လမ်း|jalan|jl.) (by pass |bypass |)|( road| street|လမ်း| rd| boulevard)$/ig,
  namibia:                         / (street|avenue|road|square|highway|drive|st)$/i,
  nepal:                           / (highway|road|राज्मार्ग्|rajmarg)$/i,
  netherlands:                     /^(oude|korte|het) |(-| |)(straat|weg|laan|plein|kade|pad|dijk|park|plantsoen|singel|hof|zuid)$/i,
  "new-caledonia":                 /^(rue|route|avenue|voie|promenade|impasse|allée) (du |des |de la |de l'|de |d'|territoriale |)/i,
  "new-zealand":                   / (road|street|avenue|lane|place|drive)$/i,
  nicaragua:                       /^[1-9]*(a | |)(carretera|avenida|calle|pista|paseo|plazza) (de la |de los |del |los |la |a |)| (street|avenue)$/i,
  nigeria:                         / (way|road|crescent|avenue|street|close|drive|ave|str|st)$/i,
  norway:                          /^(gamle|nedre|Øvre)|(veien|vegen|gata|gaten| gate| vei| veg)$/i,
  pakistan:                        /^(street) | (road|highway|روڈ)$/i,
  panama:                          /^(carretera|avenida|calle|vía|boulevard|boulevar|bulevar|carr.|via) ([0-9]+.* |)(de la |)|( sur)$/ig,
  "papua-new-guinea":              /^(old) | (drive|avenue|road|street|highway|place|crescent|circuit|flyover)$/ig,
  paraguay:                        /^(avenida|ruta nacional|ruta|general|rua|calle|supercarretera) (general |)|^(Colector .*)/i,
  peru:                            /^(avenida|jirón|calle|prolongación|malecón|pasaje|paseo) (almirante |mariscal |las |los |de la |de |)/i,
  philippines:                     / (national |)(extension|highway|avenue|street|road|boulevard|drive|st.)$|^(purok) |^(barangay|road [0-9]+) .*/ig,
  poland:                          /^(plac|aleja|aleje|trakt|przy|osiedle|rynek|stary|pod|na) |(ego|ski|-Straße| Straße)$/i,
  "polynesie-francaise":           /^(rue|boulevard|avenue|route|chemin) (du |de |)| (road)$/i,
  portugal:                        /^(rua|largo|avenida|travessa|estrada|praça|praceta|av.|caminho|vale|quinta|bairpropParque) (caminho |)(de |dos |do |das |da |)/i,
  romania:                         /^(strada|aleea|bulevardul|calea|drumul|piața|piata|intrarea|șoseaua|str.|splaiul|prelungirea)( lui |)|( utca)$/i,
  russia:                          /^(улица|переулок|проезд|проспект|Площадь|бульвар|Большая|(улица |дорога |аллея )([1-9])-(я|й|го|е) )|^[0-9]+-.*|(ская улица|ский переулок|ский проезд|улица|переулок|проезд|проспект|Площадь| бульвар| шоссе| тракт)$/ig,
  scotland:                        / (street|road)$/i,
  "senegal-and-gambia":            /^(rue|route|avenue|boulevard|quai) (des |de la |de |la |du |)| (road|highway|street|avenue)$|[a-z][a-z](-| )[0-9]+$/ig,
  serbia:                          /^(Трг|Булевар|Алеја|Пут|Парк) | (пут|друм|ulica|трг|булевар)$/i,
  slovakia:                        /^(námestie|pri|pod|nad|na|za|nábrežie) |(ova| námestie| rad| utca| cesta)$/i,
  slovenia:                        /^(ulica|trg|pod|cesta|na) | (ulica|cesta|odreda|pot|trg|vrh)$/ig,
  "south-africa":                  /1st|2nd|3rd|4th|5th|6th|7th|8th|11th|12th| (road|street|drive|close|square|avenue|boulevard|crescent|straat|lane|st)( east| north| west| south|)$/ig,
  "south-korea":                   /(대로)$/i,  
  sudan:                           /^(نهج|شارع|طريق)| (street|road|avenue)$/i,
  spain:                           /^((kale|plaza|plaça|avenida|camino|camiño|camí|calle|carrer|carretera|rúa|autovía|barrio|avinguda|ronda|travesía|paseo|estrada|cuesta|praza|passeig) (de la |de las |de los |de les |de ses |dels |de l'|del |el |da |dos |do |des |de |la |las |d'|))|(kalea| plaza|(kalea|)\/.*)$/ig,
  "sri-lanka":                     / (road|street|mawatha)$/i,
  sudan:                           / (road|highway|street|avenue)$/i,
  suriname:                        /(straat|weg)$/i,
  syria:                           /^(شارع)/i,
  sweden:                          /^(Östra|norra|västra|gamla) |(gatan|vägen| väg|stigen|torget|torg| esplanaden)$/i,
  switzerland:                     /^(am|im|untere) |^(via (alla|ai|del|da|alle|))|(^(rue|ruelle|chemin|place|route|impasse|avenue) (du |de la |de l'|de |des |))|(strasse|weg)$/i,
  taiwan:                          /(路|街)$/i,
  tajikistan:                      /^(кӯчаи|кучаи|хиёбони) /i,
  tanzania:                        / (road|street|avenue|st)$/i,
  thailand:                        /^(ถนน|moo)| (road)$/i,
  tunisia:                         /نهج|شارع|^(avenue|route|rue|boulevard) (de la |des |de |du |)/i,
  turkey:                          /^([0-9]+.*)|(yolu |)(caddesi|bulvarı|bulv.|blv.|blv|sokağı|sokak|cd.|cd|cad.|yolu|փողոց|խճուղի)$/i,
  turkmenistan:                    / (köçesi|şaýoly|ýoly)$/i,
  uganda:                          /^(jinja|mbale) | (road|street|highway|jinja|mbale|avenue|crescent|close|lane|boulevard)$/i,
  ukraine:                         /^(вулиця|улица|проспект) | (вулиця|улица|бульвар|провулок|проспект|шоссе)$/i,
  uruguay:                         /^(calle|avenida|camino|general|bulevar|rambla) (de los |los |del |general|)|^(las|los|general)|^INE .*|^ruta [0-9]*( |)(perimetral|interbalnearia|)|^ute .+|^oficial [0-9]+/i,
  us:                              /^(east|west|north|south|via)|([0-9]+.*)|^((avenida|paseo|calle|rue) (de la|de las|de l'|del|de|du|la|))|(street|road|avenue|drive|lane|ridge|court| hill| highway| way| boulevard| view| place|side| circle| trails| trail| rd| parkway)( east| west| north| south|)$/ig,
  uzbekistan:                      /( (shoh |)(ko'chasi|ko'shesi|ko‘chasi|shoh|maydoni))$/ig,
  venezuela:                       /^(calle|avenida|carretera|carrera|av.|intercomunal|autopista) ([0-9]* |intercomunal |principal |)(de los |los |de |)|^([0-9]*(a |ª | |)(transversal|av.) (de los| los| de |))/i,
  vietnam:                         /^(Đường|Phố|Cầu) | [0-9]+$/ig,
  yemen:                           /^(شارع|الشارع)/i,
  zambia:                          / (road|street|avenue|boulevard)$/i,
  zimbabwe:                        / (street|road|avenue|drive|boulevard|close|way|rd)$/i
}
