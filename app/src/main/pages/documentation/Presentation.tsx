import { YellowButton } from '../../attributes/Buttons';
import DocsPresentationElement from './DocsPresentationElement';

const Presentation = () => {
    return (
        <div className='docs__presentation'>
            <div className="top">
                <DocsPresentationElement title='Одностраничная презентация GOLDAO' links={[
                    { name: 'GOLDAO one pager (rus)', link: '#' },
                    { name: 'GOLDAO one pager (eng)', link: '#' }
                ]} />
                <DocsPresentationElement title='Презентация GOLDAO для бизнеса:' links={[
                    { name: 'GOLDAO для бизнеса (rus)', link: '#' },
                    { name: 'GOLDAO для бизнеса (eng)', link: '#' }
                ]} />
                <DocsPresentationElement title='Что может быть интересно' links={[{ name: 'Получить пример расчета (rus)', link: '/pages/docs/presentation/calcexample' }]} />
            </div>
            <div className="bottom">
                <YellowButton name='Узнать больше' onClick={() => ''} />
            </div>
        </div>
    );
};

export default Presentation;