
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FilterGroupProps {
  title: string;
  options?: { id: string; name: string }[];
  selectedOptions?: string[];
  onOptionChange?: (option: string) => void;
  onClear?: () => void;
  min?: number | null;
  max?: number | null;
  onMinChange?: (value: number | null) => void;
  onMaxChange?: (value: number | null) => void;
  searchTerm?: string;
  onSearchTermChange?: (value: string) => void;
  isSearch?: boolean;
}

export function FilterGroup({
  title,
  options,
  selectedOptions,
  onOptionChange,
  onClear,
  min,
  max,
  onMinChange,
  onMaxChange,
  searchTerm,
  onSearchTermChange,
  isSearch,
}: FilterGroupProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          {isSearch ? (
            <div className="space-y-2">
              <Input
                placeholder={`e.g., Software Engineer`}
                value={searchTerm}
                onChange={(e) => onSearchTermChange?.(e.target.value)}
              />
            </div>
          ) : options ? (
            <div className="max-h-[400px] overflow-y-auto pr-4 space-y-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-2 mt-2"
                >
                  <Checkbox
                    id={option.name}
                    checked={selectedOptions?.includes(option.name)}
                    onCheckedChange={() => onOptionChange?.(option.name)}
                  />
                  <Label htmlFor={option.name}>{option.name}</Label>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              <div>
                <Label htmlFor="min-salary">Min Salary</Label>
                <Input
                  id="min-salary"
                  type="number"
                  placeholder="e.g., 50000"
                  value={min ?? ""}
                  onChange={(e) => onMinChange?.(Number(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="max-salary">Max Salary</Label>
                <Input
                  id="max-salary"
                  type="number"
                  placeholder="e.g., 120000"
                  value={max ?? ""}
                  onChange={(e) => onMaxChange?.(Number(e.target.value))}
                />
              </div>
            </div>
          )}
          <div className="flex justify-between pt-4 border-t">
            <Button variant="ghost" onClick={onClear}>
              Clear
            </Button>
            <Button>Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
