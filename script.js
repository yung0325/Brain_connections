
function changeimg(){
  var x = document.getElementById("dropdown").value;
  document.getElementById("oriimg").src = "img/" +x+".png";  
  
}

function cell_dim(total, cells) { return Math.floor(total/cells) }
var total_height = 30;
var total_width = 1035;
var rows = 1; 
var cols = 69; 
var row_height = cell_dim(total_height, rows);
var col_width = cell_dim(total_width, cols);



// -------------------------------------------------
var ori =  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

var Frontal_Med_Orb_L_L=[0,0.092996204,0.07718723,0,0,0.12186901,0,0,0.440619512,0.329992332,0,0.49733358,0.074112564,0,0.451570602,0,0.165374337,0.098633473,0.065670142,0,0,0,0,0,0.028488662,0,0,0,0,0,0,0,0,0,0.069103671,0,0.709875918,0.899525963,0.113280734,0,0,0.049759094,0.028281722,0.076833058,0,0,0,0,0,0,0,0,0.057143742,0,0,0,0,0,0,0,0.660700261,0.160458294,0.397719771,0.148339541,0,0,0,0,0
]
var Frontal_Med_Orb_L_R=[0,0.31318047,0.181307888,0,0,0.109799137,0,0,0.118093653,0.524235077,1,0.947021577,0.319073015,0.155369967,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.226090918,0.082035597,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.114050006,0.078700474,0.052573979,0.089914648,0,0,0,0,0
]

var Rectus_L_L = [0,0.037768796,0,0,0,0.042781628,0,0,0.651743924,0.193320603,0.289621973,0,0.28229715,0,0.793448336,0,0.211571875,0.038567738,0,0,0,0,0,0,0.031774688,0,0,0,0,0,0,0,0,0,0.031714742,0,0.422496646,0.60681173,0.043950291,0,0,0.067493008,0.03662509,0.117797773,0.036193921,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.265372794,0.101619729,0.199419004,0.515705321,0,0,0,0,0
]
var Rectus_L_R = [0,0.102695661,0.05363878,0,0,0,0,0,0.233538626,0.194475143,0.509551011,1,0.320827483,0.0856458,0.047914894,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.246068164,0.046459939,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.042378169,0,0.044214096,0.20142368,0,0,0,0,0
]

var OFCmed_L_L = [0,0,0.038886758,0,0,0.086494388,0,0,0.248139493,0,0.037982028,0.248432884,0,0.08722685,1,0,0.19528795,0,0,0,0,0,0,0,0.025103922,0,0,0,0,0,0,0,0,0,0,0,0.254906206,0.570083293,0.046837734,0,0,0.055085531,0.028379797,0.104306313,0.028441279,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.311561214,0,0,0,0,0
]
var OFCmed_L_R = [0,0.040944248,0,0,0,0,0,0,0.096144548,0.075388135,0.223311906,0.414449839,0.163124001,0.038055615,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.08945361,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.083752674,0,0,0,0,0
]

