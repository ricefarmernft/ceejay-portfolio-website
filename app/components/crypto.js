import Image from "next/image";

export default function Crypto() {
  return (
    <>
      <div className="text-lg md:text-2xl p-4 md:p-8 " id="crypto">
        <p className="text-3xl md:text-6xl">Web 3</p>
        <div className="pt-3 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between">
          <div className="flex-1 gap-4 flex flex-col ">
            <p>
              I've spent years building in Web3, sorting onchain data, writing
              smart contracts, and leading NFT projects. I like it because
              things move fast. You can ship something weird, put it in front of
              people, and learn almost immediately if it's worth continuing.
            </p>
            <p>
              Outside of code, I write and share insights on the space on{" "}
              <a
                className="crypto-link"
                href="https://x.com/RiceFarmerNFT"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              , where I've grown an audience of 25k+ by breaking down trends and
              products in a practical, builder-focused way.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 md:gap-4 items-center   ">
            <Image
              className="w-96 rounded-2xl shadow-xl"
              alt="Rice Farmer NFT"
              src="/ricefarmer-nft.png"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
