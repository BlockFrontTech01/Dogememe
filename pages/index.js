import { useEffect } from "react";
import Header from "../components/header";

const Dogememe20 = () => {
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
  return (
    <div className="relative bg-darkorange w-full h-[4696px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-11xl text-black font-belgrano md:h-[6480px]">
      <div className="my-0 mx-[!important] absolute top-[141px] left-[0px] w-[882px] flex flex-row items-end justify-center gap-[579px] z-[0] text-left text-[40px] font-angkor lg:w-[600px] md:w-[500px] md:gap-[0px]">
        <div className="relative w-3.5 h-9 overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[421px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_none_bounce-in-top] opacity-[1]"
          data-animate-on-scroll
        >
          DogeMeme 2.0
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[271px] left-[0px] w-[882px] flex flex-row items-center justify-end gap-[636px] z-[1] lg:w-[700px] md:w-[370px] md:gap-[0px]">
        <div className="relative w-[23px] h-[98px] overflow-hidden shrink-0" />
        <img
          className="relative w-[292px] h-[350px] object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/dog@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[679px] left-[0px] w-[1005px] flex flex-row items-end justify-end gap-[411px] z-[2] text-mid lg:w-[880px] md:w-[400px] md:gap-[0px]">
        <div className="relative w-[21px] h-[49px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[626px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          Welcome to DogeMeme 2.0, the evolutionary leap in meme-based
          cryptocurrency! Inspired by the charm of Dogecoin and the creativity
          of the meme community, DogeMeme 2.0 is not just a coin; it's a
          celebration of innovation and humor on the blockchain.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[858px] left-[0px] w-[860px] flex flex-row items-center justify-end gap-[772px] z-[3] lg:w-[700px] md:w-[380px]">
        <div className="relative w-[21px] h-[84px] overflow-hidden shrink-0" />
        <img
          className="relative w-[292px] h-[350px] object-cover [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
          alt=""
          src="/big-dog@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="my-0 mx-[!important] absolute top-[1299px] left-[0px] w-[1005px] flex flex-row items-end justify-end gap-[393px] z-[4] text-mid lg:w-[900px] md:w-[400px]">
        <div className="relative w-px h-11 overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[626px] shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0] md:text-mini md:w-[380px]"
          data-animate-on-scroll
        >
          Our vision is to create a cryptocurrency that not only provides
          financial opportunities but also pushes the boundaries of what's
          possible in the meme space. DogeMeme 2.0 is not just an upgrade; it's
          a reimagining of the way memes and cryptocurrency interact.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1517px] left-[0px] w-[1415px] flex flex-row items-start justify-center gap-[267px] z-[5] text-left text-mid lg:w-[1200px] md:flex-col md:gap-[79px] md:pl-[15px] md:box-border">
        <div className="relative w-[395px] h-[803px]">
          <div className="absolute top-[0px] left-[0px] w-[395px] h-[362px]">
            <img
              className="absolute top-[0px] left-[145px] w-[105px] h-[103px] object-cover [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
              alt=""
              src="/big-dog1@2x.png"
              data-animate-on-scroll
            />
            <div className="absolute top-[124px] left-[0px] rounded-xl bg-sandybrown [backdrop-filter:blur(100px)] w-[395px] h-[238px]" />
            <div className="absolute top-[154px] left-[11px] inline-block w-[372px]">
              <p className="m-0 text-xl font-bayon">
                Next-Gen Decentralized Governance
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                DogeMeme 2.0 pioneers the future of community-driven projects.
                Holders actively participate in shaping the DogeMeme 2.0
                landscape through advanced decentralized governance.
              </p>
            </div>
          </div>
          <div className="absolute top-[441px] left-[0px] w-[395px] h-[362px]">
            <img
              className="absolute top-[0px] left-[145px] w-[105px] h-[103px] object-cover [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
              alt=""
              src="/big-dog2@2x.png"
              data-animate-on-scroll
            />
            <div className="absolute top-[124px] left-[0px] rounded-xl bg-sandybrown [backdrop-filter:blur(100px)] w-[395px] h-[238px]" />
            <div className="absolute top-[140px] left-[11px] inline-block w-[372px]">
              <p className="m-0 text-xl font-bayon">Meme Rewards Ecosystem</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Holders of DogeMeme 2.0 enjoy a comprehensive rewards system,
                including exclusive airdrops, rewards, and VIP access to special
                events. Your journey with DogeMeme 2.0 is not just about holding
                coins; it's about being part of an evolving story.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[395px] h-[803px]">
          <div className="absolute top-[441px] left-[0px] w-[395px] h-[362px]">
            <img
              className="absolute top-[0px] left-[145px] w-[105px] h-[103px] object-cover [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
              alt=""
              src="/big-dog3@2x.png"
              data-animate-on-scroll
            />
            <div className="absolute top-[124px] left-[0px] rounded-xl bg-sandybrown [backdrop-filter:blur(100px)] w-[395px] h-[238px]" />
            <div className="absolute top-[153px] left-[12px] inline-block w-[372px]">
              <p className="m-0 text-xl font-bayon">
                Meme MetaVerse Integration
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                DogeMeme 2.0 is breaking barriers by integrating with the meme
                metaverse. Experience memes in a whole new dimension, where the
                virtual and the real seamlessly blend.
              </p>
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[395px] h-[362px]">
            <img
              className="absolute top-[0px] left-[145px] w-[105px] h-[103px] object-cover [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_pulsate] opacity-[1]"
              alt=""
              src="/big-dog4@2x.png"
              data-animate-on-scroll
            />
            <div className="absolute top-[124px] left-[0px] rounded-xl bg-sandybrown [backdrop-filter:blur(100px)] w-[395px] h-[238px]" />
            <div className="absolute top-[140px] left-[11px] inline-block w-[372px]">
              <p className="m-0 text-xl font-bayon">Dynamic Meme Marketplace</p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">
                Dive into the dynamic DogeMeme 2.0 marketplace, where memes
                aren't just traded; they evolve. Witness the fusion of
                creativity and technology as memes take on a life of their own
                in this groundbreaking ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2420px] left-[0px] w-[798px] flex flex-row items-end justify-end gap-[602px] z-[6] text-left font-angkor lg:w-[700px] lg:gap-[550px] md:flex-col md:pt-[270px] md:pr-[390px] md:box-border">
        <div className="relative w-[26px] h-[27px] overflow-hidden shrink-0" />
        <div
          className="relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          Tokenomics
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2538px] left-[0px] w-[1365px] flex flex-row items-start justify-center gap-[324px] z-[7] text-xl text-whitesmoke font-graduate lg:w-[1200px] md:flex-col md:gap-[55px] md:pl-10 md:pt-[850px] md:box-border">
        <div className="relative w-[338px] h-[314px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-black w-[338px] h-[68px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[11px] left-[13px] inline-block w-[312px]">
              Total Supply: 1,000,000,000 DOGEMEME2
            </div>
          </div>
          <div
            className="absolute top-[123px] left-[0px] rounded-xl bg-black w-[338px] h-[68px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] inline-block w-[312px]">
              community rewards: 30 %
            </div>
          </div>
          <div
            className="absolute top-[246px] left-[0px] rounded-xl bg-black w-[338px] h-[68px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] inline-block w-[312px]">
              development: 20 %
            </div>
          </div>
        </div>
        <div className="relative w-[338px] h-[191px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-black w-[338px] h-[68px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] inline-block w-[312px]">
              marketing: 10 %
            </div>
          </div>
          <div
            className="absolute top-[123px] left-[0px] rounded-xl bg-black w-[338px] h-[68px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] inline-block w-[312px]">
              liquidity: 10 %
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2943px] left-[0px] w-[893px] flex flex-row items-end justify-end gap-[516px] z-[8] font-angkor lg:w-[800px] md:w-[340px] md:flex-row md:pt-[1100px] md:box-border">
        <div className="relative w-[23px] h-[54px] overflow-hidden shrink-0" />
        <div
          className="relative inline-block w-[401px] shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] md:text-xl md:w-[250px]"
          data-animate-on-scroll
        >
          How to Get DogeMeme 2.0
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3094px] left-[0px] w-[1365px] flex flex-row items-start justify-center gap-[325px] z-[9] text-lg lg:w-[1200px] md:flex-col md:gap-[90px] md:pl-10 md:pt-[1100px] md:box-border">
        <div className="relative w-[338px] h-[330px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-sandybrown w-[338px] h-[120px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[25px] left-[13px] inline-block w-[312px]">
              Purchase DogeMeme 2.0 on supported cryptocurrency exchanges.
            </div>
          </div>
          <div
            className="absolute top-[210px] left-[0px] rounded-xl bg-sandybrown w-[338px] h-[120px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[25px] left-[13px] inline-block w-[312px]">
              Earn DogeMeme 2.0 through community events, contests, and
              promotions.
            </div>
          </div>
        </div>
        <div
          className="relative rounded-xl bg-sandybrown w-[338px] h-[120px] overflow-hidden shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[25px] left-[13px] inline-block w-[312px]">
            Receive DogeMeme 2.0 through tips and donations for your exceptional
            memes.
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3499px] left-[0px] flex flex-row items-start justify-end gap-[600px] z-[10] text-left font-angkor lg:gap-[500px] md:gap-[0px] md:pl-[90px] md:pt-[1350px] md:box-border">
        <div className="relative w-[29px] h-11 overflow-hidden shrink-0" />
        <div
          className="relative [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          Road Map
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3596px] left-[0px] w-[1365px] flex flex-row items-start justify-center gap-[325px] z-[11] text-xl text-whitesmoke font-bayon lg:w-[1200px] md:flex-col md:gap-[73px] md:pl-10 md:pt-[1350px] md:box-border">
        <div className="relative w-[338px] h-[483px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-black w-[338px] h-[205px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] inline-block w-[312px]">
              <p className="m-0">
                <span>
                  <span>Phase 1 - Genesis Launch</span>
                </span>
              </p>
              <p className="m-0 font-belgrano">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-mini font-castoro">
                Initial token distribution, community building, and listings on
                major cryptocurrency exchanges.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[278px] left-[0px] rounded-xl bg-black w-[338px] h-[205px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] inline-block w-[312px]">
              <p className="m-0">
                <span>
                  <span>Phase 2 - Dynamic Meme Marketplace</span>
                </span>
              </p>
              <p className="m-0 font-belgrano">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-mini font-castoro">
                Introduction of the dynamic meme marketplace, setting the stage
                for the evolution of memes in the DogeMeme 2.0 ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[338px] h-[483px]">
          <div
            className="absolute top-[0px] left-[0px] rounded-xl bg-black w-[338px] h-[205px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] inline-block w-[312px]">
              <p className="m-0">
                <span>
                  <span>Phase 3 - Meme MetaVerse Integration</span>
                </span>
              </p>
              <p className="m-0 font-belgrano">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-mini font-castoro">
                Integration with the meme metaverse, creating a unique and
                immersive experience for DogeMeme 2.0 holders.
              </p>
            </div>
          </div>
          <div
            className="absolute top-[278px] left-[0px] rounded-xl bg-black w-[338px] h-[205px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]"
            data-animate-on-scroll
          >
            <div className="absolute top-[22px] left-[13px] whitespace-pre-wrap inline-block w-[312px]">
              <p className="m-0">
                <span>
                  <span>Phase 4 - Global Partnerships</span>
                </span>
              </p>
              <p className="m-0 font-belgrano">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <p className="m-0 text-mini font-castoro">
                {" "}
                Forge groundbreaking partnerships with meme creators, content
                platforms, and tech innovators to take DogeMeme 2.0 to new
                heights.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4189px] left-[0px] w-[946px] flex flex-row items-center justify-end gap-[413px] z-[12] font-angkor lg:w-[880px] md:w-[340px] md:pt-[1900px] md:box-border">
        <div className="relative w-[15px] h-[54px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[530px] shrink-0 md:text-xl md:w-[270px]">
          Join the DogeMeme 2.0 Revolution
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4340px] left-[3px] w-[974px] flex flex-row items-center justify-end gap-[375px] z-[13] text-xl lg:w-[900px] md:w-[380px] md:pt-[1850px] md:box-border">
        <div className="relative w-[21px] h-[75px] overflow-hidden shrink-0" />
        <div className="relative inline-block w-[604px] shrink-0 md:text-mini md:w-[350px]">
          Get ready to step into the future with DogeMeme 2.0! Join our
          community on social media, be a part of the evolution, and let's
          redefine the relationship between memes and cryptocurrency.
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[4559px] left-[3px] w-[310px] flex flex-row items-start justify-center gap-[32px] z-[14] md:pt-[1800px] md:box-border">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame21@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame22@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame24@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[50px] h-[50px] overflow-hidden shrink-0 bg-[url('/frame23@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
      </div>
      <div className="my-0 mx-[!important] absolute top-[4644px] left-[3px] w-[114px] flex flex-row items-start justify-center z-[15] text-[13px] md:pt-[1800px] md:box-border">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/frame-25@2x.png"
        />
        <div className="relative inline-block w-[83px] shrink-0">
          Copy Right
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Dogememe20;
