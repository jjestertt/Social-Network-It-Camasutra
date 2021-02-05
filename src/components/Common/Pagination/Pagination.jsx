import style from "./Pagination.module.css";
import {useState} from "react";


const Pagination = ({totalItemsCount, pageSize, onSetCurrentPage, currentPage, portionSize = 10}) => {
    const pages = [];
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);   
    const currentPortion = Math.ceil(currentPage / portionSize);
    const [portionNumber, setPortionNumber] = useState(currentPortion);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;
    return (

        <div className={style.pagination}>
            {portionNumber <= 1 || <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>{'<<'}</button>}
            {pages
                .filter(page => page >= leftPortionNumber && page <= rightPortionNumber)
                .map((page) => {
                    return (
                        <span key={page} className={`${currentPage === page && style.activePage} ${style.pages}`}
                              onClick={() => {
                                  onSetCurrentPage(page)
                              }}>
                            {page}
                        </span>
                    );
                })}
            {portionNumber >= portionCount || <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>{'>>'}</button>}
        </div>
    );
}
export default Pagination;