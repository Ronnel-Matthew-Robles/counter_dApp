// Next, React
import { FC, useEffect, useState, useMemo } from 'react';

// Wallet
import { useWallet, useConnection, useAnchorWallet } from '@solana/wallet-adapter-react';
import { Connection } from '@solana/web3.js'; // Import Solana libraries

import {Program, AnchorProvider, web3, BN} from '@project-serum/anchor';

const {Keypair} = web3;

// Components
import pkg from '../../../package.json';

import { notify } from "../../utils/notifications";

import idl from "../../idl.json";

export const HomeView: FC = ({ }) => {
  // let _baseAccount = null;
  const [_baseAccount, set_baseAccount] = useState(null);
  const [counter, setCounter] = useState(null);
  const [updateNumber, setUpdateNumber] = useState(null);

  const wallet = useAnchorWallet();

  function getProvider() {
    if (!wallet) {
       return null;
    }
    
    const network = "https://api.testnet.solana.com";
    const connection = new Connection(network, "processed");

    const provider = new AnchorProvider(connection, wallet, {"preflightCommitment": "processed"});
    return provider;
  }

  async function createCounter() {
    const provider = getProvider();
    const baseAccount = Keypair.generate();
    if (!provider) {
      throw("Provider is null");
    }

    const a = JSON.stringify(idl);
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);

    // console.log("baseAccount", baseAccount.publicKey.toString());
    // console.log("user", provider.wallet.publicKey.toString());
    // console.log("systemProgram", web3.SystemProgram.programId.toString())
    // console.log(program)
    try {
      // const transaction = await program.methods.initialize()
      // .accounts({
      //   accounts: {
      //     myAccount: baseAccount.publicKey,
      //     user: provider.wallet.publicKey,
      //     systemProgram: web3.SystemProgram.programId,
      //       },
      //     })
      //     .signers([baseAccount])
      // .rpc();

      const transaction = await program.rpc.initialize({
        accounts: {
          myAccount: baseAccount.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: web3.SystemProgram.programId,

        },
        signers: [baseAccount]
      })
      console.log("Transaction", transaction);

      // Confirm the transaction
      const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
      console.log("Transaction confirmed:", confirmation);

      const account = await program.account.myAccount.fetch(baseAccount.publicKey);
      console.log("Account", account.data.toString())
      setCounter(account.data.toString())
      notify({ type: 'success', message: 'Counter initialized!', txid: transaction });
    } catch(e) {
      console.log(e);
      notify({ type: 'error', message: `Counter failed to initialize!`, description: e?.message, txid: "" });
    }

    set_baseAccount(baseAccount);
  }

  async function incrementCounter() {
    const provider = getProvider();
    const baseAccount = _baseAccount;
    if (!provider) {
      throw("Provider is null");
    }

    const a = JSON.stringify(idl);
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);

    try {
      const transaction = await program.rpc.increment({
        accounts: {
          myAccount: baseAccount.publicKey
        },
      })
      console.log("Transaction", transaction);

      // Confirm the transaction
      const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
      // Get the data
      const account = await program.account.myAccount.fetch(baseAccount.publicKey);
      setCounter(account.data.toString())
      notify({ type: 'success', message: 'Counter incremented!', txid: transaction });
    } catch(e) {
      console.log(e);
      notify({ type: 'error', message: `Counter failed to increment!`, description: e?.message, txid: "" });
    }

    set_baseAccount(baseAccount);
  }

  async function decrementCounter() {
    const provider = getProvider();
    const baseAccount = _baseAccount;
    if (!provider) {
      throw("Provider is null");
    }

    const a = JSON.stringify(idl);
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);

    try {
      const transaction = await program.rpc.decrement({
        accounts: {
          myAccount: baseAccount.publicKey
        },
      })

      // Confirm the transaction
      const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
      // Get the data
      const account = await program.account.myAccount.fetch(baseAccount.publicKey);
      setCounter(account.data.toString())
      notify({ type: 'success', message: 'Counter decremented!', txid: transaction });
    } catch(e) {
      console.log(e);
      notify({ type: 'error', message: `Counter failed to decrement!`, description: e?.message, txid: "" });
    }

    set_baseAccount(baseAccount);
  }

  async function updateCounter() {
    const provider = getProvider();
    const baseAccount = _baseAccount;
    if (!provider) {
      throw("Provider is null");
    }

    const a = JSON.stringify(idl);
    const b = JSON.parse(a);
    const program = new Program(b, idl.metadata.address, provider);

    try {
      const transaction = await program.rpc.update(new BN(updateNumber), {
        accounts: {
          myAccount: baseAccount.publicKey
        },
      })

      // Confirm the transaction
      const confirmation = await provider.connection.confirmTransaction(transaction, "confirmed");
      // Get the data
      const account = await program.account.myAccount.fetch(baseAccount.publicKey);
      setCounter(account.data.toString())
      notify({ type: 'success', message: 'Counter updated!', txid: transaction });
    } catch(e) {
      console.log(e);
      notify({ type: 'error', message: `Counter failed to update!`, description: e?.message, txid: "" });
    }

    set_baseAccount(baseAccount);
  }

  function handleInputChange(event) {
    setUpdateNumber(event.target.value);
  }

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl md:pl-12 font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Counter <span className="text-sm font-normal align-top text-slate-700">v{pkg.version}</span>
        </h1>
        <h4 className="md:w-full text-center text-slate-300 my-2">
          <p>Simple app to test out Solana</p>
          Make sure you are on Test Network
        </h4>
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          {counter ? counter : null}
        </h1>
        {!_baseAccount ? 
        <button onClick={createCounter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start
        </button>
        :
        <div className={'flex flex-wrap gap-4 '}>
          <div className={'w-full gap-4 flex'}>
          <button onClick={incrementCounter} className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            +
          </button>
          <button onClick={decrementCounter} className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            -
          </button>
          </div>
          <div className={'flex flex-wrap pt-4 w-full border-t'}>
            <input value={updateNumber} onChange={handleInputChange} placeholder="Enter number for counter" type="number" className={'border-t border-gray-100 mb-4 w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'}/>
            <button onClick={updateCounter} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" disabled={!updateNumber}>
              Update
            </button>
          </div>
        </div>
        }
      </div>
    </div>
  );
};
