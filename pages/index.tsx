import React from 'react'
import type { NextPage } from 'next'
import Home from "../src/components/Home"

export async function getServerSideProps() {
  try {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/config`)
    const config = await res.json();
    console.log("props", config)
    return { props: { config } }
    //return { props: { config: configApiData } }
  } catch (error) {
    return { props: { config: {} } }
  }
}

const HomeIndex = (props:any) => {
  const {config} = props
  return (
    <React.Suspense fallback="loading....">
        <Home config={config}/>
    </React.Suspense>
  )
}

export default HomeIndex


const configApiData = {
  "gamesOfTheMonth": [
    {
      "type": "game-tile",
      "id": "game-tile-kansino__50105",
      "platformId": "50105",
      "slug": "mega-moolah",
      "image": {
        "alt": "MegaMoolah",
        "original": {
          "src": "https://cloudinary.kansino.nl/w_440,h_440,c_fill,d_batavia-placeholder.jpg/gameThumbs/MegaMoolah.jpg",
          "metadata": {}
        },
        "small": {
          "src": "https://cloudinary.kansino.nl/w_440,h_440,c_fill,d_batavia-placeholder.jpg/gameThumbs/MegaMoolah.jpg",
          "metadata": {}
        },
        "thumbnail": {
          "src": "https://cloudinary.kansino.nl/w_440,h_440,c_fill,d_batavia-placeholder.jpg/gameThumbs/MegaMoolah.jpg",
          "metadata": {}
        }
      },
      "gameText": "Mega Moolah",
      "provider": "Games Global",
      "provider_slug": "games-global",
      "providerLogo": {
        "alt": "Games Global",
        "original": {
          "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Games_Global_89808479ae.svg",
          "metadata": {
            "size": 17.86,
            "width": 207,
            "height": 80
          }
        }
      }
    },
    {
      "type": "game-tile",
      "id": "game-tile-kansino__60426",
      "platformId": "60426",
      "slug": "fire-joker",
      "image": {
        "alt": "PGFireJoker",
        "original": {
          "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/PG_Fire_Joker_7f961b7c44.jpg",
          "metadata": {}
        },
        "small": {
          "src": "https://cloudinary.kansino.nl/w_440,h_440,c_fill,d_batavia-placeholder.jpg/gameThumbs/PGFireJoker.jpg",
          "metadata": {}
        },
        "thumbnail": {
          "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/thumbnail_PG_Fire_Joker_7f961b7c44.jpg",
          "metadata": {}
        }
      },
      "gameText": "Fire Joker",
      "provider": "Play N Go",
      "provider_slug": "play-n-go",
      "providerLogo": {
        "alt": "Play N Go"
      }
    }
  ],
  "menu": {
    "lobby": {
      "items": [
        {
          "id": "30",
          "image": {
            "alt": "lobby",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/casino_menu_load_193d59bcaa.svg",
              "metadata": {
                "size": 50.39,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "lobby",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/casino_menu_load_193d59bcaa.svg",
              "metadata": {
                "size": 50.39,
                "width": 24,
                "height": 24
              }
            }
          },
          "name": "Lobby",
          "path": "/casino",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/30"
          },
          "animatedSvg": {
            "mobile": {
              "alt": "mobile-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_load_4533f1105b.svg",
                "metadata": {
                  "size": 43.37,
                  "width": 24,
                  "height": 24
                }
              }
            },
            "desktop": {
              "alt": "desktop-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_hover_6642eae58b.svg",
                "metadata": {
                  "size": 43.4,
                  "width": 24,
                  "height": 24
                }
              }
            }
          }
        },
        {
          "id": "31",
          "image": {
            "alt": ""
          },
          "activeImage": null,
          "name": "Christmas",
          "path": "/christmas",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/31"
          },
          "animatedSvg": {
            "mobile": {
              "alt": "mobile-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_load_4533f1105b.svg",
                "metadata": {
                  "size": 43.37,
                  "width": 24,
                  "height": 24
                }
              }
            },
            "desktop": {
              "alt": "desktop-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_hover_6642eae58b.svg",
                "metadata": {
                  "size": 43.4,
                  "width": 24,
                  "height": 24
                }
              }
            }
          }
        },
        {
          "id": "27",
          "image": {
            "alt": "",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/popular_menu_load_46edcd7920.svg",
              "metadata": {
                "size": 43.01,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/popular_menu_load_46edcd7920.svg",
              "metadata": {
                "size": 43.01,
                "width": 24,
                "height": 24
              }
            }
          },
          "name": "Popular",
          "path": "/casino/popular",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/27"
          },
          "animatedSvg": {
            "mobile": {
              "alt": "mobile-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_load_4533f1105b.svg",
                "metadata": {
                  "size": 43.37,
                  "width": 24,
                  "height": 24
                }
              }
            },
            "desktop": {
              "alt": "desktop-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_hover_6642eae58b.svg",
                "metadata": {
                  "size": 43.4,
                  "width": 24,
                  "height": 24
                }
              }
            }
          }
        },
        {
          "id": "25",
          "image": {
            "alt": "New",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/new_menu_load_abbe766d98.svg",
              "metadata": {
                "size": 44.76,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "New",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/new_menu_load_abbe766d98.svg",
              "metadata": {
                "size": 44.76,
                "width": 24,
                "height": 24
              }
            }
          },
          "name": "New",
          "path": "/casino/new-games",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/25"
          },
          "animatedSvg": {}
        },
        {
          "id": "26",
          "image": {
            "alt": "",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/classic_menu_load_07eba9f96e.svg",
              "metadata": {
                "size": 47.12,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/classic_menu_load_07eba9f96e.svg",
              "metadata": {
                "size": 47.12,
                "width": 24,
                "height": 24
              }
            }
          },
          "name": "Classics",
          "path": "/casino/classics",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/26"
          },
          "animatedSvg": {
            "mobile": {
              "alt": "mobile-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_load_4533f1105b.svg",
                "metadata": {
                  "size": 43.37,
                  "width": 24,
                  "height": 24
                }
              }
            },
            "desktop": {
              "alt": "desktop-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_hover_6642eae58b.svg",
                "metadata": {
                  "size": 43.4,
                  "width": 24,
                  "height": 24
                }
              }
            }
          }
        },
        {
          "id": "8",
          "image": {
            "alt": "slots",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/slots_menu_load_36bf0c5622.svg",
              "metadata": {
                "size": 45.7,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "slots",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/slots_menu_load_36bf0c5622.svg",
              "metadata": {
                "size": 45.7,
                "width": 24,
                "height": 24
              }
            }
          },
          "name": "Slots",
          "path": "/casino/slots",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/8"
          },
          "animatedSvg": {
            "mobile": {
              "alt": "mobile-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_load_4533f1105b.svg",
                "metadata": {
                  "size": 43.37,
                  "width": 24,
                  "height": 24
                }
              }
            },
            "desktop": {
              "alt": "desktop-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_hover_6642eae58b.svg",
                "metadata": {
                  "size": 43.4,
                  "width": 24,
                  "height": 24
                }
              }
            }
          }
        },
        {
          "id": "5",
          "image": {
            "alt": "table-games",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/table_games_menu_click_385e4f63b0.svg",
              "metadata": {
                "size": 43.73,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "table-games-active",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/table_games_menu_click_385e4f63b0.svg",
              "metadata": {
                "size": 43.73,
                "width": 24,
                "height": 24
              }
            }
          },
          "name": "Table Games",
          "path": "/casino/table-games",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/5"
          },
          "animatedSvg": {}
        },
        {
          "id": "16",
          "image": {
            "alt": "All Games",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/all_games_menu_load_56221b34ce.svg",
              "metadata": {
                "size": 43.66,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "All Games",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/PPN_Sweet_Bonanza_2e06f5b2b0.jpg",
              "metadata": {
                "size": 35.04,
                "width": 440,
                "height": 440
              }
            },
            "thumbnail": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/thumbnail_PPN_Sweet_Bonanza_2e06f5b2b0.jpg",
              "metadata": {
                "size": 8.44,
                "width": 156,
                "height": 156
              }
            }
          },
          "name": "All games",
          "path": "/casino/all-games",
          "isLiveCasino": false,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/16"
          },
          "animatedSvg": {
            "mobile": {
              "alt": "all-games-mobile",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/arcade_menu_load_c4f65b23aa.svg",
                "metadata": {
                  "size": 56.58,
                  "width": 24,
                  "height": 24
                }
              }
            },
            "desktop": {
              "alt": "all-games-desktop",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/arcade_menu_hover_2602c6b8a5.svg",
                "metadata": {
                  "size": 56.65,
                  "width": 24,
                  "height": 24
                }
              }
            }
          }
        }
      ]
    },
    "liveLobby": {
      "items": [
        {
          "id": "29",
          "image": {
            "alt": "halloween",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/classic_menu_load_07eba9f96e.svg",
              "metadata": {
                "size": 47.12,
                "width": 24,
                "height": 24
              }
            }
          },
          "activeImage": {
            "alt": "halloween",
            "original": {
              "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/classic_menu_load_07eba9f96e.svg",
              "metadata": {
                "size": 47.12,
                "width": 24,
                "height": 24
              }
            }
          },
          "name": "Halloween",
          "path": "/default",
          "isLiveCasino": true,
          "links": {
            "getPageMetadata": "https://casino.api.stg.kansino.nl/v1/kansino/pages/metadata/casino/29"
          },
          "animatedSvg": {
            "mobile": {
              "alt": "mobile-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_load_4533f1105b.svg",
                "metadata": {
                  "size": 43.37,
                  "width": 24,
                  "height": 24
                }
              }
            },
            "desktop": {
              "alt": "desktop-default",
              "original": {
                "src": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/top_categories_menu_hover_6642eae58b.svg",
                "metadata": {
                  "size": 43.4,
                  "width": 24,
                  "height": 24
                }
              }
            }
          }
        }
      ]
    }
  },
  "metadata": {
    "updatedAt": "2023-11-22T14:49:06.349Z"
  },
  "sidebarLinks": [
    {
      "text": "Terms & Conditions",
      "pagePath": "/terms-and-conditions"
    },
    {
      "text": "Responsible Gaming Policy",
      "pagePath": "/responsible-gaming"
    },
    {
      "text": "Privacy Policy",
      "pagePath": "/privacy-policy"
    },
    {
      "text": "Cookies Policy",
      "pagePath": "/cookies-policy"
    },
    {
      "text": "Complaints",
      "pagePath": "/complaint-procedures"
    },
    {
      "text": "About Us",
      "pagePath": "/about-us"
    },
    {
      "text": "Game Rules",
      "pagePath": "/game-rules"
    },
    {
      "text": "Payment Methods",
      "pagePath": "/payment-methods"
    }
  ],
  "footerContent": {
    "logoUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Main_8fab073ed9.svg",
    "links": [
      {
        "text": "Terms and Conditions",
        "pagePath": "/terms-and-conditions"
      },
      {
        "text": "Responsible Gaming Policy",
        "pagePath": "/responsible-gaming"
      },
      {
        "text": "Privacy Policy",
        "pagePath": "/privacy-policy"
      },
      {
        "text": "Cookies Policy",
        "pagePath": "/cookies-policy"
      },
      {
        "text": "Complaint Procedures",
        "pagePath": "/complaint-procedures"
      },
      {
        "text": "About Us",
        "pagePath": "/about-us"
      },
      {
        "text": "Game Rules",
        "pagePath": "/game-rules"
      },
      {
        "text": "FAQ",
        "pagePath": "/faq"
      }
    ],
    "licenseLogos": [
      {
        "title": "Kansspelautoriteit",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Woordmerk_KOA_wit_058ec97418.svg",
        "link": "https://kansspelautoriteit.nl/veilig-spelen/veilig-online-gokken/kansspelwijzer-online-gokken/@11380/play-north-limited"
      },
      {
        "title": "Srij",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/NL_Gaming_authority_N2_1_9791464e6c.png",
        "link": "https://kansspelautoriteit.nl/veilig-spelen/veilig-online-gokken/kansspelwijzer-online-gokken/@11380/play-north-limited"
      }
    ],
    "copyright": "© {{year}} www.yayacasino.pt",
    "licenseText": "<p><a href=\"https://www.yayacasino.com/en\">yayacansino.pt</a> is managed by Play Jogo Ltd, a company registered in Malta with registration number C 104356 and with a registered address at Level 1, The Centre, Tigne Point, Sliema, TPO 0001, Malta. Play Jogo Ltd is licensed and regulated by SRIJ - Serviço de Regulação e Inspeção de Jogos under license number XX issued on XX/XX/202X, to offer games of chance.</p><p>For any questions, please contact us via chat or email: <a href=\"mailto: supporte@yayacasino.pt\">suporte@yayacasino.pt</a></p>",
    "responsibleGambling": "<p><img src=\"https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/18plus_e3ebbe0381.svg\" alt=\"18plus.svg\"></p><div class=\"raw-html-embed\"><div style=\"margin-left:80px;margin-top:-70px\">Gambling can be addictive, please play responsibly and in moderation. Remain in control of your gameplay by setting for yourself gaming limits, take a break or self-exclude yourself with the help of our Responsible Gaming tools here. Read more about our <a href=\"#\">Responsible Gaming Policy</a>.\n<div style=\"margin-top: 10px\">If you are worried about your gambling or are affected by another person's gambling behaviour, please contact: Sicad</div>\n</div></div>",
    "providerLogos": [
      {
        "name": "Big Time Gaming",
        "path": "",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/BTG_2ae4063242.svg"
      },
      {
        "name": "ELK",
        "path": "",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/ELK_fe1e5c8297.svg"
      },
      {
        "name": "Games Global",
        "path": "",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Games_Global_89808479ae.svg"
      },
      {
        "name": "G Games",
        "path": "",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/G_Games_00828184a2.svg"
      },
      {
        "name": "Greentube",
        "path": "",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Greentube_d180e9dc1d.svg"
      },
      {
        "name": "Hacksaw Gaming",
        "path": "",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Hacksaw_ac3766f566.svg"
      },
      {
        "name": "iSoftBet",
        "path": "",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Isoftbet_25275b700b.svg"
      },
      {
        "name": "Evolution",
        "path": "/casino/evolution",
        "imageUrl": "https://shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com/Evolution_d8d88c4984.svg"
      }
    ]
  },
  "paymentMethods": [
    {
      "name": "Visa",
      "methodId": "123123",
      "enabled": true
    },
    {
      "name": "Mastercard",
      "methodId": "671266",
      "enabled": true
    }
  ]
}