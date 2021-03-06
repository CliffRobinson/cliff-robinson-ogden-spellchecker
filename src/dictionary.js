//CFR Comment 6: Now we need our dictionary to compare the 
//user input against. I'm going to start by turning the provided gist into an object.

// const dictionaryString = "come get give go keep let make put seem take be do have say see send may will about across after against among at before between by down from in off on over through to under up with as for of till than a the all any every little much no other some such that this I he you who and because but or if though while how when where why again ever far forward here near now out still then there together well almost enough even not only quite so very tomorrow yesterday north south east west please yes account act addition adjustment advertisement agreement air amount amusement animal answer apparatus approval argument art attack attempt attention attraction authority back balance base behavior belief birth bit bite blood blow body brass bread breath brother building burn burst business butter canvas care cause chalk chance change cloth coal color comfort committee company comparison competition condition connection control cook copper copy cork cotton cough country cover crack credit crime crush cry current curve damage danger daughter day death debt decision degree design desire destruction detail development digestion direction discovery discussion disease disgust distance distribution division doubt drink driving dust earth edge education effect end error event example exchange existence expansion experience expert fact fall family father fear feeling fiction field fight fire flame flight flower fold food force form friend front fruit glass gold government grain grass grip group growth guide harbor harmony hate hearing heat help history hole hope hour humor ice idea impulse increase industry ink insect instrument insurance interest invention iron jelly join journey judge jump kick kiss knowledge land language laugh law lead learning leather letter level lift light limit linen liquid list look loss love machine man manager mark market mass meal measure meat meeting memory metal middle milk mind mine minute mist money month morning mother motion mountain move music name nation need news night noise note number observation offer oil operation opinion order organization ornament owner page pain paint paper part paste payment peace person place plant play pleasure point poison polish porter position powder power price print process produce profit property prose protest pull punishment purpose push quality question rain range rate ray reaction reading reason record regret relation religion representative request respect rest reward rhythm rice river road roll room rub rule run salt sand scale science sea seat secretary selection self sense servant sex shade shake shame shock side sign silk silver sister size sky sleep slip slope smash smell smile smoke sneeze snow soap society son song sort sound soup space stage start statement steam steel step stitch stone stop story stretch structure substance sugar suggestion summer support surprise swim system talk taste tax teaching tendency test theory thing thought thunder time tin top touch trade transport trick trouble turn twist unit use value verse vessel view voice walk war wash waste water wave wax way weather week weight wind wine winter woman wood wool word work wound writing year angle ant apple arch arm army baby bag ball band basin basket bath bed bee bell berry bird blade board boat bone book boot bottle box boy brain brake branch brick bridge brush bucket bulb button cake camera card cart carriage cat chain cheese chest chin church circle clock cloud coat collar comb cord cow cup curtain cushion dog door drain drawer dress drop ear egg engine eye face farm feather finger fish flag floor fly foot fork fowl frame garden girl glove goat gun hair hammer hand hat head heart hook horn horse hospital house island jewel kettle key knee knife knot leaf leg library line lip lock map match monkey moon mouth muscle nail neck needle nerve net nose nut office orange oven parcel pen pencil picture pig pin pipe plane plate plough/plow pocket pot potato prison pump rail rat receipt ring rod roof root sail school scissors screw seed sheep shelf ship shirt shoe skin skirt snake sock spade sponge spoon spring square stamp star station stem stick stocking stomach store street sun table tail thread throat thumb ticket toe tongue tooth town train tray tree trousers umbrella wall watch wheel whip whistle window wing wire worm able acid angry automatic beautiful black boiling bright broken brown cheap chemical chief clean clear common complex conscious cut deep dependent early elastic electric equal fat fertile first fixed flat free frequent full general good great grey/gray hanging happy hard healthy high hollow important kind like living long male married material medical military natural necessary new normal open parallel past physical political poor possible present private probable quick quiet ready red regular responsible right round same second separate serious sharp smooth sticky stiff straight strong sudden sweet tall thick tight tired true violent waiting warm wet wide wise yellow young awake bad bent bitter blue certain cold complete cruel dark dead dear delicate different dirty dry false feeble female foolish future green ill last late left loose loud low mixed narrow old opposite public rough sad safe secret short shut simple slow small soft solid special strange thin white wrong"

