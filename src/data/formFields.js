var defaultForm = ["name", "email", "phone"];
var eventForms = {
  mundane: {
    formTitle: "MUN'dane",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "delegation",
        label: "Mode of attendance",
      },
      {
        name: "name2",
        label: "Name of Second Delegate",
      },
      {
        name: "firstCommitteePref",
        label: "First Committee Preference",
      },
      {
        name: "secondCommitteePref",
        label: "Second Committee Preference"
      },
      {
        name: "thirdCommitteePref",
        label: "Third Committee Preference",
      },
      {
        name: "countryUNHRC",
        label: "Country choice for UNHRC",
      },
      {
        name: "countryUNSC",
        label: "Country choice for UNSC",
      },
      {
        name: "newsIPC",
        label: "First News Agency Preference for IPC (-P)",
      },
      {
        name: "newsIPC2",
        label: "Second News Agency Preference for IPC (-P)",
      },
      {
        name: "newsIPC3",
        label: "Third News Agency Preference for IPC (-P)"
      },
      {
        name: "constituencyHLS",
        label: "First Constituency Preference for Historic Lok Sabha",
      },
      {
        name: "constituencyHLS2",
        label: "Second Constituency Preference for Historic Lok Sabha",
      },
      {
        name: "constituencyHLS3",
        label: "Third Constituency Preference for Historic Lok Sabha",
      },
      {
        name: "why",
        label: "Justify your preferences",
      },
      {
        name: "exp",
        label: "Previous MUN experiences (if any)",
      },
      // {
      //   name: "amt1",
      //   renderOn: "Single",
      //   type: information("Amount payable: INR 500"),
      // },
      // {
      //   name: "amt2",
      //   renderOn: "Double",
      //   type: information("Amount payable: INR 900"),
      // },
      {
        name: "utr",
      },
    ],
  },

  CSI: {
    formTitle: "Crime Scene Investigation",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "members",
        label: "Other Team Members (1 - 4)",
      },
      {
        name: "leader",
        label: "Team Leader",
      },
      { name: "teamname", label: "Team Name" },
      // { name: "amt", type: information("Amount payable: INR 200") },
      {
        name: "utr",
      },
    ],
  },
  ART_IN_A_CULTURE: {
    formTitle: "Art In a Culture",
    form: [
      ...defaultForm,
      "institute",
      // {
      //   name: "amt",
      //   type: information("This event has No registration Fees!."),
      // },
    ],
  },
  MIND_MELD: {
    formTitle: "Mind Meld",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "team-members",
      },
    ],
  },
  Chess: {
    formTitle: "Inquivesta one day Rapid Open chess tournament",
    form: [
      ...defaultForm,
      "sex",
      "dob",
      "institute",
      {
        name: "fideId",
      },
      {
        name: "fideRating",
      },
      // { name: "amt", type: information("Amount Payable: INR 500") },
      {
        name: "utr",
      },
    ],
  },
  Anicon: {
    formTitle: "Anicon 3.0",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "profession",
      },
      {
        name: "ticket",
        label: "Ticket Type",
        valueMap: {
            "aniconticket1": "Base",
            "aniconticket2": "Base + Poster",
            "aniconticket3": "Base + Poster + Manga Panel + Anime Bookmark",
          }
      },
      // {
      //   name: "amt1",
      //   renderOn: "1",
      //   type: information("Amount Payable: INR 33"),
      // },
      // {
      //   name: "amt2",
      //   renderOn: "2",
      //   type: information("Amount Payable: INR 49"),
      // },
      // {
      //   name: "amt3",
      //   renderOn: "3",
      //   type: information("Amount Payable: INR 69"),
      // },
      {
        name: "utr",
      },
    ],
  },
  Headshot: {
    formTitle: "Headshot",
    form: [
      ...defaultForm,
      {
        name: "game",
        label: "Game",
      },
      {
        name: "team-members-valo",
      },
      {
        name: "team-members-rivals",
      },
      // {
      //   name: "amt1",
      //   renderOn: "Valorant",
      //   type: information("Amount Payable: INR 300"),
      // },
      // {
      //   name: "amt2",
      //   renderOn: "Marvel Rivals",
      //   type: information("Amount Payable: INR 300"),
      // },
      // {
      //   name: "amt3",
      //   renderOn: "FC 25",
      //   type: information("Amount Payable: INR 100"),
      // },
      {
        name: "utr",
      },
    ],
  },
  LOST: {
    formTitle: "Land Of Secret Treasures (LOST)",
    form: [
      ...defaultForm,
      {
        name: "team-name",
      },
      {
        name: "member1",
      },
      {
        name: "member1email",
      },
      {
        name: "member2",
      },
      {
        name: "member2email",
      },
      {
        name: "member3",
      },
      {
        name: "member3email",
      },
      // {
      //   name: "amt",
      //   type: information(
      //     "Amount Payable: INR 150 (INR 50 Off. for IISER Kolkata Students)"
      //   ),
      // },
      {
        name: "utr",
      },
    ],
  },
  Basketball3v3: {
    formTitle: "3v3 Basketball",
    form: [
      ...defaultForm,
      {
        name: "team-name",
      },
      {
        name: "member0",
      },
      {
        name: "member1",
      },
      {
        name: "member2",
      },
      {
        name: "member3",
      },
      {
        name: "accomodation",
        label: "Do you need accomodation on campus",
      },
      {
        name: "female",
        label: "Number of female members to accomodate",
      },
      {
        name: "male",
        renderOn: "Yes",
        label: "Number of male members to accomodate",
      },
      // { name: "amt", type: information("Amount Payable: INR 100") },
      // {
      //   name: "amt_acco",
      //   renderOn: "Yes",
      //   type: information("Accomodation amount will be collected on spot"),
      // },
      {
        name: "utr",
      },
    ],
  },

  Photon: {
    formTitle: "Photon",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "insta",
      },
      {
        name: "subevent",
        valueMap: {
            "1 acco": "Photo Story" ,
            "2": "Theme Photography" ,
            "3 acco": "Both" ,
          },
      },
      {
        name: "submission",
      },
      {
        name: "accomodation",
        label: "Do you need accomodation on campus for Photo Story",
      },
      // {
      //   name: "amt1",
      //   renderOn: "1",
      //   type: information("Amount Payable: INR 20"),
      // },
      // {
      //   name: "amt2",
      //   renderOn: "2",
      //   type: information("Amount Payable: INR 20"),
      // },
      // {
      //   name: "amt3",
      //   renderOn: "3",
      //   type: information("Amount Payable: INR 40"),
      // },
      {
        name: "utr",
      },
    ],
  },
  Drama: {
    formTitle: "Drama",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "subevent",
        label: "Select Event Type",
        valueMap: {
            "1": "Monodrama" ,
            "2": "Nukad Natak",
            "3": "Drama Llama Ding Dong"
          },
      },
      {
        name: "props",
      },
      {
        name: "movie",
      },
      {
        name: "character",
      },
      {
        name: "membernum",
        label: "Number of Participants"
      },
      {
        name: "membername",
      },
      // {
      //   name: "amt2",
      //   renderOn: "2",
      //   type: information("Registration fees: 200 INR for the whole team"),
      // },
      // {
      //   name: "amt3",
      //   renderOn: "3",
      //   type: information("No registration fees"),
      // },
      // {
      //   name: "amt1",
      //   renderOn: "1",
      //   type: information("Registration fees: 150 INR"),
      // },
      {
        name: "utr",
      },
    ],
  },
  Futsal: {
    formTitle: "Futsal",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "teamName",
      },
      {
        name: "playing",
        label: "Playing 5",
      },
      {
        name: "subsitute",
      },
      // {
      //   name: "accomodation",
      //   type: information(
      //     "Accomodation will be provided on a first come first serve basis if required. Accomodation will be chargeable."
      //   ),
      // },
      // {
      //   name: "amt",
      //   type: information("Registration fees: 150 INR per team"),
      // },
      {
        name: "utr",
      },
    ],
  },
  RecycledRunway: {
    formTitle: "Recycled Runway",
    form: [
      ...defaultForm,
      "insitute",
      {
        name: "team-name",
      },
      {
        name: "member1",
      },
      {
        name: "member2",
      },
      {
        name: "member3",
      },
      // {
      //   name: "amt",
      //   type: information("Registration fees: 120 INR per team"),
      // },
      {
        name: "utr",
      },
    ],
  },
  BeatTheDrop: {
    formTitle: "Beat The Drop",
    form: [
      ...defaultForm,
      "insitute",
      {
        name: "team-name",
      },
      {
        name: "members",
      },
      // {
      //   name: "amt",
      //   type: information("No registration fees required."),
      // },
    ],
  },

  Thrust: {
    formTitle: "Thrust",
    form: [
      ...defaultForm,
      "institute",
    ]
  },
  GNQ: {
    formTitle: "GNQ",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "member2", 
      },
      {        
        name: "utr", 
      },
      
    ]
  },
  Symphonix: {
    formTitle: "Symphonix",
    form: [
      ...defaultForm,
      "institute",
      {
        name: "band",
        label: "Band Name"
      },
      {
        name: "number",
        label: "Number of members"
      },
      {
        name: "members",
        label: "Name of all members"
      },
      {
        name: "utr",
      }
    ]
  },
  Soulbeats: {
    formTitle: "Soulbeats",
    form: [
      "institute",
          {
            name: "subevent",
          },
          {
            name: "numbers",
            label: "Number of Group Members",
          },
          {
            name: "members",
            label: "Names of Group Members"
          },
          {
            name: "utr", 
          },
    ]
  }, 
  testEvent: {
    formTitle: "test event",
    form: [
      ...defaultForm,
      {
        name: "utr",
      },
    ],
  },
};
 export {eventForms}