import { IoWalletOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { BrowserProvider } from "ethers";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const navigate = useNavigate();

  // Check wallet connection and set up listeners
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const provider = new BrowserProvider(window.ethereum);
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setIsConnected(true);
            setWalletAddress(truncateAddress(accounts[0].address));
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      }
    };

    checkWalletConnection();

    // Listen for account changes
    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length > 0) {
        setIsConnected(true);
        setWalletAddress(truncateAddress(accounts[0]));
      } else {
        setIsConnected(false);
        setWalletAddress("");
      }
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  const truncateAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setIsConnected(true);
        setWalletAddress(truncateAddress(accounts[0]));
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet!");
    }
  };

  const handleCreateAuction = () => {
    if (!isConnected) {
      alert("Please connect your wallet first!");
      return;
    }
    navigate("/create-auction");
  };

  return (
    <div className="flex justify-end">
      <button 
        onClick={handleCreateAuction}
        className="cursor-pointer flex-initial p-3 rounded-xl text-center bg-gradient-to-r from-purple-500 to-purple-700 text-gray-100 font-mono order-1 m-1 hover:from-purple-600 hover:to-purple-800 transition-all"
      >
        create auction
      </button>
      <button 
        onClick={connectWallet}
        className="flex cursor-pointer items-center justify-center gap-2 flex-initial p-3 rounded-xl text-center bg-gradient-to-r from-purple-500 to-purple-700 text-gray-100 font-mono order-2 m-1 hover:from-purple-600 hover:to-purple-800 transition-all"
      >
        <IoWalletOutline />
        {isConnected ? walletAddress : "connect wallet"}
      </button>
    </div>
  );
}