import { FormattedMessage } from "react-intl";
import { FaBusSimple } from "react-icons/fa6";
import { Form } from "react-router-dom";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaDev } from "react-icons/fa6";
import { MdInsertPhoto } from "react-icons/md";
import { MdGamepad } from "react-icons/md";
export const TopCategoriesDatas =[
    {
        to:"/",
        title:<FormattedMessage id="Bussiness"  defaultMessage="Bussiness"/>,
        paragraph:<FormattedMessage id="383" defaultMessage="383 Courses"/>,
        icon:<FaBusSimple/>
    },
    {
        to:"/",
        title:<FormattedMessage id="Design" defaultMessage="Design"/>,
        paragraph:<FormattedMessage id="587" defaultMessage="587Courses"/>,
        icon:<MdOutlineDesignServices/>,
    },
    {
        to:"/",
        title:<FormattedMessage id="Dev" defaultMessage="Development"/>,
        paragraph:<FormattedMessage id="506Course" defaultMessage="506 Course"/>,
        icon:<FaDev/>
    },
    {
        to:"/",
        title:<FormattedMessage id="Photo" defaultMessage="Photography"/>,
        paragraph:<FormattedMessage id="203" defaultMessage="203 Course"/>,
        icon:<MdInsertPhoto/>
    },
    {
        to:"/",
        title:<FormattedMessage id="Gaming" defaultMessage="Gaming"/>,
        paragraph:<FormattedMessage id="173" defaultMessage="173 Course"/>,
        icon:<MdGamepad/>   
    },
    {
        to:"/",
        title:<FormattedMessage id="Acc" defaultMessage="Accounting"/>,
        paragraph:<FormattedMessage id="89" defaultMessage="89 Course"/>,
        icon:""
    }
]