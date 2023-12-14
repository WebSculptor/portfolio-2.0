import { Button } from "@/components/ui/button";

interface FilterProps {
  value: string;
  activeTab: string;
  children: string;
  handleButtonClick: (value: string) => void;
}

export default function Filter({
  children,
  value,
  activeTab,
  handleButtonClick,
}: FilterProps) {
  return (
    <Button
      className="py-5 w-full sm:w-max rounded"
      variant={activeTab === value ? "default" : "outline"}
      onClick={() => handleButtonClick(value)}
    >
      {children}
    </Button>
  );
}
