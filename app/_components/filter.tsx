import { FilterIcon, ListOrderedIcon, SearchIcon } from "lucide-react";
import { Input } from "./basics/input";
import { Select, Option } from "./basics/select";

interface FilterProps {
  setFilter: (value: string) => void;
  setSearchTerm: (value: string) => void;
  setSortOrder: (value: string) => void;
}

const Filter = ({ setFilter, setSearchTerm, setSortOrder }: FilterProps) => {
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  const handleSortOrderChange = (event: any) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="w-full mt-5 flex gap-3 justify-between max-md:flex-col max-sm:space-y-3">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Pesquisar tarefa..."
          onChange={handleSearchChange}
          style={{ paddingLeft: "40px" }}
        />
        <SearchIcon size={24} className="absolute left-2 opacity-60" />
      </div>

      <div className="flex max-md:justify-between gap-3">
        <div className="relative flex items-center">
          <Select name="filter" onChange={handleFilterChange}>
            <Option value="all">Todas</Option>
            <Option value="pending">Pendentes</Option>
            <Option value="in-progress">Em andamento</Option>
            <Option value="completed">Concluídas</Option>
          </Select>
          <FilterIcon size={24} className="absolute left-2 opacity-60" />
        </div>
        <div className="relative flex items-center">
          <Select name="sortOrder" onChange={handleSortOrderChange}>
            <Option value="created_at">Data de Criação</Option>
            <Option value="completed_at">Data de Conclusão</Option>
          </Select>
          <ListOrderedIcon size={24} className="absolute left-2 opacity-60" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
