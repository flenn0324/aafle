import React from "react"
import FooterTwo from "../../section/footer/FooterTwo"
import RdvForm from "../../section/rdv/rdvform"
import TopHeader from "../../section/TopHeader/TopHeader"

const rdv = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <RdvForm className='py-5 my-5'></RdvForm>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default rdv
