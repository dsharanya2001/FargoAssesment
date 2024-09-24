import { useState } from 'react';

const AssetsPage = () => {
  const stockData = [
    { ticker: 'AAPL', price: 150, category: 'Tech', volume: 132.76 },
    { ticker: 'GOOG', price: 2700, category: 'Tech', volume: 887.09 },
    { ticker: 'AMZN', price: 3400, category: 'E-Commerce', volume: 654.98 },
    { ticker: 'TSLA', price: 800, category: 'Automotive', volume: 654.98 },
    { ticker: 'SAMSUNG', price: 1300, category: 'Tech', volume: 854.98 },
    { ticker: 'FLIPKART', price: 300, category: 'E-Commerce', volume: 884.98 },
   
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // Ascending or descending order
  const [filterCategory, setFilterCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 


  const sortedData = [...stockData].sort((a, b) => {
    if (!sortKey) return 0;
    if (sortKey === 'ticker') {
      return sortOrder === 'asc'
        ? a.ticker.localeCompare(b.ticker)
        : b.ticker.localeCompare(a.ticker);
    } else if (sortKey === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });


  const filteredData = sortedData
    .filter((stock) => stock.ticker.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((stock) => (filterCategory ? stock.category === filterCategory : true));


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); // Toggle sorting order
    } else {
      setSortKey(key);
      setSortOrder('asc'); 
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  return (
    <div className="min-h-screen py-10 bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center">
      <div className="bg-gray-700 shadow-xl rounded-3xl p-8 w-full max-w-4xl">
        <h1 className="text-3xl font-extrabold text-teal-400 mb-8 text-center">Asset List</h1>
        
   
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by ticker"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-500 rounded-full bg-gray-600 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-teal-400 transition duration-200"
          />
        </div>


        <div className="mb-6 flex justify-center">
          <label className="text-gray-300 mr-4">Filter by category:</label>
          <select
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-500 rounded-full bg-gray-600 text-gray-200 focus:ring-2 focus:ring-teal-400 transition duration-200"
          >
            <option value="">All</option>
            <option value="Tech">Tech</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Automotive">Automotive</option>
          </select>
        </div>

    
        <table className="w-full bg-gray-800 border border-gray-600 rounded-xl shadow-lg">
          <thead>
            <tr className="text-left bg-teal-400 text-white rounded-t-xl">
              <th
                onClick={() => handleSort('ticker')}
                className="py-3 px-6 cursor-pointer hover:bg-teal-500 transition-colors duration-200 rounded-tl-xl"
              >
                Ticker {sortKey === 'ticker' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th
                onClick={() => handleSort('price')}
                className="py-3 px-6 cursor-pointer hover:bg-teal-500 transition-colors duration-200"
              >
                Price {sortKey === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6 rounded-tr-xl">Volume</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((stock) => (
              <tr key={stock.ticker} className="hover:bg-gray-700 transition duration-200">
                <td className="border-t px-6 py-3 text-gray-200">{stock.ticker}</td>
                <td className="border-t px-6 py-3 text-gray-200">{stock.price}</td>
                <td className="border-t px-6 py-3 text-gray-200">{stock.category}</td>
                <td className="border-t px-6 py-3 text-gray-200">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 disabled:bg-teal-400"
          >
            Previous
          </button>
          <span className="text-gray-200">Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 disabled:bg-teal-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssetsPage;
