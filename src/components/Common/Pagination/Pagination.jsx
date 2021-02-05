import style from "./Pagination.module.css";
import {useState} from "react";


const Pagination = ({totalItemsCount, pageSize, onSetCurrentPage, currentPage, portionSize = 10}) => {
    const pages = [];
    const pagesCount = Math.ceil(totalItemsCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    // count all portions
    const portionCount = Math.ceil(pagesCount / portionSize);
    // computed initial current portion from data current page
    const currentPortion = Math.ceil(currentPage / portionSize);
    // hook with help this we can help change number of current portion
    const [portionNumber, setPortionNumber] = useState(currentPortion);
    // start number of portion
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    // end number of portion
    const rightPortionNumber = portionNumber * portionSize;
    return (

        <div className={style.pagination}>
             <button className={style.button} disabled={portionNumber <= 1} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>{'<<'}</button>
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
             <button className={style.button} disabled={portionNumber >= portionCount} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>{'>>'}</button>
        </div>
    );
}
export default Pagination;