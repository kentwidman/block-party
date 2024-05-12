// You can find your X-Csrftoken header if you open devtool and lookfor graphql under the network tab. 
const xCsrftoke = '';

// Needed random long delay to prevent Instagram from thinking your a bot.
const minWaitTimeBetweenBlocks = 30000; // 30 seconds
const maxWaitTimeBetweenBlocks = 240000; // 240 seconds

let index = 0;

// Name, Date, Reason, Username, Id
const usersToBlock = [
  ['Drake', '5/9/2024', 'Inaction', 'champagnepapi', '6122688559'],
  ['Hailey Bieber', '5/9/2024', 'Inaction', 'haileybieber', '7141291'],
  ['Justin Bieber', '5/9/2024', 'Inaction', 'justinbieber', '6860189'],
  ['Meghan Trainor', '5/9/2024', 'Inaction', 'meghantrainor', '5233657'],
  ['Sam Smith', '5/9/2024', 'Met Gala', 'samsmith', '298124568'],
  ['Amy Schumer', '5/9/2024', 'Hollywood Open Letter', 'amyschumer', '54457901629'],
  ['Andrew Scott', '5/9/2024', 'Met Gala', 'andrewscottclips', '35234655212'],
  ['Antoine Fuqua', '5/9/2024', 'Hollywood Open Letter', 'antoinefuqua', '3675661929'],
  ['Ariana Grande', '5/9/2024', 'Met Gala', 'arianagrande', '7719696'],
  ['Bella Thorne', '5/9/2024', 'Hollywood Open Letter', 'bellathorne', '9721868'],
  ['Ben Savage', '5/9/2024', 'Hollywood Open Letter', 'bensavage', '26446749'],
  ['Beyonce', '5/9/2024', 'Inaction', 'beyonce', '47630393012'],
  ['Brian Baumgartner', '5/9/2024', 'Hollywood Open Letter', 'bbbaumgartner', '246277069'],
  ['Brie Larson', '5/9/2024', 'Met Gala', 'brielarson', '2012296125'],
  ['Cara Delevingne', '5/9/2024', 'Met Gala', 'caradelevingne', '3255807'],
  ['Cardi B', '5/9/2024', 'Met Gala', 'iamcardib', '1436859892'],
  ['Chris Pine', '5/9/2024', 'Hollywood Open Letter', 'chris.w.pine', '2208959311'],
  ['Chuck Liddell', '5/9/2024', 'Hollywood Open Letter', 'chuckliddell', '249395904'],
  ['Doja Cat', '5/9/2024', 'Met Gala', 'dojacat', '46335750'],
  ['Drew Barrymore', '5/9/2024', 'Inaction', 'drewbarrymore', '519673397'],
  ['Dua Lipa', '5/9/2024', 'Met Gala', 'dualipa', '12331195'],
  ['Dwayne Johnson', '5/9/2024', 'Inaction', 'therock', '944407229'],
  ['Ed Sheeran', '5/9/2024', 'Met Gala', 'teddysphotos', '185546187'],
  ['Eli Roth', '5/9/2024', 'Hollywood Open Letter', 'realeliroth', '21755757'],
  ['Elle Fanning', '5/9/2024', 'Met Gala', 'ellefanning', '3009345727'],
  ['Ellen DeGeneres', '5/9/2024', 'Inaction', 'theellenshow', '57271700124'],
  ['Gal Gadot', '5/9/2024', 'Hollywood Open Letter', 'gal_gadot', '20788692'],
  ['Greg Berlanti', '5/9/2024', 'Hollywood Open Letter', 'gberlanti', '17811738'],
  ['Haley Baylee', '5/9/2024', 'Met Gala', 'haleyybaylee', '197441822'],
  ['Howie Mandel', '5/9/2024', 'Hollywood Open Letter', 'howiemandel', '19746054'],
  ['Hugh Jackman', '5/9/2024', 'Met Gala', 'thehughjackman', '489110643'],
  ['Ian Ziering', '5/9/2024', 'Hollywood Open Letter', 'ianziering', '534961053'],
  ['Jack Dylan Grazer', '5/9/2024', 'Hollywood Open Letter', 'jackdgrazer', '3549694374'],
  ['Jamie Lee Curtis', '5/9/2024', 'Hollywood Open Letter', 'jamieleecurtis', '1642107034'],
  ['Jason Alexander', '5/9/2024', 'Hollywood Open Letter', 'jalexander1959', '33926018851'],
  ['Jay-Z', '5/9/2024', 'Inaction', 'jayz', '50902677731'],
  ['Jennifer Lawrence', '5/9/2024', 'Inaction', '1jnnf', '7882854093'],
  ['Jennifer Lopez', '5/9/2024', 'Met Gala', 'jlo', '305701719'],
  ['Jeremy Piven', '5/9/2024', 'Hollywood Open Letter', 'jeremypiven', '26102309'],
  ['Jerry Seinfeld', '5/9/2024', 'Hollywood Open Letter', 'jerryseinfeld', '1345515184'],
  ['Jimmy Fallon', '5/9/2024', 'Inaction', 'jimmyfallon', '1302748878'],
  ['Jimmy Kimmel', '5/9/2024', 'Inaction', 'jimmykimmel', '271898009'],
  ['Joe Jonas', '5/9/2024', 'Inaction', 'joejonas', '25236007'],
  ['Jojo Siwa', '5/9/2024', 'Inaction', 'itsjojosiwa', '1135768101'],
  ['Jonah Platt', '5/9/2024', 'Hollywood Open Letter', 'jonahplatt', '42197590'],
  ['Josh Peck', '5/9/2024', 'Hollywood Open Letter', 'shuapeck', '14105198'],
  ['Jude Law', '5/9/2024', 'Met Gala', 'judehlaw', '7459559285'],
  ['Karen Allen', '5/9/2024', 'Hollywood Open Letter', 'karenallenofficial', '1714018971'],
  ['Keith Urban', '5/9/2024', 'Met Gala', 'keithurban', '5148696'],
  ['Kendall Jenner', '5/9/2024', 'Met Gala', 'kendalljenner', '6380930'],
  ['Kevin Hart', '5/9/2024', 'Inaction', 'kevinhart4real', '6590609'],
  ['Kevin Jonas', '5/9/2024', 'Inaction', 'kevinjonas', '24656016'],
  ['Kim Kardashian', '5/9/2024', 'Met Gala', 'kimkardashian', '11818532165'],
  ['Kylie Jenner', '5/9/2024', 'Met Gala', 'kyliejenner', '12281817'],
  ['Lady Gaga', '5/9/2024', 'Inaction', 'ladygaga', '184692323'],
  ['Lana Del Rey', '5/9/2024', 'Met Gala', 'honeymoon', '1707509864'],
  ['Liev Schreiber', '5/9/2024', 'Hollywood Open Letter', 'lievschreiber', '2895391820'],
  ['Lizzo', '5/9/2024', 'Inaction', 'lizzobeeating', '331424778'],
  ['Mariah Carey', '5/9/2024', 'Inaction', 'mariahcarey', '52142935'],
  ['Mark Hamill', '5/9/2024', 'Hollywood Open Letter', 'markhamill', '1380059350'],
  ['Mayim Bialik', '5/9/2024', 'Hollywood Open Letter', 'missmayim', '298837565'],
  ['Meg Ryan', '5/9/2024', 'Met Gala', 'megryan', '3667737271'],
  ['Michael Douglas', '5/9/2024', 'Hollywood Open Letter', 'michaelkirkdouglas', '9855196432'],
  ['Michael Rosenbaum', '5/9/2024', 'Hollywood Open Letter', 'themichaelrosenbaum', '190473471'],
  ['Naomi Watts', '5/9/2024', 'Met Gala', 'naomiwatts', '2135504488'],
  ['Nick Jonas', '5/9/2024', 'Inaction', 'nickjonas', '189396108'],
  ['Nicki Minaj', '5/9/2024', 'Inaction', 'nickiminaj', '451573056'],
  ['Nicole Kidman', '5/9/2024', 'Met Gala', 'nicolekidman', '1637269350'],
  ['Noah Schnapp', '5/9/2024', 'Inaction', 'noahschnapp', '343716991'],
  ['Oprah', '5/9/2024', 'Inaction', 'Oprah', '256770128'],
  ['Selena Gomez', '5/9/2024', 'Inaction', 'selenagomez', '62330973126'],
  ['Seth Meyers', '5/9/2024', 'Inaction', 'sethmeyers', '639903505'],
  ['Shakira', '5/9/2024', 'Met Gala', 'shakira', '217867189'],
  ['Shakira', '5/9/2024', 'Met Gala', 'shakira', '217867189'],
  ['Stephen Colbert', '5/9/2024', 'Inaction', 'stephenathome', '5506325022'],
  ['Stephen Fry', '5/9/2024', 'Hollywood Open Letter', 'stephenfryactually', '6483272'],
  ['Sydney Sweeney', '5/9/2024', 'Met Gala', 'sydney_sweeney', '8140453'],
  ['Taylor Swift', '5/9/2024', 'Inaction', 'taylorswift', '39893710646'],
  ['Tiffany Haddish', '5/9/2024', 'College Campuses Rant', 'tiffanyhaddish', '188603285'],
  ['Timothee Chalamet', '5/9/2024', 'Inaction', 'tchalamet', '29716451'],
  ['Usher', '5/9/2024', 'Met Gala', 'usher', '40949744'],
  ['Zachary Levi', '5/9/2024', 'Hollywood Open Letter', 'zacharylevi', '50473493'],
  ['Zendaya', '5/9/2024', 'Met Gala', 'zendaya', '9777455'],
  ['Adam Levine', '5/10/2024', 'Letter to Biden', 'adamlevine', '244942700'],
  ['Adam Sandler', '5/10/2024', 'Letter to Biden', 'adamsandler', '1346502623'],
  ['Addison Rae', '5/10/2024', 'Inaction', 'addisonraee', '304358009'],
  ['Alex Edelman', '5/10/2024', 'Letter to Biden', 'alexedelman', '1053951499'],
  ['Andy Cohen', '5/10/2024', 'Letter to Biden', 'bravoandy', '185371984'],
  ['Aubrey Plaza', '5/10/2024', 'Letter to Biden', 'plazadeaubrey', '4413345402'],
  ['Bella Poarch', '5/10/2024', 'Inaction', 'bellapoarch', '2964949070'],
  ['Ben Stiller', '5/10/2024', 'Letter to Biden', 'benstiller', '203001839'],
  ['Billie Eilish', '5/10/2024', 'Inaction', 'billieeilish', '28527810'],
  ['Billy Crystal', '5/10/2024', 'Letter to Biden', 'thebillycrystal', '36387361716'],
  ['Bob Odenkirk', '5/10/2024', 'Letter to Biden', 'therealbobodenkirk', '5767226464'],
  ['Brooke Shields', '5/10/2024', 'Letter to Biden', 'brookeshields', '569304980'],
  ['Camila Mendes', '5/10/2024', 'Inaction', 'camimendes', '3248600900'],
  ["Charli D'Amelio", '5/10/2024', 'Inaction', 'charlidamelio', '183250726'],
  ['Chelsea Handler', '5/10/2024', 'Letter to Biden', 'chelseahandler', '6897275'],
  ['Chloe Fineman', '5/10/2024', 'Letter to Biden', 'chloeiscrazy', '1134936949'],
  ['Chris Jericho', '5/10/2024', 'Letter to Biden', 'chrisjerichofozzy', '310106549'],
  ['Chris Rock', '5/10/2024', 'Letter to Biden', 'chrisrock', '341465666'],
  ['Constance Wu', '5/10/2024', 'Letter to Biden', 'constancewu', '20282637'],
  ['Courteney Cox', '5/10/2024', 'Letter to Biden', 'courteneycoxofficial', '4513300817'],
  ['Dan Levy', '5/10/2024', 'Met Gala', 'instadanjlevy', '2376255'],
  ['David Alan Grier', '5/10/2024', 'Letter to Biden', 'davidalangrier', '186316385'],
  ['David Schwimmer', '5/10/2024', 'Letter to Biden', '_schwim_', '4614261597'],
  ['Dean Cain', '5/10/2024', 'Letter to Biden', 'deuces1966', '443224185'],
  ['Debra Messing', '5/10/2024', 'Letter to Biden', 'therealdebramessing', '211787485'],
  ["Dixie D'Amelio", '5/10/2024', 'Inaction', 'dixiedamelio', '174530045'],
  ['Erin Foster', '5/10/2024', 'Letter to Biden', 'erinfoster', '1132312304'],
  ['Eva Mendes','5/10/2024','Inaction','evamendes', '1699975293'],
  ['Gordon Ramsay', '5/10/2024', 'Inaction', 'gordongram', '61570522684'],
  ['Gwyneth Paltrow', '5/10/2024', 'Letter to Biden', 'gwynethpaltrow', '584705572'],
  ['Henry Winkler', '5/10/2024', 'Letter to Biden', 'hwinkler4real', '194985498'],
  ['Isla Fisher', '5/10/2024', 'Letter to Biden', 'islafisher', '3204628908'],
  ['Jack Black', '5/10/2024', 'Letter to Biden', 'jackblack', '3942916701'],
  ['James Brolin', '5/10/2024', 'Letter to Biden', 'jamesbrolin_', '7076638765'],
  ['James Corden', '5/10/2024', 'Letter to Biden', 'j_corden', '3128984475'],
  ['Jason Derulo', '5/10/2024', 'Inaction', 'jasonderulo', '9203271'],
  ['Jason Reitman', '5/10/2024', 'Letter to Biden', 'jasonreitman', '1742400818'],
  ['Jason Segel', '5/10/2024', 'Letter to Biden', 'jasonsegel', '52143305794'],
  ['Jason Sudeikis', '5/10/2024', 'Letter to Biden', 'jason_sudeikis', '891707325'],
  ['Jeff Goldblum', '5/10/2024', 'Letter to Biden', 'jeffgoldblum', '1903376664'],
  ['Jesse Plemons', '5/10/2024', 'Letter to Biden', 'garyfromgamenight', '7988303846'],
  ['Jessica Biel', '5/10/2024', 'Letter to Biden', 'jessicabiel', '218689456'],
  ['Jimmy Carr', '5/10/2024', 'Letter to Biden', 'jimmycarr', '4457986801'],
  ['Joey King', '5/10/2024', 'Letter to Biden', 'joeyking', '51840413'],
  ['Jon Hamm', '5/10/2024', 'Letter to Biden', 'bestofjonhamm', '6586677232'],
  ['Jonathan Ross', '5/10/2024', 'Letter to Biden', 'mewossy', '184498847'],
  ['Jordan Peele', '5/10/2024', 'Letter to Biden', 'jordanpeele', '145605609'],
  ['Josh Brolin', '5/10/2024', 'Letter to Biden', 'joshbrolin', '2094461102'],
  ['Judd Apatow', '5/10/2024', 'Letter to Biden', 'juddapatow', '8969786'],
  ['Judge Judy Sheindlin', '5/10/2024', 'Letter to Biden', 'judgejudytv', '48782703784'],
  ['Julia Garner', '5/10/2024', 'Letter to Biden', 'juliagarnerofficial', '757256774'],
  ['Justin Theroux', '5/10/2024', 'Letter to Biden', 'justintheroux', '2205179321'],
  ['Justin Timberlake', '5/10/2024', 'Letter to Biden', 'justintimberlake', '303054725'],
  ['Karlie Kloss', '5/10/2024', 'Letter to Biden', 'karliekloss', '10581097'],
  ['Katy Perry', '5/10/2024', 'Letter to Biden', 'katyperry', '407964088'],
  ['Khaby Lame', '5/10/2024', 'Inaction', 'khaby00', '779085683'],
  ['Kimberly Loaiza', '5/10/2024', 'Inaction', 'kimberly.loaiza', '179780704'],
  ['Kirsten Dunst', '5/10/2024', 'Letter to Biden', 'kirstendunst', '3045009549'],
  ['Kristin Chenoweth', '5/10/2024', 'Letter to Biden', 'kchenoweth', '502938828'],
  ['Kristina Collins', '5/10/2024', 'Inaction', 'kriscollins', '194111427'],
  ['Laura Dern', '5/10/2024', 'Letter to Biden', 'lauradern', '1493874415'],
  ['Lea Michele', '5/10/2024', 'Letter to Biden', 'leamichele', '201150526'],
  ['Madonna', '5/10/2024', 'Letter to Biden', 'madonna', '181306552'],
  ['Mark Foster', '5/10/2024', 'Letter to Biden', 'markfoster', '336752183'],
  ['Megan Thee Stallion', '5/10/2024', 'Inaction', 'theestallion', '26227713'],
  ['Michael Rapaport', '5/10/2024', 'Letter to Biden', 'michaelrapaport', '6307284'],
  ['Millie Bobby Brown', '5/10/2024', 'Inaction', 'milliebobbybrown', '3439002676'],
  ['Molly Shannon', '5/10/2024', 'Letter to Biden', 'theofficialsuperstar', '2720035858'],
  ['MrBeast', '5/10/2024', 'Inaction', 'mrbeast', '2278169415'],
  ['Natalie Portman', '5/10/2024', 'Inaction', 'natalieportman', '6414707404'],
  ['Nicola Peltz', '5/10/2024', 'Letter to Biden', 'nicolaannepeltzbeckham', '280968413'],
  ['Nina Dobrev', '5/10/2024', 'Inaction', 'nina', '3864834798'],
  ['Olivia Wilde', '5/10/2024', 'Letter to Biden', 'oliviawilde', '612303205'],
  ['Orlando Bloom', '5/10/2024', 'Letter to Biden', 'orlandobloom', '2008067767'],
  ['Rihanna', '5/10/2024', 'Inaction', 'badgalriri', '25945306'],
  ['Rob Kardashian', '5/10/2024', 'Inaction', 'robkardashianofficial', '6511313934'],
  ['Rosie O’Donnell', '5/10/2024', 'Letter to Biden', 'rosie', '3443114461'],
  ['Sacha Baron Cohen', '5/10/2024', 'Letter to Biden', 'sachabaroncohen', '2271874071'],
  ['Sarah Paulson', '5/10/2024', 'Letter to Biden', 'mssarahcatharinepaulson', '2297300957'],
  ['Sean Combs', '5/10/2024', 'Letter to Biden', 'diddy', '22797454'],
  ['Sharon Stone', '5/10/2024', 'Letter to Biden', 'sharonstone', '1435282057'],
  ['Shawn Levy', '5/10/2024', 'Letter to Biden', 'slevydirect', '8181572862'],
  ['Sting', '5/10/2024', 'Letter to Biden', 'theofficialsting', '3213224428'],
  ['Taika Waititi', '5/10/2024', 'Letter to Biden', 'taikawaititi', '15900873'],
  ['Tyler Perry', '5/10/2024', 'Letter to Biden', 'tylerperry', '183858775'],
  ['Victoria Justice', '5/10/2024', 'Inaction', 'victoriajustice', '8326823'],
  ['Will Smith', '5/10/2024', 'Inaction', 'willsmith', '3132929984'],
  ['Zack Snyder', '5/10/2024', 'Letter to Biden', 'snydercut', '7779256480'],
  ['Zoe Saldana', '5/10/2024', 'Letter to Biden', 'zoesaldana', '1417182214'],
  ['Jared Leto', '5/10/2024', 'Inaction', 'jaredleto', '29524868'],
  ['Grimes', '5/10/2024', 'Inaction', 'grimes', '975340893'],
  ['Big Time Rush', '5/10/2024', 'Inaction', 'bigtimerush', '2374655316'],
  ['Eric Nam', '5/10/2024', 'Inaction', 'ericnam', '415115368'],
  ['Fran Drescher', '5/10/2024', 'Inaction', 'officialfrandrescher', '3319823056'],
  ['Wanda Sykes', '5/10/2024', 'Inaction', 'iamwandasykes', '1257762072'],
  ['Joel Olsteen', '5/10/2024', 'Religious Leader', 'joelosteen', '231376699'],
  ['Keith Lee', '5/10/2024', 'Inaction', 'keith_lee125', '223658869'],
  ['Ashton Kutcher', '5/10/2024', 'Inaction', 'aplusk', '4816830'],
  ['Olivia Jade', '5/10/2024', 'Inaction', 'oliviajade', '22903335'],
  ['Kate Hudson', '5/10/2024', 'Inaction', 'katehudson', '981577417'],
  ['Travis Barker', '5/10/2024', 'Inaction', 'travisbarker', '14198415'],
  ['Blink-182', '5/10/2024', 'Inaction', 'blink182', '181898931'],
  ['Jacksepticeye', '5/10/2024', 'Inaction', 'jacksepticeye', '896278327'],
  ['Markiplier', '5/10/2024', 'Inaction', 'markiplier', '704051376'],
  ['PewDiePie', '5/10/2024', 'Inaction', 'pewdiepie', '13506898'],
  ['Dolly Parton', '5/10/2024', 'Inaction', 'dollyparton', '305655757'],
  ['Tom Hanks', '5/10/2024', 'Inaction', 'tomhanks', '1758466516'],
  ['Miley Cyrus', '5/10/2024', 'Inaction', 'mileycyrus', '325734299'],
  ['Billy Ray Cyrus', '5/10/2024', 'Inaction', 'billyraycyrus', '14515448'],
  ["Katherine O'Hara", '5/10/2024', 'Inaction', 'catherineohara_chronology', '45454292587'],
  ['Woody Harrelson', '5/10/2024', 'Inaction', 'woodyharrelson', '4247113523'],
  ['Matthew Mcconaughey', '5/10/2024', 'Inaction', 'officiallymcconaughey', '21518784714'],
  ['Janet Jackson', '5/10/2024', 'Inaction', 'janetjackson', '2111292809'],
  ['Kelly Clarkson', '5/10/2024', 'Inaction', 'kellyclarkson', '263037253'],
  ['Jennifer Hudson', '5/10/2024', 'Inaction', 'iamjhud', '178398601'],
  ['Tom Jones', '5/10/2024', 'Inaction', 'realsirtomjones', '2218930673'],
  ['Gwen Stefani', '5/10/2024', 'Inaction', 'gwenstefani', '810573628'],
  ['Blake Shelton', '5/10/2024', 'Inaction', 'blakeshelton', '317081436'],
  ['Bon Jovi', '5/10/2024', 'Inaction', 'bonjovi', '372274214'],
  ['Ginnifer Goodwin', '5/10/2024', 'Inaction', 'ginnifergoodwin', '49556911773'],
  ['Rachel Bloom', '5/10/2024', 'Inaction', 'racheldoesstuff', '12071939'],
  ['Jennifer Morison', '5/10/2024', 'Inaction', 'jennifermorrison', '204317068'],
  ['Dylan Mulvaney', '5/10/2024', 'Inaction', 'dylanmulvaney', '10219962'],
  ['Carrie Underwood', '5/10/2024', 'Inaction', 'carrieunderwood', '306227985'],
  ['Miranda Lambert', '5/10/2024', 'Inaction', 'mirandalambert', '284355829'],
  ['Lainey Wilson', '5/10/2024', 'Inaction', 'laineywilson', '196645551'],
  ['Morgan Wallen', '5/10/2024', 'Inaction', 'morganwallen', '189929289'],
  ['Luke Combs', '5/10/2024', 'Inaction', 'lukecombs', '34799155'],
  ['Dr. Phil', '5/10/2024', 'Inaction', 'drphil', '1190903437'],
  ['Mindy Kaling', '5/10/2024', 'Inaction', 'mindykaling', '26422370'],
  ['B. J. Novak','5/10/2024','Inaction','bjnovak', '341752826'],
  ];


