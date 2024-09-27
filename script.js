// تأكد من أنك قد قمت بتثبيت مكتبة @solana/web3.js و @solana/wallet-adapter
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { getPhantomWallet, PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { useEffect } from 'react';

const network = WalletAdapterNetwork.Devnet;
const endpoint = 'https://api.devnet.solana.com';

const App = () => {
    const wallet = new PhantomWalletAdapter();

    const connectWallet = async () => {
        try {
            await wallet.connect();
            console.log('Wallet connected:', wallet.publicKey.toString());
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <div>
            <h1>ربط المحفظة Solana</h1>
            <button onClick={connectWallet}>اتصل بالمحفظة</button>
        </div>
    );
};

export default App;
