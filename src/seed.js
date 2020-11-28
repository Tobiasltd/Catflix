export function seedDatabase(firebase) {
  function getUUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
    /* eslint-enable */
  }

  /* Series
    ============================================ */

  // Action
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "Beggar",
    description:
      "One must not waste good food. That is the mantra of this cat. And waste he does not.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "action",
    maturity: "AL",
    categories1: "Sentimental",
    categories2: "Heartfelt",
    categories3: "Emotional",
    slug: "beggar",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Dustbin",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "action",
    maturity: "AL",
    description:
      "The first encounter Theodore has with a dustbin. The red light attracted his attention, and now he find it responds.",
    categories1: "Relaxing",
    categories2: "Feel-Good",
    categories3: "Comedy",
    slug: "the-dustbin",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "An important meeting",
    description:
      "Becoming best friends does not happen overnight. It starts with the meeting. No fence can hold back these buddies.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "action",
    maturity: "AL",
    categories1: "Exciting",
    categories2: "Epic",
    categories3: "Action",
    slug: "an-important-meeting",
  });

  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Chase",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "action",
    maturity: "AL",
    description:
      "Straighten your back and watch your step-- Theodore is on the hunt. Will Wolfgang notice in time?",
    categories1: "Rousing",
    categories2: "Exciting",
    categories3: "Slick",
    slug: "the-chase",
  });

  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "Outdoors",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "action",
    maturity: "AL",
    description:
      "Having looked outside for much of their lives, they now find out that it's more than they bargained for. Two cats out in Scandinavian nature.",
    categories1: "Dark",
    categories2: "Forceful",
    categories3: "Mind-Bending",
    slug: "outdoors",
  });

  // Adventure
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Toothbrush",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "adventure",
    maturity: "AL",
    description:
      "The smell of mint, the suspicious shape... One can not trust a toothbrush. Theodore knows there can be only one answer.",
    categories1: "Dark",
    categories2: "Forceful",
    categories3: "Mind-Bending",
    slug: "the-toothbrush",
  });

  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "Homecoming: cautious beginnings",
    description:
      "The first inspection of the house but not the last. Theodore sets his patrol route in this new home of his.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "adventure",
    maturity: "AL",
    categories1: "Captivating",
    categories2: "Forceful",
    categories3: "Exciting",
    slug: "homecoming-cautious-beginnings",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "Homecoming: declaring territory",
    description:
      "After a few rounds of inspection, Theodore is ready  to declare territory. This house is now his home.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "adventure",
    maturity: "AL",
    categories1: "Forceful",
    categories2: "Dark",
    categories3: "Suspenseful",
    slug: "homecoming-declaring-territory",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "Homecoming: the exploration",
    description:
      "Exploring a new house must always be done methodically. Theodore shows how it's done in this installment.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "adventure",
    maturity: "AL",
    categories1: "Exciting",
    categories2: "Epic",
    categories3: "Action",
    slug: "homecoming-the-exploration",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "Ice",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "adventure",
    maturity: "AL",
    description:
      "During the hot summer of '20, the boys discover ice. Careful tapping and smelling ensues.",
    categories1: "Rousing",
    categories2: "Exciting",
    categories3: "Slick",
    slug: "ice",
  });

  // feel-good

  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "A boring nothing",
    description:
      "Not much happens during this series. Even a cat's life knows dull moments.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "feel-good",
    maturity: "AL",
    categories1: "Kids",
    categories2: "Talking Animal",
    categories3: "Mystery",
    slug: "a-boring-nothing",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Battle",
    description:
      "This wrestling match is one of many in the lives of Theodore and Wolfgang. The winner is undecided but it always ends with dots of hair on the ground",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "feel-good",
    maturity: "AL",
    categories1: "Cat",
    categories2: "Everyday Fun",
    categories3: "Friends",
    slug: "the-battle",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Crown",
    description: "It's good to be King.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "feel-good",
    maturity: "AL",
    categories1: "Nature",
    categories2: "Inspiring",
    categories3: "Heartfelt",
    slug: "the-crown",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Kneading",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "feel-good",
    maturity: "AL",
    description:
      "Bathrobes make for perfect kneading grounds. Purring and happiness all around.",
    categories1: "Relaxing",
    categories2: "Kids",
    categories3: "Growing-Up",
    slug: "the-kneading",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Unexpected Meal",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "feel-good",
    maturity: "AL",
    description:
      "Unexpected snacks are the best snacks. Theodore enjoys a chicken treat.",
    categories1: "Goofy",
    categories2: "Kids",
    categories3: "Feel-Good",
    slug: "the-unexpected-meal",
  });

  // children

  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "No snack left unturned",
    description:
      "Wolfgang is the first to show up for treats. Even if he must lick the ground, no crumbles will go wasted.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "children",
    maturity: "AL",
    categories1: "Feel-Good",
    categories2: "Comedy",
    categories3: "Witty",
    slug: "no-snack-left-unturned",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "A Lazy Hunt",
    description:
      "Going after a ball is the fun part. Returning it, that's not part of the deal.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "children",
    maturity: "AL",
    categories1: "Captivating",
    categories2: "Forceful",
    categories3: "Exciting",
    slug: "a-lazy-hunt",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Ball",
    description:
      "During his younger months, Theodore was already showing a great appreciation for ball sports. Looking to get signed as a keeper, this footage documents his trainings.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "children",
    maturity: "AL",
    categories1: "Up-Beat",
    categories2: "Inspiring",
    categories3: "Heartfelt",
    slug: "the-ball",
  });

  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "Foot Fight",
    description:
      "On the floor, on the bed or anywhere else-- these cats will wrestle whenever they have the chance.",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "children",
    maturity: "AL",
    categories1: "Forceful",
    categories2: "Dark",
    categories3: "Suspenseful",
    slug: "foot-fight",
  });
  firebase.firestore().collection("series").add({
    id: getUUID(),
    type: "series",
    title: "The Scratching",
    ep1description: "lorem1",
    ep2description: "lorem2",
    ep3description: "lorem3",
    ep4description: "lorem4",
    ep5description: "lorem5",
    ep6description: "lorem6",
    genre: "children",
    maturity: "AL",
    description:
      "Featuring archival footage and personal recordings, this documentary offers candid insight into the nail maintenance of Theodore.",
    categories1: "Goofy",
    categories2: "Emotional",
    categories3: "Feel-Good",
    slug: "the-scratching",
  });

  // FILMS /////////////////////////////////

  // Action
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Dug in",
    description:
      "On the floor, on the bed or anywhere else-- these cats will wrestle whenever they have the chance.",
    genre: "action",
    maturity: "AL",
    categories1: "Captivating",
    categories2: "Forceful",
    categories3: "Exciting",
    slug: "dug-in",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Stalker",
    description:
      "Straighten your back and watch your step-- Theodore is on the hunt. Will Wolfgang notice in time?",
    genre: "action",
    maturity: "AL",
    categories1: "Forceful",
    categories2: "Dark",
    categories3: "Suspenseful",
    slug: "stalker",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Fluff",
    description:
      "This wrestling match is one of many in the lives of Theodore and Wolfgang. The winner is undecided but it always ends with dots of hair on the ground",
    genre: "action",
    maturity: "AL",
    categories1: "Exciting",
    categories2: "Epic",
    categories3: "Action",
    slug: "fluff",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Nemesis",
    genre: "action",
    maturity: "AL",
    description:
      "Theodore comes face to face with his archenemy, the toothbrush. After losing last battle, he is on his toes for this round.",
    categories1: "Rousing",
    categories2: "Exciting",
    categories3: "Slick",
    slug: "nemesis",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "No brush left unpunished",
    genre: "action",
    maturity: "AL",
    description:
      "The smell of mint, the suspicious shape... One can not trust a toothbrush. Theodore knows there can be only one answer.",
    categories1: "Dark",
    categories2: "Forceful",
    categories3: "Mind-Bending",
    slug: "no-brush-left-unpunished",
  });

  // Adventure
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Brown Pearl",
    description:
      "The first inspection of the house but not the last. Theodore sets his patrol route in this new home of his.",
    genre: "adventure",
    maturity: "AL",
    categories1: "Captivating",
    categories2: "Forceful",
    categories3: "Exciting",
    slug: "brown-pearl",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Into the deep",
    description:
      "Having looked outside for much of their lives, they now find out that it's more than they bargained for. Two cats out in Scandinavian nature.",
    genre: "adventure",
    maturity: "AL",
    categories1: "Forceful",
    categories2: "Dark",
    categories3: "Suspenseful",
    slug: "into-the-deep",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Kitten Fight",
    description:
      "Becoming best friends does not happen overnight. It starts with the meeting. No fence can hold back these buddies.",
    genre: "adventure",
    maturity: "AL",
    categories1: "Exciting",
    categories2: "Epic",
    categories3: "Action",
    slug: "kitten-fight",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Pointy Ears",
    genre: "adventure",
    maturity: "AL",
    description:
      "Exploring a new house must always be done methodically. Theodore shows how it's done in this installment.",
    categories1: "Rousing",
    categories2: "Exciting",
    categories3: "Slick",
    slug: "pointy-ears",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Stone Master",
    genre: "adventure",
    maturity: "AL",
    description:
      "This film features the elegant jumps of the cat on a leash. Wolfgang is: the Stonemaster.",
    categories1: "Dark",
    categories2: "Forceful",
    categories3: "Mind-Bending",
    slug: "stone-master",
  });

  // children
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Bread Baker",
    description:
      "Bathrobes make for perfect kneading grounds. Purring and happiness all around.",
    genre: "children",
    maturity: "AL",
    categories1: "Sentimental",
    categories2: "Heartfelt",
    categories3: "Emotional",
    slug: "bread-baker",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Cooling-off",
    description:
      "During the hot summer of '20, the boys discover ice. Careful tapping and smelling ensues.",
    genre: "children",
    maturity: "AL",
    categories1: "Feel-Good",
    categories2: "Comedy",
    categories3: "Witty",
    slug: "cooling-off",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Sticky",
    description:
      "Featuring archival footage and personal recordings, this documentary offers candid insight into the nail maintenance of Theodore.",
    genre: "children",
    maturity: "AL",
    categories1: "Up-Beat",
    categories2: "Inspiring",
    categories3: "Heartfelt",
    slug: "sticky",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Straight Arrow",
    genre: "children",
    maturity: "AL",
    description:
      "A cat must always be ready to get into action. Theodore shows how it's done.",
    categories1: "Relaxing",
    categories2: "Feel-Good",
    categories3: "Comedy",
    slug: "straight-arrow",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "The Ball",
    genre: "children",
    maturity: "AL",
    description:
      "Theodore may ignore this ball, but Wolfgang is up to the task. Will he be fast enough?",
    categories1: "Goofy",
    categories2: "Emotional",
    categories3: "Feel-Good",
    slug: "the-ball",
  });

  // feel-good
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "A careful bite",
    description:
      "Unexpected snacks are the best snacks. Theodore enjoys a chicken treat.",
    genre: "feel-good",
    maturity: "AL",
    categories1: "Kids",
    categories2: "Talking Animal",
    categories3: "Mystery",
    slug: "a-careful-bite",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "A warm hand",
    description:
      "Who said cats don't want a bellyrub? Wolfgang enjoys a good warm hand.",
    genre: "feel-good",
    maturity: "AL",
    categories1: "Cat",
    categories2: "Everyday Fun",
    categories3: "Friends",
    slug: "a-warm-hand",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "No country for small cats",
    description:
      "After a few rounds of inspection, Theodore is ready  to declare territory. This house is now his home.",
    genre: "feel-good",
    maturity: "AL",
    categories1: "Nature",
    categories2: "Inspiring",
    categories3: "Heartfelt",
    slug: "No-country-for-small-cats",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "Poser",
    genre: "feel-good",
    maturity: "AL",
    description:
      "Featuring archival footage and personal recordings, this documentary offers candid insight into the training that is required to become a cat model.",
    categories1: "Relaxing",
    categories2: "Kids",
    categories3: "Growing-Up",
    slug: "poser",
  });
  firebase.firestore().collection("films").add({
    id: getUUID(),
    type: "films",
    title: "The Gentle Snacker",
    genre: "feel-good",
    maturity: "AL",
    description:
      "Wolfgang is the first to show up for treats. Even if he must lick the ground, no crumbles will go wasted.",
    categories1: "Goofy",
    categories2: "Kids",
    categories3: "Feel-Good",
    slug: "the-gentle-snacker",
  });
}
