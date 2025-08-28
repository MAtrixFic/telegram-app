import { YellowBorderButton } from "../../attributes/Buttons"
import { ButtonWithIcon } from "../../attributes/Buttons"
import { Statistics, PaperMoney, Users, Calculator, Scales, Protection } from "../../svg/Attributes"
import { useNavigate } from "react-router-dom"
import '../../../styles/about.scss'

const About = () => {
    const navigate = useNavigate();

    return (
        <div className="about">
            <div className="top">
                <ButtonWithIcon
                    onClick={() => navigate('/pages/about/calculatesteps')}
                    name="Этапы проведения расчетов с применением GOLDAO" icon={<Statistics />} />
                <ButtonWithIcon
                    onClick={() => navigate('/pages/about/makecalculate')}
                    name="Принцип проведения расчетов с применением GOLDAO" icon={<PaperMoney />} />
                <ButtonWithIcon
                    onClick={() => navigate('/pages/calc/usesections')}
                    name="Участники проведения расчетов" icon={<Users />} />
                <ButtonWithIcon
                    onClick={() => navigate('/pages/calc/calculationprocedure')}
                    name="Процедура проведения расчетов" icon={<Calculator />} />
                <ButtonWithIcon
                    onClick={() => navigate('/pages/about/contractsandagreements')}
                    name="Договора и юридическое оформление расчетов" icon={<Scales />} />
                <ButtonWithIcon
                    onClick={() => navigate('/pages/calc/accountant')}
                    name="Обечпечение безопасности" icon={<Protection />} />
            </div>
            <div className="bottom">
                <YellowBorderButton name="Связаться с GOLDAO" />
                <YellowBorderButton name="На главную" />
            </div>
        </div>
    )
}

export default About