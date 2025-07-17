
import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectSearchProps {
  onSearch: (query: string) => void;
  onTechnologyFilter: (technologies: string[]) => void;
  selectedTechnologies: string[];
  availableTechnologies: string[];
}

const ProjectSearch = ({ 
  onSearch, 
  onTechnologyFilter, 
  selectedTechnologies, 
  availableTechnologies 
}: ProjectSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showTechFilter, setShowTechFilter] = useState(false);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const toggleTechnology = (tech: string) => {
    const updated = selectedTechnologies.includes(tech)
      ? selectedTechnologies.filter(t => t !== tech)
      : [...selectedTechnologies, tech];
    onTechnologyFilter(updated);
  };

  const clearFilters = () => {
    setSearchQuery('');
    onSearch('');
    onTechnologyFilter([]);
  };

  return (
    <div className="space-y-4 mb-8">
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search projects by name or description..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowTechFilter(!showTechFilter)}
          className="border-chaotic-blue text-chaotic-blue hover:bg-chaotic-blue hover:text-white"
        >
          <Filter className="w-4 h-4 mr-2" />
          Tech Filter
        </Button>
        {(searchQuery || selectedTechnologies.length > 0) && (
          <Button variant="outline" onClick={clearFilters}>
            <X className="w-4 h-4 mr-2" />
            Clear
          </Button>
        )}
      </div>

      {showTechFilter && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium mb-3">Filter by Technology</h4>
          <div className="flex flex-wrap gap-2">
            {availableTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedTechnologies.includes(tech)
                    ? "bg-chaotic-blue text-white"
                    : "border-chaotic-blue text-chaotic-blue hover:bg-chaotic-blue hover:text-white"
                }`}
                onClick={() => toggleTechnology(tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {selectedTechnologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {selectedTechnologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-chaotic-blue text-white">
              {tech}
              <X 
                className="w-3 h-3 ml-1 cursor-pointer" 
                onClick={() => toggleTechnology(tech)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSearch;
