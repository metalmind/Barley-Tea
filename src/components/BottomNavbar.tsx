import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-4 left-0 right-0 flex items-center justify-center px-4" >
      <div className='bg-white border border-gray-200 rounded-full overflow-hidden flex w-full max-w-md'>
        <button onClick={() => navigate('/home/')} className="flex-1 py-4 px-8 hover:bg-gray-100">
          Home
        </button>
        <div className="w-px bg-gray-200"></div>
        <button onClick={() => navigate('/home/')} className="flex-1 py-4 px-8 hover:bg-gray-100">
          Week
        </button>
        <div className="w-px bg-gray-200"></div>
        <button onClick={() => navigate('/home/')} className="flex-1 py-4 px-8 hover:bg-gray-100">
          Calendar
        </button>
      </div>
    </div>
    
  );
}