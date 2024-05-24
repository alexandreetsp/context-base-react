import React, { useState, useEffect} from "react";
import { createContext } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const CategoryContext = createContext({
    categoriesMap: {}
})

export const CategoryProvider = ({children}) => {
    const [categoriesMap, setCategorymap] = useState({})
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategorymap(categoryMap)
        }
        getCategoriesMap()
    }, [])
    const value = {categoriesMap}
    return (
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}