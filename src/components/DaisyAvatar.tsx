type DaisyAvatarProps = {
  image?: string;
};

export const DaisyAvatar: React.FC<DaisyAvatarProps> = ({ image }) => {
  const defaultImage =
    "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg";
  return (
    <>
      <div className='avatar justify-center'>
        <div className='w-36 mask mask-squircle'>
          <img src={image == undefined ? defaultImage : image} />
        </div>
      </div>
    </>
  );
};
