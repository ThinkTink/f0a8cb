import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [blogData] = React.useState({ ...blogs });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedPageSize, setSelectedPageSize] = React.useState(15);

  const currentPaginationData = React.useMemo(() => {
    return blogData.posts.slice(
      (currentPage - 1) * selectedPageSize,
      currentPage * selectedPageSize
    );
  }, [blogData, currentPage, selectedPageSize]);

  const updateRowsPerPage = (value) => {
    updatePaginationData(1, +value);
  };
  const updatePage = (pageNumber) => {
    // Avoid to call the function if the page is the same
    if (currentPage !== pageNumber)
      updatePaginationData(pageNumber, selectedPageSize);
  };
  const updatePaginationData = (pageNumber, pageSize) => {
    setSelectedPageSize(pageSize);
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogData.posts.length}
        pageSize={selectedPageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />

      <ul // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
