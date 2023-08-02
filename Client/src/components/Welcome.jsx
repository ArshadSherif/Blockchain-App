import React,{useContext} from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../Context/TransactionContext";
import { shortenAddress } from "../Utils/ShortenAddress";
import { Loader } from "./";
const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
 
const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) =>
        handleChange(e, name)}
    className="w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none white-glassmorphism"
  />
  );




function Welcome() {  
  const {connectWallet,currentAccount,formData,handleChange,sendTransaction,isLoading} = useContext(TransactionContext)



  const handleSubmit = (e) => {
    e.preventDefault()
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

 

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-start justify-between px-4 py-12 mf:flex-row md:p-20">
        <div className="flex flex-col justify-start flex-1 mf:mr-10">
          <h1 className="py-1 text-3xl text-white sm:text-5xl text-gradient">
            Send Crypto <br /> Across the World
          </h1>
          <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
            Explore the Crypto World.Buy and sell Crypto currency easily on
            Krypto
          </p>
          {!currentAccount && <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row  justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursorr-pointer hover:bg-[#2546bd]"
          >
            <p className="text-base font-semibold text-white">
              {" "}
              Connect Wallet{" "}
            </p>
          </button>}


          <div className="grid w-full grid-cols-2 mt-10 sm:grid-cols-3">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security </div>
            <div className={`rounded-tr-2xl ${companyCommonStyles}`}>
              Etherium{" "}
            </div>
            <div className={`rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0{" "}
            </div>
            <div className={companyCommonStyles}>Low fees </div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              BlockChain{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start flex-1 w-full mt-10 mf:mt-0">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex flex-col justify-between w-full h-full">
              <div className="flex items-start justify-between">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-sm font-light text-white">{ shortenAddress(currentAccount)}</p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Etherium
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full p-5 sm:w-96 blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message "
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-grey-400 my-2" />

            {isLoading? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
