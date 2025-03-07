const Loading = ({ content, isLoading }) => {
  return (
    isLoading && (
      <div>
        <p className="text-center">{content}</p>
      </div>
    )
  );
};

export default Loading;
