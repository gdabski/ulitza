import * as R from "ramda"

// Streep affixes for this street; use the regex for the given `country`
export const stripAffixes = country =>
  R.compose(R.trim, R.replace(affixes[country], ""))

const affixes = {
  albania                : /^(rruga|bulevardi|autostrada) (at |e |)/i,
  algeria                : /^(شارع|avenue|rue|boulevard|route|نهج) (رقم |du |de la |de l'|des |de |d' |)/i,
  andorra                : /^(carretera|avinguda) (del |d'|)/i,
  angola                 : /^(avenida|rua|estrada)/i,
  argentina              : /^(([0-9]+ - |)avenida|boulevard|bulevar|boulevar|general|nacional|peatonal|avda.|autopista|pasaje|vuelta|camino|autovía|diagonal|paseo|av.) (general|del |de |[0-9]+ - |)|^ruta (provincial|nacional) [0-9]*|^calle [0-9]+.*| (sur|norte)$| \/ .*$/ig,
  armenia                : /^((փողոց |)[0-9]*-(րդ|ին)) |(փողոց|խճուղի|պողոտա|st)$/ig,
  australia              : /^(south|east|west|north) | (street|highway|road|parade|avenue|crescent|terrace|place|court|close|way|creek|head|drive)$/i,
  austria                : /^(am|im) |^((an|auf|unterer|untere|unter|oberer|oberes|obere) (der |den |dem |))|((-|)(straße|gasse|platz|weg|allee| haupt))$/i,
  azerbaijan             : / (prospekti|küçəsi|şossesi|küç.)$/i,
  azores                 : /^(estrada|rua|caminho|largo|avenida|praça) (de |dos |do |das |da |)/i,
  bangladesh             : /^(road) | (road|highway)$/i,
  belarus                : /^(вуліца|плошча|завулак) |^[1-9]-(я|й|го|е|ы|і) | (вуліца|завулак|вуліца)$/i,
  belgium                : /^((rue|place|avenue|chaussée|route|chemin|oude|allée) (de la |de l'|du |des |de |))|((-|)(straat|straße|plein|dreef|laan|weg|steenweg|steen|weg|baan))$/i,
  belize                 : / (highway|road|street|drive)$/i,
  benin                  : /^(boulevard|rue) (de la |des |de l'|)/i,
  bolivia                : /^(calle|avenida|camino|carretera) (de las |de la |del |a |)|^RN[0-9]+.*|^Doble Vía .*/i,
  "bosnia-herzegovina"   : /^(ulica|trg|bulevar) /i,
  botswana               : / (street|road|rd)$/i,
  brazil                 : /^(avenida|av.|rua|rodovia|estrada|praça|travessa|largo|rio) (das |dos |do |de |da |federal |)|[a-z][a-z]-[0-9]+.*| (do Sul)/ig,
  "burkina-faso"         : /^(rue|avenue|route|boulevard) (du |des |de la |de l'|)/i,
  burundi                : /^(avenue|route|boulevard|chausseée|chausée|chaussée|blvd) (de la |de l'|de |du |des |de |)/i,
  bulgaria               : /^(бул.|бул|Св. Св.|Св.|ул.|пл.)| (шосе|път)/i,
  cambodia               : /^street [0-9]*/i,
  cameroon               : /^(rue|route|boulevard) (de |du |de la |)| (avenue|street)$/i,
  canada                 : /^([0-9]+(e|er|ere|th|) |)(rue|highway|boulevard|avenue|autoroute|county road|chemin|rang|old|route|north|south|east|west|montée|lac-|lac|bay) (de la |des |de l'|du |de |)| (street|avenue|highway|way|road|boulevard|line|rang|ouest|est|north|nord|south|sud|rd.|rd|drive|SE|NW|NE|SW|station|lane|place|run|crescent|court|perimeter|lake|river|creek)( north| south| east| west| SE| SW| NW| NE|)$|^[a-z][a-z]-[0-9]+.*|^[0-9]+.*|^township .*|^range road .*| (.*[0-9]+)$/ig,
  "canary-islands"       : /^(carretera|avenida|paseo|calle)( general|) (las |la |del |de |los |)| (norte|sur)/ig,
  chile                  : /^(gran |)(avenida|pasaje|almirante|diagonal|camino|puerto|lago|isla|volcán|alcalde|calle|ruta|las|los) (central |alcalde |[0-9]+ |)|^(cruce|corral) .*| (sur|norte)$/ig,
  china                  : /(路|道|北|南|东|街)$/i,
  colombia               : /^avenida carrera |^(carrera|calle|avenida|transversal|calle|vía) ([0-9]*)| (sur|bis|norte)$/ig,
  "congo-democratic-republic": /^(avenue|boulevard|avenue|rue|route) (du |de la |de l'|des |)/i,
  "costa-rica"           : /^(calle|avenida|carretera|autopista|boulevard|radial|corredor) (interamericana|pacífica|)|.* [0-9]+$|^(avenida|calle|este|paseo|rincon|ruta|boulevard (de las |de la |la |las |del ))/i,
  croatia                : /^(ulica|trg|dr.|obala|cesta|put|bana) (kralja |dr. |bana |kneza |)|^(kralja|bana|kneza) | (ulica|cesta|trg)$/i,
  "czech-republic"       : /^(náměstí|nám.|za|U|V|K|nad|ke|pod|třída|na|ve) |( náměstí|nám.|ská| třída| alej| sady)$|((-|)(straße))$/i,
  cyprus                 : / (avenue|street|ave.)$/i,
  cuba                   : /^(calle|avenida|carretera|calzada) (de las |de los |de la |del |de |)| (avenida)$/i,
  denmark                : /^(gammel|vester|vestre|Østre|Øster|nordre|Nørre)|(vejen|gårdsvej|vej|gade|vænget|vang| alle| lande| strand|have|høj|parken|mose|holm|gårds|gård|minde| allé| boulevard|borg)$/i,
  ecuador                : /^(avenida|calle|vía|via|troncal) (de la |de las |del |a |)/i,
  egypt                  : /^(نهج|شارع|طريق)/i,
  "el-salvador"          : /^([0-9]*(a |ª | |)(calle|carretera|avenida|boulevard|pasaje|pje.|pje) (el |del |a |))| avenida| calle|(norte|poniente|pte|oriente)$/ig,  
  estonia                : / (tee|mnt|põik|pst|allee)$/i,
  ethiopia               : / (road)$/i,
  "faroe-islands"        : /^(Í|Undir|Við) |(vegur|gøta)$/i,
  finland                : /(sentie|senkatu|tie|katu|sen|kuja|mäen|lan|vanha)$/i,
  france                 : /^(rue|place|avenue|impasse|route|chemin|allée|boulevard|cours|chaussée|faubourg|quai|esplanade|square|traverse|clos|parvis) (du |des |de la |de l'|d'|de |)| rue$|^le /i,
  "gcc-states"           : /^(نهج|شارع|طريق|street) |(جادة|road|street)$|[1-9]/ig,
  georgia                : /^(улица) | (ქუჩა|გამზირი|улица|st)$/i,
  germany                : /((-|)(straße|weg|platz|allee|gasse|chaussee|promenade|park|hain|höhe|garten))$|( ring|-ring| siedlung|-siedlung|-hof)$|^(am|im) |^((an|auf|unterer|untere|unter|oberer|oberes|obere|in|alter|alte|zum|zur|zu|in|im) (der |den |dem |))|^(straße (der |des |zum |am |))/ig,
  ghana                  : / (road|ridge|region)$/i,
  "great-britain"        : /^(the|west|western|north|east|eastern|south)|('s |)(street|road|lane|avenue|hill|way|place|park|square|drive|crescent|court|gardens|terrace|grove|close|walk|end|fields|view|bridge|cottages|parade|mews|hall|side|north|east|west|south|high|gate)$/ig,
  greece                 : /^(Λεωφόρος) /i,
  guatemala              : /^([0-9]*(a | |)(calle|carretera|avenida|calzada)( a |)( zona[1-9]*|))| avenida| calle|[0-9]*$/i,
  guyana                 : / (road|highway|street|drive)$/i,
  "haiti-and-domrep"     : /^(avenida|calle|carretera|autopista|boulevard|rue) /i,
  honduras               : /^(calle|carretera (del |))/i,
  hungary                : /(utca|körút|sétány|köz|út|útja|tere|tér|lakótelep|sor|liget)$/i,
  iceland                : /(gata|vegur|braut)$/i,
  india                  : /^(main) | (road|highway|main|street|marg|nagar( road|))$/i,
  indonesia              : /^(jalan|jl.)( raya| bypass| by pass|boulevard |bulevar |) /i,
  iran                   : /^(بلوار|خیابان|میدان|آیت|شهید)/i,
  iraq                   : /^(شارع|شەقامی|جادەیا|ڕێگای) | (boulevard|road|street)$/i,
  "ireland-and-northern-ireland": /^(the) |('s|) (street|road|drive|avenue|square|hill|terrace|place|lane|view)$|(view)$/i,
  italy                  : /^(viale|via|corso|piazzale|piazzetta|piazza|lungomare|autostrada|strada|traversa|largo|contrada|salita|vicolo|vico|monte|campo|borgo) (provinciale |statale |)([0-9]* |)(dell'|della |delle |dello |degli |del |dei |di |al |)| (sud|nord|vecchia|antica)$/ig,
  "isle-of-man"          : / (road|promenade|street|main)$/i,
  "israel-and-palestine" : /^(نهج|شارع|طريق|שדרות)/i,  
  "ivory-coast"          : /^(boulevard|avenue|rue) (de la |des |de |du |du |)/i,
  jordan                 : /^(شارع الشهيد|شارع|الشارع)| (street|highway)$/i,
  kazakhstan             : /^(улица|проспект|бульвар) | (улица|проспект)$/i,
  kenya                  : / (road|highway|avenue|bypass)$/i,
  kosovo                 : /^(bulevardi|sheshi) /i,
  kyrgyzstan             : /^(улица) | (улица|проспект|көчөсү)$/i,
  laos                   : /^(rue) | (road)$/i,
  latvia                 : /^(mazā) | (iela|laukums|prospekts|līnija|g.|aleja|bulvāris)$/ig,
  lebanon                : /^(شارع)/i,
  libya                  : /^(الطريق|شارع)| (road)$/i,
  liechtenstein          : /(-strasse|strasse|weg)$/i,
  lithuania              : /^(Šv.) | ([1-9]+-(i|)oji g.)$| (skg.|tak.|pl.|pr.|al.|g.|a.|plento g.|plento|kelio g.|kelio|kel.|aklg.)$/ig,
  luxembourg             : /^(rue|place|avenue|impasse|route|chemin|allée|boulevard|cours) (du|des|de la|de l'|d'|de|)|^(an der|an de|am|um|op den|op der) |( rue|strooss|gaass| wee|wee)$|^le /i,
  macedonia              : /^(Булевар|Улица) /i,
  "malaysia-singapore-brunei" : /^(jalan) | (street( [0-9]*|)$)/i,
  malta                  : /^(triq) (il-|)/i,
  mexico                 : /^(calle|avenida|boulevard|carretera|periférico|carr.|vía|calzada| sur|av.|av|blvd.|blvd|paseo|prolongación|plaza|plan) (Vía |via |)(de los|de las|de la|del|de|a |)|^(de los|de las|de la|del|de) | (sur|oriente|poniente)$/ig,
  moldova                : /^(strada|stradela|aleea|bulevardul|calea|drumul|piața|intrarea|șoseaua|улица|переулок|ул.|str.) [0-9]*|(переулок|улица)$/i,
  monaco                 : /^(boulevard|avenue|rue|chemin|quai|place) (de la|des|de l'|de|)/i,
  mongolia               : /( зам| өргөн чөлөө| гудамж|'s street)$/i,
  montenegro             : /^(bulevar|ulica) /i,
  morocco                : /^(avenue|route|rue|boulevard|place|chemin|شارع) (des |de la |de l'|du |de |d' |)|(شارع)$/i,
  mozambique             : /^(avenida|av.|estrada|rua) (da |des |de |dos |das |)/i,
  myanmar                : /^(ဗိုလ်ချုပ်လမ်း|jalan|jl.) (by pass |bypass |)|( road| street|လမ်း| rd| boulevard)$/ig,
  nepal                  : / (highway|road|राज्मार्ग्|rajmarg)$/i,
  netherlands            : /^(oude|korte|het) |(-| |)(straat|weg|laan|plein|kade|pad|dijk|park|plantsoen|singel|hof|zuid)$/i,
  "new-zealand"          : / (road|street|avenue|lane|place|drive)$/i,
  nicaragua              : /^[1-9]*(a | |)(carretera|avenida|calle) /i,
  nigeria                : / (way|road|crescent|avenue|street|ave|st)$/i,
  norway                 : /^(gamle|nedre|Øvre)|(veien|vegen|gata|gaten| gate| vei| veg)$/i,
  pakistan               : /^(street) | (road|highway|روڈ)$/i,
  panama                 : /^(carretera|avenida|calle|vía|boulevar|carr.|via) ([0-9]+.* |)|( sur)$/ig,
  "papua-new-guinea"     : / (drive|avenue|road|street|highway)$/i,
  paraguay               : /^(avenida|ruta nacional|ruta|general) (general |)/i,
  peru                   : /^(avenida|jirón|calle|prolongación|malecón|pasaje|paseo) (almirante |mariscal |las |los |de la |de |)/i,
  philippines            : / (national |)(extension|highway|avenue|street|road|boulevard|drive|st.)$|^(purok) |^(barangay|road [0-9]+) .*/ig,
  poland                 : /^(plac|aleja|aleje|trakt|przy|osiedle|rynek|stary|pod|na) |(ego|ski|-Straße| Straße)$/i,
  portugal               : /^(rua|largo|avenida|travessa|estrada|praça|praceta|av.|caminho|vale|quinta|bairpropParque) (caminho |)(de |dos |do |das |da |)/i,
  romania                : /^(strada|aleea|bulevardul|calea|drumul|piața|piata|intrarea|șoseaua|str.|splaiul|prelungirea)( lui |)|( utca)$/i,
  russia                 : /^(улица|переулок|проезд|проспект|Площадь|бульвар|Большая|(улица |дорога |аллея )([1-9])-(я|й|го|е) )|^[0-9]+-.*|(ская улица|ский переулок|ский проезд|улица|переулок|проезд|проспект|Площадь| бульвар| шоссе| тракт)$/ig,
  scotland               : / (street|road)$/i,
  "senegal-and-gambia"   : /^(rue|route|avenue|boulevard) (des |de |)| (road|highway|avenue)$|[a-z][a-z]-[0-9]+$/ig,
  serbia                 : /^(Трг|Булевар) | (пут|друм|ulica)$/i,
  slovakia               : /^(námestie|pri|pod|nad|na|za) |(ova| námestie| rad| utca| cesta)$/i,
  slovenia               : /^(ulica|trg|pod|cesta|na) | (ulica|cesta|odreda|pot|trg|vrh)$/ig,
  "south-africa"         : /1st|2nd|3rd|4th|5th|6th|7th|8th|11th|12th|east|north|west|south|(road|street|drive|avenue|straat)$/ig,
  "south-korea"          : /(대로)$/i,
  "south-sudan"          : / (road|highway|street|avenue)$/i,
  spain                  : /^((kale|plaza|plaça|avenida|camino|camiño|camí|calle|carrer|carretera|rúa|autovía|barrio|avinguda|ronda|travesía|paseo|estrada|cuesta|praza|passeig) (de la |de las |de los |de les |de ses |dels |de l'|del |el |da |dos |do |des |de |la |las |d'|))|(kalea| plaza|(kalea|)\/.*)$/ig,
  "sri-lanka"            : / (road|street|mawatha)$/i,
  sudan                  : / (road|highway|street|avenue)$/i,
  suriname               : /(straat|weg)$/i,
  syria                  : /^(شارع)/i,
  sweden                 : /^(Östra|norra|västra|gamla) |(gatan|vägen| väg|stigen|torget|torg| esplanaden)$/i,
  switzerland            : /^(am|im|untere) |^(via (alla|ai|del|da|alle|))|(^(rue|ruelle|chemin|place|route|impasse|avenue) (du |de la |de l'|de |des |))|(strasse|weg)$/i,
  taiwan                 : /(路|街)$/i,
  tajikistan             : /^(кӯчаи|кучаи|хиёбони) /i,
  tanzania               : / (road|street|avenue)$/i,
  thailand               : /^(ถนน|moo)| (road)$/i,
  tunisia                : /نهج|شارع|^(avenue|route|rue) (de la |des |de |)/i,
  turkey                 : /^([0-9]+.*)|(yolu |)(caddesi|bulvarı|bulv.|blv.|blv|sokağı|sokak|cd.|cd|cad.|yolu|փողոց|խճուղի)$/i,
  turkmenistan           : / (köçesi|şaýoly|ýoly)$/i,
  uganda                 : /^(jinja|mbale) | (road|street|highway|jinja|mbale|avenue)$/i,
  ukraine                : /^(вулиця|улица|проспект) | (вулиця|улица|бульвар|провулок|проспект|шоссе)$/i,
  uruguay                : /^(calle|avenida|camino|general|bulevar|rambla) (de los |los |del |general|)|^(las|los|general)|^INE .*|^ruta [0-9]*( |)(perimetral|interbalnearia|)|^ute .+|^oficial [0-9]+/i,
  us                     : /^(east|west|north|south|via)|([0-9]+.*)|^((avenida|paseo|calle|rue) (de la|de las|de l'|del|de|du|la|))|(street|road|avenue|drive|lane|ridge|court| hill| highway| way| boulevard| view| place|side| circle| trails| trail| rd| parkway)( east| west| north| south|)$/ig,
  uzbekistan             : /( (shoh |)(ko'chasi|ko'shesi|ko‘chasi|shoh|maydoni))$/ig,
  venezuela              : /^(calle|avenida|carretera|carrera|av.|intercomunal|autopista) ([0-9]* |intercomunal |principal |)(de los |los |de |)|^([0-9]*(a |ª | |)(transversal|av.) (de los| los| de |))/i,
  vietnam                : /^(Đường|Phố|Cầu) | [0-9]+$/ig,
  yemen                  : /^(شارع|الشارع)/i,
  zambia                 : / (road|street|avenue|boulevard)$/i,
  zimbabwe               : / (street|road|avenue|drive|rd)$/i
}
