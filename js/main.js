const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

let getWindowOptions = () => {
  let options = {};

  options.aboutWidth = window.innerWidth / 2;
  options.aboutHeight = window.innerHeight / 2;
  options.contactWidth = window.innerWidth / 2;
  options.contactHeight = window.innerHeight / 3;

  options.top = 10;
  options.right = 10;
  options.bottom = 10;
  options.left = 10;

  options.aboutX = window.innerWidth - options.aboutWidth - options.right * 5;
  options.aboutY = options.top * 5;

  options.contactX = options.aboutX;
  options.contactY = options.aboutY + options.aboutHeight + options.top * 5;

  options.modal = (window.innerWidth <= 767);
  if (options.modal) {
    options.top = 0;
    options.right = 0;
    options.bottom = 0;
    options.left = 0;
    options.aboutX = "center";
    options.aboutY = "center";
    options.contactX = "center";
    options.contactY = "center";
    options.aboutWidth = window.innerWidth - 30;
    options.aboutHeight = window.innerHeight - 30;
    options.contactWidth = window.innerWidth - 30;
    options.contactHeight = window.innerHeight - 30;
  }
  return options
};

let windowOptions = getWindowOptions();

window.addEventListener('resize', function() {
  windowOptions = getWindowOptions();
  let windows = document.getElementsByClassName('winbox')
  if (windows) {
    Array.from(windows).forEach((window) => {
      window.remove();
    });
  }
}, true);

about.addEventListener('click', () => {
  if(document.getElementById('about-window')){
    document.getElementById('about-window').remove()
  }
  const aboutBox = new WinBox({
    id: "about-window",
    title: 'About Me',
    modal: windowOptions.modal,
    x: windowOptions.aboutX,
    y: windowOptions.aboutY,
    width: windowOptions.aboutWidth + 'px',
    height: windowOptions.aboutHeight + 'px',
    top: windowOptions.top,
    right: windowOptions.right,
    bottom: windowOptions.bottom,
    left: windowOptions.left,
    mount: aboutContent,
    onfocus: function () {
      this.g.style.opacity="0.95"
      this.setBackground('#3c3836')
    },
    onblur: function () {
      this.g.style.opacity="0.75"
    },
  })
});

contact.addEventListener('click', () => {
  if(document.getElementById('contact-window')){
    document.getElementById('contact-window').remove()
  }
  const contactBox = new WinBox({
    id: "contact-window",
    title: 'Contact Me',
    modal: windowOptions.modal,
    width: windowOptions.contactWidth + 'px',
    height: windowOptions.contactHeight + 'px',
    x: windowOptions.contactX,
    y: windowOptions.contactY,
    top: windowOptions.top,
    right: windowOptions.right,
    bottom: windowOptions.bottom,
    left: windowOptions.left,
    mount: contactContent,
    onfocus: function () {
      this.g.style.opacity="0.95"
      this.setBackground('#3c3836')
    },
    onblur: function () {
      this.g.style.opacity="0.75"
    },
  })
})

// ************* //
// * Ascii art * //
// ************* //

// Initialize AsciiMorph
const asciiElement = document.querySelector('pre');
AsciiMorph(asciiElement, {x: 10,y: 25});

