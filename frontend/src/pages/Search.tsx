// pages/Search.tsx
import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SearchBar from '../components/search/SearchBar';
import ResultCard from '../components/search/ResultCard';
import { FiFileText } from 'react-icons/fi';

const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Dummy data for search results
  const dummyResults = [
    {
      id: 1,
      title: "Frontend System Design Interview",
      candidate: "John Doe",
      date: "2023-10-15",
      description: "Designing a responsive dashboard for analytics platform with React and TypeScript."
    },
    {
      id: 2,
      title: "JavaScript Algorithms Assessment",
      candidate: "Jane Smith",
      date: "2023-10-14",
      description: "Common algorithm questions for JavaScript developers focusing on data structures."
    },
    {
      id: 3,
      title: "React Hooks Deep Dive",
      candidate: "Alex Johnson",
      date: "2023-10-12",
      description: "Advanced questions about React hooks and state management patterns."
    },
    {
      id: 4,
      title: "CSS Layout Techniques Review",
      candidate: "Sarah Williams",
      date: "2023-10-10",
      description: "Modern CSS layout implementations and responsive design techniques."
    },
    {
      id: 5,
      title: "Backend System Architecture",
      candidate: "Michael Brown",
      date: "2023-10-08",
      description: "Designing scalable backend systems with microservices architecture."
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      candidate: "Emily Davis",
      date: "2023-10-05",
      description: "Discussion of design thinking and user experience best practices."
    }
  ];

  const handleSearch = (query: string) => {
    setHasSearched(true);
    
    if (query.trim() === '') {
      // If empty query, show all results
      setSearchResults(dummyResults);
    } else {
      // Filter results based on query
      const filteredResults = dummyResults.filter(
        result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.candidate.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  const handleViewAnalysis = (id: number) => {
    console.log(`View analysis for interview ${id}`);
    // Navigation logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar activeTab="search" />
      
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        {/* Search Section */}
        <section className="mb-12 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Search Interviews</h1>
          <SearchBar onSearch={handleSearch} />
        </section>

        {/* Results Section */}
        {hasSearched ? (
          <section className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Search Results</h2>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchResults.map(result => (
                  <ResultCard
                    key={result.id}
                    title={result.title}
                    candidate={result.candidate}
                    date={result.date}
                    description={result.description}
                    onViewAnalysis={() => handleViewAnalysis(result.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FiFileText className="mx-auto text-gray-300" size={64} />
                <h3 className="text-xl font-medium text-gray-700 mt-4">No interviews found</h3>
                <p className="text-gray-500 mt-2">Try another search term or browse all interviews</p>
              </div>
            )}
          </section>
        ) : (
          <section className="text-center py-12 animate-fade-in">
            <FiFileText className="mx-auto text-gray-300" size={64} />
            <h3 className="text-xl font-medium text-gray-700 mt-4">Search for interviews</h3>
            <p className="text-gray-500 mt-2">Enter a keyword to search through our interview database</p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Search;