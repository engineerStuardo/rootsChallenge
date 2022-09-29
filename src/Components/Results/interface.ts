type BankItem = {
  name: string;
  id: number;
};

export interface Props {
  bankList: BankItem[];
}

export interface Item {
  item: BankItem;
}
