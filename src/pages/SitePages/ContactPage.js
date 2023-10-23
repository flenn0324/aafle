import React from "react"
import FooterTwo from "../../section/footer/FooterTwo"
import Contact from "../../section/contact/Contact"
import TopHeader from "../../section/TopHeader/TopHeader"


const contactpage = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <Contact className='py-5 my-5'></Contact>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default contactpage