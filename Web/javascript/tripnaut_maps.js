//TODO
// Revoir la nomenclature / style de code
// Changer show pour showOnMap

var tokyo_circle={
	"center":[35.72867704485167,139.5263671875],
	"radius":120
}


var kyushu_circle={
	"center":[31.97080393043309,130.693359375],
	"radius":200     
}

var kansai_circle={
	"center":[34.72355492704221,135.81298828125],
	"radius":150     
}




// ----------- CODE POUR TEST---------
var japan_shape={ "type": "Feature", "properties": { "ID_0": 114, "ISO": "JPN", "NAME_ENGLI": "Japan", "NAME_ISO": "JAPAN", "NAME_FAO": "Japan", "NAME_LOCAL": "Nippon", "NAME_OBSOL": null, "NAME_VARIA": "Japan|Ryukyu Islands", "NAME_NONLA": null, "NAME_FRENC": "Japon", "NAME_SPANI": "Japón", "title": "Japan", "NAME_ARABI": "???????", "NAME_CHINE": "??", "WASPARTOF": null, "CONTAINS": null, "SOVEREIGN": "Japan", "ISO2": "JP", "WWW": null, "FIPS": "JA", "ISON": 392.0, "VALIDFR": "19470402", "VALIDTO": "Present", "EUmember": 0.0 }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ 123.778083965885941, 24.438855568890414 ], [ 123.940143043275341, 24.365881598370041 ], [ 123.86337821714352, 24.254999071735188 ], [ 123.778083965885941, 24.438855568890414 ] ] ], [ [ [ 128.257927584714508, 26.875901870099995 ], [ 128.318107417546258, 26.734218641622128 ], [ 128.138989489905327, 26.553205286175491 ], [ 128.027633106319058, 26.628548541453018 ], [ 128.257927584714508, 26.875901870099995 ] ] ], [ [ [ 128.906637751223542, 27.89374660177376 ], [ 129.038369983721367, 27.768648366595979 ], [ 128.880101761943394, 27.723158099258605 ], [ 128.906637751223542, 27.89374660177376 ] ] ], [ [ [ 129.690397148890412, 28.526819488885565 ], [ 129.711246854753369, 28.422097102619315 ], [ 129.456311814883492, 28.293208011830085 ], [ 129.322684154579946, 28.132096648343548 ], [ 129.216066340507979, 28.302685150858704 ], [ 129.50890993649233, 28.40124739675635 ], [ 129.690397148890412, 28.526819488885565 ] ] ], [ [ [ 130.498797108031681, 30.461577421578294 ], [ 130.671281038352561, 30.378178598126443 ], [ 130.583143645386372, 30.238390797454301 ], [ 130.448568271179994, 30.233652227939988 ], [ 130.37654201456246, 30.381969453737888 ], [ 130.498797108031681, 30.461577421578294 ] ] ], [ [ [ 131.057948310720235, 30.83734598406307 ], [ 130.966493919094063, 30.374861599466424 ], [ 130.851820536847754, 30.460629707675434 ], [ 131.057948310720235, 30.83734598406307 ] ] ], [ [ [ 131.005824046062827, 33.962906435701882 ], [ 131.001559333499955, 33.757726375732261 ], [ 131.084010443048953, 33.634997425311639 ], [ 131.435138444059305, 33.568183595159866 ], [ 131.500056846405357, 33.671484410571821 ], [ 131.661642066843314, 33.670536696668961 ], [ 131.73935460687801, 33.46535663669934 ], [ 131.691021197832043, 33.280078568689824 ], [ 131.876773122792997, 33.223689591469537 ], [ 131.899992113413106, 32.981548689288303 ], [ 132.011348496999375, 32.832757606538969 ], [ 131.68059634490055, 32.542283295311769 ], [ 131.455514292970832, 31.896416270511335 ], [ 131.488210422619574, 31.783638316070757 ], [ 131.371641612567544, 31.428719459448946 ], [ 131.108651004523352, 31.330157213551299 ], [ 130.972654059462656, 31.144879145541783 ], [ 130.716297448738487, 31.044895328789845 ], [ 130.803960984753218, 31.334895783065612 ], [ 130.698764741535541, 31.462837159951977 ], [ 130.822915262810454, 31.660435508698701 ], [ 130.618682916743722, 31.706873489938936 ], [ 130.514908244380337, 31.495059432649285 ], [ 130.658960757615347, 31.271872808525288 ], [ 130.531019380728964, 31.163833423599023 ], [ 130.460414694965749, 31.251496959613757 ], [ 130.222538505347416, 31.273768236331012 ], [ 130.335316459787975, 31.576562828295415 ], [ 130.173257382398589, 31.814912874865204 ], [ 130.226803217910287, 32.129553890615384 ], [ 130.335790316739406, 32.122919893295347 ], [ 130.571297221600616, 32.435191624288372 ], [ 130.450463698985715, 32.624734404860767 ], [ 130.611575062472241, 32.797692192133077 ], [ 130.443355844714233, 32.91473485913653 ], [ 130.371803445048158, 33.140764624969115 ], [ 130.148142963972731, 33.111859350931823 ], [ 130.381754441028221, 32.779685627978701 ], [ 130.344319741865178, 32.671646243052436 ], [ 130.128714828964064, 32.641319398160853 ], [ 130.178469808864321, 32.794375193473059 ], [ 129.845348372008345, 32.719979652098395 ], [ 129.624531032641499, 32.95169570134815 ], [ 129.680920009861779, 33.099539070194616 ], [ 129.558191059441157, 33.213738595489488 ], [ 129.576197623595533, 33.362529678238815 ], [ 129.857668652745531, 33.54496460453975 ], [ 130.025414013552108, 33.446876215593534 ], [ 130.207375082901621, 33.647791563000276 ], [ 130.395970149571156, 33.609409149934365 ], [ 130.530071666826103, 33.882350753958612 ], [ 130.699712455438402, 33.939213588130329 ], [ 130.902049373699441, 33.89230174993866 ], [ 131.005824046062827, 33.962906435701882 ] ] ], [ [ [ 134.137070781118808, 34.400276401872681 ], [ 134.159815914787487, 34.331093286963757 ], [ 134.624195727189857, 34.180880633360132 ], [ 134.597659737909737, 34.001288848767793 ], [ 134.728918113456103, 33.823118635029736 ], [ 134.403378387823039, 33.659637986786045 ], [ 134.213835607250644, 33.404229089964744 ], [ 134.177348621990433, 33.243591583429641 ], [ 133.935207719809199, 33.486680199513735 ], [ 133.602086282953223, 33.519376329162476 ], [ 133.259013850117185, 33.363951249093112 ], [ 133.235794859497076, 33.198575173043693 ], [ 133.034879512090328, 33.03698995260573 ], [ 132.951480688638469, 32.812855614578865 ], [ 132.639682814596881, 32.769260775047215 ], [ 132.4335550407244, 33.158297332172062 ], [ 132.538751283942076, 33.234588301352446 ], [ 132.371005923135499, 33.318460981755734 ], [ 132.422656330841477, 33.547333889296901 ], [ 132.659110949605548, 33.702758969366265 ], [ 132.770941190143276, 33.996550279253483 ], [ 132.942003549609865, 34.141550506391361 ], [ 133.12728161761936, 33.92736716434456 ], [ 133.321562967706086, 33.994654851447756 ], [ 133.500207038395558, 33.969066576070482 ], [ 133.622935988816181, 34.049148400862322 ], [ 133.621988274913321, 34.235848039726129 ], [ 133.894456021986144, 34.382743694669735 ], [ 134.137070781118808, 34.400276401872681 ] ] ], [ [ [ 135.003755145286078, 34.60877346050232 ], [ 134.896189617311251, 34.414018253464185 ], [ 134.9521047375801, 34.266648741569142 ], [ 134.729865827358992, 34.18941005848589 ], [ 134.659261141595749, 34.272335024986319 ], [ 135.003755145286078, 34.60877346050232 ] ] ], [ [ [ 138.504136445506816, 38.332815241798471 ], [ 138.435901044500753, 38.117210328897372 ], [ 138.57379341736717, 38.062716779482805 ], [ 138.499397875992514, 37.919611980150648 ], [ 138.230720984531132, 37.976474814322366 ], [ 138.325966231768774, 38.197766010640635 ], [ 138.504136445506816, 38.332815241798471 ] ] ], [ [ [ 140.925071610367752, 41.534192805666237 ], [ 141.213176636837773, 41.374503013033994 ], [ 141.44157568742753, 41.355074878025327 ], [ 141.388977565818692, 41.148473247201416 ], [ 141.412670413390231, 40.757541262270848 ], [ 141.481853528299155, 40.569893909504174 ], [ 141.769958554769204, 40.347654999283037 ], [ 141.956658193633018, 39.982785146681174 ], [ 142.044321729647748, 39.425529371798334 ], [ 141.897426074704128, 39.337865835783603 ], [ 141.938177772527212, 39.223192453537301 ], [ 141.8187658207666, 39.02322482003342 ], [ 141.668079310211539, 38.976312981841751 ], [ 141.520235941365058, 38.787717915172223 ], [ 141.544876502839486, 38.520936451516576 ], [ 141.408879557778789, 38.403893784513116 ], [ 141.062016269331309, 38.368828370107224 ], [ 140.962980166482225, 38.180233303437689 ], [ 140.922702325610572, 37.914399553684909 ], [ 141.012261289431052, 37.735281626043992 ], [ 141.041166563468323, 37.484611298737001 ], [ 140.982408301490892, 36.994643210957356 ], [ 140.805185801655711, 36.830214848810797 ], [ 140.611852165471845, 36.477665276946148 ], [ 140.593371744366038, 36.120377135567175 ], [ 140.826983221421528, 35.757402710771039 ], [ 140.493387927614123, 35.575915498372972 ], [ 140.394825681716469, 35.417647276595019 ], [ 140.325642566807545, 35.139019389153596 ], [ 140.110037653906431, 35.108692544262013 ], [ 139.843730047202229, 34.902090913438101 ], [ 139.818615628776371, 35.316241888988785 ], [ 140.092978803654916, 35.555065792510007 ], [ 139.96266814201141, 35.681111741590648 ], [ 139.787814926933379, 35.674951601222048 ], [ 139.765069793264672, 35.511944809929787 ], [ 139.568419158420824, 35.293970612271529 ], [ 139.20970944618756, 35.277859475922881 ], [ 139.076555642835444, 35.097793834379104 ], [ 139.130101478347143, 34.877450351963688 ], [ 138.845313450537134, 34.600717892327992 ], [ 138.775182621725349, 34.642417304053922 ], [ 138.763336197939566, 34.962270746269837 ], [ 138.814512748694113, 35.113431113776322 ], [ 138.558156137969945, 35.100636976087685 ], [ 138.354397648854615, 34.91156805246672 ], [ 138.192812428416659, 34.600717892327992 ], [ 138.045442916521608, 34.65236830003397 ], [ 137.577272248507796, 34.680325860168402 ], [ 137.320915637783628, 34.73197626787438 ], [ 137.225670390546014, 34.81774437608339 ], [ 137.026176613993556, 34.779361963017479 ], [ 136.866960678312751, 34.837646368043487 ], [ 136.794460564743815, 35.014868867878675 ], [ 136.651829622363067, 34.99259759116142 ], [ 136.536208526213926, 34.610195031356611 ], [ 136.8356861195183, 34.501207932527485 ], [ 136.897287523204341, 34.276599737549198 ], [ 136.675048612983204, 34.31213900890652 ], [ 136.281273486344048, 34.157661642740017 ], [ 136.272270204266846, 33.97143586082764 ], [ 136.107841842120308, 33.89088017908437 ], [ 135.953838332905235, 33.577186877237054 ], [ 135.725913139266908, 33.477203060485117 ], [ 135.514099081977264, 33.525062612579646 ], [ 135.343036722510675, 33.659164129834615 ], [ 135.394687130216653, 33.716026964006332 ], [ 135.065830405923549, 33.92784102129599 ], [ 135.188559356344172, 34.143919791148519 ], [ 135.061091836409247, 34.264279456811991 ], [ 135.44491596706834, 34.555701481942052 ], [ 135.408902838759587, 34.69501542566276 ], [ 135.057300980797805, 34.624410739899545 ], [ 134.745503106756189, 34.768937110085993 ], [ 134.46166279284904, 34.787417531191807 ], [ 134.235159170065032, 34.715391274574294 ], [ 133.935207719809199, 34.450979095675798 ], [ 133.658475260173503, 34.519214496681862 ], [ 133.368000948946303, 34.369475700029668 ], [ 133.269438703048678, 34.433446388472852 ], [ 133.016399090984521, 34.328724002206606 ], [ 132.799372607229117, 34.31213900890652 ], [ 132.642525956305462, 34.201256482271667 ], [ 132.503685869536184, 34.336305713429503 ], [ 132.237852119783412, 34.260962458151972 ], [ 132.221267126483326, 34.048200686959461 ], [ 132.115597026314219, 33.878086041395733 ], [ 131.742671605538021, 34.067154965016698 ], [ 131.379223323790455, 34.009818273893551 ], [ 131.268814654107018, 33.922628594830243 ], [ 131.037572461808708, 34.056730112085219 ], [ 130.916738939193806, 33.975700573390519 ], [ 130.866983959293549, 34.289393875237835 ], [ 130.956542923114, 34.409753540901306 ], [ 131.156036699666458, 34.371844984786826 ], [ 131.386331178061909, 34.416861395172766 ], [ 131.612360943894487, 34.667057865528335 ], [ 131.821805716426979, 34.69596313956562 ], [ 132.421708616938616, 35.188774369053853 ], [ 132.654846237042676, 35.315768032037354 ], [ 132.686594652788557, 35.450343406243761 ], [ 133.175141169713896, 35.568333787150074 ], [ 133.147183609579486, 35.435653840749396 ], [ 133.59023985916744, 35.531846801889891 ], [ 134.064570667549873, 35.519526521152684 ], [ 134.539849189835138, 35.670686888659169 ], [ 134.920356321834248, 35.645098613281895 ], [ 135.225520198555785, 35.774935417973985 ], [ 135.21462148867289, 35.598186775090227 ], [ 135.452971535242682, 35.59155277777019 ], [ 135.534001073937361, 35.489199676261102 ], [ 135.814998246135957, 35.5365853714042 ], [ 136.100260130897396, 35.776830845779713 ], [ 135.9642631858367, 35.997174328195122 ], [ 136.160439963729146, 36.248792369404974 ], [ 136.441910992879144, 36.444021433394546 ], [ 136.66320218919742, 36.69184861899295 ], [ 136.768872289366527, 37.000803351325956 ], [ 136.669836186517443, 37.146751292366702 ], [ 136.756078151677883, 37.364251633073529 ], [ 137.275899227397701, 37.534366278637251 ], [ 137.352190196578078, 37.443859600913932 ], [ 137.265000517514778, 37.326343076959049 ], [ 136.86648682136132, 37.110264307106519 ], [ 137.056977315836576, 36.967159507774355 ], [ 136.984951059219071, 36.865754120168127 ], [ 137.189183405285803, 36.756767021338995 ], [ 137.334657489375132, 36.763401018659032 ], [ 137.425638024049874, 36.924986239097002 ], [ 138.215557562085337, 37.169022569083957 ], [ 138.54346657247558, 37.368042488684978 ], [ 138.713107361087879, 37.557585269257373 ], [ 138.819725175159846, 37.794513744972868 ], [ 139.245722574496313, 38.004432374456798 ], [ 139.446164064951631, 38.229040569435085 ], [ 139.454693490077375, 38.389204219018758 ], [ 139.626703563446824, 38.687260241468849 ], [ 139.746115515207435, 38.774923777483586 ], [ 139.928076584556948, 39.288584712834776 ], [ 140.016687834474538, 39.389042386538144 ], [ 140.058861103151884, 39.725480822054152 ], [ 140.003893696785894, 39.850105200280503 ], [ 140.073550668646249, 40.040121837804328 ], [ 139.988256417388669, 40.096036958073185 ], [ 140.012896978863097, 40.372295560757451 ], [ 139.922864158091187, 40.645237164781705 ], [ 140.002472125931604, 40.740008555067902 ], [ 140.242717600307117, 40.785024965453843 ], [ 140.374449832804942, 41.028587438489375 ], [ 140.345070701816212, 41.26077734469056 ], [ 140.643600581217726, 41.17453537953012 ], [ 140.68814313465225, 40.876479357080022 ], [ 140.862996349730281, 40.88453492525435 ], [ 140.882424484738948, 41.00868544652927 ], [ 141.104189538008654, 40.872214644517143 ], [ 141.278568896135255, 41.159371957084325 ], [ 141.157735373520353, 41.275940767136348 ], [ 141.058699270671269, 41.183538661607308 ], [ 140.810872085072873, 41.127623541338451 ], [ 140.763960246881197, 41.195385085393077 ], [ 140.925071610367752, 41.534192805666237 ] ] ], [ [ [ 139.559889733295051, 42.253033800987048 ], [ 139.496866758754749, 42.083393012374756 ], [ 139.404938510177118, 42.176742831806664 ], [ 139.559889733295051, 42.253033800987048 ] ] ], [ [ [ 141.194696215731966, 45.258708443913818 ], [ 141.328797732986942, 45.150669058987553 ], [ 141.23734334136077, 45.097597080427285 ], [ 141.194696215731966, 45.258708443913818 ] ] ], [ [ [ 141.938177772527212, 45.522646765860884 ], [ 142.507279971195828, 45.040734246255568 ], [ 142.74136530520272, 44.757841646251265 ], [ 142.990140204704005, 44.560243297504542 ], [ 143.414716033186153, 44.308151399343252 ], [ 143.690026921967558, 44.208167582591315 ], [ 143.723670765519159, 44.113870049256548 ], [ 144.108916467032572, 44.119082475722287 ], [ 144.388018211425418, 43.925274982587013 ], [ 144.784162622821725, 43.928118124295601 ], [ 145.344261539413168, 44.339425958137696 ], [ 145.366058959178986, 44.268821272374481 ], [ 145.129604340414915, 43.948967830158566 ], [ 145.070372221486053, 43.745209341043235 ], [ 145.192627314955246, 43.628166674039782 ], [ 145.310617695861566, 43.274195531320835 ], [ 144.9718099755884, 42.980878078385054 ], [ 144.787479621481737, 43.056221333662577 ], [ 144.741041640241491, 42.932544669339087 ], [ 144.183785865358658, 42.988459789607944 ], [ 143.873883419122791, 42.846302704178648 ], [ 143.55071297824685, 42.603687945045984 ], [ 143.308098219114186, 42.243556661958429 ], [ 143.240336675059552, 41.948343781216927 ], [ 142.964078072375287, 42.118458426780649 ], [ 142.476479269352808, 42.273409649898582 ], [ 141.889844363481245, 42.581890525280158 ], [ 141.659076028134336, 42.630697791277548 ], [ 141.336379444209854, 42.53545254403992 ], [ 140.94781674403643, 42.315582918575942 ], [ 140.697620273680855, 42.586155237843037 ], [ 140.471590507848276, 42.587576808697328 ], [ 140.274939873004428, 42.287151501490079 ], [ 140.580103749725993, 42.10803357384917 ], [ 140.708518983563778, 42.138360418740753 ], [ 140.961084738676504, 41.914699937665326 ], [ 141.145415092783139, 41.856415532639311 ], [ 141.047800560788374, 41.72515715709293 ], [ 140.624172446209059, 41.807134409690491 ], [ 140.441737519908145, 41.680614603658412 ], [ 140.428469525268071, 41.534192805666237 ], [ 140.199122760775452, 41.39772200365411 ], [ 139.985887132631518, 41.551251655917753 ], [ 140.141312212700882, 41.914699937665326 ], [ 140.038485254240356, 42.102347290431993 ], [ 139.774546932293305, 42.259193941355655 ], [ 139.867422894773767, 42.66434163482915 ], [ 140.029955829114613, 42.687560625449265 ], [ 140.190593335649709, 42.824979141364253 ], [ 140.246982312869989, 42.768590164143966 ], [ 140.516133061282801, 42.985142790947933 ], [ 140.325642566807545, 43.221597409711997 ], [ 140.498600354079855, 43.372757777218482 ], [ 140.792391663967067, 43.194587563480425 ], [ 141.016526001993924, 43.238182403012075 ], [ 141.161526229131795, 43.143884869677308 ], [ 141.423569123273154, 43.328215223783964 ], [ 141.329271589938372, 43.724833492131708 ], [ 141.557196783576671, 43.857987295483817 ], [ 141.658602171182906, 44.003935236524555 ], [ 141.648177318251442, 44.314785396663289 ], [ 141.759059844886281, 44.462154908558325 ], [ 141.784648120263569, 44.723723945748233 ], [ 141.571886349071036, 45.237858738050853 ], [ 141.657180600328616, 45.369117113597241 ], [ 141.938177772527212, 45.522646765860884 ] ] ] ] } };

