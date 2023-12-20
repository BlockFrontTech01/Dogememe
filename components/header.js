import { useState, useCallback } from "react";
import Menu from "./menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

  const openMenuPopup = useCallback(() => {
    setMenuPopupOpen(true);
  }, []);

  const closeMenuPopup = useCallback(() => {
    setMenuPopupOpen(false);
  }, []);

  const onFrameButton7Click = useCallback(() => {
    window.open("https://jeffspace.vercel.app");
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-darkorange w-[1728px] h-[50px] overflow-hidden shrink-0 z-[16]">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[21px] left-[381px] w-10 h-[15px] hidden md:flex"
          onClick={openMenuPopup}
        >
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-black w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[10px] left-[0px] rounded-3xs bg-black w-10 h-[5px] overflow-hidden" />
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[16px] left-[430px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[187px] h-6 overflow-hidden md:hidden">
          <b className="absolute top-[1px] left-[19px] text-mid font-inika text-white text-left">
            Buy DogeMeme 2.0
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-black absolute top-[16px] left-[635px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[187px] h-6 overflow-hidden md:hidden">
          <b className="absolute top-[0px] left-[47px] text-mid font-inika text-white text-left">
            Community
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-black absolute top-[17px] left-[840px] rounded-3xs shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[187px] h-6 overflow-hidden md:hidden"
          onClick={onFrameButton7Click}
        >
          <b className="absolute top-[0px] left-[54px] text-mid font-inika text-white text-left">
            Developer
          </b>
        </button>
      </div>
      {isMenuPopupOpen && (
        <PortalPopup placement="Top left" onOutsideClick={closeMenuPopup}>
          <Menu onClose={closeMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
