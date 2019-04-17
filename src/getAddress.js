export default async function getAddress(mnemonics, password){

  const Cardano = await import('cardano-wallet')

  // to connect the wallet to mainnet
  let settings = Cardano.BlockchainSettings.mainnet();

  // recover the entropy
  let entropy = Cardano.Entropy.from_english_mnemonics(mnemonics);
  // recover the wallet
  let wallet = Cardano.Bip44RootPrivateKey.recover(entropy, password);

  // create a wallet account
  let account = wallet.bip44_account(Cardano.AccountIndex.new(0 | 0x80000000));
  let account_public = account.public();

  // create an address
  let key_pub = account_public.address_key(false, Cardano.AddressKeyIndex.new(0));
  let address = key_pub.bootstrap_era_address(settings);


  return address.to_base58()
}