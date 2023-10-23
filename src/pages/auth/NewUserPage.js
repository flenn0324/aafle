import React from "react"
import MultiStepForm from "../../section/FormAuth/MultiStepForm";
import TopHeader from "../../section/TopHeader/TopHeader";
import FooterTwo from "../../section/footer/FooterTwo";


const NewUserPage = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <MultiStepForm></MultiStepForm>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default NewUserPage