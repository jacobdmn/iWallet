const CreateAccount = ({
  handleCreateAccount,
  showRecoverInput,
  recoverAccount,
  setShowRecoverInput,
  seedphrase,
  handleChange,
  handleKeyDown,
}: any) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <button
        type='button'
        className='btn btn-primary'
        onClick={handleCreateAccount}>
        Create Account
      </button>
      {/* Add a button to toggle showing the recover account input and button */}
      {/* If show recover input is visible, clicking the button again will submit the phrase in the input */}
      <button
        type='button'
        className='btn btn-outline-primary ml-3'
        onClick={() =>
          showRecoverInput
            ? recoverAccount(seedphrase)
            : setShowRecoverInput(true)
        }
        // if the recoveryinput is showing but there is no seedphrase, disable the ability to recover account
        disabled={showRecoverInput && !seedphrase}>
        Recover account
      </button>
      {/* Show the recover account input and button if showRecoverInput is true */}
      {showRecoverInput && (
        <div className='form-group mt-3'>
          <input
            type='text'
            placeholder='Seedphrase or private key for recovery'
            className='form-control'
            value={seedphrase}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </form>
  );
};

export default CreateAccount;
