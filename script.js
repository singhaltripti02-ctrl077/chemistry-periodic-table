// Full 118 elements data + grid position info
const elements = [
  // format: n = atomic number, s = symbol, name, cat = category class, m = mass, group, period
  {n:1,s:"H",name:"Hydrogen",cat:"non-metal",m:"1.008",group:1,period:1},
  {n:2,s:"He",name:"Helium",cat:"noble-gas",m:"4.0026",group:18,period:1},
  {n:3,s:"Li",name:"Lithium",cat:"alkali-metal",m:"6.94",group:1,period:2},
  {n:4,s:"Be",name:"Beryllium",cat:"alkaline-earth-metal",m:"9.0122",group:2,period:2},
  {n:5,s:"B",name:"Boron",cat:"metalloid",m:"10.81",group:13,period:2},
  {n:6,s:"C",name:"Carbon",cat:"non-metal",m:"12.011",group:14,period:2},
  {n:7,s:"N",name:"Nitrogen",cat:"non-metal",m:"14.007",group:15,period:2},
  {n:8,s:"O",name:"Oxygen",cat:"non-metal",m:"15.999",group:16,period:2},
  {n:9,s:"F",name:"Fluorine",cat:"halogen",m:"18.998",group:17,period:2},
  {n:10,s:"Ne",name:"Neon",cat:"noble-gas",m:"20.18",group:18,period:2},

  {n:11,s:"Na",name:"Sodium",cat:"alkali-metal",m:"22.99",group:1,period:3},
  {n:12,s:"Mg",name:"Magnesium",cat:"alkaline-earth-metal",m:"24.305",group:2,period:3},
  {n:13,s:"Al",name:"Aluminium",cat:"post-transition-metal",m:"26.982",group:13,period:3},
  {n:14,s:"Si",name:"Silicon",cat:"metalloid",m:"28.085",group:14,period:3},
  {n:15,s:"P",name:"Phosphorus",cat:"non-metal",m:"30.974",group:15,period:3},
  {n:16,s:"S",name:"Sulfur",cat:"non-metal",m:"32.06",group:16,period:3},
  {n:17,s:"Cl",name:"Chlorine",cat:"halogen",m:"35.45",group:17,period:3},
  {n:18,s:"Ar",name:"Argon",cat:"noble-gas",m:"39.948",group:18,period:3},

  {n:19,s:"K",name:"Potassium",cat:"alkali-metal",m:"39.098",group:1,period:4},
  {n:20,s:"Ca",name:"Calcium",cat:"alkaline-earth-metal",m:"40.078",group:2,period:4},
  {n:21,s:"Sc",name:"Scandium",cat:"transition-metal",m:"44.956",group:3,period:4},
  {n:22,s:"Ti",name:"Titanium",cat:"transition-metal",m:"47.867",group:4,period:4},
  {n:23,s:"V",name:"Vanadium",cat:"transition-metal",m:"50.942",group:5,period:4},
  {n:24,s:"Cr",name:"Chromium",cat:"transition-metal",m:"51.996",group:6,period:4},
  {n:25,s:"Mn",name:"Manganese",cat:"transition-metal",m:"54.938",group:7,period:4},
  {n:26,s:"Fe",name:"Iron",cat:"transition-metal",m:"55.845",group:8,period:4},
  {n:27,s:"Co",name:"Cobalt",cat:"transition-metal",m:"58.933",group:9,period:4},
  {n:28,s:"Ni",name:"Nickel",cat:"transition-metal",m:"58.693",group:10,period:4},
  {n:29,s:"Cu",name:"Copper",cat:"transition-metal",m:"63.546",group:11,period:4},
  {n:30,s:"Zn",name:"Zinc",cat:"transition-metal",m:"65.38",group:12,period:4},

  {n:31,s:"Ga",name:"Gallium",cat:"post-transition-metal",m:"69.723",group:13,period:4},
  {n:32,s:"Ge",name:"Germanium",cat:"metalloid",m:"72.63",group:14,period:4},
  {n:33,s:"As",name:"Arsenic",cat:"metalloid",m:"74.922",group:15,period:4},
  {n:34,s:"Se",name:"Selenium",cat:"non-metal",m:"78.971",group:16,period:4},
  {n:35,s:"Br",name:"Bromine",cat:"halogen",m:"79.904",group:17,period:4},
  {n:36,s:"Kr",name:"Krypton",cat:"noble-gas",m:"83.798",group:18,period:4},

  {n:37,s:"Rb",name:"Rubidium",cat:"alkali-metal",m:"85.468",group:1,period:5},
  {n:38,s:"Sr",name:"Strontium",cat:"alkaline-earth-metal",m:"87.62",group:2,period:5},
  {n:39,s:"Y",name:"Yttrium",cat:"transition-metal",m:"88.906",group:3,period:5},
  {n:40,s:"Zr",name:"Zirconium",cat:"transition-metal",m:"91.224",group:4,period:5},
  {n:41,s:"Nb",name:"Niobium",cat:"transition-metal",m:"92.906",group:5,period:5},
  {n:42,s:"Mo",name:"Molybdenum",cat:"transition-metal",m:"95.95",group:6,period:5},
  {n:43,s:"Tc",name:"Technetium",cat:"transition-metal",m:"98",group:7,period:5},
  {n:44,s:"Ru",name:"Ruthenium",cat:"transition-metal",m:"101.07",group:8,period:5},
  {n:45,s:"Rh",name:"Rhodium",cat:"transition-metal",m:"102.91",group:9,period:5},
  {n:46,s:"Pd",name:"Palladium",cat:"transition-metal",m:"106.42",group:10,period:5},
  {n:47,s:"Ag",name:"Silver",cat:"transition-metal",m:"107.87",group:11,period:5},
  {n:48,s:"Cd",name:"Cadmium",cat:"transition-metal",m:"112.41",group:12,period:5},

  {n:49,s:"In",name:"Indium",cat:"post-transition-metal",m:"114.82",group:13,period:5},
  {n:50,s:"Sn",name:"Tin",cat:"post-transition-metal",m:"118.71",group:14,period:5},
  {n:51,s:"Sb",name:"Antimony",cat:"metalloid",m:"121.76",group:15,period:5},
  {n:52,s:"Te",name:"Tellurium",cat:"metalloid",m:"127.6",group:16,period:5},
  {n:53,s:"I",name:"Iodine",cat:"halogen",m:"126.9",group:17,period:5},
  {n:54,s:"Xe",name:"Xenon",cat:"noble-gas",m:"131.29",group:18,period:5},

  {n:55,s:"Cs",name:"Cesium",cat:"alkali-metal",m:"132.91",group:1,period:6},
  {n:56,s:"Ba",name:"Barium",cat:"alkaline-earth-metal",m:"137.33",group:2,period:6},
  {n:57,s:"La",name:"Lanthanum",cat:"lanthanide",m:"138.91",group:3,period:9},
  {n:58,s:"Ce",name:"Cerium",cat:"lanthanide",m:"140.12",group:4,period:9},
  {n:59,s:"Pr",name:"Praseodymium",cat:"lanthanide",m:"140.91",group:5,period:9},
  {n:60,s:"Nd",name:"Neodymium",cat:"lanthanide",m:"144.24",group:6,period:9},
  {n:61,s:"Pm",name:"Promethium",cat:"lanthanide",m:"145",group:7,period:9},
  {n:62,s:"Sm",name:"Samarium",cat:"lanthanide",m:"150.36",group:8,period:9},
  {n:63,s:"Eu",name:"Europium",cat:"lanthanide",m:"151.96",group:9,period:9},
  {n:64,s:"Gd",name:"Gadolinium",cat:"lanthanide",m:"157.25",group:10,period:9},
  {n:65,s:"Tb",name:"Terbium",cat:"lanthanide",m:"158.93",group:11,period:9},
  {n:66,s:"Dy",name:"Dysprosium",cat:"lanthanide",m:"162.5",group:12,period:9},
  {n:67,s:"Ho",name:"Holmium",cat:"lanthanide",m:"164.93",group:13,period:9},
  {n:68,s:"Er",name:"Erbium",cat:"lanthanide",m:"167.26",group:14,period:9},
  {n:69,s:"Tm",name:"Thulium",cat:"lanthanide",m:"168.93",group:15,period:9},
  {n:70,s:"Yb",name:"Ytterbium",cat:"lanthanide",m:"173.05",group:16,period:9},
  {n:71,s:"Lu",name:"Lutetium",cat:"lanthanide",m:"174.97",group:17,period:9},

  {n:72,s:"Hf",name:"Hafnium",cat:"transition-metal",m:"178.49",group:4,period:6},
  {n:73,s:"Ta",name:"Tantalum",cat:"transition-metal",m:"180.95",group:5,period:6},
  {n:74,s:"W",name:"Tungsten",cat:"transition-metal",m:"183.84",group:6,period:6},
  {n:75,s:"Re",name:"Rhenium",cat:"transition-metal",m:"186.21",group:7,period:6},
  {n:76,s:"Os",name:"Osmium",cat:"transition-metal",m:"190.23",group:8,period:6},
  {n:77,s:"Ir",name:"Iridium",cat:"transition-metal",m:"192.22",group:9,period:6},
  {n:78,s:"Pt",name:"Platinum",cat:"transition-metal",m:"195.08",group:10,period:6},
  {n:79,s:"Au",name:"Gold",cat:"transition-metal",m:"196.97",group:11,period:6},
  {n:80,s:"Hg",name:"Mercury",cat:"transition-metal",m:"200.59",group:12,period:6},
  {n:81,s:"Tl",name:"Thallium",cat:"post-transition-metal",m:"204.38",group:13,period:6},
  {n:82,s:"Pb",name:"Lead",cat:"post-transition-metal",m:"207.2",group:14,period:6},
  {n:83,s:"Bi",name:"Bismuth",cat:"post-transition-metal",m:"208.98",group:15,period:6},
  {n:84,s:"Po",name:"Polonium",cat:"post-transition-metal",m:"209",group:16,period:6},
  {n:85,s:"At",name:"Astatine",cat:"halogen",m:"210",group:17,period:6},
  {n:86,s:"Rn",name:"Radon",cat:"noble-gas",m:"222",group:18,period:6},

  {n:87,s:"Fr",name:"Francium",cat:"alkali-metal",m:"223",group:1,period:7},
  {n:88,s:"Ra",name:"Radium",cat:"alkaline-earth-metal",m:"226",group:2,period:7},
  {n:89,s:"Ac",name:"Actinium",cat:"actinide",m:"227",group:3,period:10},
  {n:90,s:"Th",name:"Thorium",cat:"actinide",m:"232.04",group:4,period:10},
  {n:91,s:"Pa",name:"Protactinium",cat:"actinide",m:"231.04",group:5,period:10},
  {n:92,s:"U",name:"Uranium",cat:"actinide",m:"238.03",group:6,period:10},
  {n:93,s:"Np",name:"Neptunium",cat:"actinide",m:"237",group:7,period:10},
  {n:94,s:"Pu",name:"Plutonium",cat:"actinide",m:"244",group:8,period:10},
  {n:95,s:"Am",name:"Americium",cat:"actinide",m:"243",group:9,period:10},
  {n:96,s:"Cm",name:"Curium",cat:"actinide",m:"247",group:10,period:10},
  {n:97,s:"Bk",name:"Berkelium",cat:"actinide",m:"247",group:11,period:10},
  {n:98,s:"Cf",name:"Californium",cat:"actinide",m:"251",group:12,period:10},
  {n:99,s:"Es",name:"Einsteinium",cat:"actinide",m:"252",group:13,period:10},
  {n:100,s:"Fm",name:"Fermium",cat:"actinide",m:"257",group:14,period:10},
  {n:101,s:"Md",name:"Mendelevium",cat:"actinide",m:"258",group:15,period:10},
  {n:102,s:"No",name:"Nobelium",cat:"actinide",m:"259",group:16,period:10},

  {n:103,s:"Lr",name:"Lawrencium",cat:"actinide",m:"262",group:3,period:7},
  {n:104,s:"Rf",name:"Rutherfordium",cat:"transition-metal",m:"267",group:4,period:7},
  {n:105,s:"Db",name:"Dubnium",cat:"transition-metal",m:"270",group:5,period:7},
  {n:106,s:"Sg",name:"Seaborgium",cat:"transition-metal",m:"271",group:6,period:7},
  {n:107,s:"Bh",name:"Bohrium",cat:"transition-metal",m:"270",group:7,period:7},
  {n:108,s:"Hs",name:"Hassium",cat:"transition-metal",m:"269",group:8,period:7},
  {n:109,s:"Mt",name:"Meitnerium",cat:"unknown",m:"278",group:9,period:7},
  {n:110,s:"Ds",name:"Darmstadtium",cat:"unknown",m:"281",group:10,period:7},
  {n:111,s:"Rg",name:"Roentgenium",cat:"unknown",m:"282",group:11,period:7},
  {n:112,s:"Cn",name:"Copernicium",cat:"transition-metal",m:"285",group:12,period:7},
  {n:113,s:"Nh",name:"Nihonium",cat:"post-transition-metal",m:"286",group:13,period:7},
  {n:114,s:"Fl",name:"Flerovium",cat:"post-transition-metal",m:"289",group:14,period:7},
  {n:115,s:"Mc",name:"Moscovium",cat:"post-transition-metal",m:"290",group:15,period:7},
  {n:116,s:"Lv",name:"Livermorium",cat:"post-transition-metal",m:"293",group:16,period:7},
  {n:117,s:"Ts",name:"Tennessine",cat:"halogen",m:"294",group:17,period:7},
  {n:118,s:"Og",name:"Oganesson",cat:"noble-gas",m:"294",group:18,period:7},
];

