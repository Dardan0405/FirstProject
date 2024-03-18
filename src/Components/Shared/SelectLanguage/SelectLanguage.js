import React from "react"
import SingeLanguage from "./SingleLanguage"
import { dataLocaleStorage } from "./dataLocalStorage"


import england from "../../../assets/flags/uk.svg"
import albania from "../../../assets/flags/albania.svg"

import { UseDispatch,useDispatch,useSelector } from "react-redux"
import { chooseLanguage } from "../../../Store/Actions/languageActions"
import {MdKeyboardArrowDown} from "react-icons/md"
import { Value } from "sass"
import "./SelectLanguage.scss"

function SelectLanguage () {
    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language)
    const languages = [
        {value: 'en-GB', lang: 'English', flag:england},
        {value: 'sq-AL', lang:'Albanian', flag:albania},
    ];

    const handleLanguageChange = (language, locale) =>{
        dispatch(chooseLanguage(locale));
        dataLocaleStorage.setLanguage(language);
        dataLocaleStorage.setLocale(locale)
    };
    let flag = null;
    switch(dataLocaleStorage.getLocale()){
        case 'en-GB':
            flag = england;
            break;
            case 'sq-AL':
                flag = albania
    }

    return(
        <div className="select-language">
            <img src={flag} alt="'selected flag'"/>
            {dataLocaleStorage.getLanguage() || "Albanian"}
            <MdKeyboardArrowDown className='arrow' styles='up' />
            <div className="dropdown">
                {
                    languages.sort(function(a,b){
                        let lang1 = a.lang.toUpperCase();
                        let lang2 = b.lang.toUpperCase();
                        if(lang1 < lang2){
                            return -1
                        }
                        if(lang1 > lang2){
                            return 1
                        }
                        return 0
                    })
                    .map((thisisLang, i) =>{
                        return(
                            <SingeLanguage
                            value = {thisisLang.value}
                            key ={i}
                            handleLanguageChange={() =>
                            handleLanguageChange(thisisLang.lang, thisisLang.value)
                        }
                        styles = {thisisLang.value  === language && 'selected'}
                        language = {thisisLang.lang}
                        flag= {thisisLang.flag}
                            ></SingeLanguage>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default SelectLanguage