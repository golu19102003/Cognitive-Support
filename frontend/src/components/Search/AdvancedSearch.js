import React, { useState } from 'react';
import { Search, Filter, Calendar, Users, Building, DollarSign, AlertCircle, X, ChevronDown } from 'lucide-react';

const AdvancedSearch = ({ onSearch, module }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    dateRange: 'all',
    status: 'all',
    priority: 'all',
    type: 'all',
    unit: 'all'
  });

  const handleSearch = () => {
    onSearch({ query: searchQuery, filters });
    setIsOpen(false);
  };

  const clearFilters = () => {
    setFilters({
      dateRange: 'all',
      status: 'all',
      priority: 'all',
      type: 'all',
      unit: 'all'
    });
    setSearchQuery('');
  };

  const getFilterOptions = () => {
    switch (module) {
      case 'visitors':
        return {
          status: ['all', 'pending', 'approved', 'completed'],
          purpose: ['all', 'Delivery', 'Guest', 'Package', 'Maintenance'],
          unit: ['all', 'A-101', 'A-102', 'B-201', 'B-202', 'C-301', 'C-302', 'D-401', 'D-402']
        };
      case 'maintenance':
        return {
          status: ['all', 'pending', 'in-progress', 'completed'],
          priority: ['all', 'High', 'Medium', 'Low'],
          unit: ['all', 'A-101', 'A-102', 'B-201', 'B-202', 'C-301', 'C-302', 'D-401', 'D-402']
        };
      case 'finance':
        return {
          status: ['all', 'paid', 'pending', 'overdue'],
          type: ['all', 'Maintenance', 'Parking', 'Other'],
          unit: ['all', 'A-101', 'A-102', 'B-201', 'B-202', 'C-301', 'C-302', 'D-401', 'D-402']
        };
      default:
        return {};
    }
  };

  const filterOptions = getFilterOptions();

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${module}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10 pr-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#0C4A50] focus:border-[#0C4A50]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {/* Filter Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
            isOpen || Object.values(filters).some(v => v !== 'all')
              ? 'border-[#0C4A50] bg-[#0C4A50] text-white'
              : 'border-gray-300 text-gray-700 hover:border-gray-400'
          }`}
        >
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium">Filters</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="flex items-center space-x-2 px-4 py-2 bg-[#16808D] text-white rounded-lg hover:bg-[#1B9AAA] transition-colors"
        >
          <Search className="h-4 w-4" />
          <span className="text-sm font-medium">Search</span>
        </button>
      </div>

      {/* Advanced Filters Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear all
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <select
                  value={filters.dateRange}
                  onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#0C4A50]"
                >
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                  <option value="year">This Year</option>
                </select>
              </div>

              {/* Status */}
              {filterOptions.status && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters({...filters, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#0C4A50]"
                  >
                    {filterOptions.status.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Priority */}
              {filterOptions.priority && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    value={filters.priority}
                    onChange={(e) => setFilters({...filters, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#0C4A50]"
                  >
                    {filterOptions.priority.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Type */}
              {filterOptions.type && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({...filters, type: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#0C4A50]"
                  >
                    {filterOptions.type.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Unit */}
              {filterOptions.unit && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                  <select
                    value={filters.unit}
                    onChange={(e) => setFilters({...filters, unit: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#0C4A50]"
                  >
                    {filterOptions.unit.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Active Filters Display */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {Object.entries(filters).map(([key, value]) => {
                  if (value === 'all') return null;
                  return (
                    <span
                      key={key}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#E0F7FA] text-[#142C52]"
                    >
                      {key}: {value}
                      <button
                        onClick={() => setFilters({...filters, [key]: 'all'})}
                        className="ml-2 text-[#142C52] hover:text-[#02394A]"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSearch;
