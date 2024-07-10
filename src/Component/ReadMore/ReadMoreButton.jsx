import './ReadMoreButton.css'

const ReadMoreButton = () => {
  return (
    <div className='flex justify-center'>
          <button className=" flex justify-center border-2 font-400 border-[#87283E] rounded text-2xl px-5 py-2 transition-all duration-500 ease hover:pl-2 custom-button">
              Read more
          </button>
    </div>
  );
};

export default ReadMoreButton;