require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name random stick huge hope praise army gas'; 
let testAccounts = [
"0xc8fea9e6bbe36523f08f8cca243ee348d6cb2ae97b8387187e9fb7313dc951ea",
"0x228301d826e67d78029e57663073c9516297b65adedad526542b7ab2b0089dfd",
"0x4bf1a0ee311a72f922b1725a1a38640fd455fcaf5b62f5eed83b272d381aec91",
"0xf8d207a4c1c24437e371d9663edd44b7f2a39c9899528b352331a3320421a8e6",
"0x587944114991522ed24f1b62dc8788f6e676b9a9b9fdb650ed5b09b9b2012486",
"0x1e9262a32cadec99072ffbcc26f6b4ba1d5896cd1b7d72a171cb6ff5c97968da",
"0xf376a752e0b66936809553a9e89938b081d49e49139cf8f7430a8fc4252f5f8a",
"0xd5828d5fa9ce8cf77816109cee18df906c4335a70ffc2ef804c6e0931dc7b66a",
"0xfcefcee0ba8e7b651a3224db95ea77c837d0f32ff3e2a919a1beac748edc8074",
"0x7094391662716a3be1798364e6bd973c0d772e6e3770a825c153062e1f654648"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
