type BasicLayoutProps = {
  title: string;
  body: React.ReactNode;
};

export const BasicLayout: React.FC<BasicLayoutProps> = ({ title, body }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='container mx-auto p-20 bg-cyan-600 rounded-md'>
        <h2 className='text-lg'>{title}</h2>
      </div>
      <div className='card-body'>{body}</div>
    </div>
  );
};
