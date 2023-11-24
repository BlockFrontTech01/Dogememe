import { useCallback, useEffect } from "react";

const Menu = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButton2Click = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div
      className="rounded-t-none rounded-br-xl rounded-bl-none bg-darkorange w-[280px] h-[380px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full"
      data-animate-on-scroll
    >
      <div
        className="absolute top-[20px] left-[229px] w-[33.9px] h-[29.5px] cursor-pointer"
        onClick={onClose}
      >
        <div className="absolute top-[25.7px] left-[0px] rounded-3xs bg-black w-10 h-[5px] overflow-hidden [transform:_rotate(-40deg)] [transform-origin:0_0]" />
        <div className="absolute top-[0px] left-[3.2px] rounded-3xs bg-black w-10 h-[5px] overflow-hidden [transform:_rotate(40deg)] [transform-origin:0_0]" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[116px] left-[47px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[187px] h-6 overflow-hidden">
        <b className="absolute top-[1px] left-[19px] text-mid font-inika text-white text-left">
          Buy DogeMeme 2.0
        </b>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[179px] left-[47px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[187px] h-6 overflow-hidden">
        <b className="absolute top-[1px] left-[47px] text-mid font-inika text-white text-left">
          Community
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-black absolute top-[242px] left-[47px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[187px] h-6 overflow-hidden"
        onClick={onFrameButton2Click}
      >
        <b className="absolute top-[1px] left-[54px] text-mid font-inika text-white text-left">
          Developer
        </b>
      </button>
    </div>
  );
};

export default Menu;
