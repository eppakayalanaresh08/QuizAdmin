
import React, { useState } from 'react';
import Navbar from '../Navbar';

import './index.css'
import { ColorCode } from '../ColorCode';


const data=[
    {
      name: 'www.clorismen.net',
      email: 'rumahbohay@gmail.com',
      score: 244000,
      rank: 1
    },
    {
      name: 'Shree Softech',
      email: 'shreesoftech75@gmail.com',
      score: 15496,
      rank: 2
    },
    {
      name: 'Quiz BD',
      email: 'nipaislamws@gmail.com',
      score: 6586,
      rank: 3
    },
    {
      name: 'AbLe',
      email: 'abdelkerimyounous1@gmail.com',
      score: 4245,
      rank: 4
    },
    {
      name: 'Mahi Bishnoi',
      email: 'susheelabishnoi0029@gmail.com',
      score: 4081,
      rank: 5
    },
    {
      name: 'Ragnarok',
      email: 'sharenotesandroiapp@gmail.com',
      score: 3504,
      rank: 6
    },
    {
      name: 'Wrteam',
      email: 'wrteamdev1@gmail.com',
      score: 3410,
      rank: 7
    },
    {
      name: 'grej master',
      email: 'gmasterpos@gmail.com',
      score: 2029,
      rank: 8
    },
    {
      name: 'Salih Çağlayan',
      email: 'salihcaglayan137@gmail.com',
      score: 1915,
      rank: 9
    },
    {
      name: 'Shree',
      email: 'web.shreesoftech@gmail.com',
      score: 1496,
      rank: 10
    },

    {
        name: 'grej master',
        email: 'gmasterpos@gmail.com',
        score: 2029,
        rank: 11
      },
      {
        name: 'Salih Çağlayan',
        email: 'salihcaglayan137@gmail.com',
        score: 1915,
        rank: 12
      },
      {
        name: 'Shree',
        email: 'web.shreesoftech@gmail.com',
        score: 1496,
        rank: 13
      },
      {
        name: 'www.clorismen.net',
        email: 'rumahbohay@gmail.com',
        score: 244000,
        rank: 1
      },
      {
        name: 'Shree Softech',
        email: 'shreesoftech75@gmail.com',
        score: 15496,
        rank: 2
      },
      {
        name: 'Quiz BD',
        email: 'nipaislamws@gmail.com',
        score: 6586,
        rank: 3
      },
      {
        name: 'AbLe',
        email: 'abdelkerimyounous1@gmail.com',
        score: 4245,
        rank: 4
      },
      {
        name: 'Mahi Bishnoi',
        email: 'susheelabishnoi0029@gmail.com',
        score: 4081,
        rank: 5
      },
      {
        name: 'Ragnarok',
        email: 'sharenotesandroiapp@gmail.com',
        score: 3504,
        rank: 6
      },
      {
        name: 'Wrteam',
        email: 'wrteamdev1@gmail.com',
        score: 3410,
        rank: 7
      },
      {
        name: 'grej master',
        email: 'gmasterpos@gmail.com',
        score: 2029,
        rank: 8
      },
      {
        name: 'Salih Çağlayan',
        email: 'salihcaglayan137@gmail.com',
        score: 1915,
        rank: 9
      },
      {
        name: 'Shree',
        email: 'web.shreesoftech@gmail.com',
        score: 1496,
        rank: 10
      },
  
      {
          name: 'grej master',
          email: 'gmasterpos@gmail.com',
          score: 2029,
          rank: 11
        },
        {
          name: 'Salih Çağlayan',
          email: 'salihcaglayan137@gmail.com',
          score: 1915,
          rank: 12
        },
        {
          name: 'Shree',
          email: 'web.shreesoftech@gmail.com',
          score: 1496,
          rank: 13
        },
        {
            name: 'www.clorismen.net',
            email: 'rumahbohay@gmail.com',
            score: 244000,
            rank: 1
          },
          {
            name: 'Shree Softech',
            email: 'shreesoftech75@gmail.com',
            score: 15496,
            rank: 2
          },
          {
            name: 'Quiz BD',
            email: 'nipaislamws@gmail.com',
            score: 6586,
            rank: 3
          },
          {
            name: 'AbLe',
            email: 'abdelkerimyounous1@gmail.com',
            score: 4245,
            rank: 4
          },
          {
            name: 'Mahi Bishnoi',
            email: 'susheelabishnoi0029@gmail.com',
            score: 4081,
            rank: 5
          },
          {
            name: 'Ragnarok',
            email: 'sharenotesandroiapp@gmail.com',
            score: 3504,
            rank: 6
          },
          {
            name: 'Wrteam',
            email: 'wrteamdev1@gmail.com',
            score: 3410,
            rank: 7
          },
          {
            name: 'grej master',
            email: 'gmasterpos@gmail.com',
            score: 2029,
            rank: 8
          },
          {
            name: 'Salih Çağlayan',
            email: 'salihcaglayan137@gmail.com',
            score: 1915,
            rank: 9
          },
          {
            name: 'Shree',
            email: 'web.shreesoftech@gmail.com',
            score: 1496,
            rank: 10
          },
      
          {
              name: 'grej master',
              email: 'gmasterpos@gmail.com',
              score: 2029,
              rank: 11
            },
            {
              name: 'Salih Çağlayan',
              email: 'salihcaglayan137@gmail.com',
              score: 1915,
              rank: 12
            },
            {
              name: 'Shree',
              email: 'web.shreesoftech@gmail.com',
              score: 1496,
              rank: 13
            },
            {
                name: 'www.clorismen.net',
                email: 'rumahbohay@gmail.com',
                score: 244000,
                rank: 1
              },
              {
                name: 'Shree Softech',
                email: 'shreesoftech75@gmail.com',
                score: 15496,
                rank: 2
              },
              {
                name: 'Quiz BD',
                email: 'nipaislamws@gmail.com',
                score: 6586,
                rank: 3
              },
              {
                name: 'AbLe',
                email: 'abdelkerimyounous1@gmail.com',
                score: 4245,
                rank: 4
              },
              {
                name: 'Mahi Bishnoi',
                email: 'susheelabishnoi0029@gmail.com',
                score: 4081,
                rank: 5
              },
              {
                name: 'Ragnarok',
                email: 'sharenotesandroiapp@gmail.com',
                score: 3504,
                rank: 6
              },
              {
                name: 'Wrteam',
                email: 'wrteamdev1@gmail.com',
                score: 3410,
                rank: 7
              },
              {
                name: 'grej master',
                email: 'gmasterpos@gmail.com',
                score: 2029,
                rank: 8
              },
              {
                name: 'Salih Çağlayan',
                email: 'salihcaglayan137@gmail.com',
                score: 1915,
                rank: 9
              },
              {
                name: 'Shree',
                email: 'web.shreesoftech@gmail.com',
                score: 1496,
                rank: 10
              },
          
              {
                  name: 'grej master',
                  email: 'gmasterpos@gmail.com',
                  score: 2029,
                  rank: 11
                },
                {
                  name: 'Salih Çağlayan',
                  email: 'salihcaglayan137@gmail.com',
                  score: 1915,
                  rank: 12
                },
                {
                  name: 'Shree',
                  email: 'web.shreesoftech@gmail.com',
                  score: 1496,
                  rank: 13
                }
  ]
  







