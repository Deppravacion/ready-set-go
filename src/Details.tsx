const title: string = "Ready Set Go!";
const subTitle: string = "Deatails!";

export const Details = () => {
  return (
    <>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <div className='container mx-auto p-10 bg-cyan-600 rounded-md'>
          <h2 className='text-lg'>{title}</h2>
          <h2 className='text-md'>{subTitle}</h2>
        </div>
        <div className='card-body'>{/* ******** */}</div>
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
