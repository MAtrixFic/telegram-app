import Title from "../attributes/Title"

const PagesInfo = {
    //О программе
    about: {
        link: '/pages/about',
        title: 'О GOLDAO'
    },
    calculatesteps: {
        link: '/pages/about/calculatesteps',
        title:
            <Title top='Этапы расчета '
                bottom="с применением GOLDAO"
                message="GOLDAO обеспечивает расчеты по договорам поставки, предоставляя участникам - импортерам и экспортерам - инфраструктуру локальных компаний, цифровую платформу и гарантированное наличие эммиссионных монет в странах контрагентов на сумму сделки"
            />
    },
    makecalculate: {
        link: '/pages/about/makecalculate',
        title: <Title top='О проведении расчета'
            bottom="с применением GOLDAO"
            message="GOLDAO заменяет денежные переводы исполнением опционов на эмиссионные монеты из драгоценных металлов с гарантией денежного погашения в странах получателей (экспортеров)"
        />
    },
    usesections: {
        link: '/pages/calc/usesections',
        title: <Title top='Участники расчета'
            bottom="с применением GOLDAO"
        />
    },
    calculationprocedure: {
        link: '/pages/calc/calculationprocedure',
        title: <Title top='Процедура расчета'
            bottom="с применением GOLDAO"
            message="Расчеты проводятся на основании договоров поставки между импортерами и экпортерами после подписания сторонами дополнительных договоров и соглашений"
        />
    },
    contractsandagreements: {
        link: '/pages/about/contractsandagreements',
        title: <Title top='Договора и соглашения'
            bottom="для проведения расчетов"
        />
    },
    accountant: {
        link: '/pages/calc/accountant',
        title: 'Бухгалтерская отчетность'
    },
    closeddocument: {
        link: '/pages/calc/closeddocument',
        title: 'Закрывающие документы'
    },

    settings: {
        link: '/pages/settings',
        title: 'Настройки'
    },
    //Документация
    docs: {
        link: '/pages/docs',
        title: 'Документация'
    },
    presentation: {
        link: '/pages/docs/presentation',
        title: 'Презентация GOLDAO'
    },
    calcexample: {
        link: '/pages/docs/presentation/calcexample',
        title: 'Получить пример расчета'
    },
    calcexampletwo: {
        link: '/pages/docs/presentation/calcexampletwo',
        title: 'Получить пример расчета'
    },
    //Курсы валют
    moneyone: {
        link: '/pages/money/one',
        title: 'Курсы валют'
    },
    moneytwo: {
        link: '/pages/money/two',
        title: 'Курсы валют'
    },
    //новая дока
    lastdosc: {
        link: '/pages/last-docs',
        title: 'Документация GOLDAO'
    },
    reportexampleone: {
        link: '/pages/last-docs/reportexample/one',
        title: <Title top='Примеры расчетов '
            bottom="с применением GOLDAO"
            message="Для получения примера расчета по договору поставки с применением GOLDAO выберите валюту страны регистрации отправителя (импортера) и валюту страны регитсрации получателя (экспортера)"
        />
    },
    reportexampletwo: {
        link: '/pages/last-docs/reportexample/two',
        title: <Title top='Примеры расчетов '
            bottom="с применением GOLDAO"
        />
    },
    templatereporttwo: {
        link: '/pages/last-docs/templatereport/two',
        title: <Title top='Шаблоны договоров'
            bottom="для проведения расчетов"
            message="Для получения примера расчета по договору поставки с применением GOLDAO выберите валюту страны регистрации отправителя (импортера) и валюту страны регитсрации получателя (экспортера)"
        />
    },
    //калькулятор
    calcone: {
        link: '/pages/calc/one',
        title: "Калькулятор"
    },
    calctwo: {
        link: '/pages/calc/two',
        title: "Калькулятор"
    },
    //основной калькулятор
    goldcalcone: {
        link: '/pages/golden-calc/one',
        title: <Title top='Калькулятор'
            message="Рассчитайте стоимость проведения расчета по договору поставки с применением национальных валют GOLDAO"
        />
    },
    goldcalctwo: {
        link: '/pages/golden-calc/two',
        title: <Title top='Калькулятор'
            danger="Предоставленный расчет носит исключительно ознакомительный характер и не является коммерческим предложением "
        />
    },
    uploadofferone: {
        link: '/pages/last-docs/uploadoffer/one',
        title: <Title top='Загрузка предложения '
            bottom="для проведения расчета по договору поставки"
        />
    },
    uploadoffertwo: {
        link: '/pages/last-docs/uploadoffer/two',
        title: <Title top='Загрузка предложения '
            bottom="для проведения расчета по договору поставки"
        />
    }
}

export { PagesInfo }