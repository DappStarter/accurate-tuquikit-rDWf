require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind modify imitate prize food sponsor'; 
let testAccounts = [
"0x6d46688a918c6936cd89fd6e18f06ad37374163d979d5220a124a9ead43dabf9",
"0xd17629bc6be81ce20f04fa67a0a70eeb2e55c11900cba5b6904cbfba7f63bed2",
"0xc0e6a5ea04ec54a0fed164828794df4a6b2a12a8ba0727bbae51c38e893d7bbb",
"0x1b722dca08a33500c801020a0ea1b18f95bbbb25a5bbefd497c104e8d7f67ea4",
"0x35865efc30a9fe9bdc8eb1da6f95672b81a2500d5cbbfa1cc628e3b8233d18bc",
"0xd943529a84ac5cc6913c1352a968cd57ad60583c0dd28cbbd9bde2fd01253b90",
"0xfff127849481e0fe528f0d3b4106db0925caf81c037b43c686909ca7d3c4b411",
"0xe483b653e4867e2e5accd87093cfceae881ae0cd7de7829e2520ee0d6e8d2bef",
"0x657c3dda7e54cd39988702aa305f9010049c3da3f3c3be48b1e93c53d1c99551",
"0xf473da29c349787f85480cb934ab1ddcc48d56e2e2f5f010df786c1f2113f61b"
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
            version: '^0.8.0'
        }
    }
};

