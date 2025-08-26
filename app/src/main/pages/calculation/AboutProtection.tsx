import { YellowButton } from "../../attributes/Buttons";
import { YellowLink } from "../../attributes/Text";
import { TextListWithDods } from "../../attributes/TextList";
import { Money } from "../../svg/Links";
const AboutProtection = () => {
    return (
        <div className="about-protection">
            <div className="top">
                <TextListWithDods
                    title="Обеспечение физическими активами"
                    content={['Все расчеты обеспечены физическими монетами из золота, серебра или платины']} />
                <YellowLink  text="Узнать больше" link="#">
                    <Money />
                </YellowLink>
            </div>
            <div className="bottom">
                <YellowButton name="Далее" />
            </div>
        </div>
    );
};

export default AboutProtection;