// Function to block a single user by ID
function blockUser(userToBlock) {
  const [name, date, reason, username, userId] = userToBlock; // Destructure the user ID array
  const url = `https://www.instagram.com/api/v1/web/friendships/${userId}/block/`;
  const options = {
    method: 'POST', // Assuming the method is POST
    credentials: 'include', // Necessary for cookies/session
    headers: {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded",
      "priority": "u=1, i",
      "sec-ch-prefers-color-scheme": "light",
      "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
      "sec-ch-ua-full-version-list": "\"Chromium\";v=\"124.0.6367.158\", \"Google Chrome\";v=\"124.0.6367.158\", \"Not-A.Brand\";v=\"99.0.0.0\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-model": "\"\"",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-ch-ua-platform-version": "\"13.6.2\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-asbd-id": "129477",
      "x-csrftoken": xCsrftoke,
      "x-ig-app-id": "936619743392459",
      "x-ig-www-claim": "hmac.AR3YKe2iwIGVl3wn7knHVEjSlCJIwt3EbToFCuQQtOtA7AKS",
      "x-instagram-ajax": "1013453226",
      "x-requested-with": "XMLHttpRequest"
    },
    body: null, // Assuming no body is needed; adjust if necessary
    "referrer": `https://www.instagram.com/${username}`,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "mode": "cors",
    "credentials": "include"
  };

  console.log(`Blocking user ${name} becasue of ${reason}.`);
  return fetch(url, options)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        console.log(`${index}: User ${name} blocked successfully.`, data);
      } else {
        console.error(`${index}: Error blocking user ${name}:`, data);
      }
    })
    .catch(error => {
      console.error(`${index}: Error blocking user ${name}:`, error);
    });
}

function recurviselyBlockUser() {
  // Block the user
  blockUser(usersToBlock[index]).finally(() => {
    // run the next one after block attemp is done.
    // Increment the index
    index += 1;

    // Check if there are more user IDs to block
    if (index < usersToBlock.length) {
      // Schedule the next block with a random delay
      const randomDelay = Math.floor(Math.random() * (maxWaitTimeBetweenBlocks - minWaitTimeBetweenBlocks)) + minWaitTimeBetweenBlocks;
      console.log(`${index}: Blocking user: ${usersToBlock[index][0]} after a random delay of ${randomDelay}ms.`);
      setTimeout(recurviselyBlockUser, randomDelay);
    }
  });
}

// Randomize the amount of time between every user being blocked
console.log(`${index}: Blocking user: ${usersToBlock[index][0]} after a random delay of 0ms.`);
recurviselyBlockUser();
