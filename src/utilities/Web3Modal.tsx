import App from '../App.tsx'

import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { WagmiProvider } from 'wagmi'
import { optimismSepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}

const queryClient = new QueryClient()
const projectId = '521a47a7941cb38e29ab641f467b61f1'

const metadata = {
  name: 'Move&Mint',
  description: 'Fitness App: Mint your goals',
  url: 'https://move&mint.app',
  icons: ['https://move&mint.app/icons']
}

const chains = [optimismSepolia] as const
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export function Web3ModalProvider() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  )
}