

const BannerIndexData = [
    {
        text:'Annuaires',
        to:'/pages/FunctionalPages/Annuaire'
    },
    {
        text:'Abecedaire des Formalites',
        to:'/pages/FunctionalPages/Formalites',
        subMenu: [
            {
                text: "404 Classic",
                to: "/pages/error/404-classic",
            },
            {
                text: "404 Modern",
                to: "/pages/error/404-modern",
            },
            {
                text: "504 Classic",
                to: "/pages/error/504-classic",
            },
            {
                text: "504 Modern",
                to: "/pages/error/504-modern",
            },
        ]
    },
    {
        text:'Domiciliation Commerciale',
        to:'/pages/FunctionalPages/Domiciliation'
    },
    {
        text:'Annonces Légales',
        to:''
    },
    {
        text:'Livres Légaux',
        to:''
    },
]

const TopBannerData = [
    {
        text:'Home',
        to:'#home'
    },
    {
        text:'A propos',
        to:'#apropos'
    },
    {
        text:'Pourquoi nous choisir',
        to:'#prq'
    },
    {
        text:'Contact',
        to:'/pages/SitePages/ContactPage'
    },
    {
        text:'FAQ',
        to:'/pages/SitePages/FaqPage'
    },
]

export {BannerIndexData,TopBannerData}
