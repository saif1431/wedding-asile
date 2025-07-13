import React, { useState } from 'react';

const CardDetailTable = () => {
  const [cards, setCards] = useState([
    { id: 1, name: 'John Doe', accountNumber: '12345678', sortCode: '12-34-56' },
    { id: 2, name: 'Jane Smith', accountNumber: '87654321', sortCode: '65-43-21' }
  ]);
  
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState({
    name: '',
    accountNumber: '',
    sortCode: ''
  });

  const handleAddCard = () => {
    if (newCard.name && newCard.accountNumber && newCard.sortCode) {
      setCards([
        ...cards,
        {
          id: cards.length + 1,
          name: newCard.name,
          accountNumber: newCard.accountNumber,
          sortCode: newCard.sortCode
        }
      ]);
      setNewCard({ name: '', accountNumber: '', sortCode: '' });
      setShowModal(false);
    }
  };

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="p-6 bg-white overflow-y-auto rounded-lg shadow">
      <div className='flex items-end gap-2 flex-col justify-end mt-6 mb-6'>
        <p className='text-sm text-gray-600'>Add your card details for payment processing</p>
        <button 
          onClick={() => setShowModal(true)}
          className='btn py-2 px-4 text-lg rounded-full text-white bg-blue-500 hover:bg-blue-600'
        >
          Add Card Detail
        </button>
      </div>

      <table className="w-full mb-6 overflow-y-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Account Number</th>
            <th className="px-4 py-2 text-left">Sort Code</th>
    
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id} className="border-b">
              <td className="px-4 py-3">{card.name}</td>
              <td className="px-4 py-3">{card.accountNumber}</td>
              <td className="px-4 py-3">{card.sortCode}</td>
             
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Popup for Adding Card */}
      {showModal && (
        <div className="fixed inset-0 px-4 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add Card Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newCard.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg border-gray-300"
                  placeholder="Enter cardholder name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={newCard.accountNumber}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg border-gray-300"
                  placeholder="Enter account number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort Code</label>
                <input
                  type="text"
                  name="sortCode"
                  value={newCard.sortCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg border-gray-300"
                  placeholder="Enter sort code (e.g., 12-34-56)"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 btn2 text-black hover:text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCard}
                className="px-4 py-2 btn  text-white rounded"
                disabled={!newCard.name || !newCard.accountNumber || !newCard.sortCode}
              > 
                Add Card
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetailTable;