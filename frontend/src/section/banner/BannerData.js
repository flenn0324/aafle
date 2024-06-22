const BannerIndexData = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Services",
    to: "/",
    subMenu: [
      {
        text: "Annuaires",
        to: "/pages/FunctionalPages/Annuaire",
      },
      {
        text: "Domiciliation commerciale",
        to: "/pages/FunctionalPages/Domiciliation",
      },
      {
        text: "Abecedaire des Formalites",
        to: "/pages/FunctionalPages/Formalites",
      },
      {
        text: "Annonces Légales",
        to: "",
      },
      {
        text: "Livres Légaux",
        to: "",
      },
      {
        text: "Appel d'offre",
        to: "/pages/FunctionalPages/AppelOffre",
      },
    ],
  },
  {
    text: "Contact",
    to: "/pages/SitePages/ContactPage",
  },
  {
    text: "FAQ",
    to: "/pages/SitePages/FaqPage",
  },
];

const BannerIndexDataNoToken = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Services",
    to: "/",
    subMenu: [
      {
        text: "Annuaires",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Domiciliation commerciale",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Abecedaire des Formalites",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Annonces Légales",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Livres Légaux",
        to: "/pages/auths/auth-login",
      },
      {
        text: "Appel d'offre",
        to: "/pages/auths/auth-login",
      },
    ],
  },
  {
    text: "Contact",
    to: "/pages/SitePages/ContactPage",
  },
  {
    text: "FAQ",
    to: "/pages/SitePages/FaqPage",
  },
];

