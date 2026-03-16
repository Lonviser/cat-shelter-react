interface PetCardProps {
  name: string;
  age: number;
}

export const PetCard = ({ name, age }: PetCardProps) => {
  return (
    <div className="pet-card">
      <h3>{name}, {age} лет</h3>
    </div>
  );
};