/*


var shibuya_shape={"type":"Feature","properties":{"city_code":"13113","title":"Shibuya-ku","state_name":"Tokyo","state_name_jp":"東京都","station_name_jp":null,"county_name_jp":null,"city_name_jp":null,"distric_name_jp":"渋谷区","population":204753,"num_households":123718},"geometry":{"type":"Polygon","coordinates":[[[139.686628,35.682609],[139.68747475000006,35.681752],[139.68861,35.68219462500008],[139.690876,35.683812],[139.694459,35.686288],[139.69529025000008,35.68677875000009],[139.6962215000001,35.687174],[139.70045975000005,35.68884450000007],[139.70138,35.689041],[139.702099,35.689169],[139.70578,35.688048],[139.7147919370001,35.680676334000054],[139.71438250000003,35.67992012500008],[139.7135575000001,35.67846350000007],[139.712898,35.677166],[139.712891,35.674618],[139.7169471850001,35.67364177400009],[139.71135992000006,35.66693111100005],[139.7106670510001,35.66621156400004],[139.70861450000007,35.66418625000006],[139.713196,35.658281],[139.714693,35.65724650000004],[139.71806475000005,35.65672912500008],[139.721971,35.655603],[139.723557,35.646701],[139.722711001,35.64471750000007],[139.7216455,35.64440575000009],[139.71903405700004,35.641765553000084],[139.71762211300006,35.641645947000086],[139.710104,35.641574],[139.709386,35.641746],[139.708621,35.642007],[139.707528,35.642694],[139.704748,35.644587],[139.695888,35.650682],[139.69321,35.653658],[139.691649,35.655874],[139.690045,35.658077],[139.68711075000007,35.66172812500008],[139.685143,35.66263150000009],[139.684141,35.662909],[139.67957025000007,35.66381750000005],[139.678107,35.663939],[139.67717091600002,35.66390953300004],[139.6764509840001,35.66386154600008],[139.6754908810001,35.66382317700004],[139.6747333620001,35.663914152000075],[139.67424833300004,35.66449516700004],[139.67322150000007,35.66643650000009],[139.6728283330001,35.667396],[139.669917,35.671778],[139.663101,35.671485],[139.6618547500001,35.67172212500009],[139.66155267200008,35.672395546000075],[139.66211650000002,35.673545501000035],[139.661815992,35.67439460800006],[139.66222807100007,35.67562285900004],[139.66315266700008,35.676004],[139.66418750600008,35.67646178300003],[139.66483950000008,35.676667001000055],[139.6655495,35.67717983300008],[139.666104,35.67804875100006],[139.666556507,35.67886060300009],[139.66712405700002,35.67937305600009],[139.66771745300002,35.67985707200006],[139.669012,35.680608],[139.670081,35.681078],[139.671372,35.681554],[139.67515,35.684661],[139.67569450000008,35.685623],[139.676785,35.686667],[139.67779775000008,35.68735312500007],[139.6793120330001,35.68858568300004],[139.68015539600003,35.68955106200008],[139.68103642100002,35.69023692600007],[139.68316581300007,35.691677162000076],[139.683987,35.692172],[139.683292206,35.68912331800004],[139.685809,35.683575],[139.686628,35.682609]]]}};

var tokyo_shape={
      "type": "Feature",
      "properties": {"title":"Tokyo"},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              139.075927734375,
              35.290468565908775
            ],
            [
              138.955078125,
              35.639441068973916
            ],
            [
              138.9990234375,
              35.9157474194997
            ],
            [
              139.229736328125,
              36.08462129606931
            ],
            [
              139.559326171875,
              36.1822249804225
            ],
            [
              139.98779296875,
              36.19995805932895
            ],
            [
              140.679931640625,
              35.99578538642032
            ],
            [
              140.86669921875,
              35.63051198300058
            ],
            [
              140.69091796875,
              35.28150065789119
            ],
            [
              140.16357421875,
              35.02999636902566
            ],
            [
              139.4384765625,
              35.03899204678081
            ],
            [
              139.075927734375,
              35.290468565908775
            ]
          ]
        ]
      }
};

var kansai_shape = {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              134.86816406249997,
              34.786739162702524
            ],
            [
              134.97802734374997,
              35.08395557927643
            ],
            [
              135.384521484375,
              35.290468565908775
            ],
            [
              135.791015625,
              35.17380831799959
            ],
            [
              136.153564453125,
              35.02999636902566
            ],
            [
              136.263427734375,
              34.75966612466251
            ],
            [
              136.043701171875,
              34.4793919710481
            ],
            [
              135.626220703125,
              34.31621838080741
            ],
            [
              135.17578125,
              34.37064492478658
            ],
            [
              134.901123046875,
              34.49750272138162
            ],
            [
              134.86816406249997,
              34.786739162702524
            ]
          ]
        ]
      }
};
var kyushu_shape={
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              130.67138671875,
              33.97980872872457
            ],
            [
              131.46240234375,
              33.687781758439364
            ],
            [
              131.9677734375,
              33.30298618122413
            ],
            [
              132.1435546875,
              32.54681317351517
            ],
            [
              131.81396484375,
              31.85889704445453
            ],
            [
              131.33056640625,
              31.20340495091737
            ],
            [
              131.044921875,
              30.35391637229704
            ],
            [
              130.36376953125,
              29.99300228455108
            ],
            [
              129.7265625,
              30.826780904779774
            ],
            [
              129.83642578125,
              31.391157522824695
            ],
            [
              129.77050781249997,
              32.1570124860701
            ],
            [
              129.30908203125,
              32.39851580247402
            ],
            [
              128.5400390625,
              32.491230287947594
            ],
            [
              128.4521484375,
              32.99023555965106
            ],
            [
              129.00146484375,
              33.523078808904195
            ],
            [
              129.66064453124997,
              33.8339199536547
            ],
            [
              130.14404296874997,
              33.94335994657882
            ],
            [
              130.67138671875,
              33.97980872872457
            ]
          ]
        ]
      }
};
*/

