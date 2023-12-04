import React from "react"
import TopHeader from "../../section/TopHeader/TopHeader";
import FooterTwo from "../../section/footer/FooterTwo";
import CreatePrescripteur from "../../section/FormAuth/CreatePrescripteur";


const NewUserPage = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <CreatePrescripteur></CreatePrescripteur>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default NewUserPage