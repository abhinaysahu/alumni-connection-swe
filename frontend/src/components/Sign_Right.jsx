import nitkphoto from '../assets/sign.jpg'; // Update with the correct file name

export default function Sign_Right() {
  return (
    <div className="flex justify-center items-center h-full w-full pr-10 ">
      <img src={nitkphoto} alt="NITK Building" className="opacity-90" />
    </div>
  );
}