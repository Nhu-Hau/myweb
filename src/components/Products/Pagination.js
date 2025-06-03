const Pagination = ({ totalPages, currentPage, paginate }) => {
  // Hàm để xác định các trang cần hiển thị (hiển thị số trang gần với trang hiện tại)
  const pageNumbers = () => {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // Nếu gần cuối thì lùi lại để không vượt quá tổng số trang
    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  return (
    <nav aria-label="Phân trang sản phẩm" className="flex justify-center my-6">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 mx-1 text-sm font-semibold rounded-full flex items-center justify-center transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          bg-white border border-gray-600 text-black hover:bg-gray-800 hover:border-gray-500 hover:text-white"
      >
        &#8592;
      </button>

      {pageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => paginate(page)}
          aria-current={currentPage === page ? "page" : undefined}
          className={`w-8 h-8 mx-1 text-sm font-semibold rounded-full flex items-center justify-center transition-all duration-300
            ${currentPage === page
              ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg"
              : "bg-white border border-gray-600 text-black hover:bg-gray-800 hover:border-gray-500 hover:text-white"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 mx-1 text-sm font-semibold rounded-full flex items-center justify-center transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          bg-white border border-gray-600 text-black hover:bg-gray-800 hover:border-gray-500 hover:text-white"
      >
        &#8594;
      </button>
    </nav>
  );
};

export default Pagination;
