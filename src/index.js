import getAddress from './getAddress'

const MNEMONICS = "crowd captain hungry tray powder motor coast oppose month shed parent mystery torch resemble index";
const PASSWORD = "Cardano Rust for the winners!";

async function main() {
  const address = await getAddress(MNEMONICS, PASSWORD)
  console.log({ address })
}

main()
