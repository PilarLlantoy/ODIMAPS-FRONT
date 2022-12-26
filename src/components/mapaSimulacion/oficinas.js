const oficinas = [
  {
    "ubigeo": "010201",
    "departamento": "AMAZONAS",
    "provincia": "BAGUA",
    "latitud": -5.63906152,
    "longitud": -78.53166353,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": "010301",
    "departamento": "AMAZONAS",
    "provincia": "BONGARA",
    "latitud": -5.90432416,
    "longitud": -77.79809916,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": "010101",
    "departamento": "AMAZONAS",
    "provincia": "CHACHAPOYAS",
    "latitud": -6.22940827,
    "longitud": -77.8724339,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": "010401",
    "departamento": "AMAZONAS",
    "provincia": "CONDORCANQUI",
    "latitud": -4.59234702,
    "longitud": -77.86447689,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": "010501",
    "departamento": "AMAZONAS",
    "provincia": "LUYA",
    "latitud": -6.13903176,
    "longitud": -77.95195967,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": "010601",
    "departamento": "AMAZONAS",
    "provincia": "RODRIGUEZ DE MENDOZA",
    "latitud": -6.39590702,
    "longitud": -77.4821999,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": "010701",
    "departamento": "AMAZONAS",
    "provincia": "UTCUBAMBA",
    "latitud": -5.75441765,
    "longitud": -78.4422019,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": "020201",
    "departamento": "ANCASH",
    "provincia": "AIJA",
    "latitud": -9.78020557,
    "longitud": -77.61071813,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020301",
    "departamento": "ANCASH",
    "provincia": "ANTONIO RAYMONDI",
    "latitud": -9.10103564,
    "longitud": -77.01682676,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020401",
    "departamento": "ANCASH",
    "provincia": "ASUNCION",
    "latitud": -9.162092849,
    "longitud": -77.366042511,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020501",
    "departamento": "ANCASH",
    "provincia": "BOLOGNESI",
    "latitud": -10.15206613,
    "longitud": -77.1567994,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020601",
    "departamento": "ANCASH",
    "provincia": "CARHUAZ",
    "latitud": -9.28176454,
    "longitud": -77.64629654,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020701",
    "departamento": "ANCASH",
    "provincia": "CARLOS FERMIN FITZCARRALD",
    "latitud": -9.09435746,
    "longitud": -77.32912977,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020801",
    "departamento": "ANCASH",
    "provincia": "CASMA",
    "latitud": -9.47607993,
    "longitud": -78.30544286,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020901",
    "departamento": "ANCASH",
    "provincia": "CORONGO",
    "latitud": -8.57042256,
    "longitud": -77.89804083,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "020101",
    "departamento": "ANCASH",
    "provincia": "HUARAZ",
    "latitud": -9.529975349,
    "longitud": -77.528862722,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021001",
    "departamento": "ANCASH",
    "provincia": "HUARI",
    "latitud": -9.34740104,
    "longitud": -77.17095755,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021101",
    "departamento": "ANCASH",
    "provincia": "HUARMEY",
    "latitud": -10.06870661,
    "longitud": -78.15227117,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021201",
    "departamento": "ANCASH",
    "provincia": "HUAYLAS",
    "latitud": -9.04858755,
    "longitud": -77.81006258,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021301",
    "departamento": "ANCASH",
    "provincia": "MARISCAL LUZURIAGA",
    "latitud": -8.8649466,
    "longitud": -77.35749107,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021401",
    "departamento": "ANCASH",
    "provincia": "OCROS",
    "latitud": -10.40346472,
    "longitud": -77.39679143,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021501",
    "departamento": "ANCASH",
    "provincia": "PALLASCA",
    "latitud": -8.39290941,
    "longitud": -78.00901572,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021601",
    "departamento": "ANCASH",
    "provincia": "POMABAMBA",
    "latitud": -8.8205315,
    "longitud": -77.4602514,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021701",
    "departamento": "ANCASH",
    "provincia": "RECUAY",
    "latitud": -9.722084882,
    "longitud": -77.45614687,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021801",
    "departamento": "ANCASH",
    "provincia": "SANTA",
    "latitud": -9.07454176,
    "longitud": -78.59357234,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "021901",
    "departamento": "ANCASH",
    "provincia": "SIHUAS",
    "latitud": -8.55458704,
    "longitud": -77.6312206,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "022001",
    "departamento": "ANCASH",
    "provincia": "YUNGAY",
    "latitud": -9.13989101,
    "longitud": -77.744906,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "030101",
    "departamento": "APURIMAC",
    "provincia": "ABANCAY",
    "latitud": -13.6373465,
    "longitud": -72.87887764,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "030201",
    "departamento": "APURIMAC",
    "provincia": "ANDAHUAYLAS",
    "latitud": -13.65640891,
    "longitud": -73.3899109,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "030301",
    "departamento": "APURIMAC",
    "provincia": "ANTABAMBA",
    "latitud": -14.36475603,
    "longitud": -72.87779202,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "030401",
    "departamento": "APURIMAC",
    "provincia": "AYMARAES",
    "latitud": -14.29471191,
    "longitud": -73.24426751,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "030601",
    "departamento": "APURIMAC",
    "provincia": "CHINCHEROS",
    "latitud": -13.51802722,
    "longitud": -73.72280447,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "030501",
    "departamento": "APURIMAC",
    "provincia": "COTABAMBAS",
    "latitud": -13.94619465,
    "longitud": -72.1744466,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "030701",
    "departamento": "APURIMAC",
    "provincia": "GRAU",
    "latitud": -14.10538044,
    "longitud": -72.70764095,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "040101",
    "departamento": "AREQUIPA",
    "provincia": "AREQUIPA",
    "latitud": -16.39881421,
    "longitud": -71.537019649,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "040201",
    "departamento": "AREQUIPA",
    "provincia": "CAMANA",
    "latitud": -16.62491755,
    "longitud": -72.71161298,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "040301",
    "departamento": "AREQUIPA",
    "provincia": "CARAVELI",
    "latitud": -15.77213819,
    "longitud": -73.36540868,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "040401",
    "departamento": "AREQUIPA",
    "provincia": "CASTILLA",
    "latitud": -16.07660363,
    "longitud": -72.49208649,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "040501",
    "departamento": "AREQUIPA",
    "provincia": "CAYLLOMA",
    "latitud": -15.63674194,
    "longitud": -71.60198249,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "040601",
    "departamento": "AREQUIPA",
    "provincia": "CONDESUYOS",
    "latitud": -15.8392378,
    "longitud": -72.65146622,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "040701",
    "departamento": "AREQUIPA",
    "provincia": "ISLAY",
    "latitud": -17.0292752,
    "longitud": -72.01544312,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "040801",
    "departamento": "AREQUIPA",
    "provincia": "LA UNION",
    "latitud": -15.21290805,
    "longitud": -72.88816225,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "050201",
    "departamento": "AYACUCHO",
    "provincia": "CANGALLO",
    "latitud": -13.62932462,
    "longitud": -74.14367707,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050101",
    "departamento": "AYACUCHO",
    "provincia": "HUAMANGA",
    "latitud": -13.160270337,
    "longitud": -74.225776072,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050301",
    "departamento": "AYACUCHO",
    "provincia": "HUANCA SANCOS",
    "latitud": -13.91988366,
    "longitud": -74.33388289,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050401",
    "departamento": "AYACUCHO",
    "provincia": "HUANTA",
    "latitud": -12.939913448,
    "longitud": -74.247891213,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050501",
    "departamento": "AYACUCHO",
    "provincia": "LA MAR",
    "latitud": -13.01266571,
    "longitud": -73.98111076,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050601",
    "departamento": "AYACUCHO",
    "provincia": "LUCANAS",
    "latitud": -14.69404253,
    "longitud": -74.12419819,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050701",
    "departamento": "AYACUCHO",
    "provincia": "PARINACOCHAS",
    "latitud": -15.01697752,
    "longitud": -73.78089374,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050801",
    "departamento": "AYACUCHO",
    "provincia": "PAUCAR DEL SARA SARA",
    "latitud": -15.27887321,
    "longitud": -73.34436311,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "050901",
    "departamento": "AYACUCHO",
    "provincia": "SUCRE",
    "latitud": -14.01125749,
    "longitud": -73.83884087,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "051001",
    "departamento": "AYACUCHO",
    "provincia": "VICTOR FAJARDO",
    "latitud": -13.75245483,
    "longitud": -74.06630109,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "051101",
    "departamento": "AYACUCHO",
    "provincia": "VILCAS HUAMAN",
    "latitud": -13.65302704,
    "longitud": -73.95386777,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060201",
    "departamento": "CAJAMARCA",
    "provincia": "CAJABAMBA",
    "latitud": -7.62374351,
    "longitud": -78.04600251,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060101",
    "departamento": "CAJAMARCA",
    "provincia": "CAJAMARCA",
    "latitud": -7.15706855,
    "longitud": -78.51752139,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060301",
    "departamento": "CAJAMARCA",
    "provincia": "CELENDIN",
    "latitud": -6.86553233,
    "longitud": -78.14556339,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060401",
    "departamento": "CAJAMARCA",
    "provincia": "CHOTA",
    "latitud": -6.56157453,
    "longitud": -78.65024461,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060501",
    "departamento": "CAJAMARCA",
    "provincia": "CONTUMAZA",
    "latitud": -7.36612935,
    "longitud": -78.80462726,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060601",
    "departamento": "CAJAMARCA",
    "provincia": "CUTERVO",
    "latitud": -6.37735547,
    "longitud": -78.81831305,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060701",
    "departamento": "CAJAMARCA",
    "provincia": "HUALGAYOC",
    "latitud": -6.67954209,
    "longitud": -78.51914578,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060801",
    "departamento": "CAJAMARCA",
    "provincia": "JAEN",
    "latitud": -5.70880322,
    "longitud": -78.80782547,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "060901",
    "departamento": "CAJAMARCA",
    "provincia": "SAN IGNACIO",
    "latitud": -5.14625044,
    "longitud": -79.00497127,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "061001",
    "departamento": "CAJAMARCA",
    "provincia": "SAN MARCOS",
    "latitud": -7.33606865,
    "longitud": -78.17047055,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "061101",
    "departamento": "CAJAMARCA",
    "provincia": "SAN MIGUEL",
    "latitud": -7.00044888,
    "longitud": -78.85143349,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "061201",
    "departamento": "CAJAMARCA",
    "provincia": "SAN PABLO",
    "latitud": -7.11834136,
    "longitud": -78.82337069,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "061301",
    "departamento": "CAJAMARCA",
    "provincia": "SANTA CRUZ",
    "latitud": -6.62613957,
    "longitud": -78.94438562,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "070101",
    "departamento": "CALLAO",
    "provincia": "CALLAO",
    "latitud": -12.06034168,
    "longitud": -77.14068058,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": "080201",
    "departamento": "CUSCO",
    "provincia": "ACOMAYO",
    "latitud": -13.91920265,
    "longitud": -71.68349439,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080301",
    "departamento": "CUSCO",
    "provincia": "ANTA",
    "latitud": -13.47159316,
    "longitud": -72.14879046,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080401",
    "departamento": "CUSCO",
    "provincia": "CALCA",
    "latitud": -13.32174829,
    "longitud": -71.95605013,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080501",
    "departamento": "CUSCO",
    "provincia": "CANAS",
    "latitud": -14.21694329,
    "longitud": -71.43203327,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080601",
    "departamento": "CUSCO",
    "provincia": "CANCHIS",
    "latitud": -14.272991125,
    "longitud": -71.226499142,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080701",
    "departamento": "CUSCO",
    "provincia": "CHUMBIVILCAS",
    "latitud": -14.45016903,
    "longitud": -72.08208239,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080101",
    "departamento": "CUSCO",
    "provincia": "CUSCO",
    "latitud": -13.51670179,
    "longitud": -71.97876215,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080801",
    "departamento": "CUSCO",
    "provincia": "ESPINAR",
    "latitud": -14.79311928,
    "longitud": -71.41288314,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "080901",
    "departamento": "CUSCO",
    "provincia": "LA CONVENCION",
    "latitud": -12.86332266,
    "longitud": -72.69287733,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "081001",
    "departamento": "CUSCO",
    "provincia": "PARURO",
    "latitud": -13.76132304,
    "longitud": -71.84744051,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "081101",
    "departamento": "CUSCO",
    "provincia": "PAUCARTAMBO",
    "latitud": -13.31780491,
    "longitud": -71.59672352,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "081201",
    "departamento": "CUSCO",
    "provincia": "QUISPICANCHI",
    "latitud": -13.687855135,
    "longitud": -71.625581633,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "081301",
    "departamento": "CUSCO",
    "provincia": "URUBAMBA",
    "latitud": -13.30593022,
    "longitud": -72.11599046,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "090201",
    "departamento": "HUANCAVELICA",
    "provincia": "ACOBAMBA",
    "latitud": -12.84432478,
    "longitud": -74.57118027,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "090301",
    "departamento": "HUANCAVELICA",
    "provincia": "ANGARAES",
    "latitud": -12.98304978,
    "longitud": -74.71854352,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "090401",
    "departamento": "HUANCAVELICA",
    "provincia": "CASTROVIRREYNA",
    "latitud": -13.28333829,
    "longitud": -75.31914965,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "090501",
    "departamento": "HUANCAVELICA",
    "provincia": "CHURCAMPA",
    "latitud": -12.73925898,
    "longitud": -74.38755656,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "090101",
    "departamento": "HUANCAVELICA",
    "provincia": "HUANCAVELICA",
    "latitud": -12.78719172,
    "longitud": -74.97310128,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "090601",
    "departamento": "HUANCAVELICA",
    "provincia": "HUAYTARA",
    "latitud": -13.6044208,
    "longitud": -75.35306965,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": "090701",
    "departamento": "HUANCAVELICA",
    "provincia": "TAYACAJA",
    "latitud": -12.3987926,
    "longitud": -74.86842175,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100201,
    "departamento": "HUANUCO",
    "provincia": "AMBO",
    "latitud": -10.1292297,
    "longitud": -76.20446278,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100301,
    "departamento": "HUANUCO",
    "provincia": "DOS DE MAYO",
    "latitud": -9.82853207,
    "longitud": -76.80130126,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100401,
    "departamento": "HUANUCO",
    "provincia": "HUACAYBAMBA",
    "latitud": -9.03786568,
    "longitud": -76.9526168,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100501,
    "departamento": "HUANUCO",
    "provincia": "HUAMALIES",
    "latitud": -9.550005175,
    "longitud": -76.815574479,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100101,
    "departamento": "HUANUCO",
    "provincia": "HUANUCO",
    "latitud": -9.92954506,
    "longitud": -76.23964566,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 101001,
    "departamento": "HUANUCO",
    "provincia": "LAURICOCHA",
    "latitud": -10.07805837,
    "longitud": -76.63161342,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100601,
    "departamento": "HUANUCO",
    "provincia": "LEONCIO PRADO",
    "latitud": -9.29838119,
    "longitud": -76.00028442,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100701,
    "departamento": "HUANUCO",
    "provincia": "MARAÑON",
    "latitud": -8.60439329,
    "longitud": -77.14935042,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100801,
    "departamento": "HUANUCO",
    "provincia": "PACHITEA",
    "latitud": -9.89747595,
    "longitud": -75.99429652,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 100901,
    "departamento": "HUANUCO",
    "provincia": "PUERTO INCA",
    "latitud": -9.37935836,
    "longitud": -74.96594262,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 101101,
    "departamento": "HUANUCO",
    "provincia": "YAROWILCA",
    "latitud": -9.85874366,
    "longitud": -76.60839481,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 110201,
    "departamento": "ICA",
    "provincia": "CHINCHA",
    "latitud": -13.41759332,
    "longitud": -76.13260585,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 110101,
    "departamento": "ICA",
    "provincia": "ICA",
    "latitud": -14.06393532,
    "longitud": -75.72920238,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 110301,
    "departamento": "ICA",
    "provincia": "NASCA",
    "latitud": -14.8275594,
    "longitud": -74.93704615,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 110401,
    "departamento": "ICA",
    "provincia": "PALPA",
    "latitud": -14.53374904,
    "longitud": -75.18513226,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 110501,
    "departamento": "ICA",
    "provincia": "PISCO",
    "latitud": -13.70989392,
    "longitud": -76.20320928,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 120301,
    "departamento": "JUNIN",
    "provincia": "CHANCHAMAYO",
    "latitud": -11.05598621,
    "longitud": -75.32820502,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120901,
    "departamento": "JUNIN",
    "provincia": "CHUPACA",
    "latitud": -12.06171144,
    "longitud": -75.2876197,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120201,
    "departamento": "JUNIN",
    "provincia": "CONCEPCION",
    "latitud": -11.91846227,
    "longitud": -75.3129636,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120101,
    "departamento": "JUNIN",
    "provincia": "HUANCAYO",
    "latitud": -12.0679591,
    "longitud": -75.21005132,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120401,
    "departamento": "JUNIN",
    "provincia": "JAUJA",
    "latitud": -11.77521628,
    "longitud": -75.50052527,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120501,
    "departamento": "JUNIN",
    "provincia": "JUNIN",
    "latitud": -11.16104266,
    "longitud": -75.99307889,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120601,
    "departamento": "JUNIN",
    "provincia": "SATIPO",
    "latitud": -11.25390265,
    "longitud": -74.63700127,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120701,
    "departamento": "JUNIN",
    "provincia": "TARMA",
    "latitud": -11.41991821,
    "longitud": -75.68777039,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 120801,
    "departamento": "JUNIN",
    "provincia": "YAULI",
    "latitud": -11.51659417,
    "longitud": -75.90003919,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 130201,
    "departamento": "LA LIBERTAD",
    "provincia": "ASCOPE",
    "latitud": -7.71379065,
    "longitud": -79.10751502,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130301,
    "departamento": "LA LIBERTAD",
    "provincia": "BOLIVAR",
    "latitud": -7.15387178,
    "longitud": -77.70263615,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130401,
    "departamento": "LA LIBERTAD",
    "provincia": "CHEPEN",
    "latitud": -7.22728914,
    "longitud": -79.42963328,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 131101,
    "departamento": "LA LIBERTAD",
    "provincia": "GRAN CHIMU",
    "latitud": -7.47945577,
    "longitud": -78.81942291,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130501,
    "departamento": "LA LIBERTAD",
    "provincia": "JULCAN",
    "latitud": -8.0425289,
    "longitud": -78.48663451,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130601,
    "departamento": "LA LIBERTAD",
    "provincia": "OTUZCO",
    "latitud": -7.90250299,
    "longitud": -78.56569871,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130701,
    "departamento": "LA LIBERTAD",
    "provincia": "PACASMAYO",
    "latitud": -7.43205652,
    "longitud": -79.50427765,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130801,
    "departamento": "LA LIBERTAD",
    "provincia": "PATAZ",
    "latitud": -8.27593502,
    "longitud": -77.29632102,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130901,
    "departamento": "LA LIBERTAD",
    "provincia": "SANCHEZ CARRION",
    "latitud": -7.815552087,
    "longitud": -78.048623458,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 131001,
    "departamento": "LA LIBERTAD",
    "provincia": "SANTIAGO DE CHUCO",
    "latitud": -8.14536716,
    "longitud": -78.17327133,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 130101,
    "departamento": "LA LIBERTAD",
    "provincia": "TRUJILLO",
    "latitud": -8.11176389,
    "longitud": -79.02868652,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 131201,
    "departamento": "LA LIBERTAD",
    "provincia": "VIRU",
    "latitud": -8.41427715,
    "longitud": -78.75222202,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 140101,
    "departamento": "LAMBAYEQUE",
    "provincia": "CHICLAYO",
    "latitud": -6.77150465,
    "longitud": -79.83866166,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 140201,
    "departamento": "LAMBAYEQUE",
    "provincia": "FERREÑAFE",
    "latitud": -6.63922698,
    "longitud": -79.78803991,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 140301,
    "departamento": "LAMBAYEQUE",
    "provincia": "LAMBAYEQUE",
    "latitud": -6.70410837,
    "longitud": -79.90620927,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150201,
    "departamento": "LIMA",
    "provincia": "BARRANCA",
    "latitud": -10.75402494,
    "longitud": -77.76079584,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150501,
    "departamento": "LIMA",
    "provincia": "CAÑETE",
    "latitud": -13.07775016,
    "longitud": -76.38742903,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150301,
    "departamento": "LIMA",
    "provincia": "CAJATAMBO",
    "latitud": -10.4726833,
    "longitud": -76.99300134,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150401,
    "departamento": "LIMA",
    "provincia": "CANTA",
    "latitud": -11.46702028,
    "longitud": -76.62473724,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150601,
    "departamento": "LIMA",
    "provincia": "HUARAL",
    "latitud": -11.495407273,
    "longitud": -77.207186976,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150701,
    "departamento": "LIMA",
    "provincia": "HUAROCHIRI",
    "latitud": -11.84476441,
    "longitud": -76.38606378,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150801,
    "departamento": "LIMA",
    "provincia": "HUAURA",
    "latitud": -11.10855265,
    "longitud": -77.61040152,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150101,
    "departamento": "LIMA",
    "provincia": "LIMA",
    "latitud": -12.04591952,
    "longitud": -77.03049615,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 150901,
    "departamento": "LIMA",
    "provincia": "OYON",
    "latitud": -10.66810336,
    "longitud": -76.77306206,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 151001,
    "departamento": "LIMA",
    "provincia": "YAUYOS",
    "latitud": -12.45973429,
    "longitud": -75.91868825,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 160201,
    "departamento": "LORETO",
    "provincia": "ALTO AMAZONAS",
    "latitud": -5.895268749,
    "longitud": -76.104405351,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 160701,
    "departamento": "LORETO",
    "provincia": "DATEM DEL MARAÑON",
    "latitud": -4.8315686,
    "longitud": -76.5545112,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 160301,
    "departamento": "LORETO",
    "provincia": "LORETO",
    "latitud": -4.50661633,
    "longitud": -73.5754598,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 160401,
    "departamento": "LORETO",
    "provincia": "MARISCAL RAMON CASTILLA",
    "latitud": -3.9059914,
    "longitud": -70.51679052,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 160101,
    "departamento": "LORETO",
    "provincia": "MAYNAS",
    "latitud": -3.74934598,
    "longitud": -73.24436621,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 160801,
    "departamento": "LORETO",
    "provincia": "PUTUMAYO",
    "latitud": -2.44719667,
    "longitud": -72.66825135,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 160501,
    "departamento": "LORETO",
    "provincia": "REQUENA",
    "latitud": -5.06369292,
    "longitud": -73.856386,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 160601,
    "departamento": "LORETO",
    "provincia": "UCAYALI",
    "latitud": -7.35052054,
    "longitud": -75.00906072,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 170201,
    "departamento": "MADRE DE DIOS",
    "provincia": "MANU",
    "latitud": -12.83618166,
    "longitud": -71.35890272,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 170301,
    "departamento": "MADRE DE DIOS",
    "provincia": "TAHUAMANU",
    "latitud": -10.94494366,
    "longitud": -69.57741764,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 170101,
    "departamento": "MADRE DE DIOS",
    "provincia": "TAMBOPATA",
    "latitud": -12.59421679,
    "longitud": -69.17624914,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 180201,
    "departamento": "MOQUEGUA",
    "provincia": "GENERAL SANCHEZ CERRO",
    "latitud": -16.67392404,
    "longitud": -70.97005505,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 180301,
    "departamento": "MOQUEGUA",
    "provincia": "ILO",
    "latitud": -17.645825113,
    "longitud": -71.345312908,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 180101,
    "departamento": "MOQUEGUA",
    "provincia": "MARISCAL NIETO",
    "latitud": -17.19380361,
    "longitud": -70.93469733,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 190201,
    "departamento": "PASCO",
    "provincia": "DANIEL ALCIDES CARRION",
    "latitud": -10.49133323,
    "longitud": -76.51662556,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 190301,
    "departamento": "PASCO",
    "provincia": "OXAPAMPA",
    "latitud": -10.57428264,
    "longitud": -75.40462179,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 190101,
    "departamento": "PASCO",
    "provincia": "PASCO",
    "latitud": -10.683662121,
    "longitud": -76.256181885,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 200201,
    "departamento": "PIURA",
    "provincia": "AYABACA",
    "latitud": -4.64022578,
    "longitud": -79.71523023,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 200301,
    "departamento": "PIURA",
    "provincia": "HUANCABAMBA",
    "latitud": -5.23900158,
    "longitud": -79.4506261,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 200401,
    "departamento": "PIURA",
    "provincia": "MORROPON",
    "latitud": -5.09655103,
    "longitud": -80.16085341,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 200501,
    "departamento": "PIURA",
    "provincia": "PAITA",
    "latitud": -5.08512676,
    "longitud": -81.11366746,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 200101,
    "departamento": "PIURA",
    "provincia": "PIURA",
    "latitud": -5.1971641,
    "longitud": -80.62654749,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 200801,
    "departamento": "PIURA",
    "provincia": "SECHURA",
    "latitud": -5.55754525,
    "longitud": -80.82227528,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 200601,
    "departamento": "PIURA",
    "provincia": "SULLANA",
    "latitud": -4.8900439,
    "longitud": -80.68738053,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 200701,
    "departamento": "PIURA",
    "provincia": "TALARA",
    "latitud": -4.57969115,
    "longitud": -81.27182053,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 210201,
    "departamento": "PUNO",
    "provincia": "AZANGARO",
    "latitud": -14.90852428,
    "longitud": -70.19534289,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210301,
    "departamento": "PUNO",
    "provincia": "CARABAYA",
    "latitud": -14.06845301,
    "longitud": -70.4313564,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210401,
    "departamento": "PUNO",
    "provincia": "CHUCUITO",
    "latitud": -16.21332269,
    "longitud": -69.45923452,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210501,
    "departamento": "PUNO",
    "provincia": "EL COLLAO",
    "latitud": -16.08686592,
    "longitud": -69.63859877,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210601,
    "departamento": "PUNO",
    "provincia": "HUANCANE",
    "latitud": -15.2041154,
    "longitud": -69.76143802,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210701,
    "departamento": "PUNO",
    "provincia": "LAMPA",
    "latitud": -15.36467853,
    "longitud": -70.36754564,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210801,
    "departamento": "PUNO",
    "provincia": "MELGAR",
    "latitud": -14.88182942,
    "longitud": -70.59009038,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210901,
    "departamento": "PUNO",
    "provincia": "MOHO",
    "latitud": -15.36071216,
    "longitud": -69.49989614,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 210101,
    "departamento": "PUNO",
    "provincia": "PUNO",
    "latitud": -15.84061229,
    "longitud": -70.02800689,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 211001,
    "departamento": "PUNO",
    "provincia": "SAN ANTONIO DE PUTINA",
    "latitud": -14.91416004,
    "longitud": -69.86856039,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 211101,
    "departamento": "PUNO",
    "provincia": "SAN ROMAN",
    "latitud": -15.49323216,
    "longitud": -70.13553739,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 211201,
    "departamento": "PUNO",
    "provincia": "SANDIA",
    "latitud": -14.32301928,
    "longitud": -69.46661477,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 211301,
    "departamento": "PUNO",
    "provincia": "YUNGUYO",
    "latitud": -16.24426815,
    "longitud": -69.09257008,
    "regionNatural": "SIERRA"
  },
  {
    "ubigeo": 220201,
    "departamento": "SAN MARTIN",
    "provincia": "BELLAVISTA",
    "latitud": -7.0668712,
    "longitud": -76.58470096,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220301,
    "departamento": "SAN MARTIN",
    "provincia": "EL DORADO",
    "latitud": -6.6139139,
    "longitud": -76.69486503,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220401,
    "departamento": "SAN MARTIN",
    "provincia": "HUALLAGA",
    "latitud": -6.936411259,
    "longitud": -76.771851596,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220501,
    "departamento": "SAN MARTIN",
    "provincia": "LAMAS",
    "latitud": -6.42183785,
    "longitud": -76.5161846,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220601,
    "departamento": "SAN MARTIN",
    "provincia": "MARISCAL CACERES",
    "latitud": -7.1804106,
    "longitud": -76.72644242,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220101,
    "departamento": "SAN MARTIN",
    "provincia": "MOYOBAMBA",
    "latitud": -6.03466877,
    "longitud": -76.97466665,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220701,
    "departamento": "SAN MARTIN",
    "provincia": "PICOTA",
    "latitud": -6.9206416,
    "longitud": -76.33030096,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220801,
    "departamento": "SAN MARTIN",
    "provincia": "RIOJA",
    "latitud": -6.0626084,
    "longitud": -77.16777252,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 220901,
    "departamento": "SAN MARTIN",
    "provincia": "SAN MARTIN",
    "latitud": -6.48771702,
    "longitud": -76.35981815,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 221001,
    "departamento": "SAN MARTIN",
    "provincia": "TOCACHE",
    "latitud": -8.18864805,
    "longitud": -76.51031276,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 230201,
    "departamento": "TACNA",
    "provincia": "CANDARAVE",
    "latitud": -17.26818803,
    "longitud": -70.25039889,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 230301,
    "departamento": "TACNA",
    "provincia": "JORGE BASADRE",
    "latitud": -17.61383167,
    "longitud": -70.76239889,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 230101,
    "departamento": "TACNA",
    "provincia": "TACNA",
    "latitud": -18.0137008,
    "longitud": -70.2507964,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 230401,
    "departamento": "TACNA",
    "provincia": "TARATA",
    "latitud": -17.47471754,
    "longitud": -70.03211577,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 240201,
    "departamento": "TUMBES",
    "provincia": "CONTRALMIRANTE VILLAR",
    "latitud": -3.68066765,
    "longitud": -80.6762874,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 240101,
    "departamento": "TUMBES",
    "provincia": "TUMBES",
    "latitud": -3.5708339,
    "longitud": -80.45957215,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 240301,
    "departamento": "TUMBES",
    "provincia": "ZARUMILLA",
    "latitud": -3.5006804,
    "longitud": -80.27502228,
    "regionNatural": "COSTA"
  },
  {
    "ubigeo": 250201,
    "departamento": "UCAYALI",
    "provincia": "ATALAYA",
    "latitud": -10.72972729,
    "longitud": -73.75483561,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 250101,
    "departamento": "UCAYALI",
    "provincia": "CORONEL PORTILLO",
    "latitud": -8.38324295,
    "longitud": -74.53224034,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 250301,
    "departamento": "UCAYALI",
    "provincia": "PADRE ABAD",
    "latitud": -9.03687544,
    "longitud": -75.5086237,
    "regionNatural": "SELVA"
  },
  {
    "ubigeo": 250401,
    "departamento": "UCAYALI",
    "provincia": "PURUS",
    "latitud": -9.77235992,
    "longitud": -70.71008654,
    "regionNatural": "SELVA"
  }
]

export default oficinas;