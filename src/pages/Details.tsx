const title: string = "Ready Set Go!";
const subTitle: string = "Store details!";

type CardProps = {
  item: {
    id: number;
    name: string;
    userId: number;
    itemId: number;
    image?: string;
    description?: string;
  };
};
const defaultStoreItems = [
  //hard coded test data
  //this would be replaced with data from the database
  {
    id: 1,
    name: "item 1",
    userId: 1,
    itemId: 1,
    image:
      "https://images.unsplash.com/photo-1598851418241-f52c34b6e4c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "this is a description",
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
  item: { name, id, userId, itemId, image, description },
}) => {
  return (
    <div className='collapse collapse-arrow bg-base-200'>
      <input type='checkbox' className='peer' />
      <div className='collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
        name: {name}
      </div>
      <div className='collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content'>
        <div className='avatar'>
          <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
            <img src={image} />
          </div>
        </div>
        <p>{description}</p>
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
        <div className='container mx-auto p-10 bg-accent rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'>
          {/* ******** */}
          {defaultStoreItems &&
            defaultStoreItems.map((item, i) => {
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