// Container for the periodic table div
const table = document.getElementById("table");

// Build grid with gaps where needed for layout
const maxGroup = 18;
const maxPeriod = 10; // including lanthanides and actinides rows

// Create empty grid cells array: 10 rows x 18 cols
const grid = Array.from({ length: maxPeriod }, () =>
  new Array(maxGroup).fill(null)
);

// Place elements in their positions on grid
elements.forEach((el) => {
  // lanthanides and actinides placed in rows 9 and 10 (index 8 and 9)
  let row = el.period - 1;
  if (el.period === 9) row = 8; // lanthanides row
  if (el.period === 10) row = 9; // actinides row

  // For lanthanides and actinides, group is offset so place sequentially in group 3 to 17 (index 2 to 16)
  if (el.cat === "lanthanide") {
    row = 8;
    // Position them starting at group 3 (index 2) to 17 (index 16)
    let idx = el.n - 57;
    grid[row][2 + idx] = el;
    return;
  }
  if (el.cat === "actinide") {
    row = 9;
    let idx = el.n - 89;
    grid[row][2 + idx] = el;
    return;
  }

  // Normal elements place by group and period
  grid[row][el.group - 1] = el;
});

// Render grid cells in order
for (let r = 0; r < maxPeriod; r++) {
  for (let c = 0; c < maxGroup; c++) {
    const el = grid[r][c];
    const cell = document.createElement("div");
    cell.classList.add("element");
    if (el) {
      cell.classList.add(el.cat);
      cell.innerHTML = `<b class="symbol">${el.s}</b><span class="number">${el.n}</span>`;
      // Add click to show popup
      cell.addEventListener("click", () => showPopup(el));
    } else {
      // empty cells for layout spacing
      cell.style.visibility = "hidden";
    }
    table.appendChild(cell);
  }
}

// Popup functions
const popup = document.getElementById("popup");
const pName = document.getElementById("p-name");
const pSymbol = document.getElementById("p-symbol");
const pNumber = document.getElementById("p-number");
const pCategory = document.getElementById("p-category");
const pMass = document.getElementById("p-mass");

function showPopup(element) {
  pName.textContent = element.name;
  pSymbol.textContent = element.s;
  pNumber.textContent = element.n;
  pCategory.textContent = element.cat.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
  pMass.textContent = element.m;

  popup.style.display = "flex";
}

function closePopup(e) {
  if (!e || e.target === popup) {
    popup.style.display = "none";
  }
}

// Search filter
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  const cells = document.querySelectorAll(".element");
  cells.forEach(cell => {
    if (cell.style.visibility === "hidden") return; // skip empty cells
    const symbol = cell.querySelector(".symbol").textContent.toLowerCase();
    const number = cell.querySelector(".number").textContent;
    const el = elements.find(e => e.s.toLowerCase() === symbol && e.n == number);
    if (!el) return;
    if (
      el.name.toLowerCase().includes(term) ||
      el.s.toLowerCase().includes(term) ||
      el.n.toString() === term
    ) {
      cell.style.display = "";
    } else {
      cell.style.display = "none";
    }
  });
});
