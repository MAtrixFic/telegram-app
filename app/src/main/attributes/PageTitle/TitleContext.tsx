import { createContext, useState, type ReactNode } from "react";

type PageTitle = {
    title: ReactNode,
    setTitle: (title: ReactNode) => void
}

interface IPageTitleContenxtProps {
    children: ReactNode
}

const CreatePageTitleContext = createContext<PageTitle>({ title: '', setTitle: () => '' });

const PageTitleContext = ({ children }: IPageTitleContenxtProps) => {
    const [pageTitle, setPageTitle] = useState<ReactNode>('')
    return (
        <CreatePageTitleContext.Provider value={{ title: pageTitle, setTitle: setPageTitle }}>
            {children}
        </CreatePageTitleContext.Provider>
    );
};


export default PageTitleContext;
export { CreatePageTitleContext }