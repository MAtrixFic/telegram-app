import { useContext, useEffect, type ReactNode } from "react"
import { CreatePageTitleContext } from "./TitleContext"

function useGetPageTitle() {
    const pageTitleContext = useContext(CreatePageTitleContext)
    return {
        title: pageTitleContext.title
    }
}

function useSetPageTitle(title: ReactNode) {
    const pageTitleContext = useContext(CreatePageTitleContext)
    useEffect(() => {
        pageTitleContext.setTitle(title)
    }, [])
}

export { useGetPageTitle, useSetPageTitle }