const BannerFormalite = [
  //************************NIVEAU 1-1 ************************************ */
  {
    text: "Immatriculation",
    to: "/",
    subMenu: [
      //************************NIVEAU 1-1-1 ************************************ */
      {
        text: "Personne morale",
        to: "",
        subMenu: [
          {
            text: "Société a responsabilité limitée - SARL",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Location gérance",
                to: "/Immatriculation/personne-morale/societe-a-responsabilite-limitee-sarl-location-gerance-fonds-de-commerce",
                target: "_blank",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Entreprise Unipersonnelle a responsabilité limitée -EURL",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Location gérance",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société par action simplifiée - SAS",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Location gérance",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société par action simplifiée Unipersonnelle",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Location gérance",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société en nom collectif",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Location gérance",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société Anonyme à Conseil d'administration - SA",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Location gérance",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société Anonyme à directoire et conseil de surveillance",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Location gérance",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société civile",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
            ],
          },
          {
            text: "Société civile immobilère - SCI",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
            ],
          },
          {
            text: "Société civile de moyens - SCM",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
            ],
          },
          {
            text: "Société civile professionnelle - SCP",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
            ],
          },
          {
            text: "Société civile de construction vente - SCCV",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
            ],
          },
          {
            text: "Société d'exercice libéral a responsabilité limitée - SELARL",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société d'exercice libéral Unipersonelle a responsabilité limitée - SELURL",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société d'exercice par actions simplifiée - SELAS",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Société d'exercice par actions simplifiée Unipersonnelle - SELASU",
            to: "",
            subMenu: [
              {
                text: "Création",
                to: "",
              },
              {
                text: "Achat de fonds de commerce",
                to: "",
              },
              {
                text: "Apport d'un fond de commerce",
                to: "",
              },
            ],
          },
          {
            text: "Groupement d'interet économique",
            to: "",
          },
          {
            text: "Société de droit étranger - Ouverture du premier établissement en france",
            to: "",
          },
          {
            text: "Société en commandite simple",
            to: "",
          },
          {
            text: "Société en commandite par action",
            to: "",
          },
          {
            text: "Agent commercial",
            to: "",
          },
        ],
      },
      //************************NIVEAU 1-1-2 ************************************ */
      {
        text: "Personne physique",
        to: "",
        subMenu: [
          {
            text: "Commerçant",
            to: "",
            //************************NIVEAU 1-1-2-1 ************************************ */
            subMenu: [
                  {
                    text: "Création",
                    to: "",
                  },
                  {
                    text: "Achat de fonds de commerce",
                    to: "",
                  },
                  {
                    text: "Location gérance",
                    to: "",
                  },
                  {
                    text: "Apport d'un fond de commerce",
                    to: "",
                  },
                ],
          },
          {
            text: "Entreprise individuelle à responsabilité limitée",
            to: "",
          },
          {
            text: "Agent Commercial",
            to: "",
          },
          {
            text: "Profession libérale",
            to: "",
          },
        ],
      },
    ],
  },
  //************************NIVEAU 1-2 ************************************ */
  {
    text: "Modification",
    to: "/",
    //************************NIVEAU 21 ************************************ */
    subMenu: [
      {
        text: "Personne morale",
        to: "",
        subMenu: [
          {
            text: "Caractéristique de la société",
            to: "",
            subMenu: [
              {
                text: "Forme Sociale",
                to: "",
                subMenu: [
                  {
                    text: "Pluripersonnelle en Unipersonnelle",
                    to: "",
                  },
                  {
                    text: " Transformation SA à Conseil d'Administration en SAS",
                    to: "",
                  },
                  {
                    text: "Transformation SA à directoire et conseil de surveillance en SAS",
                    to: "",
                  },
                  {
                    text: "Transformation SARL en SA à conseil d'administration",
                    to: "",
                  },
                  {
                    text: "Transformation SARL en SA à directoire et conseil surveillance",
                    to: "",
                  },
                  {
                    text: "Transformation SARL en SAS",
                    to: "",
                  },
                  {
                    text: "Transformation SARL en SNC",
                    to: "",
                  },
                  {
                    text: "Transformation SARL en société civile",
                    to: "",
                  },
                  {
                    text: "Transformation SAS en SA à conseil d'administration",
                    to: "",
                  },
                  {
                    text: " Transformation SAS en SA à directoire et conseil de surveillance",
                    to: "",
                  },
                  {
                    text: "Transformation société par actions en SARL",
                    to: "",
                  },
                  {
                    text: "Transformation société par actions en SNC",
                    to: "",
                  },
                  {
                    text: "Transformation société par actions en société Civile",
                    to: "",
                  },
                ],
              },
              {
                text: "Objet Social",
                to: "",
                subMenu: [
                  {
                    text: "Avec modification de l'activité déclarée au registre du commerce et des sociétés",
                    to: "",
                  },
                  {
                    text: "Sans modification de l'activité au registre du commerce et des sociétés",
                    to: "",
                  },
                ],
              },
              {
                text: "Dénomination Sociale",
                to: "",
                subMenu: [
                  {
                    text: "Modification de la dénomination sociale",
                    to: "",
                  },
                  {
                    text: "Modification du sigle",
                    to: "",
                  },
                ],
              },
              {
                text: "Sigle",
                to: "",
              },
              {
                text: "Siége social",
                to: "",
                subMenu: [
                  {
                    text: "Greffe d'immatriculation",
                    to: "",
                    subMenu: [
                      {
                        text: "Création",
                        to: "",
                      },
                      {
                        text: "Achat",
                        to: "",
                      },
                      {
                        text: "Location gérance",
                        to: "",
                      },
                    ],
                  },
                  {
                    text: "Autres greffes",
                    to: "",
                    subMenu: [
                      {
                        text: "Création",
                        to: "",
                      },
                      {
                        text: "Achat",
                        to: "",
                      },
                      {
                        text: "Location gérance",
                        to: "",
                      },
                    ],
                  },
                ],
              },
              {
                text: "Durée",
                to: "",
              },
              {
                text: "Capital social",
                to: "",
                subMenu: [
                  {
                    text: "Augmentation apport en numéraire",
                    to: "",
                  },
                  {
                    text: "Augmentation apport en nature",
                    to: "",
                  },
                  {
                    text: "Réduction non motivée par des pertes",
                    to: "",
                  },
                  {
                    text: "Réduction motivée par des pertes",
                    to: "",
                  },
                ],
              },
              {
                text: "Exercice social",
                to: "",
                subMenu: [
                  {
                    text: "Dates de l'exercice social",
                    to: "",
                  },
                  {
                    text: "Progation du premier exercice social",
                    to: "",
                  },
                ],
              },
              {
                text: "Nom commercial",
                to: "",
              },
            ],
          },
          {
            text: "Dirigeant",
            to: "",
            subMenu: [
              {
                text: "Gérant",
                to: "",
              },
              {
                text: "Président",
                to: "",
              },
              {
                text: "Conseil d'administration",
                to: "",
              },
              {
                text: "Membre du directoire",
                to: "",
              },
              {
                text: "Membre du conseil surveillance",
                to: "",
              },
              {
                text: "Associé",
                to: "",
              },
              {
                text: "Représentant parmanent",
                to: "",
              },
              {
                text: "Commissaire au compte",
                to: "",
              },
              {
                text: "Personne ayant le pouvoir d'engager à titre habituel la société",
                to: "",
              },
            ],
          },
          {
            text: "Etablissement",
            to: "",
            subMenu: [
              {
                text: "Principal (Greffe du siége social)",
                to: "",
                subMenu: [
                  {
                    text: " Création",
                    to: "",
                  },
                  {
                    text: "Achat",
                    to: "",
                  },
                  {
                    text: "Location gérance",
                    to: "",
                  },
                ],
              },
              {
                text: "Principal (Autres Greffes)",
                to: "",
                subMenu: [
                  {
                    text: " Création",
                    to: "",
                  },
                  {
                    text: "Achat",
                    to: "",
                  },
                  {
                    text: "Location gérance",
                    to: "",
                  },
                ],
              },
              {
                text: "Complémentaire (greffe du siége social)",
                to: "",
                subMenu: [
                  {
                    text: " Création",
                    to: "",
                  },
                  {
                    text: "Achat",
                    to: "",
                  },
                  {
                    text: "Location gérance",
                    to: "",
                  },
                ],
              },
              {
                text: "Secondaire (autres greffes)",
                to: "",
                subMenu: [
                  {
                    text: " Création",
                    to: "",
                  },
                  {
                    text: "Achat",
                    to: "",
                  },
                  {
                    text: "Location gérance",
                    to: "",
                  },
                ],
              },
              {
                text: "Enseigne (Adjonction,modification,suppression)",
                to: "",
              },
              {
                text: "Activité (Début,fin)",
                to: "",
              },
            ],
          },
          {
            text: "Dissolution anticipée amiable",
            to: "",
          },
          {
            text: "Dissolution par Transmission Universelle du patrimoine",
            to: "",
          },
        ],
      },
    ],
  },
  //************************NIVEAU 1-3 ************************************ */
  {
    text: "Radiation",
    to: "/",
    //************************NIVEAU 31 ************************************ */
    subMenu: [
      {
        text: "Personne physique",
        to: "",
        subMenu: [
          {
            text: "Commerçant",
            to: "",
          },
          {
            text: "Entreprise individuelle à responsabilitée limitée - EIRL",
            to: "",
          },
          {
            text: "Agent commercial",
            to: "",
          },
          {
            text: "Profession libéréle",
            to: "",
          },
        ],
      },
      //************************NIVEAU 32 ************************************ */
      {
        text: "Personne morale",
        to: "",
        subMenu: [
          {
            text: "Cloture des opérations de liquidations",
            to: "",
            subMenu: [
              {
                text: "Avec boni de liquidation",
                to: "",
              },
              {
                text: "Avec mali de liquidation",
                to: "",
              },
            ],
          },
        ],
      },
    ],
  },
  //************************NIVEAU 1-4 ************************************ */
  {
    text: "Avis du BODACC",
    to: "/",
    subMenu: [
      //************************NIVEAU 41 ************************************ */
      {
        text: "Personne physique",
        to: "",
        subMenu: [
          {
            text: "BODACC A",
            to: "",
          },
        ],
      },
      //************************NIVEAU 42 ************************************ */
      {
        text: "Personne morale",
        to: "",
        subMenu: [
          {
            text: "BODACC B",
            to: "",
          },
        ],
      },
      //************************NIVEAU 43 ************************************ */
      {
        text: "Cessionnaire",
        to: "",
      },
    ],
  },
];


export {
  BannerIndexData,
  BannerIndexDataNoToken,
  BannerFormalite,
};
