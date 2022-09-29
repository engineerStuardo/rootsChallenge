export interface Props {
  setBankISO: React.Dispatch<React.SetStateAction<string>>;
  bankISO: string;
  searchBanks: () => void;
}