var OFCant_L_L=[0,0.041619473,0.080348455,0,0,0.288951105,0,0,0.061066056,0,0,0,0.219824273,0,1,0,0.182653413,0,0,0,0,0,0,0,0.023429668,0,0,0,0,0,0,0,0,0,0,0,0.311746131,0.78631031,0.076531145,0,0,0.062166989,0.031102449,0.101143671,0.028093515,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.089003945,0,0,0,0,0
]
var OFCant_L_R=[0,0.038767278,0,0,0,0,0,0,0,0.069051326,0.181038213,0.220842548,0.078355096,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.039070725,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

var OFCpost_L_L=[0,0.106314991,0.096780179,0.022421408,0.047776994,0.420708824,0,0,0.129281304,0.042177898,0.231425906,0.698266555,1,0.396802633,0,0.150619569,0.219417841,0,0,0.011429979,0,0,0,0,0.011625501,0,0,0,0,0,0,0,0,0,0,0,0.086249314,0.227034321,0.029849611,0,0.014495257,0.038413996,0.021813743,0.05628096,0.01690277,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.045895928,0,0.031413275,0.120033038,0,0,0,0,0
]
var OFCpost_L_R=[0,0,0,0,0,0,0,0,0.032451066,0,0.024372506,0.064662877,0.024303104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.022917123,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.033149836,0,0,0,0,0
]

var OFClat_L_L=[0,0.08134793,0.052667245,0,0.121177168,0.352417095,0,0,0,0.061856307,0.094879579,0,0.161482959,0,0.458092687,0,0.232692763,0,0,0,0,0,0,0,0.017857984,0,0,0,0,0,0,0,0,0,0,0,0.783145303,1,0.319039312,0,0,0.050613493,0.032209594,0.091102293,0.031104502,0,0,0.125690944,0,0,0.05161832,0,0.236511265,0,0,0,0,0.070008852,0,0,0,0,0,0,0,0,0,0,0
]
var OFClat_L_R=[0,0,0,0,0,0,0,0,0,0.090116608,0.087329905,0.051298548,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

var Frontal_Inf_Orb_2_L_L=[0.036239389,0.118770564,0.079787882,0.085211894,0.31305352,0,0.051673764,0.033969879,0,0.113981722,0.051092132,0,0.070755851,0.093793628,0.344156559,0.094789327,0.519247838,0,0,0.020832466,0,0,0,0,0.020239446,0,0,0,0,0.027464326,0,0,0.02769305,0,0,0,0.558011352,1,0.238415546,0,0.046751429,0.060951726,0.062071685,0.076038898,0.048679213,0,0,0.080503382,0.036820884,0,0.029476983,0,0.129869727,0,0,0,0,0.055859725,0,0,0,0,0,0,0,0,0,0,0
]
var Frontal_Inf_Orb_2_L_R=[0,0.052310869,0.050455336,0,0,0,0,0,0,0.095169883,0.038159489,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]

var Frontal_Inf_Oper_L_L=[0.539120856,0.614304915,0.509757631,0,0.641591054,0.134667475,0.3305286,1,0,0.180126222,0,0,0,0,0,0,0.30245295,0.045205097,0,0.024044093,0,0,0,0,0,0,0.033130482,0,0.029013963,0.294066516,0.081042085,0.299411939,0.34961533,0.074149494,0.052423043,0.131809555,0.210431781,0.500659706,0.115572755,0,0.176762614,0.048402418,0.286343662,0.037574632,0.260753543,0,0,0,0.059886551,0.062819928,0.027693049,0,0,0,0,0,0,0.040975569,0,0,0,0,0.091993152,0,0,0,0,0,0
]
var Frontal_Inf_Oper_L_R=[0.052762013,0.119966728,0.147170103,0.078972763,0.050784494,0,0,0.222516756,0,0.074108282,0,0,0,0,0,0,0,0.025067613,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.049684307,0.084966911,0.033147104,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.025759883,0,0,0,0,0,0
]

var Frontal_Inf_Tri_L_L=[0.491495505,0.795844034,1,0.536349869,0,0.413590893,0.142520386,0.489564855,0,0.658708121,0,0,0,0,0,0,0.534084044,0.061134666,0,0,0,0,0,0,0,0,0.043371568,0,0.036883775,0.201908734,0.055049346,0.185150266,0.15362319,0.066236607,0.062983572,0.09032694,0.511259097,0.752714142,0.18079888,0,0.162234526,0.053405486,0.333787543,0.050298588,0.306676498,0,0,0.072826036,0.055099698,0.03163225,0,0,0.086741445,0,0,0,0,0.054402624,0,0,0,0,0.10042351,0,0,0,0,0,0
]
var Frontal_Inf_Tri_L_R=[0,0.27220414,0.375620022,0.090204807,0.21903979,0,0,0.133742879,0,0.380165484,0,0,0,0,0,0,0,0.046348768,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.116749205,0.159888453,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.042582902,0,0,0,0,0,0
]


var Frontal_Med_Orb_R_L=[0,0.271485229,0.157009827,0,0,0.091021043,0,0,0.071103112,0.337513829,1,0.874991722,0.435738133,0.140171103,0.047556937,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.249191725,0.083502519,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.140082744,0.061311834,0.031355078,0.12805538,0,0,0,0,0
]
var Frontal_Med_Orb_R_R=[0,0.098431541,0.063952537,0,0,0.08706183,0,0,0.583158808,0.533797319,0,0.613666908,0.053102151,0,0.252016915,0,0.081937203,0.148317032,0,0.035692989,0,0.044847435,0.024609405,0,0.033575415,0,0,0,0,0,0,0,0,0,0.072395511,0,0.807006302,0.706089784,0.128410243,0,0,0.077085672,0.032386351,0.092239222,0,0,0,0,0,0,0,0,0.07398357,0,0,0,0,0.045356207,0,0,0.797591666,0.16259982,0.31239763,0.208318859,0,0,0,0,0
]

var Rectus_R_L=[0,0.094168308,0.049725696,0,0,0,0,0,0.118166486,0.132288706,0.532231676,0.965066233,0.454492278,0.096097442,0.070910338,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.21769047,0.048238251,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.068146714,0.031795976,0,0.207928739,0,0,0,0,0
]
var Rectus_R_R=[0,0.037816592,0.029589566,0,0,0,0,0,1,0.252511743,0.344884398,0,0.38056237,0,0.503282391,0,0.135093724,0,0,0.037946987,0.026358709,0.089499997,0.019633787,0,0.02782024,0,0,0,0,0,0,0,0,0,0,0,0.469991967,0.444265128,0.044209201,0,0,0.186332589,0.035887368,0.181681188,0.0310862,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.214388977,0.067347111,0.130077934,0.504367362,0,0,0,0,0
]

var OFCmed_R_L=[0,0.047101688,0,0,0,0,0,0,0.054100201,0.057541363,0.257255818,0.444184061,0.256629562,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.090391285,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.099098477,0,0,0,0,0
]
var OFCmed_R_R=[0,0,0.10082462,0,0,0.159337406,0,0,0.557152377,0,0,0.545959123,0,0.227256286,1,0,0.224025411,0,0,0.059818443,0,0.118384209,0.029160703,0,0.038731765,0,0,0,0,0,0,0,0,0,0,0,0.421788041,0.631049238,0.052483309,0,0,0.236291381,0.056591941,0.239105383,0.047951686,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.486855222,0,0,0,0,0
]

var OFCant_R_L=[0,0.061298114,0,0,0,0,0,0,0,0.066738985,0.244768201,0.231691589,0.116982354,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]
var OFCant_R_R=[0,0,0.146707593,0,0,0.307130927,0,0,0.143496885,0,0,0.071824409,0.444046751,0,1,0.10114922,0.239825143,0,0,0.06756939,0,0.094172438,0.035736768,0,0.042531607,0,0,0,0,0,0,0,0,0,0,0,0.657113394,0.982513527,0.11782952,0,0,0.164440805,0.062273262,0.190486134,0.047586874,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.249057741,0,0,0,0,0
]

var OFCpost_R_L=[0,0,0,0,0,0,0,0,0,0,0,0.066337934,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]
var OFCpost_R_R=[0,0.071915816,0.122689973,0.03411938,0.058637135,0.496763868,0.044021858,0,0.112164673,0,0.203191165,0.722014668,1,0.511784594,0,0.165244551,0.209585514,0,0,0.027726995,0,0.023403756,0,0,0.018745112,0,0,0,0,0,0,0,0,0,0,0,0.097598103,0.373708758,0.041144895,0,0,0.066894465,0.034455165,0.063442234,0.02131284,0,0,0,0,0,0,0,0,0,0,0,0,0.021262758,0,0,0,0,0,0.051139054,0,0,0,0,0
]


var OFClat_R_L=[0,0,0,0,0,0,0,0,0,0,0.052911876,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]
var OFClat_R_R=[0,0.04679351,0.036435929,0.054713521,0.095717798,0.380220944,0.0524605,0,0,0,0,0,0.151476691,0.123889269,0.395467767,0,0.167809718,0,0,0.044682225,0,0.048124181,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.680282242,1,0.352468712,0,0,0.064945703,0.039233662,0.078896104,0.028073145,0,0,0.129716981,0,0,0,0,0.251208157,0,0,0,0,0.125313283,0,0,0,0,0,0,0,0,0,0,0
]


var Frontal_Inf_Orb_2_R_L=[0,0.035324959,0.036306303,0,0,0,0,0,0,0.051957906,0.041142765,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]
var Frontal_Inf_Orb_2_R_R=[0.042491111,0.111408608,0.08204452,0.124185937,0.259665495,0,0.102361454,0.030817,0,0.112272355,0,0,0.074052063,0.073051675,0.230871019,0.07383657,0.291607518,0,0,0.03665428,0,0.025420875,0,0,0.024691585,0,0,0,0,0.042082521,0,0.032134094,0.067851201,0,0,0,0.505846402,1,0.213466293,0,0.051767897,0.063609335,0.073910345,0.070372893,0.044501192,0,0,0.065772337,0.032875846,0,0,0,0.123772984,0,0,0,0,0.068941718,0,0,0,0,0,0,0,0,0,0,0
]

var Frontal_Inf_Oper_R_L=[0.089105573,0.174273777,0.248836194,0.092733913,0.12670713,0,0,0.334572298,0,0.139685017,0,0,0,0,0,0,0.033076823,0.029802731,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.032947969,0.09151192,0.146974133,0.054309123,0,0,0,0,0,0,0,0,0,0.03796328,0,0,0,0,0,0,0,0,0,0,0,0,0,0.037590244,0,0,0,0,0,0
]
var Frontal_Inf_Oper_R_R=[0.737820029,0.832299033,0.866534768,0,1,0.257847164,0.417960753,0.963345072,0,0.295655751,0,0,0,0,0.03292384,0,0.299539506,0.085878258,0,0.021723059,0,0,0,0,0,0,0.027177887,0,0,0.3580048,0.09266053,0.340652526,0.43877162,0.207479329,0.065802628,0.047235432,0.482899246,0.831110543,0.169013221,0,0.149195514,0.03087722,0.323045995,0.029826322,0.191588115,0,0,0.040244356,0.0757186,0.048169557,0.023975425,0,0.048567258,0,0,0,0,0.051056596,0,0,0,0,0.117113121,0,0,0,0,0,0
]

var Frontal_Inf_Tri_R_L=[0,0.191380782,0.27768449,0.04165008,0.21489081,0,0,0.113214359,0,0.293617255,0,0,0,0,0,0,0.038995149,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.107877603,0.133980514,0.045549983,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.031543786,0,0,0,0,0,0
]
var Frontal_Inf_Tri_R_R=[0.338545853,0.64393618,0.865346825,0.698430914,0,0.376554323,0.191123902,0.337428411,0,0.540254217,0,0,0,0,0,0,0.32885405,0.076618125,0,0.028151796,0,0,0,0,0.019813944,0,0.021747105,0,0,0.188652127,0.051618667,0.181512173,0.247780683,0.1239957,0.06183814,0.029167477,0.62963839,1,0.224804776,0,0.130529656,0.040428976,0.284132563,0.0434254,0.166751648,0,0,0.076825131,0.062937967,0.025290486,0,0,0.116287283,0,0,0,0,0.077558521,0,0,0,0,0.110847231,0,0,0,0,0,0
]
// var L_axis = ['Precentral_L', 'Frontal_Sup_2_L', 'Frontal_Mid_2_L', 'Frontal_Inf_Oper_L', 'Frontal_Inf_Tri_L', 'Frontal_Inf_Orb_2_L', 'Rolandic_Oper_L', 'Supp_Motor_Area_L', 'Olfactory_L', 'Frontal_Sup_Medial_L', 'Frontal_Med_Orb_L', 'Rectus_L', 'OFCmed_L', 'OFCant_L', 'OFCpost_L', 'OFClat_L', 'Insula_L', 'Cingulate_Mid_L', 'Cingulate_Post_L', 'Hippocampus_L', 'ParaHippocampal_L', 'Amygdala_L', 'Calcarine_L', 'Cuneus_L', 'Lingual_L', 'Occipital_Sup_L', 'Occipital_Mid_L', 'Occipital_Inf_L', 'Fusiform_L', 'Postcentral_L', 'Parietal_Sup_L', 'Parietal_Inf_L', 'SupraMarginal_L', 'Angular_L', 'Precuneus_L', 'Paracentral_Lobule_L ', 'Caudate_L ', 'Putamen_L', 'Pallidum_L', 'Heschl_L', 'Temporal_Sup_L', 'Temporal_Pole_Sup_L', 'Temporal_Mid_L', 'Temporal_Pole_Mid_L', 'Temporal_Inf_L', 'Thal_AV_L', 'Thal_LP_L', 'Thal_VA_L', 'Thal_VL_L', 'Thal_VPL_L', 'Thal_IL_L', 'Thal_Re_L', 'Thal_MDm_L', 'Thal_MDl_L', 'Thal_LGN_L', 'Thal_MGN_L', 'Thal_PuA_L', 'Thal_PuM_L', 'Thal_PuL_L', 'Thal_PuI_L', 'ACC_sub_L', 'ACC_pre_L', 'ACC_sup_L', 'N_Acc_L', 'VTA_L', 'SN_pc_L', 'SN_pr_L', 'Red_N_L', 'LC_L'
// ]
var R_axis = ["Precentral gyrus","Superior frontal gyrus (dorsolateral)","Middle frontal gyrus","Inferior frontal gyrus (opercular)","Inferior frontal gyrus (triangular)","Inferior frontal gyrus (pars orbitalis)","Rolandic operculum","Supplementary motor area","Olfactory cortex","Superior frontal gyrus (medial)","Superior frontal gyrus (medial orbital)","Gyrus rectus","Medial orbital gyrus","Anterior orbital gyrus","Posterior orbital gyrus","Lateral orbital gyrus","Insula","Middle cingulate gyrus","Posterior cingulate gyrus","Hippocampus","Parahippocampal gyrus","Amygdala","Calcarine fissure","Cuneus","Lingual gyrus","Superior occipital gyrus","Middle occipital gyrus","Inferior occipital gyrus","Fusiform gyrus","Postcentral gyrus","Superior parietal gyrus","* Inferior parietal gyrus","SupraMarginal gyrus","Angular gyrus","Precuneus","Paracentral lobule","Caudate nucleus","Putamen","Pallidum","Heschl's gyrus","Superior temporal gyrus","Superior temporal gyrus (temporal pole)","Middle temporal gyrus","Middle temporal gyrus (temporal pole)","Inferior temporal gyrus","Thalamus, Anteroventral Nucleus","Lateral posterior","Ventral anterior","Ventral lateral","Ventral posterolateral","Intralaminar","Reuniens","Mediodorsal medial magnocellular","Mediodorsal lateral parvocellular","Lateral geniculate","Medial Geniculate","Pulvinar anterior","Pulvinar media","Pulvinar lateral","Pulvinar inferior","Anterior cingulate cortex (subgenual)","Anterior cingulate cortex (pregenual)","Anterior cingulate cortex (supracallosal)","Nucleus accumbens","Ventral tegmental area","Substantia nigra (pars compacta)","Substantia nigra (pars reticulata)","Red nucleus","Locus coeruleus"]

// ------------------
// 導入EXCEL OR TXT




var margin = { left: 70 };
// ----------------------------------------------------------

var colorScale = d3.scale.linear()
.domain([0, 1])
.range(["white", "red"]);

// 創建第一個 SVG
var color_chart1 = d3.select("body")
.append("svg")
.attr("class", "chart")
.attr("width", col_width * cols+margin.left)
.attr("height", row_height * rows)
.style("margin-left", margin.left + "px");
//---------------------------


function updateLegend1(newData) {
// 綁定數據
var appending = color_chart1.selectAll('rect')
  .data(newData);

// 添加新元素
appending.enter().append('rect');

// 更新現有元素
appending.transition()
  .duration(0)
  .attr("x", function(d,i) { return Math.floor(i / rows) * col_width; })
  .attr("width", col_width)
  .attr("height", row_height)
  .attr("fill", function(d) { return colorScale(d); });

// 刪除舊元素
appending.exit().remove();
}

// 生成初始圖表
updateLegend1(ori);
document.write('<br>');


// ------------------------------------
// var axis1 = d3.select("body")
// .append("svg")
// .attr("class", "laxis")
// .attr("width",1820)
// .attr("height",100);


// let x = 0;
//   let Laxis="";
//   for (let i = 0; i < L_axis.length; i++)
//   {
//    x = 15*i;
//   Laxis += '<text text-anchor="middle" transform="rotate(270,30 20)translate(0,'+ x+')">' + L_axis[i] + '</text>';    
//   }

//   document.querySelector(".laxis").innerHTML = Laxis;


// ----------------------------------------
// // 創建第二個 SVG
var color_chart2 = d3.select("body")
.append("svg")
.attr("class", "chart2")
.attr("width", col_width * cols+margin.left)
.attr("height", row_height * rows)
.style("margin-left", margin.left + "px");
function updateLegend2(newData) {
// 綁定數據
var appending = color_chart2.selectAll('rect')
  .data(newData);

// 添加新元素
appending.enter().append('rect');

// 更新現有元素
appending.transition()
  .duration(0)
  .attr("x", function(d,i) { return Math.floor(i / rows) * col_width; })
  .attr("width", col_width)
  .attr("height", row_height)
  .attr("fill", function(d) { return colorScale(d); });

// 刪除舊元素
appending.exit().remove();
}

// 生成初始圖表
updateLegend2(ori);
document.write('<br>');






// // 處理下拉菜單的 onchange 事件
d3.select('#dropdown')
.on('change', function() {
var newData = document.getElementById("dropdown").value;

  // 更新兩個圖表上的數據
  updateLegend1(eval(newData+"_L"));
  updateLegend2(eval(newData+"_R"));
});

//----------------------



var axis2 = d3.select("body")
.append("svg")
.attr("class", "raxis")
.attr("width",1820)
.attr("height",200);
let y = 0;
  let Raxis="";
  for (let i = 0; i < R_axis.length; i++)
  {
   y = 15*i;
  Raxis += '<text text-anchor="end" transform="rotate(270,100 20)translate(120,'+ y+')">' + R_axis[i] + '</text>';    
  }

  document.querySelector(".raxis").innerHTML = Raxis;
document.write('<br>');
