


const SharePollsSection = () => {
  return (
    <div className="bg-blue-50 p-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-6 md:mb-0 space-y-4">
        <img src="/public/images/Share.jpeg" alt="Woman sharing poll" className="mx-auto" />
        
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Share Your Polls Anywhere</h2>
        <p className="text-gray-600">
          Get more votes by publishing your poll where your audience can see it. 
          <span className="font-semibold"> Embed your poll in your website, send email invitations, or share it on social media</span> with ease.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition text-lg font-semibold">
          Create Your Poll
        </button>
      </div>
    </div>
  );
};

export default SharePollsSection;