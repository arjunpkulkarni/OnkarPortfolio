import Fitcheckkk from "../images/FITCHECK2.png";
import lumelabssss from "../images/LUME.png";
import { ArrowUpRight } from "lucide-react";

export default function CompanyShowcase() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-[1400px] mx-auto space-y-8">
        {/* FitCheck Card */}
        <div className="relative group bg-[#2A2A2A] rounded-[32px] p-16">
          <div className="grid md:grid-cols-[400px,1fr] gap-16 items-center">
            <div className="relative">
              <div className="flex items-center gap-3">
                <img
                  src={Fitcheckkk} // FitCheck image
                  alt="FitCheck"
                  className="w-[48px] h-[48px] object-contain"
                />
                <span className="text-[42px] font-medium tracking-tight">
                  FitCheck<span className="text-[#4B88FF]">.</span>
                </span>
              </div>
            </div>
            <div className="relative">
              <p className="text-[28px] leading-[1.4] font-light">
                The first centralized fashion social platform. FitCheck is a hub for clothing,
                shopping, and sharing your outfits. With over 100 brands, our app offers the best
                deals and advanced technology to help you find the perfect clothes.
              </p>
              <ArrowUpRight 
                className="absolute top-8 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" 
                strokeWidth={1}
              />
            </div>
          </div>
        </div>

        {/* LumeLabs Card */}
        <div className="relative group bg-[#2A2A2A] rounded-[32px] p-16">
          <div className="grid md:grid-cols-[400px,1fr] gap-16 items-center">
            <div className="relative">
              <img
                src={lumelabssss} // LumeLabs image
                alt="LumeLabs"
                className="w-[280px] h-[48px] object-contain"
              />
            </div>
            <div className="relative">
              <p className="text-[28px] leading-[1.4] font-bold">
                LumeLabs is a creative agency specializing in web development, e-commerce solutions,
                and digital marketing. We help businesses, especially clothing brands, elevate their
                online presence with custom websites, innovative designs, and tailored marketing
                strategies.
              </p>
              <ArrowUpRight 
                className="absolute top-8 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" 
                strokeWidth={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
