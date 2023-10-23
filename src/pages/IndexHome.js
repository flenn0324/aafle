import React from "react"
import FooterTwo from "../section/footer/FooterTwo"
import NosServices from "../section/service/NosServices"
import BannerIndex from "../section/banner/BannerIndex"
import FactsTwo from "../section/facts/FactsTwo"
import ServiceThree from "../section/service/ServiceThree"
import { FeatureTwo } from "../section/feature/FeatureTwo"

const index = (props) =>{
    return(
        <div className="nk-main">
            <BannerIndex className="header has-header-main-s1 bg-lighter" id="#home" />
            <FeatureTwo className="section-feature" id="#apropos"/>
            <NosServices className="section section-service pb-0" id="#service"/>
            <FactsTwo className="section-facts bg-dark has-bg-image my-5" />
            <ServiceThree className="section-service py-5 mt-5" id="#prq"/>
            <FooterTwo className="bg-blue is-blue" />
        </div>
    )
}

export default index