// const dictionaryArray = dictionaryString.split(" ").sort()

// const dictionaryObjUnedited = dictionaryArray.reduce((objUnderConstruction, currentWord) => {
//     objUnderConstruction[currentWord.toString()] = true
//     return objUnderConstruction
// }, {})

// console.log(dictionaryObjUnedited)

//This code produces the result below (after manually editing the entries with slashes in them):

//This is the data structure we will use for spellchecking. I didn't want to loop over 850 words
// every time a user typed anything. O(850n) isn't too bad all things considered, but there are
// data structures which have a retrieval time of 1, so using one of those means spellchecking also
// has a big O value of 1, which is as good as it can get. 

//Some quick research suggests that JS object are in fact valid hash maps:
//https://stackoverflow.com/questions/12241676/javascript-objects-as-hashes-is-the-complexity-greater-than-o1
//https://medium.com/@sherryhsu/js-objects-and-arrays-which-one-is-faster-cfcdb1281704
//Hashmaps are optimsed for retrieval, so this works as proof of concept. If I had more time I would
//look into less naive, definitively optimized implementations of hashMaps such as the ones I know
//exist in Java. 

export const dictionaryObj = {
    I: true,
    a: true,
    able: true,
    about: true,
    account: true,
    acid: true,
    across: true,
    act: true,
    addition: true,
    adjustment: true,
    advertisement: true,
    after: true,
    again: true,
    against: true,
    agreement: true,
    air: true,
    all: true,
    almost: true,
    among: true,
    amount: true,
    amusement: true,
    and: true,
    angle: true,
    angry: true,
    animal: true,
    answer: true,
    ant: true,
    any: true,
    apparatus: true,
    apple: true,
    approval: true,
    arch: true,
    argument: true,
    arm: true,
    army: true,
    art: true,
    as: true,
    at: true,
    attack: true,
    attempt: true,
    attention: true,
    attraction: true,
    authority: true,
    automatic: true,
    awake: true,
    baby: true,
    back: true,
    bad: true,
    bag: true,
    balance: true,
    ball: true,
    band: true,
    base: true,
    basin: true,
    basket: true,
    bath: true,
    be: true,
    beautiful: true,
    because: true,
    bed: true,
    bee: true,
    before: true,
    behavior: true,
    belief: true,
    bell: true,
    bent: true,
    berry: true,
    between: true,
    bird: true,
    birth: true,
    bit: true,
    bite: true,
    bitter: true,
    black: true,
    blade: true,
    blood: true,
    blow: true,
    blue: true,
    board: true,
    boat: true,
    body: true,
    boiling: true,
    bone: true,
    book: true,
    boot: true,
    bottle: true,
    box: true,
    boy: true,
    brain: true,
    brake: true,
    branch: true,
    brass: true,
    bread: true,
    breath: true,
    brick: true,
    bridge: true,
    bright: true,
    broken: true,
    brother: true,
    brown: true,
    brush: true,
    bucket: true,
    building: true,
    bulb: true,
    burn: true,
    burst: true,
    business: true,
    but: true,
    butter: true,
    button: true,
    by: true,
    cake: true,
    camera: true,
    canvas: true,
    card: true,
    care: true,
    carriage: true,
    cart: true,
    cat: true,
    cause: true,
    certain: true,
    chain: true,
    chalk: true,
    chance: true,
    change: true,
    cheap: true,
    cheese: true,
    chemical: true,
    chest: true,
    chief: true,
    chin: true,
    church: true,
    circle: true,
    clean: true,
    clear: true,
    clock: true,
    cloth: true,
    cloud: true,
    coal: true,
    coat: true,
    cold: true,
    collar: true,
    color: true,
    comb: true,
    come: true,
    comfort: true,
    committee: true,
    common: true,
    company: true,
    comparison: true,
    competition: true,
    complete: true,
    complex: true,
    condition: true,
    connection: true,
    conscious: true,
    control: true,
    cook: true,
    copper: true,
    copy: true,
    cord: true,
    cork: true,
    cotton: true,
    cough: true,
    country: true,
    cover: true,
    cow: true,
    crack: true,
    credit: true,
    crime: true,
    cruel: true,
    crush: true,
    cry: true,
    cup: true,
    current: true,
    curtain: true,
    curve: true,
    cushion: true,
    cut: true,
    damage: true,
    danger: true,
    dark: true,
    daughter: true,
    day: true,
    dead: true,
    dear: true,
    death: true,
    debt: true,
    decision: true,
    deep: true,
    degree: true,
    delicate: true,
    dependent: true,
    design: true,
    desire: true,
    destruction: true,
    detail: true,
    development: true,
    different: true,
    digestion: true,
    direction: true,
    dirty: true,
    discovery: true,
    discussion: true,
    disease: true,
    disgust: true,
    distance: true,
    distribution: true,
    division: true,
    do: true,
    dog: true,
    door: true,
    doubt: true,
    down: true,
    drain: true,
    drawer: true,
    dress: true,
    drink: true,
    driving: true,
    drop: true,
    dry: true,
    dust: true,
    ear: true,
    early: true,
    earth: true,
    east: true,
    edge: true,
    education: true,
    effect: true,
    egg: true,
    elastic: true,
    electric: true,
    end: true,
    engine: true,
    enough: true,
    equal: true,
    error: true,
    even: true,
    event: true,
    ever: true,
    every: true,
    example: true,
    exchange: true,
    existence: true,
    expansion: true,
    experience: true,
    expert: true,
    eye: true,
    face: true,
    fact: true,
    fall: true,
    false: true,
    family: true,
    far: true,
    farm: true,
    fat: true,
    father: true,
    fear: true,
    feather: true,
    feeble: true,
    feeling: true,
    female: true,
    fertile: true,
    fiction: true,
    field: true,
    fight: true,
    finger: true,
    fire: true,
    first: true,
    fish: true,
    fixed: true,
    flag: true,
    flame: true,
    flat: true,
    flight: true,
    floor: true,
    flower: true,
    fly: true,
    fold: true,
    food: true,
    foolish: true,
    foot: true,
    for: true,
    force: true,
    fork: true,
    form: true,
    forward: true,
    fowl: true,
    frame: true,
    free: true,
    frequent: true,
    friend: true,
    from: true,
    front: true,
    fruit: true,
    full: true,
    future: true,
    garden: true,
    general: true,
    get: true,
    girl: true,
    give: true,
    glass: true,
    glove: true,
    go: true,
    goat: true,
    gold: true,
    good: true,
    government: true,
    grain: true,
    grass: true,
    great: true,
    green: true,
    grey: true, 
    gray: true,
    grip: true,
    group: true,
    growth: true,
    guide: true,
    gun: true,
    hair: true,
    hammer: true,
    hand: true,
    hanging: true,
    happy: true,
    harbor: true,
    hard: true,
    harmony: true,
    hat: true,
    hate: true,
    have: true,
    he: true,
    head: true,
    healthy: true,
    hearing: true,
    heart: true,
    heat: true,
    help: true,
    here: true,
    high: true,
    history: true,
    hole: true,
    hollow: true,
    hook: true,
    hope: true,
    horn: true,
    horse: true,
    hospital: true,
    hour: true,
    house: true,
    how: true,
    humor: true,
    ice: true,
    idea: true,
    if: true,
    ill: true,
    important: true,
    impulse: true,
    in: true,
    increase: true,
    industry: true,
    ink: true,
    insect: true,
    instrument: true,
    insurance: true,
    interest: true,
    invention: true,
    iron: true,
    island: true,
    jelly: true,
    jewel: true,
    join: true,
    journey: true,
    judge: true,
    jump: true,
    keep: true,
    kettle: true,
    key: true,
    kick: true,
    kind: true,
    kiss: true,
    knee: true,
    knife: true,
    knot: true,
    knowledge: true,
    land: true,
    language: true,
    last: true,
    late: true,
    laugh: true,
    law: true,
    lead: true,
    leaf: true,
    learning: true,
    leather: true,
    left: true,
    leg: true,
    let: true,
    letter: true,
    level: true,
    library: true,
    lift: true,
    light: true,
    like: true,
    limit: true,
    line: true,
    linen: true,
    lip: true,
    liquid: true,
    list: true,
    little: true,
    living: true,
    lock: true,
    long: true,
    look: true,
    loose: true,
    loss: true,
    loud: true,
    love: true,
    low: true,
    machine: true,
    make: true,
    male: true,
    man: true,
    manager: true,
    map: true,
    mark: true,
    market: true,
    married: true,
    mass: true,
    match: true,
    material: true,
    may: true,
    meal: true,
    measure: true,
    meat: true,
    medical: true,
    meeting: true,
    memory: true,
    metal: true,
    middle: true,
    military: true,
    milk: true,
    mind: true,
    mine: true,
    minute: true,
    mist: true,
    mixed: true,
    money: true,
    monkey: true,
    month: true,
    moon: true,
    morning: true,
    mother: true,
    motion: true,
    mountain: true,
    mouth: true,
    move: true,
    much: true,
    muscle: true,
    music: true,
    nail: true,
    name: true,
    narrow: true,
    nation: true,
    natural: true,
    near: true,
    necessary: true,
    neck: true,
    need: true,
    needle: true,
    nerve: true,
    net: true,
    new: true,
    news: true,
    night: true,
    no: true,
    noise: true,
    normal: true,
    north: true,
    nose: true,
    not: true,
    note: true,
    now: true,
    number: true,
    nut: true,
    observation: true,
    of: true,
    off: true,
    offer: true,
    office: true,
    oil: true,
    old: true,
    on: true,
    only: true,
    open: true,
    operation: true,
    opinion: true,
    opposite: true,
    or: true,
    orange: true,
    order: true,
    organization: true,
    ornament: true,
    other: true,
    out: true,
    oven: true,
    over: true,
    owner: true,
    page: true,
    pain: true,
    paint: true,
    paper: true,
    parallel: true,
    parcel: true,
    part: true,
    past: true,
    paste: true,
    payment: true,
    peace: true,
    pen: true,
    pencil: true,
    person: true,
    physical: true,
    picture: true,
    pig: true,
    pin: true,
    pipe: true,
    place: true,
    plane: true,
    plant: true,
    plate: true,
    play: true,
    please: true,
    pleasure: true,
    plough: true,
    plow: true,
    pocket: true,
    point: true,
    poison: true,
    polish: true,
    political: true,
    poor: true,
    porter: true,
    position: true,
    possible: true,
    pot: true,
    potato: true,
    powder: true,
    power: true,
    present: true,
    price: true,
    print: true,
    prison: true,
    private: true,
    probable: true,
    process: true,
    produce: true,
    profit: true,
    property: true,
    prose: true,
    protest: true,
    public: true,
    pull: true,
    pump: true,
    punishment: true,
    purpose: true,
    push: true,
    put: true,
    quality: true,
    question: true,
    quick: true,
    quiet: true,
    quite: true,
    rail: true,
    rain: true,
    range: true,
    rat: true,
    rate: true,
    ray: true,
    reaction: true,
    reading: true,
    ready: true,
    reason: true,
    receipt: true,
    record: true,
    red: true,
    regret: true,
    regular: true,
    relation: true,
    religion: true,
    representative: true,
    request: true,
    respect: true,
    responsible: true,
    rest: true,
    reward: true,
    rhythm: true,
    rice: true,
    right: true,
    ring: true,
    river: true,
    road: true,
    rod: true,
    roll: true,
    roof: true,
    room: true,
    root: true,
    rough: true,
    round: true,
    rub: true,
    rule: true,
    run: true,
    sad: true,
    safe: true,
    sail: true,
    salt: true,
    same: true,
    sand: true,
    say: true,
    scale: true,
    school: true,
    science: true,
    scissors: true,
    screw: true,
    sea: true,
    seat: true,
    second: true,
    secret: true,
    secretary: true,
    see: true,
    seed: true,
    seem: true,
    selection: true,
    self: true,
    send: true,
    sense: true,
    separate: true,
    serious: true,
    servant: true,
    sex: true,
    shade: true,
    shake: true,
    shame: true,
    sharp: true,
    sheep: true,
    shelf: true,
    ship: true,
    shirt: true,
    shock: true,
    shoe: true,
    short: true,
    shut: true,
    side: true,
    sign: true,
    silk: true,
    silver: true,
    simple: true,
    sister: true,
    size: true,
    skin: true,
    skirt: true,
    sky: true,
    sleep: true,
    slip: true,
    slope: true,
    slow: true,
    small: true,
    smash: true,
    smell: true,
    smile: true,
    smoke: true,
    smooth: true,
    snake: true,
    sneeze: true,
    snow: true,
    so: true,
    soap: true,
    society: true,
    sock: true,
    soft: true,
    solid: true,
    some: true,
    son: true,
    song: true,
    sort: true,
    sound: true,
    soup: true,
    south: true,
    space: true,
    spade: true,
    special: true,
    sponge: true,
    spoon: true,
    spring: true,
    square: true,
    stage: true,
    stamp: true,
    star: true,
    start: true,
    statement: true,
    station: true,
    steam: true,
    steel: true,
    stem: true,
    step: true,
    stick: true,
    sticky: true,
    stiff: true,
    still: true,
    stitch: true,
    stocking: true,
    stomach: true,
    stone: true,
    stop: true,
    store: true,
    story: true,
    straight: true,
    strange: true,
    street: true,
    stretch: true,
    strong: true,
    structure: true,
    substance: true,
    such: true,
    sudden: true,
    sugar: true,
    suggestion: true,
    summer: true,
    sun: true,
    support: true,
    surprise: true,
    sweet: true,
    swim: true,
    system: true,
    table: true,
    tail: true,
    take: true,
    talk: true,
    tall: true,
    taste: true,
    tax: true,
    teaching: true,
    tendency: true,
    test: true,
    than: true,
    that: true,
    the: true,
    then: true,
    theory: true,
    there: true,
    thick: true,
    thin: true,
    thing: true,
    this: true,
    though: true,
    thought: true,
    thread: true,
    throat: true,
    through: true,
    thumb: true,
    thunder: true,
    ticket: true,
    tight: true,
    till: true,
    time: true,
    tin: true,
    tired: true,
    to: true,
    toe: true,
    together: true,
    tomorrow: true,
    tongue: true,
    tooth: true,
    top: true,
    touch: true,
    town: true,
    trade: true,
    train: true,
    transport: true,
    tray: true,
    tree: true,
    trick: true,
    trouble: true,
    trousers: true,
    true: true,
    turn: true,
    twist: true,
    umbrella: true,
    under: true,
    unit: true,
    up: true,
    use: true,
    value: true,
    verse: true,
    very: true,
    vessel: true,
    view: true,
    violent: true,
    voice: true,
    waiting: true,
    walk: true,
    wall: true,
    war: true,
    warm: true,
    wash: true,
    waste: true,
    watch: true,
    water: true,
    wave: true,
    wax: true,
    way: true,
    weather: true,
    week: true,
    weight: true,
    well: true,
    west: true,
    wet: true,
    wheel: true,
    when: true,
    where: true,
    while: true,
    whip: true,
    whistle: true,
    white: true,
    who: true,
    why: true,
    wide: true,
    will: true,
    wind: true,
    window: true,
    wine: true,
    wing: true,
    winter: true,
    wire: true,
    wise: true,
    with: true,
    woman: true,
    wood: true,
    wool: true,
    word: true,
    work: true,
    worm: true,
    wound: true,
    writing: true,
    wrong: true,
    year: true,
    yellow: true,
    yes: true,
    yesterday: true,
    you: true,
    young: true
  }
  