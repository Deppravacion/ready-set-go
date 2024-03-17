const title: string = "Ready Set Go!";
const subTitle: string = " Your Home Page";

type StoreCardProps = {
  cardTitle: string;
  cardBody: string[];
};

const StoreCard: React.FC<StoreCardProps> = ({ cardTitle, cardBody }) => {
  return (
    <div className='card shadow-sm bg-slate-200'>
      <div className='container mx-auto p-1 bg-slate-400 rounded-none'>
        <h2 className='text-lg'>{cardTitle}</h2>
      </div>
      <div className='card-body bg-slate-50'>
        {cardBody &&
          cardBody.map((item, i) => {
            return (
              <div key={i} className='text-center'>
                {item}
              </div>
            );
          })}
      </div>
      {/* <h2>hello world</h2> */}
      <button className='btn rounded-none'>expand</button>
    </div>
  );
};

const storeCardData = {
  cardTitle: "store name",
  cardBody: [
    "store items list",
    "store items list",
    "store items list",
    "store items list",
  ],
};

export const Home = () => {
  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='container mx-auto p-10 bg-cyan-600 rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'>
          {
            <StoreCard
              cardTitle='store name'
              cardBody={storeCardData.cardBody}
            />
          }
        </div>
        <div className='flex justify-between'>
          <button className='btn btn-outline rounded-none btn-warning px-2'>
            Logout
          </button>
          <button className='btn btn-outline rounded-none btn-success'>
            Home
          </button>
          <button className='btn btn-outline rounded-none btn-secondary'>
            New
          </button>
        </div>
      </div>
    </>
  );
};
