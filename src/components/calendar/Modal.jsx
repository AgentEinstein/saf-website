import { AiOutlinePlus } from "react-icons/ai";

const Modal = ({ event, setEvent }) => {
  return (
    <div className="font-playfair fixed top-[56%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] md:w-[50vw] bg-saf-red z-10 drop-shadow-lg">
      <div className={`flex justify-between items-center ${event.color}`}>
        <p
          className={
            " m-0 py-2 md:py-3 px-3 md:px-4 text-lg md:text-2xl  text-white"
          }
        >
          {event.summary}
        </p>
        <AiOutlinePlus
          onClick={() => setEvent(null)}
          className="text-white rotate-45 p-0 hover:scale-110 duration-300 hover:cursor-pointer text-3xl m-3"
        />
      </div>
      <div className="p-3">
        <p className="m-0 pl-2 text-white">{event.location}</p>

        <div className="md:text-lg text-sm p-2 text-white">
          {event.description?.replace(event.description.split(" ")[0], "")}
        </div>
      </div>
    </div>
  );
};

export default Modal;
