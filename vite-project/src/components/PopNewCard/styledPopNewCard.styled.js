import styled, { css } from "styled-components";
import { Green, Hover01, Orange, Purple, Subttl } from "../../globalStyle.styled";

export const PopNewCard = styled.div`
    display: none;
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;

    @media screen and (max-width: 660px) {
        top: 70px;
    }
`

export const PNCContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);

    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }

    @media screen and (max-width: 495px) {
        padding: 0;
        justify-content: flex-start;
    }
`

export const PNCBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;

    @media screen and (max-width: 660px) {
        border-radius: 0;
    }

    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`

export const PNCContent = styled.div`
    display: block;
    text-align: left;
`

export const PNCTtl = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`

export const PNCClose = styled.a`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;

    &:hover {
        color: #000000;
    }
`

export const PNCWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 660px) {
        display: block;
    }
`

export const PNCForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;

    @media screen and (max-width: 495px) {
        max-width: 100%;
        width: 100%;
        display: block;
    }
`

export const FNewBlock = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    ${Subttl}
`

const FNInputArea = css`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;

    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
`

export const FNInput = styled.input`
    margin: 20px 0;

    ${FNInputArea}
`

export const FNArea = styled.textarea`
    max-width: 370px;
    margin-top: 14px;
    height: 200px;

    ${FNInputArea}

    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 34px; 
    }
`

export const Categories = styled.div`
    margin-bottom: 20px;
`

export const CP = styled.p`
    margin-bottom: 14px;

    ${Subttl}
`

export const CThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`

const CTheme = css`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
    }
`

export const CThemeOrangeActive = styled.div`
    opacity: 1 !important;

    ${CTheme}
    ${Orange}
`

export const CThemeOrange = styled.div`
    ${CTheme}
    ${Orange}
`

export const CThemeGreen = styled.div`
    ${CTheme}
    ${Green}
`

export const CThemePurple = styled.div`
    ${CTheme}
    ${Purple}
`

export const COrange = styled.p`
    ${Orange}
`

export const CGreen = styled.p`
    ${Green}
`

export const CPurple = styled.p`
    ${Purple}
`

export const FNCreate = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;

    ${Hover01}

    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
    }
`