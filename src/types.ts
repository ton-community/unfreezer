import { TonConnection, TonWalletProvider } from "@ton-defi.org/ton-connection";
import { TonClient, TonClient4 } from "ton";
import TonConnect from "@tonconnect/sdk";

export type AccountDetails = {
  storageStat: {
    lastPaid: number;
    duePayment: string | null;
    used: {
      bits: number;
      cells: number;
      publicCells: number;
    };
  } | null;
};

export interface ClientsStore {
  clientV2?: TonClient;
  clientV4?: TonClient4;
  setClients: (clientV2: TonClient, clientV4: TonClient4) => void;
}

export interface ConnectionStore {
  connectorTC: TonConnect;
  reset: () => void;
  address?: string;
  connection?: TonConnection;
  setAddress: (value?: string) => void;
  setTonConnectionProvider: (provider: TonWalletProvider) => void;
}

export interface GetTxArgs {
  address: string;
  value: number;
  stateInit: string;
  onSuccess: () => void;
}

export enum Provider {
  TONKEEPER = "TONKEEPER",
  TONHUB = "TONHUB",
  EXTENSION = "EXTENSION",
  OPEN_MASK = "OPEN_MASK",
  MY_TON_WALLET = "MY_TON_WALLET",
}

export interface WalletProvider {
  type: Provider;
  icon: string;
  title: string;
  description: string;
  mobileDisabled?: boolean;
  reminder?: boolean;
}