var country_default = function() {
	return {fillColor: '#6B72F9',fillOpacity:'0.5',color:'#000000',opacity:'1',weight:'2'
	};
}

var country_selected = function() {
	return {fillColor: '#000000',fillOpacity:'0',color:'#6B72F9',opacity:'1',weight:'3'
	};
}

var zone_default = function() {
	return {fillColor: '#FFFFFF',fillOpacity:'0.5',color:'#000000',opacity:'1',weight:'2'
	};
}

var zone_hover = function() {
	return {fillColor: '#FFFFFF',fillOpacity:'0.7',color:'#000000',opacity:'1',weight:'4'
	};
}

var zone_selected = function() {
	return {fillColor: '#FFFF0F',fillOpacity:'0',color:'#0F0FFF',opacity:'1',weight:'3'
	};
}

var POI_hover = L.icon({
	iconUrl: '/javascript/images/marker-icon-red.png',
	iconSize: [25, 41],
	iconAnchor: [13, 41],
	popupAnchor: [0, -33],
	shadowUrl: 'http://cdn.leafletjs.com/leaflet-0.5.1/images/marker-shadow.png',
});

var POI_selected = POI_hover; 


var POI_default = new L.Icon.Default();
/*
var BlueIcon = L.icon({
    iconUrl: '/javascript/images/marker-test.png',
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    popupAnchor: [0, -33],
    shadowUrl: 'http://cdn.leafletjs.com/leaflet-0.4.5/images/marker-shadow.png',

    //shadowSize: [25, 41],
//    shadowAnchor: [13, 41]

});
*/

