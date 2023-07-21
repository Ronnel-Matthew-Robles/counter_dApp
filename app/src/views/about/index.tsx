// Next, React
import { FC } from 'react';

export const AboutView: FC = ({ }) => {
    return (
        <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-100 mb-6">About</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the Counter dApp! It's a simple program on the Solana Test Network to initialize, increment, decrement, and update the value of the counter.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Developed by Ronnel Matthew Robles (<a className="text-indigo-600 font-bold" href="https://www.linkedin.com/in/matthewnrobles/" target="_blank" rel="noopener noreferrer">@mattdoesntstop</a>). Also accepting internship opportunities!
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This project serves as my first step into developing applications in Solana.
        </p>
      </div>
    </div>
    );
}