const asciisTrue = [
  [
    "    _   _   _____   _   _   _  __    __",
    "   | | | | |  _  | | | | | | | \\ \\  \/ \/",
    "   | |_| | | | | | | | | | | |  \\ \\\/ \/",
    "   |  _  | | | | | | | | | | |   \\  \/",
    "   | | | | | |_| | | |_|_|_| |   \/ \/",
    "   |_| |_| |_____| |_________|  \/_\/",
    "░░░░░░░░░░░░░░░░░░▄▄░░░░░░░░░░░░░░░░░░",
    "░░░░░░░░░░░░░░░░░▄██▄░░░░░░░░░░░░░░░░░",
    "░░░░░░░░░░░░░░░░▄████▄░░░░░░░░░░░░░░░░",
    "░░░░░░░░░░░░░░░░██████░░░░░░░░░░░░░░░░",
    "███▄▄░░░░░░░░░░████████░░░░░░░░░░▄▄▄██",
    "▀██████▄▄░░░░░░████████░░░░░░▄▄██████▀",
    "░█████████▄░░░░████████░░░░▄█████████░",
    "░░▀▀▀▀▀▀▀▀▀▀░░░▀▀▀▀▀▀▀▀░░░▀▀▀▀▀▀▀▀▀▀░░",
    "░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░",
    "░░░░▀████████████████████████████▀░░░░",
    "░░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░",
    "░░░░░░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀░░░░░░░",
    "░░░░░░░░░░░▄▄▄▄▄▄░▄▄░▄▄▄▄▄▄░░░░░░░░░░░",
    "░░░░░░░░░░░░░░▀▀▀░▀▀░▀▀▀░░░░░░░░░░░░░░",
    "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
    "░░░░░░░░░░░░██░▀▀░░░░░░██░░░░░░░░░░░░░",
    "░▄█▀▀██░▄█▀▀██░██░▄█▀▀███░▄█▀▀██░█▀▀█▄",
    "░█░░░██░█░░░██░██░█░░░███░█░░░██░▀███▄",
    "░▀█▄▄██░▀█▄▄██░██░▀█▄▄███░▀█▄▄██░█▄▄█▀"
  ],
  [
    " _____    ____   __    __  _   _   _   _____   _   _____",
    "|  ___|  |  _ \\  \\ \\  \/ \/ | | | | | | |  _  | | | |  _  |",
    "| |      | | | |  \\ \\\/ \/  | | | | | | | |_| | | |_| | | |",
    "| |      | | | |   \\  \/   | | | | | | |  _  | |  _  | | |",
    "| |___   | | | |   \/ \/    | |_|_|_| | | | | | | | | |_| |",
    "|_____|  \/_\/ |_|  \/_\/     |_________| |_| |_| |_| |_____|",
    "    ════██══════════════════██═══════════██═══════════",
    "    ═══█████═══════════════████═════════█████═════════",
    "    ██████████████═════████████████═══██████████████══",
    "    ═██████══███████════██████████═════██████══██████═",
    "    ═██████══███████════██████████═════██████══██████═",
    "    ═██████══███████════████══████═════██████══██████═",
    "    ═██████══███████════████══████═════██████══██████═",
    "    ═█████████████═════█████══█████════█████████████══",
    "    ═██████══███████═══█████══█████════██████═════════",
    "    ═██████══███████═══████████████════██████═════════",
    "    ═██████══███████═══████═══█████════██████═════════",
    "    ═██████══███████══█████═══██████═══██████═════════",
    "    ███████══███████═███████══███████═████████════════",
    "    ═══███═════███═════███══════███═════█████═════════",
    "    ════█═══════█═══════█════════█════════█═══════════"
  ],
  [
    " _____   _       _   _____",
    "|  _  | | |     | | |  _  |",
    "| | | | | |___  | |_| | | |",
    "| | | | |  _  | |  _  | | |",
    "| | | | | |_| | | | | |_| |",
    "|_| |_| |_____| |_| |_____|",
    "░░░░█▀▀▀█▀▀▀█▀▀▀▀▄░░░░░░░░░░",
    "░░▄▀▀░░░░░░░░░░░░░█▄▄░░░░░░░",
    "░█░░░░░░░░░░░░░░░░▀░▀█░░░░░░",
    "░█▀░░░░░░░░░░░░░░░░░░░█░░░░░",
    "░█▄░▄░░░▄█▄▄█░▄░▄▄░░░▄████▄░",
    "░░██▀▀▀▀▀▄▄░█░█▀▀░▀██▀░░▀██▄",
    "░░██░██████░█▄█░██░██░░░░███",
    "░░██░███████▄█▄███░██░░░░██▀",
    "░░██░█████████████░██░░░▄██░",
    "░░██░█████████████░██░▄██▀░░",
    "░░██░█████████████░██▀▀▀░░░░",
    "░░██░█████████████░██░░░░░░░",
    "░░██░████████████▀░█▀░░░░░░░",
    "░░░▀█▄▄▄▄▄▄▄▄▄▄▄▄▀▀░░░░░░░░░"
  ]
]