//  ----------  FONCTIONS  ----------
	
	function getPointById(id) {
		if (typeof loadedPOIs[id] != 'undefined') {
			return loadedPOIs[id];
		}
	}



//  ----------  OBJECTS  ----------
var selectedCountry=null;
var selectedZone=null;
var selectedPOI=null;

var	loadedCountries={};
var loadedZones={};
var loadedPOIs={};



function Item() {}

Item.prototype.show=function(layerGroup) {
	layerGroup.addLayer(this.mapELEM);
}
Item.prototype.toJSON = function() {
	return '{"id":' + this.id +'}';
}

Item.prototype.fitBounds=function() {
	map.fitBounds(this.mapELEM.getBounds());
}

Item.prototype.panTo=function() {
	map.panTo(this.mapELEM.getBounds().getCenter());
}

Item.prototype.showGuide = function() {
	var guidELEM=document.getElementById('guide');
	guidELEM.innerHTML='';
	var title = createElement('div',[{name: 'class', value: 'title'}],[document.createTextNode(this.title)],false);
	var teaser = createElement('div',[{name: 'class', value: 'teaser'}],[],false);
	teaser.innerHTML=this.teaser;	
	guidELEM.appendChild(title);
	guidELEM.appendChild(teaser);
}


function Country(id,title,teaser,shape) {
	this.id=id;
	this.title=title;
	this.teaser=teaser;
	this.shape=shape;
	this.mapELEM=L.geoJson(shape,{style: country_default()});
	this.zones=[];
}
Country.prototype = Object.create(Item.prototype);

