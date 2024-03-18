import { type } from "@testing-library/user-event/dist/type";
import { CHOOSE_LANGUAGE } from "../actionTypes";

export const chooseLanguage = (locale) =>{
    return{
        type: CHOOSE_LANGUAGE,
        playload: locale,
    }
}