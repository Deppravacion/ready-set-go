const title: string = "Ready Set Go!";
const subTitle: string = "Deatails!";
const storeName: string = "{store name} ";

type CardProps = {
  item: {
    id: number;
    name: string;
    userId: number;
    itemId: number;
  };
};
const storeItems = [
  //hard coded test data
  //this would be replaced with data from the database
  {
    id: 1,
    name: "item 1",
    userId: 1,
    itemId: 1,
  },
  {
    id: 2,
    name: "item 2",
    userId: 1,
    itemId: 2,
  },
  {
    id: 3,
    name: "item 3",
    userId: 1,
    itemId: 3,
  },
  {
    id: 4,
    name: "item 4",
    userId: 1,
    itemId: 4,
  },
];

const CollapseItem: React.FC<CardProps> = ({
  item: { name, id, userId, itemId },
}) => {
  return (
    <div className='collapse collapse-arrow bg-base-200'>
      <input type='checkbox' className='peer' />
      <div className='collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
        name: {name}
      </div>
      <div className='collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
        <p>id: {id}</p>
        <p>userId: {userId}</p>
        <p>itemId: {itemId} </p>
      </div>
    </div>
  );
};

export const Details = () => {
  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='container mx-auto p-10 bg-cyan-600 rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
          <h2 className='text-md'>{storeName}</h2>
        </div>
        <div className='card-body'>
          {/* ******** */}
          {storeItems &&
            storeItems.map((item, i) => {
              return <CollapseItem key={i} item={item} />;
            })}
          {/* ******** */}
        </div>
        <div className='flex justify-between'>
          <button className='btn btn-outline rounded-none btn-warning px-2'>
            Logout
          </button>
          <button className='btn btn-outline rounded-none btn-success'>
            Home
          </button>
          <button className='btn btn-outline rounded-none btn-secondary'>
            Save
          </button>
        </div>
      </div>
    </>
  );
};
