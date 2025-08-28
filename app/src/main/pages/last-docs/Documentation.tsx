import { ButtonWithIcon } from "../../attributes/Buttons"
import { File1, File2, File3, File4 } from "../../svg/Attributes"

import { PagesInfo } from "../../others/PagesInfo"
import { useNavigate } from "react-router-dom"

const Documentation = () => {
    const navigate = useNavigate();

    return (
        <div className="about-doc">
            <div className="top">
                <div className="top__lists">
                    <ButtonWithIcon name="Кратка информация о GOLDAO" icon={<File1 />} />
                    <ButtonWithIcon name="Презентация GOLDAO для бизнеса" icon={<File2 />} />
                    <ButtonWithIcon name="Примеры проведения расчетов с применением GOLDAO" icon={<File3 />} onClick={() => navigate(PagesInfo.reportexampleone.link)} />
                    <ButtonWithIcon name="Шаблоны проведения договоров и соглашений для проведения расчетов" icon={<File4 />} onClick={() => navigate(PagesInfo.templatereporttwo.link)} />
                </div>
            </div>
        </div>
    )
}

export default Documentation