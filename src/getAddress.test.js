import getAddress from './getAddress'

const MNEMONICS = "crowd captain hungry tray powder motor coast oppose month shed parent mystery torch resemble index";
const PASSWORD = "Cardano Rust for the winners!";

const ADDRESS = 'Ae2tdPwUPEZCEhYAUVU7evPfQCJjyuwM6n81x6hSjU9TBMSy2YwZEVydssL'


test('should get address', async () => {
  const address = await getAddress(MNEMONICS, PASSWORD)
  expect(address).toBe(ADDRESS)
})