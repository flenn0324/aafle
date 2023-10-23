import React from "react"
import FooterTwo from "../../section/footer/FooterTwo"
import TopHeader from "../../section/TopHeader/TopHeader"
import FaqOne from "../../section/faq/FaqOne"


const faqpage = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <FaqOne className="py-5 my-5 section-faq" id="#faqs"/>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default faqpage