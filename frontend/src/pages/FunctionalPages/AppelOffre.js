import React from "react"
import FooterTwo from "../../section/footer/FooterTwo"
import TopHeader from "../../section/TopHeader/TopHeader"
import AppelOffre from "../../section/appel d'offre/AppelOffre"

const appeloffre = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <AppelOffre></AppelOffre>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default appeloffre