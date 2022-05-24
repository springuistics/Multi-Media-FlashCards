//The full data set is listed here because I can't get the dumb thing to load a json file from my webpage.
const bigdata = [
    {
        "word": "aesthetically",
        "sentence": "The city’s unique architecture is very aesthetically pleasing.",
        "answer_1": "beautiful",
        "answer_2": "finely",
        "answer_3": "artistically",
        "answer_4": "supposedly",
        "correct": "artistically"
      },
      {
        "word": "allegedly",
        "sentence": "There are studies allegedly showing that this treatment works.",
        "answer_1": "indistinctly",
        "answer_2": "aesthetically",
        "answer_3": "supposedly",
        "answer_4": "conversely",
        "correct": "supposedly"
      },
      {
        "word": "appellation",
        "sentence": "Elvis earned the appelation the King due to his popularity.",
        "answer_1": "moniker",
        "answer_2": "ghost",
        "answer_3": "award",
        "answer_4": "money of",
        "correct": "moniker"
      },
      {
        "word": "archetype",
        "sentence": "Pluto is the perfect archetype of a dwarf planet.",
        "answer_1": "style",
        "answer_2": "model",
        "answer_3": "function",
        "answer_4": "shape",
        "correct": "model"
      },
      {
        "word": "assembling",
        "sentence": "The research team will be assembling in the laboratory at 9:00.",
        "answer_1": "going",
        "answer_2": "presenting",
        "answer_3": "gathering",
        "answer_4": "researching",
        "correct": "gathering"
      },
      {
        "word": "blurry",
        "sentence": "His image was blurry due to the poor Wi-Fi connection.",
        "answer_1": "visible",
        "answer_2": "finely",
        "answer_3": "banned",
        "answer_4": "indistinct",
        "correct": "indistinct"
      },
      {
        "word": "bound",
        "sentence": "An electron is bound to a nucleus by electromagnetism.",
        "answer_1": "widespread",
        "answer_2": "tied",
        "answer_3": "combination",
        "answer_4": "modelled",
        "correct": "tied"
      },
      {
        "word": "common",
        "sentence": "Environmental courses have become common recently.",
        "answer_1": "concoction",
        "answer_2": "conserved",
        "answer_3": "widespread",
        "answer_4": "monikered",
        "correct": "widespread"
      },
      {
        "word": "concoction",
        "sentence": "He used an interesting concoction of chemicals.",
        "answer_1": "combination",
        "answer_2": "negation",
        "answer_3": "appellation",
        "answer_4": "archetype",
        "correct": "combination"
      },
      {
        "word": "conserve",
        "sentence": "In fact, camels do not conserve water in their humps.",
        "answer_1": "blurry",
        "answer_2": "indistinct",
        "answer_3": "retain",
        "answer_4": "combine",
        "correct": "retain"
      },
      {
        "word": "counteracted",
        "sentence": "Her new policies completely counteracted the previous rules.",
        "answer_1": "negated",
        "answer_2": "tied",
        "answer_3": "widespread",
        "answer_4": "concocted",
        "correct": "negated"
      },
      {
        "word": "artistically",
        "sentence": "The city’s unique architecture is very artistically pleasing.",
        "answer_1": "aesthetically",
        "answer_2": "finely",
        "answer_3": "supposedly",
        "answer_4": "beautiful",
        "correct": "aesthetically"
      },
      {
        "word": "supposedly",
        "sentence": "There are studies supposedly showing that this treatment works.",
        "answer_1": "aesthetically",
        "answer_2": "indistinctly",
        "answer_3": "allegedly",
        "answer_4": "conversely",
        "correct": "allegedly"
      },
      {
        "word": "moniker",
        "sentence": "Elvis earned the moniker the King due to his popularity.",
        "answer_1": "money of",
        "answer_2": "appellation",
        "answer_3": "award",
        "answer_4": "ghost",
        "correct": "appellation"
      },
      {
        "word": "model",
        "sentence": "Pluto is the perfect model of a dwarf planet.",
        "answer_1": "archetype",
        "answer_2": "function",
        "answer_3": "shape",
        "answer_4": "style",
        "correct": "archetype"
      },
      {
        "word": "gathering",
        "sentence": "The research team will be gathering in the laboratory at 9:00.",
        "answer_1": "researching",
        "answer_2": "presenting",
        "answer_3": "assembling",
        "answer_4": "going",
        "correct": "assembling"
      },
      {
        "word": "indistinct",
        "sentence": "His image was indistinct due to the poor Wi-Fi connection.",
        "answer_1": "blurry",
        "answer_2": "banned",
        "answer_3": "visible",
        "answer_4": "finely",
        "correct": "blurry"
      },
      {
        "word": "tied",
        "sentence": "An electron is tied to a nucleus by electromagnetism.",
        "answer_1": "combination",
        "answer_2": "bound",
        "answer_3": "modelled",
        "answer_4": "widespread",
        "correct": "bound"
      },
      {
        "word": "widespread",
        "sentence": "Environmental courses have become widespread recently.",
        "answer_1": "monikered",
        "answer_2": "concoction",
        "answer_3": "common",
        "answer_4": "conserved",
        "correct": "common"
      },
      {
        "word": "combination",
        "sentence": "He used an interesting combination of chemicals.",
        "answer_1": "concoction",
        "answer_2": "archetype",
        "answer_3": "negation",
        "answer_4": "appellation",
        "correct": "concoction"
      },
      {
        "word": "retain",
        "sentence": "In fact, camels do not retain water in their humps.",
        "answer_1": "blurry",
        "answer_2": "conserve",
        "answer_3": "combine",
        "answer_4": "indistinct",
        "correct": "conserve"
      },
      {
        "word": "negated",
        "sentence": "Her new policies completely negated the previous rules.",
        "answer_1": "tied",
        "answer_2": "widespread",
        "answer_3": "concocted",
        "answer_4": "counteracted",
        "correct": "counteracted"
      },
      {
        "word": "devote",
        "sentence": "Rare individuals devote their lives to the service of others.",
        "answer_1": "dedicate",
        "answer_2": "radiate",
        "answer_3": "enclose",
        "answer_4": "improve",
        "correct": "dedicate"
      },
      {
        "word": "displayed",
        "sentence": "Your permit must be displayed at the entrance gate.",
        "answer_1": "used",
        "answer_2": "searched",
        "answer_3": "radiated",
        "answer_4": "shown",
        "correct": "shown"
      },
      {
        "word": "drawbacks",
        "sentence": "His proposal has too many drawbacks for us to proceed.",
        "answer_1": "trends",
        "answer_2": "displays",
        "answer_3": "problems",
        "answer_4": "enhancements",
        "correct": "problems"
      },
      {
        "word": "emanating",
        "sentence": "This device is used to detect light emanating from distant stars.",
        "answer_1": "surrounding",
        "answer_2": "radiating",
        "answer_3": "comprehensive",
        "answer_4": "enclosing",
        "correct": "radiating"
      },
      {
        "word": "employed",
        "sentence": "We employed a novel technique to gather the relevant data.",
        "answer_1": "enhanced",
        "answer_2": "displayed",
        "answer_3": "used",
        "answer_4": "envisioned",
        "correct": "used"
      },
      {
        "word": "enclosing",
        "sentence": "A fence was built enclosing the flower garden.",
        "answer_1": "comprehensing",
        "answer_2": "surrounding",
        "answer_3": "dedicating",
        "answer_4": "employing",
        "correct": "surrounding"
      },
      {
        "word": "enhance",
        "sentence": "She wants to enhance her speaking skills.",
        "answer_1": "improve",
        "answer_2": "trend",
        "answer_3": "devote",
        "answer_4": "display",
        "correct": "improve"
      },
      {
        "word": "envision",
        "sentence": "I envision us starting the project sometime in October.",
        "answer_1": "enhance",
        "answer_2": "dedicate",
        "answer_3": "imagine",
        "answer_4": "forage",
        "correct": "imagine"
      },
      {
        "word": "fad",
        "sentence": "Brightly dyed hair has become a fad among teenagers.",
        "answer_1": "trend",
        "answer_2": "display",
        "answer_3": "drawback",
        "answer_4": "envision",
        "correct": "trend"
      },
      {
        "word": "forage",
        "sentence": "Wild chimps forage for food for up to 18 hours a day.",
        "answer_1": "devote",
        "answer_2": "search",
        "answer_3": "holistic",
        "answer_4": "employ",
        "correct": "search"
      },
      {
        "word": "holistic",
        "sentence": "Deep learning requires a holistic teaching approach.",
        "answer_1": "shown",
        "answer_2": "comprehensive",
        "answer_3": "problematic",
        "answer_4": "emanating",
        "correct": "comprehensive"
      },
      {
        "word": "dedicate",
        "sentence": "Rare individuals dedicate their lives to the service of others.",
        "answer_1": "employ",
        "answer_2": "enclose",
        "answer_3": "devote",
        "answer_4": "radiate",
        "correct": "devote"
      },
      {
        "word": "shown",
        "sentence": "Your permit must be shown at the entrance gate.",
        "answer_1": "surrounded",
        "answer_2": "displayed",
        "answer_3": "envisioned",
        "answer_4": "imagined",
        "correct": "displayed"
      },
      {
        "word": "problems",
        "sentence": "His proposal has too many problems for us to proceed.",
        "answer_1": "fads",
        "answer_2": "forages",
        "answer_3": "drawbacks",
        "answer_4": "enclosures",
        "correct": "drawbacks"
      },
      {
        "word": "radiating",
        "sentence": "This device is used to detect light radiating from distant stars.",
        "answer_1": "surrounding",
        "answer_2": "improving",
        "answer_3": "emanating",
        "answer_4": "enhancing",
        "correct": "emanating"
      },
      {
        "word": "used",
        "sentence": "We used a novel technique to gather the relevant data.",
        "answer_1": "employed",
        "answer_2": "dedicated",
        "answer_3": "envisioned",
        "answer_4": "searched",
        "correct": "employed"
      },
      {
        "word": "surrounding",
        "sentence": "A fence was built surrounding the flower garden.",
        "answer_1": "envisioning",
        "answer_2": "devoting",
        "answer_3": "enclosing",
        "answer_4": "foraging",
        "correct": "enclosing"
      },
      {
        "word": "improve",
        "sentence": "She wants to improve her speaking skills.",
        "answer_1": "devote",
        "answer_2": "trend",
        "answer_3": "enhance",
        "answer_4": "radiate",
        "correct": "enhance"
      },
      {
        "word": "imagine",
        "sentence": "I imagine us starting the project sometime in October.",
        "answer_1": "emanate",
        "answer_2": "envision",
        "answer_3": "enhance",
        "answer_4": "fad",
        "correct": "envision"
      },
      {
        "word": "trend",
        "sentence": "Brightly dyed hair has become a trend among teenagers.",
        "answer_1": "forage",
        "answer_2": "holistic",
        "answer_3": "display",
        "answer_4": "fad",
        "correct": "fad"
      },
      {
        "word": "search",
        "sentence": "Wild chimps search for food for up to 18 hours a day.",
        "answer_1": "emanate",
        "answer_2": "forage",
        "answer_3": "employ",
        "answer_4": "enclose",
        "correct": "forage"
      },
      {
        "word": "comprehensive",
        "sentence": "Deep learning requires a comprehensive teaching approach.",
        "answer_1": "dedicated",
        "answer_2": "holistic",
        "answer_3": "displayed",
        "answer_4": "improved",
        "correct": "holistic"
      },
      {
        "word": "illuminated",
        "sentence": "His lecture illuminated the more difficult parts of the textbook.",
        "answer_1": "lineated",
        "answer_2": "clarified",
        "answer_3": "minimized",
        "answer_4": "intensified",
        "correct": "clarified"
      },
      {
        "word": "infamous",
        "sentence": "She was infamous for continuously ignoring company rules.",
        "answer_1": "duty",
        "answer_2": "notorious",
        "answer_3": "inventory",
        "answer_4": "apparent",
        "correct": "notorious"
      },
      {
        "word": "inventory",
        "sentence": "We must purchase inventory for the shop before next week.",
        "answer_1": "merchandise",
        "answer_2": "means",
        "answer_3": "lineage",
        "answer_4": "duties",
        "correct": "merchandise"
      },
      {
        "word": "lethal",
        "sentence": "Surprisingly, tarantula venom is not lethal to humans.",
        "answer_1": "intensified",
        "answer_2": "obligated",
        "answer_3": "infamous",
        "answer_4": "deadly",
        "correct": "deadly"
      },
      {
        "word": "lineage",
        "sentence": "Most people do not know their extended family lineage.",
        "answer_1": "obligation",
        "answer_2": "heritage",
        "answer_3": "medium",
        "answer_4": "objective",
        "correct": "heritage"
      },
      {
        "word": "magnified",
        "sentence": "Scrutiny of the data will be magnified once it is published.",
        "answer_1": "intensified",
        "answer_2": "reduced",
        "answer_3": "illuminated",
        "answer_4": "peculiar",
        "correct": "intensified"
      },
      {
        "word": "medium",
        "sentence": "Metal wires are a medium to conduct electricity.",
        "answer_1": "lineage",
        "answer_2": "objective",
        "answer_3": "means",
        "answer_4": "magnificent",
        "correct": "means"
      },
      {
        "word": "minimizes",
        "sentence": "It is known that physical exercise minimizes mental stress.",
        "answer_1": "obligates",
        "answer_2": "clarifies",
        "answer_3": "reduces",
        "answer_4": "illuminates",
        "correct": "reduces"
      },
      {
        "word": "objective",
        "sentence": "To succeed in your studies, you must have a clear objective.",
        "answer_1": "apparent",
        "answer_2": "obvious",
        "answer_3": "purpose",
        "answer_4": "obligation",
        "correct": "purpose"
      },
      {
        "word": "obligation",
        "sentence": "Parents have an obligation to provide for their children.",
        "answer_1": "objective",
        "answer_2": "lineage",
        "answer_3": "obvious",
        "answer_4": "duty",
        "correct": "duty"
      },
      {
        "word": "obvious",
        "sentence": "Subatomic particles have no obvious physical structure.",
        "answer_1": "unusual",
        "answer_2": "apparent",
        "answer_3": "lethal",
        "answer_4": "minimized",
        "correct": "apparent"
      },
      {
        "word": "peculiar",
        "sentence": "The bacteria have a very peculiar knot-like protein structure.",
        "answer_1": "unusual",
        "answer_2": "lethal",
        "answer_3": "infamous",
        "answer_4": "medium",
        "correct": "unusual"
      },
      {
        "word": "clarified",
        "sentence": "His lecture clarified the more difficult parts of the textbook.",
        "answer_1": "illuminated",
        "answer_2": "magnified",
        "answer_3": "minimized",
        "answer_4": "objectified",
        "correct": "illuminated"
      },
      {
        "word": "notorious",
        "sentence": "She was notorious for continuously ignoring company rules.",
        "answer_1": "infamous",
        "answer_2": "obvious",
        "answer_3": "peculiar",
        "answer_4": "intensified",
        "correct": "infamous"
      },
      {
        "word": "merchandise",
        "sentence": "We must purchase merchandise for the shop before next week.",
        "answer_1": "mediums",
        "answer_2": "objectives",
        "answer_3": "apparents",
        "answer_4": "inventory",
        "correct": "inventory"
      },
      {
        "word": "deadly",
        "sentence": "Surprisingly, tarantula venom is not deadly to humans.",
        "answer_1": "magnified",
        "answer_2": "minimized",
        "answer_3": "apparent",
        "answer_4": "lethal",
        "correct": "lethal"
      },
      {
        "word": "heritage",
        "sentence": "Most people do not know their extended family heritage.",
        "answer_1": "medium",
        "answer_2": "obligation",
        "answer_3": "lineage",
        "answer_4": "reduction",
        "correct": "lineage"
      },
      {
        "word": "intensified",
        "sentence": "Scrutiny of the data will be intensified once it is published.",
        "answer_1": "magnified",
        "answer_2": "clarified",
        "answer_3": "deadly",
        "answer_4": "purposeful",
        "correct": "magnified"
      },
      {
        "word": "means",
        "sentence": "Metal wires are a means to conduct electricity.",
        "answer_1": "medium",
        "answer_2": "objective",
        "answer_3": "lineage",
        "answer_4": "duty",
        "correct": "medium"
      },
      {
        "word": "reduces",
        "sentence": "It is known that physical exercise reduces mental stress.",
        "answer_1": "obligates",
        "answer_2": "minimizes",
        "answer_3": "peculiar",
        "answer_4": "incentivizes",
        "correct": "minimizes"
      },
      {
        "word": "purpose",
        "sentence": "To succeed in your studies, you must have a clear purpose.",
        "answer_1": "heritage",
        "answer_2": "means",
        "answer_3": "inventory",
        "answer_4": "objective",
        "correct": "objective"
      },
      {
        "word": "duty",
        "sentence": "Parents have a duty to provide for their children.",
        "answer_1": "means",
        "answer_2": "obligation",
        "answer_3": "apparent",
        "answer_4": "purpose",
        "correct": "obligation"
      },
      {
        "word": "apparent",
        "sentence": "Subatomic particles have no apparent physical structure.",
        "answer_1": "unusual",
        "answer_2": "intensified",
        "answer_3": "obvious",
        "answer_4": "reduced",
        "correct": "obvious"
      },
      {
        "word": "unusual",
        "sentence": "The bacteria have a very unusual knot-like protein structure.",
        "answer_1": "obvious",
        "answer_2": "lethal",
        "answer_3": "heritage",
        "answer_4": "peculiar",
        "correct": "peculiar"
      },
      {
        "word": "period",
        "sentence": "Picasso went through a period using only blueish paints.",
        "answer_1": "restart",
        "answer_2": "salvage",
        "answer_3": "phase",
        "answer_4": "layer",
        "correct": "phase"
      },
      {
        "word": "pertain",
        "sentence": "His lectures pertain to his experiences in the Antarctic.",
        "answer_1": "resume",
        "answer_2": "relate",
        "answer_3": "propose",
        "answer_4": "imply",
        "correct": "relate"
      },
      {
        "word": "previous",
        "sentence": "He comes highly recommended by his previous employer.",
        "answer_1": "period",
        "answer_2": "suggested",
        "answer_3": "former",
        "answer_4": "salvaged",
        "correct": "former"
      },
      {
        "word": "resume",
        "sentence": "We hope to resume the game as soon as possible.",
        "answer_1": "restart",
        "answer_2": "imply",
        "answer_3": "talent",
        "answer_4": "strata",
        "correct": "restart"
      },
      {
        "word": "salvaged",
        "sentence": "I think the data can be salvaged if we act quickly.",
        "answer_1": "adeptness",
        "answer_2": "submerged",
        "answer_3": "layered",
        "answer_4": "saved",
        "correct": "saved"
      },
      {
        "word": "strata",
        "sentence": "The Grand Canyon is made up of over 40 rock strata.",
        "answer_1": "symmetries",
        "answer_2": "adeptness",
        "answer_3": "layers",
        "answer_4": "periods",
        "correct": "layers"
      },
      {
        "word": "submerged",
        "sentence": "The test object must be submerged to a depth of at least 1 meter.",
        "answer_1": "related",
        "answer_2": "sunken",
        "answer_3": "pertained",
        "answer_4": "salvaged",
        "correct": "sunken"
      },
      {
        "word": "suggest",
        "sentence": "The results suggest that our presumptions were correct.",
        "answer_1": "pertain",
        "answer_2": "resume",
        "answer_3": "imply",
        "answer_4": "save",
        "correct": "imply"
      },
      {
        "word": "symmetrical",
        "sentence": "Most planets have a symmetrical orbit in relation to their stars.",
        "answer_1": "sunken",
        "answer_2": "former",
        "answer_3": "phase",
        "answer_4": "proportional",
        "correct": "proportional"
      },
      {
        "word": "talent",
        "sentence": "She has a true talent for analyzing statistical data.",
        "answer_1": "strata",
        "answer_2": "symmetry",
        "answer_3": "adeptness",
        "answer_4": "phrase",
        "correct": "adeptness"
      },
      {
        "word": "phase",
        "sentence": "Picasso went through a phase using only blueish paints.",
        "answer_1": "resume",
        "answer_2": "adeptness",
        "answer_3": "period",
        "answer_4": "layer",
        "correct": "period"
      },
      {
        "word": "relate",
        "sentence": "His lectures relate to his experiences in the Antarctic.",
        "answer_1": "suggest",
        "answer_2": "submerge",
        "answer_3": "pertain",
        "answer_4": "restart",
        "correct": "pertain"
      },
      {
        "word": "former",
        "sentence": "He comes highly recommended by his former employer.",
        "answer_1": "previous",
        "answer_2": "proportional",
        "answer_3": "talent",
        "answer_4": "suggested",
        "correct": "previous"
      },
      {
        "word": "restart",
        "sentence": "We hope to restart the game as soon as possible.",
        "answer_1": "symmetrical",
        "answer_2": "imply",
        "answer_3": "relate",
        "answer_4": "resume",
        "correct": "resume"
      },
      {
        "word": "saved",
        "sentence": "I think the data can be saved if we act quickly.",
        "answer_1": "submerged",
        "answer_2": "suggested",
        "answer_3": "implied",
        "answer_4": "salvaged",
        "correct": "salvaged"
      },
      {
        "word": "layers",
        "sentence": "The Grand Canyon is made up of over 40 rock layers.",
        "answer_1": "phases",
        "answer_2": "adeptness",
        "answer_3": "strata",
        "answer_4": "relations",
        "correct": "strata"
      },
      {
        "word": "sunken",
        "sentence": "The test object must be sunken to a depth of at least 1 meter.",
        "answer_1": "pertained",
        "answer_2": "saved",
        "answer_3": "submerged",
        "answer_4": "propelled",
        "correct": "submerged"
      },
      {
        "word": "imply",
        "sentence": "The results imply that our presumptions were correct.",
        "answer_1": "restart",
        "answer_2": "adept",
        "answer_3": "pertain",
        "answer_4": "suggest",
        "correct": "suggest"
      },
      {
        "word": "proportional",
        "sentence": "Most planets have a proportional orbit in relation to their stars.",
        "answer_1": "former",
        "answer_2": "symmetrical",
        "answer_3": "layered",
        "answer_4": "salvaged",
        "correct": "symmetrical"
      },
      {
        "word": "adeptness",
        "sentence": "She has a true adeptness for analyzing statistical data.",
        "answer_1": "proportion",
        "answer_2": "phase",
        "answer_3": "relation",
        "answer_4": "talent",
        "correct": "talent"
      },
      {
        "word": "transition",
        "sentence": "The period from 1954 to 1964 was a time of great economic transition in Japan.",
        "answer_1": "prevalence",
        "answer_2": "change",
        "answer_3": "fanatics",
        "answer_4": "ubiquity",
        "correct": "change"
      },
      {
        "word": "ubiquitous",
        "sentence": "Toyotas are the most ubiquitous vehicle on the road today.",
        "answer_1": "null",
        "answer_2": "prevalent",
        "answer_3": "ardent",
        "answer_4": "hated",
        "correct": "prevalent"
      },
      {
        "word": "witnessed",
        "sentence": "The crime was not witnessed by anyone.",
        "answer_1": "ardent",
        "answer_2": "infracted",
        "answer_3": "observed",
        "answer_4": "inflicted",
        "correct": "observed"
      },
      {
        "word": "zealots",
        "sentence": "Though common in the 1970s, political zealots are rare today.",
        "answer_1": "ubiquities",
        "answer_2": "fervent",
        "answer_3": "transitions",
        "answer_4": "fanatics",
        "correct": "fanatics"
      },
      {
        "word": "null",
        "sentence": "The contract is null if either party violates the agreement.",
        "answer_1": "ardent",
        "answer_2": "violation",
        "answer_3": "void",
        "answer_4": "animosity",
        "correct": "void"
      },
      {
        "word": "fervent",
        "sentence": "His fervent supporters marched with him to city hall.",
        "answer_1": "ardent",
        "answer_2": "prevalent",
        "answer_3": "zealots",
        "answer_4": "witnessed",
        "correct": "ardent"
      },
      {
        "word": "infraction",
        "sentence": "A minor traffic infraction can have serious consequences.",
        "answer_1": "transition",
        "answer_2": "violation",
        "answer_3": "robust",
        "answer_4": "witness",
        "correct": "violation"
      },
      {
        "word": "inflict",
        "sentence": "Luckily, the typhoon did not inflict any damage on the town.",
        "answer_1": "animosity",
        "answer_2": "change",
        "answer_3": "void",
        "answer_4": "wreak",
        "correct": "wreak"
      },
      {
        "word": "robust",
        "sentence": "The economy remained robust throughout the 1980s.",
        "answer_1": "void",
        "answer_2": "ubiquitous",
        "answer_3": "strong",
        "answer_4": "infracted",
        "correct": "strong"
      },
      {
        "word": "animosity",
        "sentence": "The heated disagreement caused animosity between them.",
        "answer_1": "infracted",
        "answer_2": "hatred",
        "answer_3": "inflicted",
        "answer_4": "fanatic",
        "correct": "hatred"
      },
      {
        "word": "change",
        "sentence": "The period from 1954 to 1964 was a time of great economic change in Japan.",
        "answer_1": "zealot",
        "answer_2": "transition",
        "answer_3": "fervent",
        "answer_4": "hurt",
        "correct": "transition"
      },
      {
        "word": "prevalent",
        "sentence": "Toyotas are the most prevalent vehicle on the road today.",
        "answer_1": "void",
        "answer_2": "ubiquitous",
        "answer_3": "ardent",
        "answer_4": "wreaked",
        "correct": "ubiquitous"
      },
      {
        "word": "observed",
        "sentence": "The crime was not observed by anyone.",
        "answer_1": "wreaked",
        "answer_2": "prevented",
        "answer_3": "infracted",
        "answer_4": "witnessed",
        "correct": "witnessed"
      },
      {
        "word": "fanatics",
        "sentence": "Though common in the 1970s, political fanatics are rare today.",
        "answer_1": "prevalence",
        "answer_2": "inflictions",
        "answer_3": "zealots",
        "answer_4": "animosities",
        "correct": "zealots"
      },
      {
        "word": "void",
        "sentence": "The contract is void if either party violates the agreement.",
        "answer_1": "infracted",
        "answer_2": "fervent",
        "answer_3": "robust",
        "answer_4": "null",
        "correct": "null"
      },
      {
        "word": "ardent",
        "sentence": "His ardent supporters marched with him to city hall.",
        "answer_1": "zealots",
        "answer_2": "fervent",
        "answer_3": "wreaked",
        "answer_4": "void",
        "correct": "fervent"
      },
      {
        "word": "violation",
        "sentence": "A minor traffic violation can have serious consequences.",
        "answer_1": "void",
        "answer_2": "robust",
        "answer_3": "observation",
        "answer_4": "infraction",
        "correct": "infraction"
      },
      {
        "word": "wreak",
        "sentence": "Luckily, the typhoon did not wreak any damage on the town.",
        "answer_1": "strengthen",
        "answer_2": "observe",
        "answer_3": "transition",
        "answer_4": "inflict",
        "correct": "inflict"
      },
      {
        "word": "strong",
        "sentence": "The economy remained strong throughout the 1980s.",
        "answer_1": "void",
        "answer_2": "animated",
        "answer_3": "robust",
        "answer_4": "null",
        "correct": "robust"
      },
      {
        "word": "hatred",
        "sentence": "The heated disagreement caused hatred between them.",
        "answer_1": "ubiquity",
        "answer_2": "fanatics",
        "answer_3": "violations",
        "answer_4": "animosity",
        "correct": "animosity"
      },
      {
        "word": "hurl",
        "sentence": "The debate ended when he began to hurl insults at others.",
        "answer_1": "quote",
        "answer_2": "ease",
        "answer_3": "exhaust",
        "answer_4": "sling",
        "correct": "sling"
      },
      {
        "word": "timid",
        "sentence": "It is hard not to feel a little timid when meeting someone new.",
        "answer_1": "disorderly",
        "answer_2": "concurrent",
        "answer_3": "nervous",
        "answer_4": "merciful",
        "correct": "nervous"
      },
      {
        "word": "soothe",
        "sentence": "A cup of tea usually helps to soothe one's frayed nerves.",
        "answer_1": "exhaust",
        "answer_2": "mercy",
        "answer_3": "cite",
        "answer_4": "ease",
        "correct": "ease"
      },
      {
        "word": "deplete",
        "sentence": "Action must be taken soon not to deplete the earth's resources.",
        "answer_1": "exhaust",
        "answer_2": "alleviate",
        "answer_3": "hurl",
        "answer_4": "chaotic",
        "correct": "exhaust"
      },
      {
        "word": "cite",
        "sentence": "You must cite your sources when writing papers.",
        "answer_1": "sling",
        "answer_2": "quote",
        "answer_3": "mitigate",
        "answer_4": "concur",
        "correct": "quote"
      },
      {
        "word": "chaotic",
        "sentence": "The meeting was very chaotic, so little was accomplished.",
        "answer_1": "clemency",
        "answer_2": "simultaneous",
        "answer_3": "disorderly",
        "answer_4": "depleted",
        "correct": "disorderly"
      },
      {
        "word": "clemency",
        "sentence": "The lawyer argued that his client should receive clemency.",
        "answer_1": "chaos",
        "answer_2": "sling",
        "answer_3": "mercy",
        "answer_4": "freight",
        "correct": "mercy"
      },
      {
        "word": "freight",
        "sentence": "Three percent of the world's freight is carried through the Panama Canal.",
        "answer_1": "soothe",
        "answer_2": "citations",
        "answer_3": "cargo",
        "answer_4": "chaos",
        "correct": "cargo"
      },
      {
        "word": "mitigate",
        "sentence": "The medicine, though very effective, does not mitigate pain.",
        "answer_1": "cite",
        "answer_2": "disorder",
        "answer_3": "exhaust",
        "answer_4": "alleviate",
        "correct": "alleviate"
      },
      {
        "word": "concurrent",
        "sentence": "Concurrent studies will be conducted in three different countries.",
        "answer_1": "soothe",
        "answer_2": "simultaneous",
        "answer_3": "clemency",
        "answer_4": "timid",
        "correct": "simultaneous"
      },
      {
        "word": "sling",
        "sentence": "The debate ended when he began to sling insults at others.",
        "answer_1": "mitigate",
        "answer_2": "soothe",
        "answer_3": "quote",
        "answer_4": "hurl",
        "correct": "hurl"
      },
      {
        "word": "nervous",
        "sentence": "It is hard not to feel a little nervous when meeting someone new.",
        "answer_1": "timid",
        "answer_2": "quoted",
        "answer_3": "soothed",
        "answer_4": "chaotic",
        "correct": "timid"
      },
      {
        "word": "ease",
        "sentence": "A cup of tea usually helps to ease one's frayed nerves.",
        "answer_1": "freight",
        "answer_2": "deplete",
        "answer_3": "concur",
        "answer_4": "soothe",
        "correct": "soothe"
      },
      {
        "word": "exhaust",
        "sentence": "Action must be taken soon not to exhaust the earth's resources.",
        "answer_1": "cargo",
        "answer_2": "sling",
        "answer_3": "quote",
        "answer_4": "deplete",
        "correct": "deplete"
      },
      {
        "word": "quote",
        "sentence": "You must quote your sources when writing papers.",
        "answer_1": "clemency",
        "answer_2": "alleviate",
        "answer_3": "hurl",
        "answer_4": "cite",
        "correct": "cite"
      },
      {
        "word": "disorderly",
        "sentence": "The meeting was very disorderly, so little was accomplished.",
        "answer_1": "mitigated",
        "answer_2": "concurrent",
        "answer_3": "nervous",
        "answer_4": "chaotic",
        "correct": "chaotic"
      },
      {
        "word": "mercy",
        "sentence": "The lawyer argued that his client should receive mercy.",
        "answer_1": "cargo",
        "answer_2": "exhaustion",
        "answer_3": "disorderly",
        "answer_4": "clemency",
        "correct": "clemency"
      },
      {
        "word": "cargo",
        "sentence": "Three percent of the world's cargo is carried through the Panama Canal.",
        "answer_1": "simultaneous",
        "answer_2": "depletion",
        "answer_3": "quota",
        "answer_4": "freight",
        "correct": "freight"
      },
      {
        "word": "alleviate",
        "sentence": "The medicine, though very effective, does not alleviate pain.",
        "answer_1": "timid",
        "answer_2": "concur",
        "answer_3": "mitigate",
        "answer_4": "freight",
        "correct": "mitigate"
      },
      {
        "word": "simultaneous",
        "sentence": "Simultaneous studies will be conducted in three different countries.",
        "answer_1": "cargo",
        "answer_2": "concurrent",
        "answer_3": "ease",
        "answer_4": "mercy",
        "correct": "concurrent"
      }
  ];
  
  //Sets variables for the actual practice set (data) and the selected items (item_select)
  var data = [];
  var item_select = [];
  
  //updates the actual practice set data after items have been selected
  function wpupdate(){
  for (var i of item_select) {
    data.push(bigdata[i]);
  } 
  getRandomWord();
  }
  
  //Opens the items to be chosen by creating elements (a checkbox, the word or word part, and a break)
  function Choose_Items(){
    document.getElementById('items_chooser').style.display="block";
    bigdata.forEach(function (problemifier, index){
      var checker = document.createElement("input");
      checker.setAttribute("type","checkbox");
      checker.id = "itemno_" + index;
      let current_item = problemifier.word;
      let current_box = "itemno_" + index;
      var labeler = document.createElement("label");
      labeler.setAttribute("for", "itemno_" + index);
      labeler.id = "itemno_id_" + index;
      labeler.textContent = current_item;
      var dumb_br = document.createElement("br");
      dumb_br.id = "dumb_br_" + index;
      document.getElementById('items_chooser').appendChild(dumb_br);
      document.getElementById('items_chooser').appendChild(checker);
      document.getElementById('items_chooser').appendChild(labeler);
      if (item_select.length > 0){
        
        let comeonman = item_select.includes(index);
        if (comeonman == true){
          document.getElementById(current_box).checked=true;
        } else {
          document.getElementById(current_box).checked=false;
        } }
  });
    
    data = [];
    item_select = [];
  }
  
  
  //Once the items have been chosen, this deletes the created elements and hides the choosing section again. Also calls the wpupdate function.
  function Items_Chosen(){
    bigdata.forEach(function (problem, index){
      var get_check = "itemno_"+index;
      var get_label = "itemno_id_"+index;
      var get_br = "dumb_br_"+index;
      var act_br = document.getElementById(get_br);
      var act_label = document.getElementById(get_label);
      var act_check = document.getElementById(get_check);
      if (act_check.checked == true){
        item_select.push(index);
        
      }
      act_check.parentNode.removeChild(act_check);
      act_label.parentNode.removeChild(act_label);
      act_br.parentNode.removeChild(act_br);
    });
    document.getElementById('items_chooser').style.display="none";
    wpupdate();
  }
  
  
  //Sets the RN variable, which controls which item is being considered from the data set and the language.
  var RN = 0;
  var language_var = 'en-US'
  function Check_Language(){
    language_var = document.getElementById('language_select').value;
  }
  
  //Reset functions re-hide the decision on whether answers were correct or not. They are called by other functions.
  function reset_speech() {
      document.getElementById('good_p').style.visibility="hidden";
  }
  
  function reset_answers() {
      document.getElementById('good_a').style.visibility="hidden";
  }
  
  //Sets RN to a random number in the data set and then initializes the questions.
  function getRandomWord() {
      RN = Math.floor(Math.random() * data.length);
    Initialize();
      
  }
  
  //Sets RN to the next item in the set (or to the first if RN is the last item in the set) and then initializes the questions.
  function getNextWord(){
    
    var combobreaker = data.length;
    if (RN == combobreaker){
      RN = 0;
      Initialize();
    } else {
      RN = RN+1;
      Initialize();
    }
    
    
  }
  
  //Sets all of the question information based on the value of RN
  function Initialize() {
    document.getElementById('speech_output').value = "";
    document.getElementById('good_a').style.visibility="hidden";
    document.getElementById('good_p').style.visibility="hidden";
    document.getElementById('prefix').innerHTML=data[RN].word;
    document.getElementById('answer1').innerHTML=data[RN].answer_1;
    document.getElementById('answer2').innerHTML=data[RN].answer_2;
    document.getElementById('answer3').innerHTML=data[RN].answer_3;
    document.getElementById('answer4').innerHTML=data[RN].answer_4;
    document.getElementById('q_sentence').innerHTML=data[RN].sentence;
    document.getElementById('example_word').innerHTML=data[RN].word;
    document.getElementById('example_word').style.display="inline";
    correct_answer=data[RN].correct;
    
  }
  
  //Checks for if answer "A" is selected.
  function answeredA() {
      if (data[RN].answer_1 === correct_answer)
      {
          document.getElementById('good_a').innerHTML="Correct!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(106, 201, 29)";
          setTimeout(reset_answers, 3500);
      } else {
          document.getElementById('good_a').innerHTML="Incorrect!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(241, 16, 16)";
          setTimeout(reset_answers, 3500);
      }    
  }
  
  //Checks for if answer "B" is selected.
  function answeredB() {
      correct_answer=data[RN].correct;
      if (data[RN].answer_2 === correct_answer)
      {
          document.getElementById('good_a').innerHTML="Correct!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(106, 201, 29)";
          setTimeout(reset_answers, 3500);
      } else {
          document.getElementById('good_a').innerHTML="Incorrect!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(241, 16, 16)";
          setTimeout(reset_answers, 3500);
      }    
  }
  
  //Checks for if answer "C" is selected.
  function answeredC() {
      correct_answer=data[RN].correct;
      if (data[RN].answer_3 === correct_answer)
      {
          document.getElementById('good_a').innerHTML="Correct!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(106, 201, 29)";
          setTimeout(reset_answers, 3500);
      } else {
          document.getElementById('good_a').innerHTML="Incorrect!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(241, 16, 16)";
          setTimeout(reset_answers, 3500);
      }    
  }
  
  //Checks for if answer "D" is selected.
  function answeredD() {
      correct_answer=data[RN].correct;
      if (data[RN].answer_4 === correct_answer)
      {
          document.getElementById('good_a').innerHTML="Correct!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(106, 201, 29)";
          setTimeout(reset_answers, 3500);
      } else {
          document.getElementById('good_a').innerHTML="Incorrect!";
          document.getElementById('good_a').style.visibility="visible";
          document.getElementById('good_a').style.color="rgb(241, 16, 16)";
          setTimeout(reset_answers, 3500);
      }    
  }
  
  //Provides the listening example via text-to-speech, based on language selection.
  function Listen() {
      var word = data[RN].word;
      let utter = new SpeechSynthesisUtterance();
      utter.lang = language_var;
      utter.text = word;
      window.speechSynthesis.speak(utter);
  }
  
  //Initializes ASR for speaking question and handles results.
  function init() {
      window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
      recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.lang = language_var;
      recognition.interimResults = true;
      recognition.onresult = disp;
  }
  
  function disp(event) {
      var results = event.results;
      for (var i = event.resultIndex; i < results.length; ++i) {
          if (results[i].isFinal) {
              document.getElementById('speech_output').value += results[i][0].transcript;
          }
      }
  }
  
  //Begins the ASR, including init function, and also sets the stop / time out.
  function start() {
      document.getElementById('speech_output').value = "";
      init();
      recognition.start();
      setTimeout(stop, 3000);
  }
  
  //Checks the pronunciation and then resets the evaluation.
  function check_speech () {
      var wordme = data[RN].word;
      var proncheck = document.getElementById('speech_output').value;
      if (wordme.toLowerCase() === proncheck.toLowerCase()) {
          document.getElementById('good_p').innerHTML="Good Job!";
          document.getElementById('good_p').style.visibility="visible";
          document.getElementById('good_p').style.color="rgb(106, 201, 29)";
      } else {
          document.getElementById('good_p').innerHTML="Try Again!";
          document.getElementById('good_p').style.visibility="visible";
          document.getElementById('good_p').style.color="rgb(241, 16, 16)";
      }
      setTimeout(reset_speech, 4000)
  }
  
  //Just used to stop the ASR.
  function stop(){
      recognition.onend = null;
      recognition.stop();
      setTimeout(check_speech, 500);
    }
  
  //Checks the checkboxes to see what types of questions the user wants and acts accordingly.
  function Check_Vocab(){
    var checkBox1 = document.getElementById('vocab_cb');
    if (checkBox1.checked == true){
      document.getElementById('all_mc').style.display="block";
  
    } else {
      document.getElementById('all_mc').style.display="none";
    }
  }
  
  function Check_SL(){
    var checkBox2 = document.getElementById('s_and_l_cb');
    if (checkBox2.checked == true){
      document.getElementById('all_sl').style.display="block";
  
    } else {
      document.getElementById('all_sl').style.display="none";
    }
  }
  
  
  
  