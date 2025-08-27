import { ButtonWithIconAndTitle, YellowBorderButton } from "../../attributes/Buttons"
import { ButtonWithIcon } from "../../attributes/Buttons"
import { Statistics, PaperMoney, Users, Calculator, Scales, Protection } from "../../svg/Attributes"

import '../../../styles/about.scss'
const About = () => {
    return (
        <div className="about">
            <div className="top">
                <ButtonWithIcon name="Этапы проведения расчетов с применением GOLDAO" icon={<Statistics />} />
                <ButtonWithIcon name="Принцип проведения расчетов с применением GOLDAO" icon={<PaperMoney />} />
                <ButtonWithIcon name="Участники проведения расчетов" icon={<Users />} />
                <ButtonWithIcon name="Процедура проведения расчетов" icon={<Calculator />} />
                <ButtonWithIcon name="Договора и юридическое оформление расчетов" icon={<Scales />} />
                <ButtonWithIcon name="Обечпечение безопасности" icon={<Protection />} />
                <ButtonWithIconAndTitle name="Обечпечение безопасности" icon={<Protection />} title="Заголовок"/>
            </div>
            <div className="bottom">
                <YellowBorderButton name="Связаться с GOLDAO" />
                <YellowBorderButton name="На главную" />
            </div>
        </div>
    )
}

export default About