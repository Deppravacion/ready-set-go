const title: string = "Ready Set Go!";
const subTitle: string = " Your Home Page";

type CardProps = {
  cardTitle: string;
  cardBody: string;
};

const Card: React.FC<CardProps> = ({ cardTitle, cardBody }) => {
  return (
    <div className='card shadow-sm bg-gray-200'>
      <div className='container mx-auto p-5 bg-cyan-600 rounded-md'>
        <h2 className='text-lg'>{cardTitle}</h2>
      </div>
      <div className='card-body'>{cardBody}</div>
    </div>
  );
};

export const Home = () => {
  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='container mx-auto p-20 bg-cyan-600 rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'></div>
        {/* daisy button */}
        <button className='btn btn-outline btn-success'>Next</button>
      </div>
    </>
  );
};