Country.prototype.addListeners=function(){
	var country=this;
	var click_handler= function(e) {
		window.location.href = '/countries/'+country.id+'/'+country.title;
		//country.select();
		//country.mapELEM.off('click',click_handler);
	}
	country.mapELEM.on('click',click_handler);
	country.mapELEM.bindLabel('<h2>'+country.title+'</h2>'+'<p> 15 trips <p>',{className:"selectable"});
}
Country.prototype.addZone=function(zone){
	this.zones.push(zone);
	//loadedZones.push(zone);
	zone.country=this;
	}
Country.prototype.deselect = function() {
	this.mapELEM.setStyle(country_default());
	var guidELEM=document.getElementById('guide');
	guidElem.innerHTML='';
}
Country.prototype.select = function() {
	if (selectedCountry) {selectedCountry.deselect();}
	selectedCountry=this;
	this.mapELEM.setStyle(country_selected());
	this.fitBounds();
	this.showZones();
	this.showGuide();
	this.zonesToGuide();
}
Country.prototype.zonesToGuide = function() {
	var guidELEM=document.getElementById('guide');
	var zoneList=createElement('div',[{name: 'class', value: 'zoneList'}],[],false);
	guidELEM.appendChild(zoneList);
	if (this.zones.length==0) {
		zoneList.appendChild (document.createTextNode('Sorry, this country is not available yet!'));
	} else {
		zoneList.appendChild (document.createTextNode('List of zones'));
		var zoneUL=createElement('ul',[{name: 'class', value: 'zoneList'}],false);
		zoneList.appendChild(zoneUL);
		for (var i=0;i<this.zones.length;i++){
			var zonei=this.zones[i];
			var click_handler = function(e) {
				zonei.select();
			}
			var tempdom = createElement('li',[{name: 'class', value: 'zone'}],[document.createTextNode(zonei.title)],true,'click',click_handler);
			zoneUL.appendChild(tempdom);
			this.zones[i].guidELEM=tempdom;
		}
	}
}
Country.prototype.showZones = function() {
	for (var i = 0;i < this.zones.length;i++) {
		this.zones[i].show(zones);
		this.zones[i].addListeners();
	}
}

