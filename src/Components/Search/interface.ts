export interface Props {
  setText: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  searchBanks: () => void;
}
