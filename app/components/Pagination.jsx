import _ from "lodash";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pageCount = items / pageSize;
    if (Math.ceil(pageCount) === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
        <>
            <div className="grid m-9 place-items-center">
                <nav aria-label="Page navigation example">
                    <ul className="flex items-center -space-x-px h-10 text-base">
                        {pages.map((page) => (
                            <li
                                key={page}
                                className={
                                    page === currentPage ? "page-item active" : "page-item"
                                }
                            >
                                <a
                                    style={{ cursor: "pointer" }}
                                    onClick={() => onPageChange(page)}
                                    className={page == currentPage ? 'page-link flex items-center transition duration-300 ease-in-out hover:scale-110 justify-center px-4 rounded-full ml-2 h-10 leading-tight text-white bg-blue-500 hover:bg-blue-700 hover:text-white dark:bg-blue-800 dark:border-blue-700 dark:text-white dark:hover:bg-blue-700 dark:hover:text-white' : "page-link flex items-center transition duration-300 ease-in-out hover:scale-110 justify-center px-4 rounded-full ml-2 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                                >
                                    {page}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Pagination;
