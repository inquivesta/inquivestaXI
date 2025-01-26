import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form, {
  textarea,
  radio,
  dropdown,
  information,
} from "../components/Form.jsx";
import Navbar from "../components/Navbar.jsx";
import Qrcode from "../components/Qrcode.jsx";
// import eventForms from "../data/eventData.jsx";

var defaultForm = ["name", "email", "phone"];

const Register = () => {
  const [eventName, setEventName] = useState("");
  const [dropdownValues, setDropdownValues] = useState({});
  // const [checkboxVals, setCheckboxVals] = useState({});
  const [renderkaro, setRenderkaro] = useState(0);

  const navigate = useNavigate();
  const checkBackend = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND, {
        method: "GET",
      });
      setRenderkaro(1);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const url = window.location.href.split("/");
    const eventKey = url[url.length - 1];
    setEventName(eventKey);
    checkBackend();
  }, []);

  const changeDropDown = (name, value) => {
    setDropdownValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // console.log(dropdownValues)
  };
  // const changeCheckBox = (name, value) => {
  //   setDropdownValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  //   // console.log(dropdownValues)

  // }

  var eventForms = {
    mundane: {
      formTitle: "MUN'dane",
      form: [
        ...defaultForm,
        "institute",
        {
          name: "delegation",
          ele: radio(
            "Mode of attendance",
            "delegation",
            ["Single Delegation", "Double Delegation"],
            changeDropDown
          ),
        },
        {
          name: "name2",
          renderOn: "Double Delegation",
          ele: textarea(
            "Name of Second Delegate",
            "name2",
            "Name of Second Delegate"
          ),
        },
        {
          name: "firstCommitteePref",
          ele: dropdown(
            "First Committee Preference",
            "firstCommitteePref",
            [
              "",
              "UNHRC",
              "UNSC",
              "Historic Lok Sabha",
              "IPC - Journalism",
              "IPC - Photojournalism",
            ],
            changeDropDown
          ),
        },
        {
          name: "secondCommitteePref",
          ele: dropdown(
            "Second Committee Preference",
            "secondCommitteePref",
            [
              "",
              "UNHRC",
              "UNSC",
              "Historic Lok Sabha",
              "IPC - Journalism",
              "IPC - Photojournalism",
            ],
            changeDropDown
          ),
        },
        {
          name: "thirdCommitteePref",
          ele: dropdown(
            "Third Committee Preference",
            "thirdCommitteePref",
            [
              "",
              "UNHRC",
              "UNSC",
              "Historic Lok Sabha",
              "IPC - Journalism",
              "IPC - Photojournalism",
            ],
            changeDropDown
          ),
        },
        {
          name: "countryUNHRC",
          renderOn: "UNHRC",
          ele: textarea(
            "Country choice for UNHRC",
            "countryUNHRC",
            "Provide upto 3 country names"
          ),
        },
        {
          name: "countryUNSC",
          renderOn: "UNSC",
          ele: textarea(
            "Country choice for UNSC",
            "countryUNSC",
            "Provide upto 3 country names"
          ),
        },
        {
          name: "newsIPC",
          renderOn: "IPC",
          ele: dropdown(
            "First News Agency Preference for IPC (-P)",
            "newsIPC",
            [
              "",
              "News Channel",
              "BBC News (UK)",
              "CNN (USA)",
              "Al Jazeera (Qatar)",
              "Sky News (UK)",
              "Fox News (USA)",
              "MSNBC (USA)",
              "ABC News (USA)",
              "CBS News (USA)",
              "NBC News (USA)",
              "Euronews (France)",
              "France 24 (France)",
              "Deutsche Welle (Germany)",
              "RT (Russia)",
              "NHK World (Japan)",
              "CCTV News (China)",
              "CGTN (China)",
              "Channel NewsAsia (Singapore)",
              "India Today (India)",
              "NDTV (India)",
              "Republic TV (India)",
              "WION (India)",
              "The Times of India (India)",
              "The Hindu (India)",
              "Zee News (India)",
              "CNN-News18 (India)",
              "Aaj Tak (India)",
              "Al Arabiya (UAE)",
              "Arirang TV (South Korea)",
              "YTN (South Korea)",
              "SBS News (Australia)",
              "ABC News (Australia)",
              "Nine News (Australia)",
              "CBC News (Canada)",
              "CTV News (Canada)",
              "Global News (Canada)",
              "TeleSUR (Venezuela)",
              "GloboNews (Brazil)",
              "BandNews TV (Brazil)",
              "RAI News 24 (Italy)",
              "Mediaset TGCOM24 (Italy)",
              "La7 (Italy)",
              "RTVE (Spain)",
              "Antena 3 (Spain)",
              "TVE (Spain)",
              "ATV (Hungary)",
              "RUV (Iceland)",
              "TV2 (Denmark)",
              "NRK (Norway)",
              "SVT (Sweden)",
              "TV4 (Sweden)",
              "NOS (Netherlands)",
              "VRT (Belgium)",
              "RTL (Luxembourg)",
              "ORF (Austria)",
              "SRF (Switzerland)",
              "TV5Monde (France)",
              "BFM TV (France)",
              "RTS (Switzerland)",
              "TVN24 (Poland)",
              "TVP Info (Poland)",
              "NTV (Turkey)",
              "TRT World (Turkey)",
              "TV3 (Ireland)",
              "RTÉ News (Ireland)",
              "LBCI (Lebanon)",
              "OTV (Lebanon)",
              "i24 News (Israel)",
              "Channel 12 (Israel)",
              "KBS News (South Korea)",
              "TV Asahi (Japan)",
              "TV Tokyo (Japan)",
              "MBC (South Korea)",
              "SBC (Saudi Arabia)",
              "CNA (Taiwan)",
              "SET News (Taiwan)",
              "BTV (Bulgaria)",
              "Nova TV (Bulgaria)",
              "ERT (Greece)",
              "ANT1 (Greece)",
              "LRT (Lithuania)",
              "LSM (Latvia)",
              "ERR (Estonia)",
              "HRT (Croatia)",
              "RTL Klub (Hungary)",
              "MTVA (Hungary)",
              "BNR (Bulgaria)",
              "Telesur (Colombia)",
              "Caracol TV (Colombia)",
              "RCN TV (Colombia)",
              "ATV (Peru)",
              "América Televisión (Peru)",
              "TVN (Chile)",
              "Mega (Chile)",
              "Canal 13 (Chile)",
              "Canal N (Peru)",
              "TV Azteca (Mexico)",
              "Televisa (Mexico)",
              "TV Pública (Argentina)",
              "Todo Noticias (Argentina)",
              "SABC News (South Africa)",
            ]
          ),
        },
        {
          name: "newsIPC2",
          renderOn: "IPC",
          ele: dropdown(
            "Second News Agency Preference for IPC (-P)",
            "newsIPC2",
            [
              "",
              "News Channel",
              "BBC News (UK)",
              "CNN (USA)",
              "Al Jazeera (Qatar)",
              "Sky News (UK)",
              "Fox News (USA)",
              "MSNBC (USA)",
              "ABC News (USA)",
              "CBS News (USA)",
              "NBC News (USA)",
              "Euronews (France)",
              "France 24 (France)",
              "Deutsche Welle (Germany)",
              "RT (Russia)",
              "NHK World (Japan)",
              "CCTV News (China)",
              "CGTN (China)",
              "Channel NewsAsia (Singapore)",
              "India Today (India)",
              "NDTV (India)",
              "Republic TV (India)",
              "WION (India)",
              "The Times of India (India)",
              "The Hindu (India)",
              "Zee News (India)",
              "CNN-News18 (India)",
              "Aaj Tak (India)",
              "Al Arabiya (UAE)",
              "Arirang TV (South Korea)",
              "YTN (South Korea)",
              "SBS News (Australia)",
              "ABC News (Australia)",
              "Nine News (Australia)",
              "CBC News (Canada)",
              "CTV News (Canada)",
              "Global News (Canada)",
              "TeleSUR (Venezuela)",
              "GloboNews (Brazil)",
              "BandNews TV (Brazil)",
              "RAI News 24 (Italy)",
              "Mediaset TGCOM24 (Italy)",
              "La7 (Italy)",
              "RTVE (Spain)",
              "Antena 3 (Spain)",
              "TVE (Spain)",
              "ATV (Hungary)",
              "RUV (Iceland)",
              "TV2 (Denmark)",
              "NRK (Norway)",
              "SVT (Sweden)",
              "TV4 (Sweden)",
              "NOS (Netherlands)",
              "VRT (Belgium)",
              "RTL (Luxembourg)",
              "ORF (Austria)",
              "SRF (Switzerland)",
              "TV5Monde (France)",
              "BFM TV (France)",
              "RTS (Switzerland)",
              "TVN24 (Poland)",
              "TVP Info (Poland)",
              "NTV (Turkey)",
              "TRT World (Turkey)",
              "TV3 (Ireland)",
              "RTÉ News (Ireland)",
              "LBCI (Lebanon)",
              "OTV (Lebanon)",
              "i24 News (Israel)",
              "Channel 12 (Israel)",
              "KBS News (South Korea)",
              "TV Asahi (Japan)",
              "TV Tokyo (Japan)",
              "MBC (South Korea)",
              "SBC (Saudi Arabia)",
              "CNA (Taiwan)",
              "SET News (Taiwan)",
              "BTV (Bulgaria)",
              "Nova TV (Bulgaria)",
              "ERT (Greece)",
              "ANT1 (Greece)",
              "LRT (Lithuania)",
              "LSM (Latvia)",
              "ERR (Estonia)",
              "HRT (Croatia)",
              "RTL Klub (Hungary)",
              "MTVA (Hungary)",
              "BNR (Bulgaria)",
              "Telesur (Colombia)",
              "Caracol TV (Colombia)",
              "RCN TV (Colombia)",
              "ATV (Peru)",
              "América Televisión (Peru)",
              "TVN (Chile)",
              "Mega (Chile)",
              "Canal 13 (Chile)",
              "Canal N (Peru)",
              "TV Azteca (Mexico)",
              "Televisa (Mexico)",
              "TV Pública (Argentina)",
              "Todo Noticias (Argentina)",
              "SABC News (South Africa)",
            ]
          ),
        },
        {
          name: "newsIPC3",
          renderOn: "IPC",
          ele: dropdown(
            "Third News Agency Preference for IPC (-P)",
            "newsIPC3",
            [
              "",
              "News Channel",
              "BBC News (UK)",
              "CNN (USA)",
              "Al Jazeera (Qatar)",
              "Sky News (UK)",
              "Fox News (USA)",
              "MSNBC (USA)",
              "ABC News (USA)",
              "CBS News (USA)",
              "NBC News (USA)",
              "Euronews (France)",
              "France 24 (France)",
              "Deutsche Welle (Germany)",
              "RT (Russia)",
              "NHK World (Japan)",
              "CCTV News (China)",
              "CGTN (China)",
              "Channel NewsAsia (Singapore)",
              "India Today (India)",
              "NDTV (India)",
              "Republic TV (India)",
              "WION (India)",
              "The Times of India (India)",
              "The Hindu (India)",
              "Zee News (India)",
              "CNN-News18 (India)",
              "Aaj Tak (India)",
              "Al Arabiya (UAE)",
              "Arirang TV (South Korea)",
              "YTN (South Korea)",
              "SBS News (Australia)",
              "ABC News (Australia)",
              "Nine News (Australia)",
              "CBC News (Canada)",
              "CTV News (Canada)",
              "Global News (Canada)",
              "TeleSUR (Venezuela)",
              "GloboNews (Brazil)",
              "BandNews TV (Brazil)",
              "RAI News 24 (Italy)",
              "Mediaset TGCOM24 (Italy)",
              "La7 (Italy)",
              "RTVE (Spain)",
              "Antena 3 (Spain)",
              "TVE (Spain)",
              "ATV (Hungary)",
              "RUV (Iceland)",
              "TV2 (Denmark)",
              "NRK (Norway)",
              "SVT (Sweden)",
              "TV4 (Sweden)",
              "NOS (Netherlands)",
              "VRT (Belgium)",
              "RTL (Luxembourg)",
              "ORF (Austria)",
              "SRF (Switzerland)",
              "TV5Monde (France)",
              "BFM TV (France)",
              "RTS (Switzerland)",
              "TVN24 (Poland)",
              "TVP Info (Poland)",
              "NTV (Turkey)",
              "TRT World (Turkey)",
              "TV3 (Ireland)",
              "RTÉ News (Ireland)",
              "LBCI (Lebanon)",
              "OTV (Lebanon)",
              "i24 News (Israel)",
              "Channel 12 (Israel)",
              "KBS News (South Korea)",
              "TV Asahi (Japan)",
              "TV Tokyo (Japan)",
              "MBC (South Korea)",
              "SBC (Saudi Arabia)",
              "CNA (Taiwan)",
              "SET News (Taiwan)",
              "BTV (Bulgaria)",
              "Nova TV (Bulgaria)",
              "ERT (Greece)",
              "ANT1 (Greece)",
              "LRT (Lithuania)",
              "LSM (Latvia)",
              "ERR (Estonia)",
              "HRT (Croatia)",
              "RTL Klub (Hungary)",
              "MTVA (Hungary)",
              "BNR (Bulgaria)",
              "Telesur (Colombia)",
              "Caracol TV (Colombia)",
              "RCN TV (Colombia)",
              "ATV (Peru)",
              "América Televisión (Peru)",
              "TVN (Chile)",
              "Mega (Chile)",
              "Canal 13 (Chile)",
              "Canal N (Peru)",
              "TV Azteca (Mexico)",
              "Televisa (Mexico)",
              "TV Pública (Argentina)",
              "Todo Noticias (Argentina)",
              "SABC News (South Africa)",
            ]
          ),
        },
        {
          name: "constituencyHLS",
          renderOn: "Historic Lok Sabha",
          ele: dropdown(
            "First Constituency Preference for Historic Lok Sabha",
            "constituencyHLS",
            [
              "",
              "Lucknow",
              "Gandhinagar",
              "Hazaribagh",
              "Allahabad",
              "Guna",
              "Bellary",
              "Pilibhit",
              "Godhra",
              "Bhopal",
              "Madhubani",
              "Gorakhpur",
              "Vidisha",
              "Indore",
              "Gurdaspur",
              "Jaunpur",
              "Amethi",
              "Dausa",
              "Behrampore",
              "Chhidwara",
              "Kaliabor",
              "Mayiladuturi",
              "Mumbai North West",
              "Khozikode",
              "Kanara",
              "Nagaland",
              "Dindigul",
              "Rasipuram",
              "Bolpur",
              "Khammam",
              "Jhargram",
              "Panskura",
              "Midnapore",
              "Nalanda",
              "Barh",
              "Sambhal",
              "Kannauj",
              "Rajapur",
              "Mumbai North Central",
              "Calcutta South",
              "Calcutta North East",
              "Vellore",
              "Chengalpattu",
              "Kurnool",
              "Siddipet",
              "Hajipur",
              "Madhepura",
              "Tarntaran",
              "Hissar",
              "Baramati",
              "Srinagar",
              "Chennai South",
              "Hyderabad",
              "Baghpat",
              "Ballia",
              "Autnonomou District (ST)",
              "Bhubaneshwar",
              "Kozhikode",
              "Chandel",
              "Idukki",
              "Akola",
            ]
          ),
        },
        {
          name: "constituencyHLS2",
          renderOn: "Historic Lok Sabha",
          ele: dropdown(
            "Second Constituency Preference for Historic Lok Sabha",
            "constituencyHLS2",
            [
              "",
              "Lucknow",
              "Gandhinagar",
              "Hazaribagh",
              "Allahabad",
              "Guna",
              "Bellary",
              "Pilibhit",
              "Godhra",
              "Bhopal",
              "Madhubani",
              "Gorakhpur",
              "Vidisha",
              "Indore",
              "Gurdaspur",
              "Jaunpur",
              "Amethi",
              "Dausa",
              "Behrampore",
              "Chhidwara",
              "Kaliabor",
              "Mayiladuturi",
              "Mumbai North West",
              "Khozikode",
              "Kanara",
              "Nagaland",
              "Dindigul",
              "Rasipuram",
              "Bolpur",
              "Khammam",
              "Jhargram",
              "Panskura",
              "Midnapore",
              "Nalanda",
              "Barh",
              "Sambhal",
              "Kannauj",
              "Rajapur",
              "Mumbai North Central",
              "Calcutta South",
              "Calcutta North East",
              "Vellore",
              "Chengalpattu",
              "Kurnool",
              "Siddipet",
              "Hajipur",
              "Madhepura",
              "Tarntaran",
              "Hissar",
              "Baramati",
              "Srinagar",
              "Chennai South",
              "Hyderabad",
              "Baghpat",
              "Ballia",
              "Autnonomou District (ST)",
              "Bhubaneshwar",
              "Kozhikode",
              "Chandel",
              "Idukki",
              "Akola",
            ]
          ),
        },
        {
          name: "constituencyHLS3",
          renderOn: "Historic Lok Sabha",
          ele: dropdown(
            "Third Constituency Preference for Historic Lok Sabha",
            "constituencyHLS3",
            [
              "",
              "Lucknow",
              "Gandhinagar",
              "Hazaribagh",
              "Allahabad",
              "Guna",
              "Bellary",
              "Pilibhit",
              "Godhra",
              "Bhopal",
              "Madhubani",
              "Gorakhpur",
              "Vidisha",
              "Indore",
              "Gurdaspur",
              "Jaunpur",
              "Amethi",
              "Dausa",
              "Behrampore",
              "Chhidwara",
              "Kaliabor",
              "Mayiladuturi",
              "Mumbai North West",
              "Khozikode",
              "Kanara",
              "Nagaland",
              "Dindigul",
              "Rasipuram",
              "Bolpur",
              "Khammam",
              "Jhargram",
              "Panskura",
              "Midnapore",
              "Nalanda",
              "Barh",
              "Sambhal",
              "Kannauj",
              "Rajapur",
              "Mumbai North Central",
              "Calcutta South",
              "Calcutta North East",
              "Vellore",
              "Chengalpattu",
              "Kurnool",
              "Siddipet",
              "Hajipur",
              "Madhepura",
              "Tarntaran",
              "Hissar",
              "Baramati",
              "Srinagar",
              "Chennai South",
              "Hyderabad",
              "Baghpat",
              "Ballia",
              "Autnonomou District (ST)",
              "Bhubaneshwar",
              "Kozhikode",
              "Chandel",
              "Idukki",
              "Akola",
            ]
          ),
        },
        {
          name: "why",
          ele: textarea(
            "Justify your preferences",
            "why",
            "Tell us why you made these choices"
          ),
        },
        {
          name: "exp",
          ele: textarea(
            "Previous MUN experiences (if any)",
            "exp",
            "write NA if no previous experience"
          ),
        },
        {
          name: "amt1",
          renderOn: "Single",
          ele: information("Amount payable: INR 500"),
        },
        {
          name: "amt2",
          renderOn: "Double",
          ele: information("Amount payable: INR 900"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
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
          ele: textarea(
            "Other Team Members (1 - 4)",
            "members",
            "Provide one to four names"
          ),
        },
        {
          name: "leader",
          ele: textarea("Team Leader", "leader", "Name of a Team Leader"),
        },
        {
          name: "teamname",
          ele: textarea("Team Name", "teamname", "Team Name"),
        },
        { name: "amt", ele: information("Amount payable: INR 200") },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
    ART_IN_A_CULTURE: {
      formTitle: "Art In a Culture",
      form: [
        ...defaultForm,
        "institute",
        {
          name: "amt",
          ele: information("This event has No registration Fees!."),
        },
      ],
    },
    MIND_MELD: {
      formTitle: "Mind Meld",
      form: [
        ...defaultForm,
        "institute",
        {
          name: "team-members",
          ele: information("Team Members (Min: 2 , Max: 4)"),
        },
        {
          name: "team-members",
          ele: textarea(
            "Other Team Members (Provide 1-3 names)",
            "team-members",
            "Minimum 1 max 3 names"
          ),
        },
        {
          name: "amt",
          ele: information("This event has No registration Fees!."),
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
          ele: textarea(
            "Fide ID (if doesnt exist, write N/A)",
            "fideId",
            "Link to your Fide ID"
          ),
        },
        {
          name: "fideRating",
          ele: textarea(
            "Fide Rating (if doesnt exist, write (N/A)",
            "fideRating",
            "Fide Rating if any"
          ),
        },
        { name: "amt", ele: information("Amount Payable: INR 500") },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "walink",
          ele: [
            information("WhatsApp Group for this tounament:"),
            <a
              href="https://chat.whatsapp.com/JlSzLy7MOCMLySFSgVnlWv"
              target="_blank"
            >
              https://chat.whatsapp.com/JlSzLy7MOCMLySFSgVnlWv
            </a>,
          ],
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
          ele: textarea(
            "Current Profession",
            "profession",
            "Teacher/Student etc."
          ),
        },
        {
          name: "ticket",
          ele: dropdown(
            "Ticket Type",
            "ticket",
            [
              "",
              { value: "aniconticket1", label: "Base" },
              { value: "aniconticket2", label: "Base + Poster" },
              {
                value: "aniconticket3",
                label: "Base + Poster + Manga Panel + Anime Bookmark",
              },
            ],
            changeDropDown
          ),
        },
        {
          name: "amt1",
          renderOn: "1",
          ele: information(
            "Amount Payable: INR 33 (INR 0 for IISER-K students. Write N/A for UTR)"
          ),
        },
        {
          name: "amt2",
          renderOn: "2",
          ele: information(
            "Amount Payable: INR 49 (INR 33 for IISER-K Students)"
          ),
        },
        {
          name: "amt3",
          renderOn: "3",
          ele: information(
            "Amount Payable: INR 69 (INR 49 for IISER-K Students"
          ),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
    Headshot: {
      formTitle: "Headshot",
      form: [
        ...defaultForm,
        {
          name: "game",
          ele: dropdown(
            "Game",
            "game",
            ["", "Valorant", "Marvel Rivals", "FC 25"],
            changeDropDown
          ),
        },
        {
          name: "team-members-valo",
          renderOn: "Valorant",
          ele: textarea(
            "Enter 7 Team Member details (Name, and Game ID (registered on tracker.gg)",
            "team-members-valo",
            "Team member information"
          ),
        },
        {
          name: "team-members-rivals",
          renderOn: "Marvel Rivals",
          ele: textarea(
            "Enter 7 Team Member details (Name, and Game ID (registered on tracker.gg)",
            "team-members-rivals",
            "Team member information"
          ),
        },
        {
          name: "amt1",
          renderOn: "Valorant",
          ele: information("Amount Payable: INR 300"),
        },
        {
          name: "amt2",
          renderOn: "Marvel Rivals",
          ele: information("Amount Payable: INR 300"),
        },
        {
          name: "amt3",
          renderOn: "FC 25",
          ele: information("Amount Payable: INR 100"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
    // Soulbeats: {formTitle: "Soulbeats", form: [...defaultForm, "institute",
    //   {name: "ticket", ele: dropdown("Ticket Prices", "ticket", ["", {value: "1", label: "Xpress"}, {value: "2", label: "Survival of the Fittest"}, {value: "3", label: "Workshop"},
    //     {value: "4", label: "Xpress + Survival of the Fittest [Combo Offer]"},
    //     {value: "5", label: "Xpress + Workshop [Combo Offer]"},
    //     {value: "6", label: "Workshop + Survival of the Fittest [Combo Offer]"},
    //     {value: "7", label: "Xpress + Survival of the Fittest + Workshop (Combo Offer)"}
    //   ], changeDropDown)},
    //   {name: "amt1", renderOn: "1", ele: information("Amount Payable: INR 199 [INR 50 Off. for IISER-K Students]")},
    //   {name: "amt2", renderOn: "2", ele: information("Amount Payable: INR 149 [INR 50 Off. for IISER-K Students]")},
    //   {name: "amt3", renderOn: "3",  ele: information("Amount Payable: INR 199 [INR 100 Off. for IISER-K Students]")},
    //   {name: "amt4", renderOn: "4",  ele: information("Amount Payable: INR 328 [INR 100 Off. for IISER-K Students]")},
    //   {name: "amt5", renderOn: "5",  ele: information("Amount Payable: INR 378 [INR 150 Off. for IISER-K Students]")},
    //   {name: "amt6", renderOn: "6",  ele: information("Amount Payable: INR 328 [INR 150 Off. for IISER-K Students]")},
    //   {name: "amt7", renderOn: "7",  ele: information("Amount Payable: INR 527 [INR 200 Off. for IISER-K Students]")},
    //   {name: "qr", ele: <Qrcode images={["/payments/qr-1.jpeg", "/payments/qr-2.jpeg", "/payments/qr-3.jpeg"]}/>},
    //   {name: "utr", ele: textarea("Enter full UTR number", "utr", "UTR goes here")},
    // ]},
    LOST: {
      formTitle: "Land Of Secret Treasures (LOST)",
      form: [
        ...defaultForm,
        {
          name: "team-name",
          ele: textarea("Team Name", "team-name", "Enter your Team Name"),
        },
        {
          name: "member1",
          ele: textarea(
            "Team Member 2's Name",
            "member1",
            "Name of your other team member goes here"
          ),
        },
        {
          name: "member1email",
          ele: textarea(
            "Team Member 2's email",
            "member1email",
            "Email Addr. of your other team member goes here"
          ),
        },
        {
          name: "member2",
          ele: textarea(
            "Team Member 3's Name",
            "member2",
            "Name of your other team member goes here"
          ),
        },
        {
          name: "member2email",
          ele: textarea(
            "Team Member 3's email",
            "member2email",
            "Email Addr. of your other team member goes here"
          ),
        },
        {
          name: "member3",
          ele: textarea(
            "Team Member 4's Name",
            "member3",
            "Name of your other team member goes here"
          ),
        },
        {
          name: "member3email",
          ele: textarea(
            "Team Member 4's email",
            "member3email",
            "Email Addr. of your other team member goes here"
          ),
        },
        {
          name: "amt",
          ele: information(
            "Amount Payable: INR 150 (INR 50 Off. for IISER Kolkata Students)"
          ),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
    Basketball3v3: {
      formTitle: "3v3 Basketball",
      form: [
        ...defaultForm,
        {
          name: "team-name",
          ele: textarea("Team Name", "team-name", "Enter your Team Name"),
        },
        {
          name: "member0",
          ele: textarea(
            "Team Member 1's Name",
            "member0",
            "Name of first team member goes here"
          ),
        },
        {
          name: "member1",
          ele: textarea(
            "Team Member 2's Name",
            "member1",
            "Name of second team member goes here"
          ),
        },
        {
          name: "member2",
          ele: textarea(
            "Team Member 3's Name",
            "member2",
            "Name of third team member goes here"
          ),
        },
        {
          name: "member3",
          ele: textarea(
            "Team Member 4's Name (N/A if no 4th member)",
            "member3",
            "Name of fourthteam member goes here (N/A if no 4th member)"
          ),
        },
        {
          name: "accomodation",
          ele: radio(
            "Do you need accomodation on campus",
            "accomodation",
            ["Yes", "No"],
            changeDropDown
          ),
        },
        {
          name: "female",
          renderOn: "Yes",
          ele: textarea(
            "Number of female members to accomodate",
            "female",
            "0 if none"
          ),
        },
        {
          name: "male",
          renderOn: "Yes",
          ele: textarea(
            "Number of male members to accomodate",
            "male",
            "0 if none"
          ),
        },
        { name: "amt", ele: information("Amount Payable: INR 100") },
        {
          name: "amt_acco",
          renderOn: "Yes",
          ele: information("Accomodation amount will be collected on spot"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
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
          ele: textarea("Instagram ID", "insta", "N/A if not applicable"),
        },
        {
          name: "subevent",
          ele: dropdown(
            "Select the event you want to participate in",
            "subevent",
            [
              "",
              { value: "1 acco", label: "Photo Story" },
              { value: "2", label: "Theme Photography" },
              { value: "3 acco", label: "Both" },
            ],
            changeDropDown
          ),
        },
        {
          name: "submission",
          ele: textarea(
            "Upload all your entries to a google drive folder and attach the link here. You can edit your entries till 6th Feb.",
            "submission",
            "Enter a google drive link to your submissions"
          ),
        },
        {
          name: "accomodation",
          renderOn: "acco",
          ele: radio(
            "Do you need accomodation on campus for Photo Story",
            "accomodation",
            ["Yes", "No"],
            changeDropDown
          ),
        },
        {
          name: "information",
          renderOn: "Yes",
          ele: information("Accomodation amount will be collected on spot"),
        },
        {
          name: "amt1",
          renderOn: "1",
          ele: information("Amount Payable: INR 20"),
        },
        {
          name: "amt2",
          renderOn: "2",
          ele: information("Amount Payable: INR 20"),
        },
        {
          name: "amt3",
          renderOn: "3",
          ele: information("Amount Payable: INR 40"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
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
          ele: dropdown(
            "Select Event Type",
            "subevent",
            [
              "",
              { value: "1", label: "Monodrama" },
              { value: "2", label: "Nukad Natak" },
              { value: "3", label: "Drama Llama Ding Dong" },
            ],
            changeDropDown
          ),
        },
        {
          name: "props",
          renderOn: "1",
          ele: textarea(
            "Basic props required",
            "props",
            "Number of chairs, tables, etc. (if required)"
          ),
        },
        {
          name: "movie",
          renderOn: "3",
          ele: textarea("Enter your favourite movie", "movie", ""),
        },
        {
          name: "character",
          renderOn: "3",
          ele: textarea(
            "Enter your favourite fictional character",
            "character",
            ""
          ),
        },
        {
          name: "membernum",
          renderOn: "2",
          ele: textarea(
            "Enter number of participants",
            "membernum",
            "Maximum 20, Minimum 5"
          ),
        },
        {
          name: "membername",
          renderOn: "2",
          ele: textarea(
            "Enter names of all the participants",
            "membername",
            "Enter names of all the participants (comma separated)."
          ),
        },
        {
          name: "props",
          renderOn: "2",
          ele: textarea(
            "Basic props required",
            "props",
            "Number of chairs, tables, etc. (if required)"
          ),
        },
        {
          name: "amt2",
          renderOn: "2",
          ele: information("Registration fees: 200 INR for the whole team"),
        },
        {
          name: "amt3",
          renderOn: "3",
          ele: information("No registration fees"),
        },
        {
          name: "amt1",
          renderOn: "1",
          ele: information("Registration fees: 150 INR"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
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
          ele: textarea("Enter name of team", "teamName", ""),
        },
        {
          name: "playing",
          ele: textarea(
            "Enter names of the playing 5 members",
            "playing",
            "Boys - 3, Girls - 2"
          ),
        },
        {
          name: "subsitute",
          ele: textarea(
            "Enter names of subsitutes (if any)",
            "substitute",
            "Boys - 1, Girls - 1"
          ),
        },
        {
          name: "accomodation",
          ele: information(
            "Accomodation will be provided on a first come first serve basis if required. Accomodation will be chargeable."
          ),
        },
        {
          name: "amt",
          ele: information("Registration fees: 150 INR per team"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
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
          ele: textarea("Team Name", "team-name", "Enter your Team Name"),
        },
        {
          name: "member1",
          ele: textarea(
            "Team Member 2's Name",
            "member1",
            "Name of second team member goes here"
          ),
        },
        {
          name: "member2",
          ele: textarea(
            "Team Member 3's Name",
            "member2",
            "Name of third team member goes here"
          ),
        },
        {
          name: "member3",
          ele: textarea(
            "Team Member 4's Name",
            "member3",
            "Name of fourth team member goes here."
          ),
        },
        {
          name: "amt",
          ele: information("Registration fees: 120 INR per team"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
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
          ele: textarea("Enter team name", "team-name", "Team name"),
        },
        {
          name: "members",
          ele: textarea(
            "Enter all team members' names",
            "members",
            "Name of team members (N/A) if single participation"
          ),
        },
        {
          name: "amt",
          ele: information("No registration fees required."),
        },
      ],
    },
    Thrust: {
      formTitle: "Thrust",
      form: [
        ...defaultForm,
        "institute",
        {
          name: "teamname",
          ele: textarea("Team Name", "teamname", "Team Name"),
        },
        { name: "leader", ele: information("The person registering will be considered the Team Leader") },
        {
          name: "members",
          ele: textarea(
            "Other Team Members (2 - 4)",
            "members",
            "Total team members (3 - 5)"
          ),
        },
        {
          name: "ownBottle",
          ele: radio(
            "Can you manage your own 2L Bottle",
            "ownBottle",
            ["Yes", "No"],
            changeDropDown
          ),
        },
        { name: "amt", ele: information("This event has no registration Fees!") },
      ],
    },
    GNQ: {
      formTitle: "GNQ",
      form: [
        ...defaultForm,
        "institute",
        {
          name: "member2",
          ele: textarea(
            "Enter name of second member",
            "member2",
            "Name of second team member"
          ),
        },
        {
          name: "amt",
          ele: information([
            "Registration fees:",
            <br />,
            "49 INR per team (non-IISER K participants)",
            <br />,
            "29 INR per team (IISER K participants) ",
          ]),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
    Symphonix: {
      formTitle: "Symphonix",
      form: [
        ...defaultForm,
        "institute",
        {
          name: "band",
          ele: textarea("Enter name of band", "band", "Name of band"),
        },
        {
          name: "number",
          ele: textarea(
            "Total number of band members",
            "number",
            "Number of members"
          ),
        },
        {
          name: "members",
          ele: textarea(
            "Enter names of all band members",
            "members",
            "Names of members"
          ),
        },
        {
          name: "amt",
          ele: information("Registration fees: 500 INR"),
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
    Soulbeats: {
      formTitle: "Soulbeats",
      form: [
        ...defaultForm,
        "institute",
        {
          name: "subevent",
          ele: dropdown(
            "Select event to participate",
            "subevent",
            ["", "XPress", "Survival of the Fittest", "Workshop"],
            changeDropDown
          ),
        },
        {
          name: "numbers",
          ele: dropdown(
            "Select number of group members",
            "numbers",
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            changeDropDown
          ),
          renderOn: "XPress",
        },
        {
          name: "members",
          ele: textarea(
            "Enter name of other group members",
            "members",
            "N/A if solo participation"
          ),
          renderOn: "XPress",
        },
        {
          name: "amt3",
          ele: information([
            "Registration fees:",
            <br />,
            "89 INR (IISER-K participants)",
            <br />,
            "149 INR (Other participants)",
          ]),
          renderOn: "Workshop",
        },
        {
          name: "amt2",
          ele: information("Registration fees: 49 INR per participant"),
          renderOn: "Survival",
        },
        {
          name: "amt1",
          ele: information([
            "Registration fees:",
            <br />,
            `${
              dropdownValues.numbers ? 69 * dropdownValues.numbers : 69
            } INR (IISER-K participants)`,
            <br />,
            `${
              dropdownValues.numbers ? 79 * dropdownValues.numbers : 79
            } INR (Other participants)`,
          ]),
          renderOn: "XPress",
        },
        {
          name: "qr",
          ele: (
            <Qrcode
              images={[
                "/payments/qr-1.jpeg",
                "/payments/qr-2.jpeg",
                "/payments/qr-3.jpeg",
              ]}
            />
          ),
        },
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
    testEvent: {
      formTitle: "test event",
      form: [
        ...defaultForm,
        {
          name: "utr",
          ele: textarea("Enter full UTR number", "utr", "UTR goes here"),
        },
      ],
    },
  };

  const logFormData = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const holder = new Object();
    holder["event"] = eventName;
    for (const [name, val] of data) {
      const formFields = eventForms[eventName].form.map((e) =>
        e.name ? e.name : e
      );

      if (formFields.includes(name)) {
        if (val.trim() === "") {
          alert("All fields must be non-empty! Try Again");
          return;
        }
        holder[name] = val;
      }
    }
    setRenderkaro(2);

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(holder), // Send data as JSON
      });

      const data = await response.json();
      // console.log(response);
      alert(data["message"]);
      // navigate("/events");
      if (data["utr"]) {
        window.open(
          import.meta.env.VITE_BACKEND + "/?qrcode=" + data["utr"],
          "_blank"
        );
      }
      navigate("/events");

      // console.log(data["qrcode"])
    } catch (error) {
      // console.error("Error posting data:", error);
      alert("An Error Occurred. Please Try Again.");
    }
  };
  if (eventForms[eventName]) {
    if (renderkaro === 0) {
      return (
        <>
          <Navbar />
          <div className="form-container">
            <h1 className="form-title">
              Trying to fetch data, Please Wait. If the form doesn't load, try again after a few minutes.
            </h1>
          </div>
        </>
      );
    } else if (renderkaro === 1) {
      return (
        <>
          <Navbar />
          <div className="form-container">
            <h1 className="form-title">
              {" "}
              Register for {eventForms[eventName].formTitle}
            </h1>
            <form
              onSubmit={(e) => {
                logFormData(e);
              }}
              className="regform"
            >
              <Form
                eventForm={eventForms[eventName].form}
                rendering={Object.values(dropdownValues)}
              />
              <input
                type="submit"
                className="submit-btn merch-btn"
                value="Proceed"
              />
            </form>
            {/* <img className="payment-img" src="/team/debayan.jpg" /> */}
            {/* <Qrcode images={["/payments/qr-1.jpeg", "/payments/qr-2.jpeg", "/payments/qr-3.jpeg"]}/> */}
          </div>
        </>
      );
    } else if (renderkaro === 2) {
      return (
        <>
          <Navbar />
          <div className="form-container">
            <h1 className="form-title">
              {" "}
              Please Wait... Do not close this window
            </h1>
          </div>
        </>
      );
    }
  } else {
    return <h1>Wrong Place BRAH!</h1>;
  }
};

export default Register;
