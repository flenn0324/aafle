import React from "react"
import FooterTwo from "../../section/footer/FooterTwo"
import Search from "../../section/Annuaires/Search"
import Result from "../../section/Annuaires/Result"
import TopHeader from "../../section/TopHeader/TopHeader"

const annuaire = (props) =>{
    return(
        <div className="nk-main">
            <TopHeader></TopHeader>
            <Search></Search>
            <Result></Result>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default annuaire