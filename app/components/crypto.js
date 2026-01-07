import Image from "next/image";

export default function Crypto() {
  return (
    <>
      <div className="text-lg md:text-2xl p-4 md:p-8 " id="crypto">
        <p className="text-3xl md:text-6xl">Crypto</p>
        <div className="pt-3 md:pt-6 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between">
          <div className="flex-1">
            <p>
              I am extremely passionate about crypto and everything related to
              web 3. Since I discovered Bitcoin in 2016, I have been fascinated
              with blockchain technology and impressed with the growth of the
              industry. I have experience working with blockchain data, smart
              contracts, and NFTs. On{" "}
              <a
                className="crypto-link"
                href="https://twitter.com/RiceFarmerNFT"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              , I am a content creator and have amassed over 25k+ followers.
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
            {/* <a
              className="crypto-link text-xl flex"
              href="https://opensea.io/RiceFarmerVault"
              target="_blank"
              rel="noreferrer"
            >
              NFT Collection
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
