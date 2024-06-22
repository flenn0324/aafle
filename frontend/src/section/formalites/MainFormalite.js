import React from "react"
import { Container } from "reactstrap"
import Menu from "../../layout/menu/Menu"
import { BannerFormalite } from "../banner/BannerData";



const MainFormalite = (props) =>{
    return(
            <Container>
                <Menu data={BannerFormalite}></Menu>
            </Container>
    )
}

export default MainFormalite