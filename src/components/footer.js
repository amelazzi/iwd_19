import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { dark } from '../styles/colors'

const StyledFooter = styled.div`
    background: ${dark};
    padding: 32px 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const IwdLogo = styled.div`
    width: 220px;
    height: 95px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    small{
        color: white;
        font-size: 14px;
        margin-top: 8px;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const IconContainer = styled.a`
    width: 40px;
    height: 40px;
    margin: 0px 4px;
    cursor: pointer;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(1000%) grayscale(20%) brightness(75%);
    }
    &:hover {

        img{
            filter: brightness(1000%);
        }
    }
`;

const WtmLogo = styled.div`
    width: 130px;
    height: 130px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Footer = () => {
    return(
        <StyledFooter>
            <IwdLogo>
                <img src={require("../images/iwd_logo.png")} />
            </IwdLogo>
            <Content>
                <SocialMedia>
                    <IconContainer target="_black" href="https://www.facebook.com/WomenTechmakersAlgiers/">
                        <img src={require("../images/facebook.png")} />
                    </IconContainer>
                    <IconContainer target="_black" href="https://www.twitter.com/AlgiersWtm">
                        <img src={require("../images/twitter.png")} />
                    </IconContainer>
                    <IconContainer target="_black" href="https://www.instagram.com/wtm_algiers/">
                        <img src={require("../images/instagram.png")} />
                    </IconContainer>
                </SocialMedia>
                <small> Copyrights &copy; 2019 All rights reserved </small>
            </Content>
            <WtmLogo>
                <img src={require("../images/wtm_logo.png")} />
            </WtmLogo>
        </StyledFooter>
    )
}

export default Footer