const asciis = [[
  "                _ooOoo_",
  "               o8888888o",
  "               88\" . \"88",
  "               (| -_- |)",
  "               O\\  =  /O",
  "            ____/`---'\\____",
  "          .'  \\\\|     |//  `.",
  "         /  \\\\|||  :  |||//  \\",
  "        /  _||||| -:- |||||_  \\",
  "        |   | \\\\\\  -  /'| |   |",
  "        | \\_|  `\\`---'//  |_/ |",
  "        \\  .-\\__ `-. -'__/-.  /",
  "      ___`. .'  /--.--\\  `. .'___",
  "   .\"\" '<  `.___\\_<|>_/___.' _> \\\"\".",
  "  | | :  `- \\`. ;`. _/; .'/ /  .' ; |",
  "  \\  \\ `-.   \\_\\_`. _.'_/_/  -' _.' /",
  "===`-.`___`-.__\\ \\___  /__.-'_.'_.-'===",
  "                `=--=-'    "
  ],
  
  [
  "                             /",
  "                            /",
  "                           /;",
  "                          //",
  "                         ;/",
  "                       ,//",
  "                   _,-' ;_,,",
  "                _,'-_  ;|,'",
  "            _,-'_,..--. |",
  "    ___   .'-'_)'  ) _)\\|      ___",
  "  ,'\"\"\"`'' _  )   ) _)  ''--'''_,-'",
  "-={-o-  /|    )  _)  ) ; '_,--''",
  "  \\ -' ,`.  ) .)  _)_,''|",
  "   `.\"(   `------''     /",
  "     `.\\             _,'",
  "       `-.____....-\\\\",
  "                 || \\\\",
  "                 // ||",
  "                //  ||",
  "            _-.//_ _||_,",
  "              ,'  ,-'/"
  ],
  
  [
  "     .--------.",
  "    / .------. \\",
  "   / /        \\ \\",
  "   | |        | |",
  "  _| |________| |_",
  ".' |_|        |_| '.",
  "'._____ ____ _____.'",
  "|     .'____'.     |",
  "'.__.'.'    '.'.__.'",
  "'.__  |      |  __.'",
  "|   '.'.____.'.'   |",
  "'.____'.____.'____.'",
  "'.________________.'",
  ],
  
  [
  "         ____",
  "        o8%8888,",
  "      o88%8888888.",
  "     8'-    -:8888b",
  "    8'         8888",
  "   d8.-=. ,==-.:888b",
  "   >8 `~` :`~' d8888",
  "   88         ,88888",
  "   88b. `-~  ':88888",
  "   888b ~==~ .:88888",
  "   88888o--:':::8888",
  "   `88888| :::' 8888b",
  "   8888^^'       8888b",
  "  d888           ,%888b.",
  " d88%            %%%8--'-.",
  "/88:.__ ,       _%-' ---  -",
  "    '''::===..-'   =  --.  `",
   ],
  
   [
  "      _      _      _",
  "   __(.)< __(.)> __(.)=",
  "   \\___)  \\___)  \\___)  ",
  "          _      _      _",
  "       __(.)< __(.)> __(.)=",
  "       \\___)  \\___)  \\___)   ",
  "      _      _      _",
  "   __(.)< __(.)> __(.)=",
  "   \\___)  \\___)  \\___)   ",
  "          _      _      _",
  "       __(.)< __(.)> __(.)=",
  "       \\___)  \\___)  \\___)  "
   ]];
  
  
  setTimeout(function() {
    AsciiMorph.morph(asciisTrue[0]);
  }, 500);

  let currentIndex = 1;
  setInterval(function() {
    AsciiMorph.morph(asciisTrue[currentIndex]);
    currentIndex++;
    currentIndex%= asciisTrue.length;
  }, 3000);
