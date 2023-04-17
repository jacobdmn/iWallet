import React, { useCallback, useEffect, useState } from "react";
import { generateAccount } from "../../utils/AccountUtils";
import { Account } from "../../models/Account";
import AccountDetail from "./AccountDetail";

const recoveryPhraseKeyName = "recoveryPhrase";

function AccountCreate() {
  // Declare a new state variable, which we'll call "seedphrase"
  const [seedphrase, setSeedphrase] = useState("");

  // Declare a new state variable, which we'll call "account"
  const [account, setAccount] = useState<Account | null>(null);

  // Declare a new state variable, which we'll call "showRecoverInput"
  // and initialize it to false
  const [showRecoverInput, setShowRecoverInput] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Update the seedphrase state with the value from the text input
    setSeedphrase(event.target.value);
  }

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      recoverAccount(seedphrase);
    }
  };

  const recoverAccount = useCallback(
    // recoverAccount could be used without recoveryPhrase as an arguement but then we would have to
    // put it in a deps array.
    async (recoveryPhrase: string) => {
      // Call the generateAccount function with no arguments
      // Call the generateAccount function and pass it 0 and the current seedphrase
      const result = await generateAccount(recoveryPhrase);

      // Update the account state with the newly recovered account
      setAccount(result.account);

      if (localStorage.getItem(recoveryPhraseKeyName) !== recoveryPhrase) {
        localStorage.setItem(recoveryPhraseKeyName, recoveryPhrase);
      }
    },
    []
  );

  useEffect(() => {
    const localStorageRecoveryPhrase = localStorage.getItem(
      recoveryPhraseKeyName
    );
    if (localStorageRecoveryPhrase) {
      setSeedphrase(localStorageRecoveryPhrase);
      recoverAccount(localStorageRecoveryPhrase);
    }
  }, [recoverAccount]);

  async function createAccount() {
    // Call the generateAccount function with no arguments
    const result = await generateAccount();

    // Update the account state with the newly created account
    setAccount(result.account);
  }

  return (
    <div className='AccountCreate p-5 m-3 card shadow'>
      <h1>Aqua Wallet</h1>

      {account && (
        <>
          <hr />
          <AccountDetail account={account} />
        </>
      )}
    </div>
  );
}
export default AccountCreate;
