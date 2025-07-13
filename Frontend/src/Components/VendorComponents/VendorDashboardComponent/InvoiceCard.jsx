import React from 'react';

function InvoiceCard() {
  // Sample invoice data
  const invoices = [
    { id: 1, name: 'Ahmad', date: '24 June 2024', ref: '#y50otvnbidk', status: 'pending' },
    { id: 2, name: 'Sarah', date: '15 June 2024', ref: '#k84jfndl93', status: 'paid' },
    { id: 3, name: 'John', date: '10 June 2024', ref: '#p09jf84n2', status: 'overdue' },
    { id: 4, name: 'Emily', date: '5 June 2024', ref: '#m73kf92n1', status: 'paid' },
    { id: 5, name: 'Michael', date: '1 June 2024', ref: '#q56jn38d7', status: 'pending' },
    { id: 6, name: 'Jessica', date: '28 May 2024', ref: '#v29kf75n3', status: 'paid' },
  ];

  // Status colors
  const statusColors = {
    paid: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    overdue: 'bg-red-100 text-red-800',
  };

  return (
    <div className='  mt-6    '>
      
      <div className='space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {invoices.map((invoice) => (
          <div key={invoice.id} className='bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow'>
            <h2 className='text-xl text-gray-500 font-medium mb-4'>Invoices</h2>
            <div className='flex items-center gap-2 justify-between'>
              <div>
                <h3 className='text-xl font-medium'>{invoice.name}</h3>
                <p>{invoice.date}</p>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='text-gray-500 text-sm'>Ref: {invoice.ref}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${statusColors[invoice.status]}`}>
                    {invoice.status}
                  </span>
                </div>
              </div>
              <button className='py-1 px-4 rounded-full text-sm border btn  text-white hover:text-white transition-colors'>
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InvoiceCard;