const Xscroll = () => {
  const temp = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="h-max w-screen">
      <div className="flex h-[30px] w-screen overflow-y-scroll bg-blue-400">
        {temp.map((item, index) => (
          <div className="" key={index}>
            <div className="scrollText h-full w-max border">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              nihil quia quam laudantium vero voluptatum possimus. Quod, impedit
              veniam. Odit rem perferendis magni quod quae nesciunt quas totam
              neque minima.
            </div>
          </div>
        ))}
      </div>
      <div className="h-screen w-screen"></div>
    </div>
  );
};

export default Xscroll;
