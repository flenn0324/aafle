import React from "react"
import FooterTwo from "../../section/footer/FooterTwo"
import Contact from "../../section/contact/Contact"
import TopHeader from "../../section/TopHeader/TopHeader"

const formalites = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <h1>Page formalites legales</h1>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default formalites