import { Component } from 'react';

class ContentVideo extends Component {
  render() {
    const { data, filterData, handleFilter } = this.props;
    return (
      <div className="flex gap-2 mt-3">
        {/* mainVideo */}
        <div className="w-[60%]">
          <div className="h-[400px] rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${filterData[0].id.videoId}`}
              allowFullScreen
              title="Youtube"
            ></iframe>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm mt-3">
            <h3 className="font-semibold">{filterData[0].snippet.title}</h3>
            <p className="mt-3">{filterData[0].snippet.description}</p>
          </div>
        </div>
        {/* sidebarVideo */}
        <div className=" w-[40%] flex flex-col gap-5">
          {data.slice(1).map((item, index) => (
            <div
              className="h-32 flex justify-center items-center gap-3 cursor-pointer"
              key={item.etag}
              onClick={() => handleFilter(index)}
            >
              <div className="h-28 overflow-hidden w-56">
                <img
                  src={item.snippet.thumbnails.high.url}
                  allowFullScreen
                  alt="Youtube"
                ></img>
              </div>
              <div className="max-w-[35%]">
                <p>{item.snippet.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ContentVideo;
