import style from "./Pagination.module.css";


const Pagination = ({totalItemsCount, pageSize, onSetCurrentPage, currentPage}) => {
        const pagesCount = Math.ceil(totalItemsCount / pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return (
        <div className={style.pagination}>
            {pages.map((page) => {
                return (
                    <span key={page} className={`${currentPage === page && style.activePage} ${style.pages}`}
                          onClick={() => {
                              onSetCurrentPage(page)
                          }}>
                            {page}
                            </span>
                );
            })}
        </div>
    );
}
export default Pagination;