function Zone(id,title,teaser,shape) {
	this.id=id;
	this.title=title;
	this.teaser=teaser;
	this.shape=shape;
	this.mapELEM=new L.Circle(shape.center,shape.radius*1000,zone_default());
	//this.mapELEM=L.geoJson(shape,{style: zone_default});
	this.POIs=[];
	this.country=null;
	//this.bounds=this.mapELEM.getBounds();
}

Zone.prototype = Object.create(Item.prototype);
Zone.prototype.addListeners = function() {
	var zone = this;

	var click_handler= function(e) {
		zone.select();
		//zone.mapELEM.off('click',click_handler);
	}
	
	var mouseover_handler=function(e) {
		if (zone!==selectedZone){
		zone.mapELEM.setStyle(zone_hover());
		zone.guidELEM.classList.add('hover');	
		}
	};
	var mouseout_handler=function(e) {
		if (zone!==selectedZone){
		zone.mapELEM.setStyle(zone_default());
		zone.guidELEM.classList.remove('hover');		
		}
	};
	zone.mapELEM.on('click',click_handler);
	zone.mapELEM.on('mouseover',mouseover_handler);
	zone.mapELEM.on('mouseout',mouseout_handler);
			//this.Marker.on('mouseout',mouseoutMarker);  
}
Zone.prototype.addPOI=function(poi){
	this.POIs.push(poi);
	loadedPOIs[poi.id] = poi;
	poi.zone=this;
	}
Zone.prototype.deselect = function() {
	this.mapELEM.setStyle(zone_default());
	var guidELEM=document.getElementById('guide');
	guidELEM.innerHTML='';
}
Zone.prototype.select = function() {
if (selectedZone) {
		selectedZone.deselect();
}
	selectedZone=this;
	if (selectedPOI) {selectedPOI.deselect();};
	this.mapELEM.setStyle(zone_selected());
	this.showPOIs();
	//this.fitBounds();
	this.panTo();
	this.showGuide();
	this.POIsToGuide();

}
Zone.prototype.POIsToGuide = function() {
	var guidELEM=document.getElementById('guide');
	var POIList=createElement('div',[{name: 'class', value: 'POIList'}],[],false);
	guidELEM.appendChild(POIList);
	if (this.POIs.length==0) {
		POIList.appendChild (document.createTextNode('No Point of Interest'));
	} else {
		POIList.appendChild (document.createTextNode('List of points of interest'));
		var zoneUL=createElement('ul',[{name: 'class', value: 'POIList'}],false);
		POIList.appendChild(zoneUL);
		for (var i=0;i<this.POIs.length;i++){
			var zone = this;
			(function(i) {
				var poii=zone.POIs[i];
				var click_handler = function(e) {
					poii.select();
				}
				var tempdom = createElement('li',[{name: 'class', value: 'POI'}],[document.createTextNode(poii.title)],true,'click',click_handler);
				zoneUL.appendChild(tempdom);
				poii.guidELEM=tempdom;
				var fireMouseOver = function(e){
					poii.mapELEM.fireEvent('mouseover');
					console.log(poii);
				};
				var fireMouseOut = function(e){
					poii.mapELEM.fireEvent('mouseout');
					console.log(poii);
				};
				tempdom.addEventListener('mouseover',fireMouseOver,false);
				tempdom.addEventListener('mouseout',fireMouseOut,false);
			})(i);
		}
	}
}

Zone.prototype.showPOIs = function() {
	POIs.clearLayers();
	for (var i = 0;i < this.POIs.length;i++) {
		this.POIs[i].show(POIs);
		this.POIs[i].addListeners();
	}
}

