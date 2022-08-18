import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [currentPaginationData, setCurrentPaginationData] = React.useState(
    blogs.posts.slice(0, 15)
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedPageSize, setSelectedPageSize] = React.useState(15);

  const updateRowsPerPage = (value) => {
    updatePaginationData(1, +value);
  };
  const updatePage = (pageNumber) => {
    updatePaginationData(pageNumber, selectedPageSize);
  };
  const updatePaginationData = (pageNumber, pageSize) => {
    setCurrentPage(pageNumber);
    setSelectedPageSize(pageSize);
    setCurrentPaginationData(
      blogs.posts.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    );
  };
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={selectedPageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
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
