import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto  w-[1048px] h-[1028px] pt-[80px] pb-[80px] flex flex-col gap-[80px] ">
      <div className="w-[699px]  h-[496px] py-[40px] flex flex-col justify-center items-center gap-[40px] mx-auto">
        <h5 className="w-[77px] h-[24px] text-[16px] leading-[24px] text-[#23A6F0]">welcome</h5>
        <h1 className="w-[542px] h-[160px] text-white text-[58px] leading-[80px] text-center font-[700]" > Selling on the internet like a pro</h1>
        <p className="w-[536px] h-[60px] font-[400] text-white text-center text-lg">We Knw how large objects will act, but things on a small scale just do not act that way.</p>
        <div className="w-[365px] h-[52px] flex gap-[10px]">
          <button className="w-[210px] h-[52px] py-[15px] px-[38px] bg-[#23A6F0] rounded-[5px] text-sm font-semibold">Get Quote Now</button>
          <button className="w-[210px] h-[52px] py-[15px] px-[38px] text-[#23A6F0] border-[1px] border-[#23A6F0] rounded-[5px] text-sm font-semibold">Learn More</button>
        </div>
      </div>
      <div className="w-[1046px] h-[292px] flex gap-[30px]">
        <div className="card w-[328px] h-[292px] py-[35px] px-[40px]  flex flex-col gap-[20px] bg-white">
          <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] bg-[#FFDCD1]"></div>
          <h5 className="text-[16px] font-[700] leading-[24px] text-black">training Courses</h5>
          <span className="w-[50px] h-[2px] bg-[#E74040]"></span>
          <p className="w-[222px] h-[60px] font-[400] text-[14px] leading-[20px] text-black">The gradual accumulation of information about atomci and small-scale behavior...</p>
        </div>
        <div className="card w-[328px] h-[292px] py-[35px] px-[40px]  flex flex-col gap-[20px] bg-white">
          <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] bg-[#B9EAA8]"></div>
          <h5 className="text-[16px] font-[700] leading-[24px] text-black">2,769 online courses</h5>
          <span className="w-[50px] h-[2px] bg-[#E74040]"></span>
          <p className="w-[222px] h-[60px] font-[400] text-[14px] leading-[20px] text-black">The gradual accumulation of information about atomci and small-scale behavior...</p>
        </div>
        <div className="card w-[328px] h-[292px] py-[35px] px-[40px]  flex flex-col gap-[20px] bg-[#23A6F0]">
          <div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] bg-[#ffffff]"></div>
          <h5 className="text-[16px] font-[700] leading-[24px] text-white">2,769 online courses</h5>
          <span className="w-[50px] h-[2px] bg-[#ffffff]"></span>
          <p className="w-[222px] h-[60px] font-[400] text-[14px] leading-[20px] text-white">The gradual accumulation of information about atomci and small-scale behavior...</p>
        </div>
      </div>
      </div>
    </>
  );
}
