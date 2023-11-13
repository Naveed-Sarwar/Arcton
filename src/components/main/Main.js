"use client";
import Image from "next/image";
import ArctonImg from "../../../assets/arcton-img.png";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

export default function Main() {
  const [share, setShare] = useState(0);
  const [res, setRes] = useState(0);
  const [checkbox, setCheckbox] = useState(false);
  console.log(checkbox);
  const shareIncrement = () => {
    setShare(share + 1);
    setRes(res + 0.32);
  };
  const shareDecrement = () => {
    setShare(share - 1);
    setRes(res + 0.32);
  };

  const handleShare = (e) => {
    setShare(e.target.value);
    setRes(e.target.value * 0.32);
  };
  return (
    <main className="flex min-h-screen justify-center max-w-[1100px] mx-auto flex-col pt-2 px-4 lg:px-14">
      <p className="text-2xl text-black py-2 font-bold">Money Master Sale</p>
      <p className="pt-2">
        Money Masters is a Swiss EdTech startup which has built a versatile
        learning platform that makes learning about finance fun and rewarding.
        Their platform is already in use by a Top-30 company from Spain and has
        50,000 users. For further informations see:{" "}
        <Link
          className="font-semibold"
          target="_blank"
          href="https://www.arcton.com/startups/money-masters"
        >
          Money Masters{" "}
        </Link>
        <br />
        <br />
        By doing the world’s first startup IPO on-chain, Money Masters gives
        investors a new, modern way of investing in startups. The $MNY is a
        tokenized share of the company behind Money Masters.
      </p>{" "}
      <br />
      <br />
      <Image src={ArctonImg} alt="arcton" className="py-2" />
      <br />
      <br />
      <p className="text-2xl text-black py-2 font-bold">
        Public Sale is now live
      </p>
      <p className="pt-2">
        Please ensure you understand the public sale mechanics and terms before
        proceeding, deposited amounts CANNOT be withdrawn. The sale is setup in
        three consecutive steps: <br />
        <span className="font-medium">Batch 1: </span> <br />
        &#9679; $MNY fixed price of <span className="font-semibold">
          $0.32
        </span>{" "}
        until $222,200 worth of shares are sold. Then Batch2 will start.
        <br />
        <span className="font-medium">Batch 2: </span>
        <br />
        &#9679; $MNY fixed price of <span className="font-semibold">
          $0.36
        </span>{" "}
        until $444,400 worth of shares are sold. Then last batch will start.{" "}
        <br /> <span className="font-medium">Batch 3: </span> <br />
        &#9679; $MNY fixed price of <span className="font-semibold">
          $0.40
        </span>{" "}
        until $666,600 worth of shares are sold or the sales end on November
        21th @23:00 UTC
        <br />
        <br />
        ⚠️ You don’t need to create an account to invest. After TGE you can
        claim your $MNY from your wallet on Arcton.
        <br />
        ⚠️ Your allocation will be 40% $MNY at TGE and 60% of $MNY will be
        vested over a year, with a 10% allocation after every two months
      </p>
      <br />
      <div>
        <p className="text-2xl text-black py-2 font-bold">Deal Terms</p>
        <div>
          <div className="grid grid-cols-12 pt-2 gap-x-2">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-[#FD6A6A] font-bold text-xl">
                0k / 1.33M USDC
              </p>
              <p>Total Raised / Hardcap</p>

              <br />
              <p className="text-[#FD6A6A] font-bold text-xl">
                Max 1.33M USDC{" "}
              </p>
              <p>Circulating Market Cap</p>
            </div>

            <div className="col-span-12 lg:col-span-3">
              <p className="text-[#FD6A6A] font-bold text-xl">$0.32</p>
              <p>Current MNY Price</p>
              <br />
              <p className="text-[#FD6A6A] font-bold text-xl">$5.5M USDC</p>
              <p>FDV</p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="shadow-md roudned-lg h-auto flex flex-col">
                <div className="grid items-center grid-cols-2 gap-x-2">
                  <div>
                    <p className=" pl-2 font-medium">Current $MNY Price </p>
                  </div>
                  <div className="text-center">
                    <h1 className="text-2xl text-[#FD6A6A] font-bold">$0.32</h1>
                  </div>
                </div>
                <div className="grid items-center grid-cols-2 gap-x-2">
                  <div>
                    <p className=" pl-2 font-medium">Indicate Amount of $MNY</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex  gap-x-4">
                      <button onClick={shareDecrement}>-</button>
                      <input
                        type="number"
                        value={share}
                        onChange={(e) => handleShare(e)}
                        className="bg-slate-100 h-10 w-28 outline-none pl-4"
                      />
                      <button onClick={shareIncrement}>+</button>
                    </div>
                  </div>
                </div>
                <div className="grid items-center grid-cols-2 gap-x-2">
                  <div>
                    <p className="text-left pl-2 font-medium">Total</p>
                  </div>

                  <div className="text-center">
                    <h1 className="text-2xl text-[#FD6A6A] font-bold">
                      ${res.toFixed(2)}
                    </h1>
                    <button
                      disabled={checkbox}
                      className="bg-[#FD6A6A] cursor-pointer text-white w-28 h-8 my-2"
                      style={
                        checkbox
                          ? {
                              ":hover": {
                                backgroundColor: "red", // Add the styles you want for hover
                                color: "white", // Adjust the color as needed
                              },
                            }
                          : {
                              cursor: "not-allowed",
                              ":hover": {
                                backgroundColor: "#FD6A6A",
                                color: "white",
                              },
                            }
                      }
                    >
                      Buy
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="flex pt-2">
                <input
                  value={checkbox}
                  onChange={() => setCheckbox(!checkbox)}
                  type="checkbox"
                  id="checkbox"
                  className="mr-2"
                />
                <p>
                  By investing you accept the{" "}
                  <Link
                    className="font-semibold"
                    target="_blank"
                    href={
                      "https://assets-global.website-files.com/6447ee9a9ca88d92eb070c70/654f7bd0d33458e14a6e2230_Investment%20Agreement.docx.pdf"
                    }
                  >
                    Investment{" "}
                  </Link>
                  and the{" "}
                  <Link
                    className="font-semibold"
                    target="_blank"
                    href={
                      "https://assets-global.website-files.com/6447ee9a9ca88d92eb070c70/654f7beb9a567cbce5a9429a_Registration-Agreement.docx.pdf"
                    }
                  >
                    Registration
                  </Link>{" "}
                  Agreement
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-2xl text-black py-2 font-bold">Perks</p>
          <p className="text-[#FD6A6A] font-bold text-xl">5 $ARC </p>
          <p>Per $550 invested in $MNY</p>
          <p>
            Read more about the $ARC sharedrop here{" "}
            <Link
              target="_blank"
              className="font-semibold"
              href={
                "https://medium.com/@arcton/announcing-the-arcton-sharedrop-6b055f083247"
              }
            >
              Medium
            </Link>{" "}
          </p>
        </div>
        <br /> <br /> <br />{" "}
        <p className="text-2xl text-black text-center py-2 font-bold">
          Understanding the IPO
        </p>
        <br />
        <div className="grid lg:grid-cols-3 text-justify gap-x-6">
          <div className="shadow-lg px-2 py-4">
            <p className="text-xl font-bold text-center py-1">
              How Price is determined
            </p>
            <p className="pt-2">
              You can contribute with USDC.e on Arbitrum chain in exchange for
              $MNY tokens, which are to be claimed two weeks after the sale
              (exact date TBA).
              <br />
              <br /> A total of 3,330,000.00 MNY will be allocated for both
              private and public sales, out of a total supply of 4,440,000.00
              MNY. <br />
              <br /> Only the shares of this IPO are tokenised. Previous
              investment round are paper shares and can’t be sold in the
              secondary market.
              <br /> <br /> Price depends on the stage you participate.
            </p>
          </div>

          <div className="shadow-lg px-2 py-4">
            <p className="text-xl font-bold text-center py-1">
              Three-stage sale{" "}
            </p>
            <p className="pt-2">
              The public sale starts on November 13th @ 1pm UTC, and lasts until
              November 21th @ 11pm UTC. The duration can be extended once.
              <br />
              <br /> Shares are sold in 3 Batches on an FCFS basis (First Come
              First Serve). Sale End: Upon selling out of the respective batch
              of shares
              <br /> <br /> <span className="font-medium">Batch 1 </span> <br />
              &#9679; Total Sale Amount: $222,200 <br />
              &#9679; Price $MNY: $0.32 <br />{" "}
              <span className="pb-2 font-medium">Batch 2</span> <br />
              &#9679; Total Sale Amount: $444,400 <br />
              &#9679; Price $MNY: $0.36 <br />{" "}
              <span className="pb-2 font-medium">Batch 3</span> <br />
              &#9679; Total Sale Amount: $666,600 <br />
              &#9679; Price $MNY: $0.40
            </p>
          </div>

          <div className="shadow-lg px-2 py-4">
            <p className="text-xl font-bold text-center py-1">
              Claiming Process
            </p>
            <p className="pt-2">
              The public sale will last until November 21th @23:00 UTC.
              <br /> <br /> Shortly after, $MNY can be claimed from the Arcton
              platform. <br />
              <br />
              Tokens from the presale and public sale will be claimable at the
              same time liquidity is seeded. <br />
              <br />
              In order to align the long-term objectives of the protocol, 40% of
              $MNY will be unvested, and 60% will be vested within a year.
            </p>
          </div>
        </div>
      </div>
      <br />
    </main>
  );
}
