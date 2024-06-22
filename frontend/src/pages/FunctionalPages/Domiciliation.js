import React from "react"
import FooterTwo from "../../section/footer/FooterTwo"
import TopHeader from "../../section/TopHeader/TopHeader"
import Domiciliationsection from "../../section/domiciliation/Domiciliationsection"

const domiciliation = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <Domiciliationsection></Domiciliationsection>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default domiciliation