function POI(id,title,teaser,LatLng) {
	this.id=id;
	this.title=title;
	this.teaser=teaser;
	this.LatLng=LatLng;
	this.mapELEM=new L.Marker(LatLng,{title:this.title});
	this.zone=null;
	//this.bounds=this.mapELEM.getBounds();
}

POI.prototype = Object.create(Item.prototype);

POI.prototype.addListeners = function() {
	var poi = this;

	var click_handler= function(e) {
		poi.select();
		//zone.mapELEM.off('click',click_handler);
	}
	
	var mouseover_handler=function(e) {
		if (poi!==selectedPOI){
		poi.mapELEM.setIcon(POI_hover);
		poi.guidELEM.classList.add('hover');
		}
	};
	var mouseout_handler=function(e) {
		if (poi!==selectedPOI){
		poi.mapELEM.setIcon(POI_default);
		poi.guidELEM.classList.remove('hover');	
		}
	};
	poi.mapELEM.on('click',click_handler);
	poi.mapELEM.on('mouseover',mouseover_handler);
	poi.mapELEM.on('mouseout',mouseout_handler);
			//this.Marker.on('mouseout',mouseoutMarker);  
}
POI.prototype.deselect = function() {
	this.mapELEM.setIcon(POI_default);
	var guidELEM=document.getElementById('guide');
	guidELEM.innerHTML='';
}
POI.prototype.select = function() {
	if (selectedPOI) {selectedPOI.deselect();};
	selectedPOI=this;
	this.mapELEM.setIcon(POI_selected);
	//this.fitBounds();
	//this.showPOIs();
	this.showGuide();
}
/*
	function Item (id,title,teaser,LatLng) {
	
		// --- ATTRIBUTES ---
		this.id=id;
		this.title=title;
		this.teaser=teaser;
		this.LatLng=LatLng;
		this.Marker = null;
	
		// --- METHODS ---

		this.tab = function(show,edition) {
			this.TABElement = document.getElementById('item_tab');
			this.TABElement.innerHTML = '';
			var item = this;
			var handler = function(e) { selectTab(item.TABElement); }
			var nav = createElement('div',[{name: 'class', value: 'nav'}],[],true,'click',handler);
			this.TABElement.appendChild(nav);
			var title = createElement('h2',[],[document.createTextNode(this.title)],false,null,null);
			this.TABElement.appendChild(title);
			if (show) {
				selectTab(this.TABElement);
			}
		}
		this.toJSON = function() {
			var item = '{"id":'+this.id+',"LatLng":'+JSON.stringify(this.LatLng)+',"title":'+JSON.stringify(this.title)+'}';
			return item;
		}
		this.show = function(layerGroup) {
			var item = this;
			this.Marker=new L.Marker(this.LatLng,{
				 title : this.title,
				 icon : BlueIcon,
				 my_id : this.id,
				 item : item
			     });
			     
			     var mouseover_handler=function(e) {
					e.target.setIcon(RedIcon);
					// e.target._icon.firstChild.draggable='true';
					//$("#POI-item-"+e.target.options.my_id.toString()).addClass("POI-active");
					info.update(e.target.options.title,'');
					//e.target._map.dragging._draggable.disable();
					console.log(item);
				};
			layerGroup.addLayer(this.Marker);
			this.Marker.on('mouseover',mouseover_handler);
			this.Marker.on('mouseout',mouseoutMarker);  
		}
		
		// --- AJAX ---
		this.create = function() {
			// ajouter dans la base de donnée
		}
		
	}
*/	
	
var map, markers, POI_visible, Selected;
//var panelid="#item";

var zoomcountry=4;//en dessous de 4 inclus
var zoomzone=6;// en dessous de 6 inclus
    
//LatLng comes from leaflet (L.LatLng)

/*
function Itemlist(){

	// --- ATTRIBUTES ---
	this.items=[];
	
	// --- METHODS ---
	this.addItem = function(item) {
		this.items.push(item);
	}	
}





var POI_table=new Itemlist();
POI_table.addItem(new Item(0,'Tokyo', '',new L.LatLng(35.67,139.77)));
POI_table.addItem(new Item(1,'Kyoto', '',new L.LatLng(35.017,135.767)));
POI_table.addItem(new Item(2,'Mt Koya','',new L.LatLng(34.1905,135.5975)));
POI_table.addItem(new Item(3,'Hongu','',new L.LatLng(33.73333,135.36667)));
POI_table.addItem(new Item(4,'Mt Aso','',new L.LatLng(32.881,131.085)));
POI_table.addItem(new Item(5,'Kagoshima','',new L.LatLng(31.5822,130.55361)));
POI_table.addItem(new Item(6,'Yakushima','',new L.LatLng(30.333333,130.533333)));


var POI_table=new Array(7);
	  POI_table[0]=new POI(0,'Tokyo',35.67,139.77);
	  POI_table[1]=new POI(1,'Kyoto',35.017,135.767);
	  POI_table[2]=new POI(2,'Mt Koya',34.1905,135.5975);
	  POI_table[3]=new POI(3,'Hongu',33.73333,135.36667);
	  POI_table[4]=new POI(4,'Mt Aso',32.881,131.085);
	  POI_table[5]=new POI(5,'Kagoshima',31.5822,130.55361);
	  POI_table[6]=new POI(6,'Yakushima',30.333333,130.533333);   

	  
	  
var mouseoverMarker=function(e) {
			console.log(e);
			e.target.setIcon(RedIcon);
			// e.target._icon.firstChild.draggable='true'; 
			//$("#POI-item-"+e.target.options.my_id.toString()).addClass("POI-active");
			info.update(e.target.options.title,'');
			e.target._map.dragging._draggable.disable();
};


var mouseoutMarker=function(e) {
			if (!(e.target==Selected)){
				e.target.setIcon(BlueIcon);
				//$("#POI-item-"+e.target.options.my_id.toString()).removeClass("POI-active");
				e.target._map.dragging._draggable.enable();
			}
};	  

var markersFromItemlist = function(itemlist,layergroup) {
		var tab=itemlist.items;
		for(var k=0;k<tab.length;k++){
		 var newmarker=new L.Marker(tab[k].LatLng,{
			 title : tab[k].title,
			 icon : BlueIcon,
			 my_id : tab[k].id,
			 item : tab[k]
		     });
		
		newmarker.on('mouseover',mouseoverMarker);
		newmarker.on('mouseout',mouseoutMarker); 
		
		//newmarker.on('dragstart',dragstartMarker,false);
		//newmarker.on('dragend',dragendMarker,false);
					
		//newmarker.bindPopup(tab[k].title);
		layergroup.addLayer(newmarker);
	  }	
	};
*/

