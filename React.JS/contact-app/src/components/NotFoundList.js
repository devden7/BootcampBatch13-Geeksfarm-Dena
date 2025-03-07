const NotFoundList = ({ content, data, isLoading }) => {
  return (
    data.length === 0 &&
    isLoading === false && (
      <div>
        <p className="flex justify-center items-center h-20">{content}</p>
      </div>
    )
  );
};

export default NotFoundList;
