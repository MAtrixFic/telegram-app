import { TextListWithDods } from '../../attributes/TextList';
import { YellowButton } from '../../attributes/Buttons';

const AboutReportWithCompany = () => {
    return (
        <div className='about-report-with-company'>
            <div className="top">
                <TextListWithDods
                    title="Договор поставки"
                    content={['Компания-покупатель (импортер) и компания-продавец (экспортер) заключили импортно-экспортный договор (договор поставки)']} />
                <TextListWithDods
                    title="Расчет по договроу поставки"
                    content={['Расчет по договору поставки между импортером и экспортером осуществляется через уступки права требования с оформлением соответствующего договора цессии']} />
                <TextListWithDods
                    title="Инструмент расчета по договору поставки"
                    content={['Правом требования, которое применяется для расчета по договору поставки, является опцион на заключение договора купли-продажи']} />
            </div>
            <div className="bottom">
                <YellowButton name="Далее" />
            </div>
        </div>
    );
};

export default AboutReportWithCompany;