function init(){  
	map = L.map('map',{
	  minZoom : 3,
	  maxZoom : 13,
	});
	
	var position = new L.LatLng(35.0,135.77);
	var zoom=3;
	    
	map.setView(position,zoom);
	
	map.addLayer(new L.StamenTileLayer("toner-lite"));
		
	
	zones=new L.LayerGroup();
	zones.addTo(map);
	
	countries=new L.LayerGroup();
	countries.addTo(map);
	
	POIs=new L.layerGroup();
	POIs.addTo(map);
	
	countr=loadedCountries[1];
	countr.mapELEM.setStyle(country_selected());
	countr.show(countries);
	countr.showGuide();
	
	for (var i=0;i<loadedZones.length;i++){
		countr.addZone(loadedZones[i]);
	}
	countr.zonesToGuide();
	countr.showZones();
	
	
/*
shibuya= new POI(8,'Shibuya', 'blabla',new L.LatLng(35.67,139.77));
kyoto=new POI(2,'Kyoto', 'bloblo',new L.LatLng(35.017,135.767));
mtkoya=new POI(3,'Mt Koya','blublu',new L.LatLng(34.1905,135.5975));
hongu=new POI(4,'Hongu','blablo',new L.LatLng(33.73333,135.36667));
mtaso=new POI(5,'Mt Aso','blobli',new L.LatLng(32.881,131.085));
kagoshima=new POI(6,'Kagoshima','blubol',new L.LatLng(31.5822,130.55361));
yakushima=new POI(7,'Yakushima','baboulal',new L.LatLng(30.333333,130.533333));
	
	
	kansai=new Zone(4,'Kansai','Second largest metropolitan area of Japan. Cultural and historical heart.',kansai_circle);
	tokyo=new Zone(5,'Tokyo','One of the largest cities in the world, a must see',tokyo_circle);
	kyushu=new Zone(6,'Kyushu','Large volcanic island with impressive natural landscapes and onsens',kyushu_circle);
*/
	
	/*
kansai=new Zone(4,'Kansai','Second largest metropolitan area of Japan. Cultural and historical heart.',kansai_shape);
	tokyo=new Zone(5,'Tokyo','One of the largest cities in the world, a must see',tokyo_shape);
	kyushu=new Zone(6,'Kyushu','Large volcanic island with impressive natural landscapes and onsens',kyushu_shape);
*/
	//japan=new Country(6,'Japan','Nihon',japan_shape);
	//loadedCountries.push(japan);
	/*
japan.addZone(tokyo);
	japan.addZone(kansai);
	japan.addZone(kyushu);
	
	japan.show(countries);
	japan.addListeners();
	
	tokyo.addPOI(shibuya);
	kansai.addPOI(kyoto); kansai.addPOI(mtkoya); kansai.addPOI(hongu);
	kyushu.addPOI(mtaso); kyushu.addPOI(yakushima); kyushu.addPOI(kagoshima);
*/
	//japan.select();
	
	//tokyo.show(zones);
	//tokyo.addListeners();
	//trip.show(map);
	
	//Initialisation des marqueurs
	//markersFromItemlist(POI_table,markers);
	//POI_visible=isvisible(POI_table,map.getBounds()._northEast,map.getBounds()._southWest);
	//tabletotext(POI_visible,panelid);
	
	
	//Ajout de la gestion du zoom et du drag
	//map.on('dragend',function(e) {map.updatedrag(e.target,POI_table,panelid,zoomzone)});
	//map.on('zoomend',function(e) {map.updatedrag(e.target,POI_table,panelid,zoomzone)});
	//markers=new L.layerGroup();
	
/*
	
	//essais drag and drop
	var blocklist=$('.block');
	for(var k=0;k<blocklist.length;k++){
		var dropzone=blocklist[k];
		
		dropzone.addEventListener('dragenter',function(e){
			console.log('dragenter');
			e.preventDefault();
		});
		dropzone.addEventListener('dragover',function(e){

			e.preventDefault();
		});
		dropzone.addEventListener('drop',function(e){
		e.preventDefault();
		alert('dropped item'+draggingItem.title);
		e.target
		e.stopPropagation();
		});	
	}	
*/
}


/*
var country_selected = function() {
	return {fillColor: '#000000',fillOpacity:'0',color:'#6B72F9',opacity:'1',weight:'3'
	};
}
*/

var world_default = function() {
	return {fillColor: '#6B72F9',fillOpacity:'1',color:'#000000',opacity:'1',weight:'1'
	};
};

var world_empty = function() {
	return {fillColor: '#FFFFFF',fillOpacity:'1',color:'#000000',opacity:'1',weight:'1'
	};
};

function getStyle(feature) {
    return (feature.properties.covered == 1) ? world_default() : world_empty() 
}


function addFeatureListeners(feature, layer) {
		layer.bindLabel(feature.properties.name); 
}  

    
  

function init_world(){  
	map = L.map('right',{
	  minZoom : 1,
	  maxZoom : 4,
	});
	
	var position = new L.LatLng(40,0);
	var zoom=2;
	    
	map.setView(position,zoom);
	countries=new L.LayerGroup();
	countries.addTo(map);
	
	L.geoJson(world,{style:world_empty, onEachFeature:addFeatureListeners}).addTo(map);
	
	loadedCountries[1].show(countries);
	loadedCountries[1].addListeners();
	
//	map.addLayer(new L.StamenTileLayer("toner-lite"));
	

}