function Leaderboard() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Change this value as needed



    // const data = generateRandomData;

    // Calculate total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Logic to slice the data array based on current page and items per page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page navigation
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="leaderboardcontainer" style={{backgroundColor:ColorCode.bgColor}}>
            <Navbar />
            <div className='tabletextElement'>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Score
                            </th>
                            <th scope="col" className="px-6 py-3">
                            Rank
                            </th>

                        </tr>
                    </thead>

                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">{item.name}</td>
                                <td className="px-6 py-4">{item.email}</td>
                                <td className="px-6 py-4">{item.score}</td>
                                <td className="px-6 py-4">{item.rank}</td>


                            
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    {/* Previous page button */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-1 mr-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Previous
                    </button>

                    {/* Displaying only a subset of page numbers */}
                    {Array.from({ length: totalPages > 5 ? 5 : totalPages }, (_, i) => {
                        let pageNumber;
                        if (totalPages <= 5 || currentPage <= 3) {
                            pageNumber = i + 1;
                        } else if (currentPage > totalPages - 2) {
                            pageNumber = totalPages - 4 + i;
                        } else {
                            pageNumber = currentPage - 2 + i;
                        }

                        return (
                            <button
                                key={pageNumber}
                                onClick={() => handlePageChange(pageNumber)}
                                className={`px-3 py-1 mr-2 rounded-md ${currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        );
                    })}

                    {/* Next page button */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 ml-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            )}

        </div>
    );
}

export default Leaderboard;
