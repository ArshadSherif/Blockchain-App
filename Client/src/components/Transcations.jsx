import React, { useContext } from "react";
import { TransactionContext } from "../Context/TransactionContext";
import dummyData from "../Utils/dummyData";
import { shortenAddress } from "../Utils/ShortenAddress";
import useFetch from "../Hooks/useFetch";

const TransactionsCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="justify-start w-full p-2 mb-6 display-flex">
          <a
            href={`https://sepolia.etherscan.io/address/${addressFrom}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base text-white">
              From: {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://sepolia.etherscan.io/address/${addressTo}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-base text-white">
              To: {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-base text-white">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-base text-white">Message: {message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt="nature"
          className="object-cover w-full h-64 rounded-md shadow-lg 2xl:h-96"
        />
        <div className="p-3 px-5 -mt-5 bg-black shadow-2xl w-max rounded-3xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

function Transcations() {
  const { currentAccount,transactions } = useContext(TransactionContext);
  return (
    <div className="flex items-center justify-center w-full 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col px-4 py-12 md:p-12">
        {currentAccount ? (
          <h3 className="my-2 text-3xl text-center text-white ">
            {" "}
            Latest Transactions{" "}
          </h3>
        ) : (
          <h3 className="my-2 text-3xl text-center text-white ">
            Connect your Account to get the Latest Transcations{" "}
          </h3>
        )}
        <div className="flex flex-wrap items-center justify-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transcations;
